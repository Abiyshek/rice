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
        background: 'transparent',
        overflow: 'hidden',
        padding: '1rem 0',
      }}>
        {/* Section title */}
        <div style={{
          textAlign: 'center', zIndex: 10,
          width: '100%', padding: '0 1rem'
        }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '0.4em', color: '#000000', textTransform: 'uppercase', marginBottom: 4, fontWeight: 700 }}>
            Our Journey
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#FFF8E7',
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
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: 16,
              border: '2px solid rgba(212, 160, 23, 0.3)',
              transition: 'height 0.3s ease-in-out'
            }}
          />
          {/* Stage pill */}
          <div style={{
            background: 'black',
            border: '2px solid rgba(90, 150, 50, 0.9)',
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
                background: i <= activeStage ? '#171100' : 'rgba(255,248,231,0.2)',
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
                    background: 'rgba(106, 170, 93, 1)',
                    border: `2px solid ${isActive ? stage.color : 'rgba(90, 150, 50, 0.9)'}`,
                    borderRadius: 16,
                    padding: '1.2rem 1.4rem',
                    textAlign: 'center',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    transform: isActive ? 'scale(1.05)' : 'scale(0.9)',
                    opacity: isActive ? 1 : 0.4,
                    boxShadow: isActive ? `0 8px 25px ${stage.color}35` : 'none',
                    backdropFilter: isActive ? 'blur(8px)' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: stage.color, marginBottom: 4, fontWeight: 700 }}>
                    {stage.year}
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', color: '#1A1A0E', marginBottom: 6, fontWeight: 700 }}>
                    {stage.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#2D2D1F', lineHeight: 1.5, fontWeight: 700, margin: 0 }}>
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
