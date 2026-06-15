import React, { useEffect, useRef } from 'react';
import { Wheat, Award, ShieldCheck, Truck, Users, Leaf, ArrowRight, User } from 'lucide-react';

import img1 from '../assets/about/Screenshot 2026-06-01 103900.png';
import img2 from '../assets/about/Screenshot 2026-06-01 103911.png';
import img3 from '../assets/about/Screenshot 2026-06-01 103933.png';

const styles = {
  section: {
    padding: '8rem 2rem 5rem 2rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'transparent',
    color: '#FFF8E7',
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  headingArea: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    color: '#000000ff',
    textShadow: '0 4px 12px rgba(0,0,0,0.5)',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.4em',
    color: 'rgba(255, 248, 231, 0.6)',
    fontWeight: 600,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '4rem',
    marginBottom: '8rem',
  },
  textCol: {
    flex: '1 1 500px',
  },
  contentCard: {
    background: 'rgba(26, 26, 14, 0.6)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(212, 160, 23, 0.18)',
    borderRadius: '24px',
    padding: '2.5rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  imageCol: {
    flex: '1 1 450px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '2px solid rgba(212, 160, 23, 0.25)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    background: 'rgba(26, 26, 14, 0.5)',
    padding: '8px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    display: 'block',
    objectFit: 'cover',
  },
  sectionTag: {
    fontSize: '0.85rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#000000ff',
    letterSpacing: '0.2em',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
    color: '#FFF8E7',
    lineHeight: 1.25,
  },
  sectionDesc: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: 'rgba(255, 248, 231, 0.8)',
  },
  bulletsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '1rem',
    color: 'rgba(255, 248, 231, 0.85)',
  },
  bulletIcon: {
    color: '#D4A017',
    flexShrink: 0,
  },
  leaderGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '3rem',
    marginTop: '2rem',
  },
  leaderCard: {
    background: 'rgba(26, 26, 14, 0.65)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(212, 160, 23, 0.2)',
    borderRadius: '24px',
    padding: '3rem 2rem',
    width: '100%',
    maxWidth: '340px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  },
  leaderAvatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #D4A017, #E8623A)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    boxShadow: '0 8px 20px rgba(212, 160, 23, 0.3)',
  },
  leaderName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.4rem',
    color: '#FFF8E7',
    marginBottom: '0.5rem',
  },
  leaderRole: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#D4A017',
    fontWeight: 700,
  },
};

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-reveal]').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.15}s`;
            el.classList.add('revealed');
          });
        }
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={styles.section}>
      <style>{`
        [data-reveal] { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
        [data-reveal].revealed { opacity: 1; transform: translateY(0); }
        .leader-card-hover:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 160, 23, 0.5) !important;
          box-shadow: 0 15px 40px rgba(212, 160, 23, 0.15) !important;
        }
      `}</style>

      <div style={styles.container}>
        {/* Title Area */}
        <div data-reveal style={styles.headingArea}>
          <h1 style={styles.title}>About Us</h1>
          <div style={styles.subtitle}>Powering Taste & Tradition Since 1960</div>
        </div>

        {/* Section 1: Our Mission */}
        <div style={styles.row}>
          <div data-reveal style={styles.textCol}>
            <div style={styles.contentCard}>
              <div style={styles.sectionTag}>
                <Wheat size={18} /> Our Mission
              </div>
              <h2 style={styles.sectionTitle}>Simplifying the path to pure, premium rice.</h2>
              <p style={styles.sectionDesc}>
                At Sri Krishna Modern Rice Mill, we simplify the path to premium quality agricultural products, empowering households with pure, nutritious grains. Our mission is to make top-grade rice accessible and trusted, preserving authentic taste through modern state-of-the-art automated processing. This drives our daily actions, guiding our priorities and resources toward a sustainable food future.
              </p>
            </div>
          </div>
          <div data-reveal style={styles.imageCol}>
            <div style={styles.imageWrapper}>
              <img src={img1} alt="Our Mission - Rice Fields" style={styles.image} />
            </div>
          </div>
        </div>

        {/* Section 2: Our Vision */}
        <div style={{ ...styles.row, flexWrap: 'wrap-reverse' }}>
          <div data-reveal style={styles.imageCol}>
            <div style={styles.imageWrapper}>
              <img src={img2} alt="Our Vision - Automated Milling" style={styles.image} />
            </div>
          </div>
          <div data-reveal style={styles.textCol}>
            <div style={styles.contentCard}>
              <div style={styles.sectionTag}>
                <Leaf size={18} /> Our Vision
              </div>
              <h2 style={styles.sectionTitle}>Empowering a healthier, limitless tomorrow.</h2>
              <p style={styles.sectionDesc}>
                Our vision outlines the desired future state we aspire to achieve, breaking barriers in traditional milling and enabling consumers to explore pure taste and culinary excellence. We strive to bridge the gap between hard-working local farmers and global dining tables, building a transparent agricultural ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Why Choose Us */}
        <div style={styles.row}>
          <div data-reveal style={styles.textCol}>
            <div style={styles.contentCard}>
              <div style={styles.sectionTag}>
                <Award size={18} /> Quality & Trust
              </div>
              <h2 style={styles.sectionTitle}>Why Partners Choose Sri Krishna</h2>
              <ul style={styles.bulletsList}>
                {[
                  'Over 60+ Years of Milling Heritage & Legacy',
                  'State-of-the-Art Processing Machinery (8 Acres Facility)',
                  'Ancestral Wisdom Combined with Modern Food Safety',
                  '3-Stage Ultra-Pure Cleaning & Smart Color Sorting',
                  'Sourced Directly from Premium South Indian Farming Networks',
                  'Strict Adherence to ISO Standards for Export Quality',
                  'Pan-India Safe Shipping & Reliable Logistics Network'
                ].map((text, index) => (
                  <li key={index} style={styles.bulletItem}>
                    <ShieldCheck size={20} style={styles.bulletIcon} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div data-reveal style={styles.imageCol}>
            <div style={styles.imageWrapper}>
              <img src={img3} alt="Why Choose Us - High Quality Paddy" style={styles.image} />
            </div>
          </div>
        </div>

        {/* Section 4: Leadership */}
        <div data-reveal style={{ textAlign: 'center', marginTop: '4rem' }}>
          <div style={styles.sectionTag}>
            <Users size={18} style={{ margin: '0 auto 0.5rem auto' }} /> Leadership
          </div>
          <h2 style={{ ...styles.sectionTitle, marginBottom: '3rem' }}>The Visionaries Behind Sri Krishna</h2>

          <div style={styles.leaderGrid}>
            <div className="leader-card-hover" style={styles.leaderCard}>
              <div style={styles.leaderAvatar}>
                <User size={48} color="#FFF8E7" />
              </div>
              <h3 style={styles.leaderName}>Mr. Kumarapa</h3>
              <p style={styles.leaderRole}>Founder & Pioneer</p>
            </div>

            <div className="leader-card-hover" style={styles.leaderCard}>
              <div style={styles.leaderAvatar}>
                <User size={48} color="#FFF8E7" />
              </div>
              <h3 style={styles.leaderName}>Mr. K. Radhakrishnan</h3>
              <p style={styles.leaderRole}>Managing Director</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
