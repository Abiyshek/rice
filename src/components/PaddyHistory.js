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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
      
      // Set video current time based on scroll progress
      if (video && videoDuration) {
        video.currentTime = progress * videoDuration;
      }

      // Update active stage
      const stageIdx = Math.min(stages.length - 1, Math.floor(progress * stages.length));
      setActiveStage(stageIdx);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      // Video will scale responsively via CSS
    };
    window.addEventListener('resize', onResize);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [videoDuration]);

  return (
    <section id="history" ref={sectionRef} style={{ height: `${stages.length * 120}vh`, position: 'relative' }}>
      {/* Sticky wrapper */}
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'grid', gridTemplateColumns: '1fr 450px 1fr', gap: 0,
        alignItems: 'center',
        background: 'transparent',
        overflow: 'hidden',
      }}>
        {/* Background paddy texture - removed, video now used as background */}

        {/* Section label */}
        <div style={{
          position: 'absolute', top: '1rem', left: '50%', transform: 'translateX(-50%)',
          textAlign: 'center', zIndex: 10, marginLeft: '3rem',
        }}>
          <div style={{ fontSize: '0.85rem', letterSpacing: '0.4em', color: '#000000', textTransform: 'uppercase', marginBottom: 4, fontWeight: 700 }}>
            Our Journey
          </div>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '2.5rem', color: '#FFF8E7',
            margin: 0,
          }}>
            From Seed to Legacy
          </h2>
        </div>

        {/* Left timeline cards */}
        <div style={{ padding: '0 0.5rem 0 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-end' }}>
          {stages.filter(s => s.side === 'left').map((s, i) => {
            const stageIdx = stages.indexOf(s);
            const isActive = activeStage >= stageIdx;
            return (
              <TimelineCard key={s.year} stage={s} isActive={isActive} align="right" />
            );
          })}
        </div>

        {/* Center Video */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', position: 'relative', height: '100%' }}>
          <video
            ref={videoRef}
            src={paddyGrowth}
            style={{
              width: 'auto',
              height: '40vh',
              display: 'block',
              objectFit: 'contain',
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: 12,
              maxWidth: '100%',
            }}
          />
          {/* Stage pill */}
          <div style={{
            background: 'black',
            border: '2px solid rgba(90, 150, 50, 0.9)',
            borderRadius: 30, padding: '0.5rem 1.5rem',
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

        {/* Right timeline cards */}
        <div style={{ padding: '0 1rem 0 0.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          {stages.filter(s => s.side === 'right').map((s) => {
            const stageIdx = stages.indexOf(s);
            const isActive = activeStage >= stageIdx;
            return (
              <TimelineCard key={s.year} stage={s} isActive={isActive} align="left" />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ stage, isActive, align }) {
  return (
    <div style={{
      maxWidth: 260,
      background: 'rgba(106, 170, 93, 1)',
      border: `2px solid ${isActive ? stage.color : 'rgba(90, 150, 50, 0.9)'}`,
      borderRadius: 16, padding: '1.2rem 1.4rem',
      textAlign: align,
      transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
      transform: isActive ? 'scale(1)' : 'scale(0.94)',
      opacity: isActive ? 1 : 0.5,
      boxShadow: isActive ? `0 8px 20px ${stage.color}20` : 'none',
      backdropFilter: isActive ? 'blur(8px)' : 'none',
    }}>
      <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: stage.color, marginBottom: 4, fontWeight: 700 }}>
        {stage.year}
      </div>
      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2rem', color: '#1A1A0E', marginBottom: 8, fontWeight: 700 }}>
        {stage.title}
      </h3>
      <p style={{ fontSize: '0.82rem', color: '#2D2D1F', lineHeight: 1.6, fontWeight: 700 }}>
        {stage.desc}
      </p>
      <div style={{
        marginTop: 10, width: 30, height: 2,
        background: `linear-gradient(90deg, ${stage.color}, transparent)`,
        marginLeft: align === 'right' ? 'auto' : 0,
        marginRight: align === 'right' ? 0 : 'auto',
        transition: 'width 0.5s',
        width: isActive ? 30 : 0,
      }} />
    </div>
  );
}
