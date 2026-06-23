import React, { useEffect, useRef, useState } from 'react';
import { Wheat } from 'lucide-react';
import paddyGrowth from '../assets/history/paddy_growth.mp4';

const stages = [
  {
    year: '1960', title: 'The Seed',
    label: 'Seed Stage',
    desc: 'Mr. Kumarapa started a humble rice mill in Puranasingapalayam with just 800 sq.ft. and 15 dedicated employees.',
    side: 'left', color: '#D4A017',
  },
  {
    year: '1975', title: 'First Roots',
    label: 'Sprout',
    desc: 'Mr. K. Radhakrishnan expanded operations, opening a second unit near Vikkaravandi — growing the family legacy.',
    side: 'right', color: '#D4A017',
  },
  {
    year: '1990', title: 'The Expansion',
    label: 'Vegetative',
    desc: 'Father and brothers founded M/s. Sri Krishna Modern Rice Mill in Andiyarpalayam, Puducherry with state-of-the-art machinery.',
    side: 'left', color: '#D4A017',
  },
  {
    year: '2005', title: 'VIP Krishna Brand',
    label: 'Booting Stage',
    desc: 'Launched the premium "VIP Krishna" brand. Became Tamilnadu\'s largest Ponni rice processor with 3000 MT storage silos.',
    side: 'right', color: '#D4A017',
  },
  {
    year: 'Today', title: 'Harvest Ready',
    label: 'Harvest Ready',
    desc: '45 tonnes/day processing. 150 employees. 8 acres. Serving Reliance Fresh, BigBasket, Nilgiris & global export markets.',
    side: 'left', color: '#D4A017',
  },
];

export default function PaddyHistory() {
  const sectionRef = useRef();
  const videoRef = useRef();
  const [activeStage, setActiveStage] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [cardWidth, setCardWidth] = useState(280);
  const [gap, setGap] = useState(24);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardWidth(Math.min(window.innerWidth * 0.8, 280));
        setGap(16);
        setIsDesktop(false);
      } else {
        setCardWidth(300);
        setGap(24);
        setIsDesktop(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let animationFrameId;

    const updateVideoTime = () => {
      if (video && video.duration) {
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > 0.01) {
          if (!video.seeking) {
            let nextTime = video.currentTime + diff * 0.08;
            nextTime = Math.max(0, Math.min(video.duration, nextTime));
            video.currentTime = nextTime;
          }
        }
      }
      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
    };

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const totalHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));
      
      if (video && video.duration) {
        targetTime = progress * video.duration;
      }

      // Update active stage
      const stageIdx = Math.min(stages.length - 1, Math.floor(progress * stages.length));
      setActiveStage(stageIdx);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    window.addEventListener('scroll', onScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateVideoTime);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [videoDuration]);

  const scrollToStage = (idx) => {
    const section = sectionRef.current;
    if (section) {
      const totalHeight = section.offsetHeight - window.innerHeight;
      const targetScroll = (idx / (stages.length - 1)) * totalHeight;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop + targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="history" ref={sectionRef} style={{ height: `${stages.length * 120}vh`, position: 'relative' }}>
      {/* Sticky wrapper */}
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-evenly', alignItems: 'center',
        background: 'linear-gradient(180deg, #FAF8F5 0%, #F4ECE0 100%)',
        overflow: 'hidden',
        padding: '1rem 0',
      }}>
        {/* Section title */}
        <div style={{
          textAlign: 'center', zIndex: 10,
          width: '100%', padding: '0 1rem'
        }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '0.4em', color: '#2C6B37', textTransform: 'uppercase', marginBottom: 4, fontWeight: 800 }}>
            Our Journey
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#1C231A',
            margin: 0,
          }}>
            From Seed to Legacy
          </h2>
        </div>

        {/* Center Video Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.8rem',
          width: '100%',
          maxWidth: isDesktop ? '760px' : '500px',
          padding: '0 1rem',
          transition: 'max-width 0.3s ease-in-out'
        }}>
          <video
            ref={videoRef}
            src={paddyGrowth}
            muted
            playsInline
            style={{
              width: '100%',
              height: isDesktop ? 'clamp(280px, 42vh, 400px)' : 'clamp(180px, 28vh, 260px)',
              display: 'block',
              objectFit: 'contain',
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              border: '2px solid rgba(44, 107, 55, 0.25)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              transition: 'height 0.3s ease-in-out'
            }}
          />
          {/* Stage pill */}
          <div style={{
            background: '#2C6B37',
            border: '2px solid #4B9B5E',
            borderRadius: 30, padding: '0.4rem 1.2rem',
            fontSize: '0.8rem', letterSpacing: '0.1em',
            color: '#ffffff', fontWeight: 700,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.5s',
          }}>
            {stages[activeStage].label}
          </div>
          {/* Progress dots */}
          <div style={{ display: 'flex', gap: 8 }}>
            {stages.map((_, i) => (
              <div key={i} style={{
                width: 8, height: 8, borderRadius: '50%',
                background: i <= activeStage ? '#2C6B37' : 'rgba(44, 107, 55, 0.2)',
                transition: 'all 0.4s',
                transform: i === activeStage ? 'scale(1.4)' : 'scale(1)',
              }} />
            ))}
          </div>
        </div>

        {/* Carousel stages */}
        <div style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          padding: '0.5rem 0',
        }}>
          <div style={{
            display: 'flex',
            gap: `${gap}px`,
            transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
            transform: `translateX(calc(50vw - ${(activeStage * (cardWidth + gap)) + (cardWidth / 2)}px))`,
            width: 'max-content',
          }}>
            {stages.map((stage, idx) => {
              const isActive = idx === activeStage;
              return (
                <div
                  key={stage.year}
                  onClick={() => scrollToStage(idx)}
                  style={{
                    width: cardWidth,
                    flexShrink: 0,
                    background: isActive ? 'linear-gradient(135deg, #2C6B37 0%, #0066CC 100%)' : '#FFFFFF',
                    border: isActive ? '3px solid transparent' : '3px solid #5C3D24',
                    borderRadius: 16,
                    padding: '1.5rem',
                    textAlign: 'center',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    transform: isActive ? 'scale(1.05)' : 'scale(0.9)',
                    opacity: isActive ? 1 : 0.5,
                    boxShadow: isActive ? '0 12px 35px rgba(0, 102, 204, 0.25)' : '0 4px 15px rgba(0, 0, 0, 0.02)',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    fontSize: '0.85rem',
                    letterSpacing: '0.25em',
                    color: isActive ? '#F1C40F' : '#C99414',
                    marginBottom: 6,
                    fontWeight: 800,
                    transition: 'color 0.3s'
                  }}>
                    {stage.year}
                  </div>
                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.25rem',
                    color: isActive ? '#FFFFFF' : '#1C231A',
                    marginBottom: 8,
                    fontWeight: 800,
                    transition: 'color 0.3s'
                  }}>
                    {stage.title}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: isActive ? '#EAECEE' : '#5C6757',
                    lineHeight: 1.6,
                    fontWeight: 500,
                    margin: 0,
                    transition: 'color 0.3s'
                  }}>
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
