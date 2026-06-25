import React from 'react';
import { Wheat, Award, ShieldCheck, Leaf } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

import img1 from '../assets/about/Screenshot 2026-06-01 103900.png';
import img2 from '../assets/about/Screenshot 2026-06-01 103911.png';
import img3 from '../assets/about/Screenshot 2026-06-01 103933.png';
import logoImg from '../assets/logo/SKRM_logo.png';
import mainBgImg from '../assets/bg/Gemini_Generated_Image_vldgx7vldgx7vldg.png';
import PaddyHistory from './PaddyHistory';
import kumarapaImg from '../assets/about/kumarapa.png';
import radhakrishnanImg from '../assets/about/radhakrishnan.png';

const styles = {
  section: {
    padding: '8rem 2rem 5rem 2rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 100%)',
    color: '#1C231A',
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
    color: '#1C231A',
    marginBottom: '1rem',
    fontWeight: 900,
  },
  subtitle: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.4em',
    color: '#5C6757',
    fontWeight: 700,
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
    background: '#FFFFFF',
    border: '3px solid #5C3D24',
    borderRadius: '24px',
    padding: '2.5rem',
    boxShadow: '0 10px 40px rgba(0, 102, 204, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
    border: '1px solid rgba(44, 107, 55, 0.15)',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.05)',
    background: '#FFFFFF',
    padding: '8px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    display: 'block',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  },
  sectionTag: {
    fontSize: '0.85rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    color: '#2C6B37',
    letterSpacing: '0.2em',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
    color: '#1C231A',
    lineHeight: 1.25,
    fontWeight: 800,
  },
  sectionDesc: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: '#5C6757',
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
    color: '#3A4435',
  },
  bulletIcon: {
    color: '#2C6B37',
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
    background: '#FFFFFF',
    border: '3px solid #5C3D24',
    borderRadius: '24px',
    padding: '3rem 2rem',
    width: '100%',
    maxWidth: '340px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 10px 30px rgba(0, 102, 204, 0.04)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  leaderAvatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid #2C6B37',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    boxShadow: '0 8px 20px rgba(44, 107, 55, 0.15)',
    background: '#FFFFFF',
  },
  leaderName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.4rem',
    color: '#1C231A',
    marginBottom: '0.5rem',
    fontWeight: 800,
  },
  leaderRole: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#2C6B37',
    fontWeight: 800,
  },
};

export default function About() {
  return (
    <div>
      <section id="about" style={{ ...styles.section, paddingBottom: '2rem' }}>
      <style>{`
        .leader-card-hover:hover {
          transform: translateY(-10px) scale(1.03) !important;
          background: linear-gradient(135deg, #2C6B37 0%, #0066CC 100%) !important;
          border-color: transparent !important;
          box-shadow: 0 15px 40px rgba(0, 102, 204, 0.25) !important;
        }
        .leader-card-hover:hover h3 {
          color: #FFFFFF !important;
        }
        .leader-card-hover:hover p {
          color: #EAECEE !important;
        }
        .about-card-hover:hover {
          transform: translateY(-8px);
          background: linear-gradient(135deg, #2C6B37 0%, #0066CC 100%) !important;
          border-color: transparent !important;
          box-shadow: 0 15px 40px rgba(0, 102, 204, 0.25) !important;
        }
        .about-card-hover:hover h2,
        .about-card-hover:hover h3,
        .about-card-hover:hover p,
        .about-card-hover:hover span,
        .about-card-hover:hover li,
        .about-card-hover:hover div {
          color: #FFFFFF !important;
          transition: color 0.3s ease;
        }
        .about-card-hover:hover svg {
          stroke: #FFFFFF !important;
          color: #FFFFFF !important;
          transition: all 0.3s ease;
        }
        .about-image-hover:hover {
          transform: scale(1.03);
        }
      `}</style>

      <div style={styles.container}>
        {/* Title Area */}
        <ScrollReveal direction="up">
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #5C3D24',
            borderRadius: '24px',
            padding: '2rem 2.5rem',
            maxWidth: '750px',
            margin: '0 auto 4rem auto',
            boxShadow: '0 8px 30px rgba(44, 107, 55, 0.05)',
            textAlign: 'center',
          }}>
            <h1 className="gold-shimmer-text" style={{ ...styles.title, margin: 0 }}>About Us</h1>
            <div style={{ ...styles.subtitle, color: '#2C6B37', margin: '0.5rem 0 0 0', textShadow: 'none' }}>Powering Taste & Tradition Since 1960</div>
          </div>
        </ScrollReveal>

        {/* Heritage Image Showcase */}
        <ScrollReveal direction="scale" delay={0.15}>
          <div style={{
            background: '#FFFFFF',
            border: '3px solid #5C3D24',
            borderRadius: '24px',
            padding: '2.5rem',
            marginBottom: '5rem',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
              <img 
                src={logoImg} 
                alt="Sri Krishna Logo" 
                style={{
                  height: '75px',
                  width: '75px',
                  borderRadius: '50%',
                  border: '2.5px solid #2C6B37',
                  boxShadow: '0 4px 15px rgba(44, 107, 55, 0.15)',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
              />
              <div style={{ textAlign: 'left' }}>
                <h2 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  color: '#1C231A',
                  margin: 0,
                  fontWeight: 900,
                }}>Sri Krishna Modern Rice Mill</h2>
                <p style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#2C6B37',
                  fontWeight: 800,
                  margin: '2px 0 0 0',
                }}>Purity & Agricultural Heritage Since 1960</p>
              </div>
            </div>

            <div style={{
              width: '100%',
              maxHeight: '480px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(44, 107, 55, 0.15)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            }}>
              <img 
                src={mainBgImg} 
                alt="Sri Krishna Modern Rice Mill Heritage Showcase" 
                className="about-image-hover"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Section 1: Our Mission */}
        <div style={styles.row}>
          <ScrollReveal direction="left" style={styles.textCol}>
            <div className="about-card-hover" style={styles.contentCard}>
              <div style={styles.sectionTag}>
                <Wheat size={18} /> Our Mission
              </div>
              <h2 style={styles.sectionTitle}>Simplifying the path to pure, premium rice.</h2>
              <p style={styles.sectionDesc}>
                At Sri Krishna Modern Rice Mill, we simplify the path to premium quality agricultural products, empowering households with pure, nutritious grains. Our mission is to make top-grade rice accessible and trusted, preserving authentic taste through modern state-of-the-art automated processing. This drives our daily actions, guiding our priorities and resources toward a sustainable food future.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" style={styles.imageCol}>
            <div style={styles.imageWrapper}>
              <img src={img1} alt="Our Mission - Rice Fields" className="about-image-hover" style={styles.image} />
            </div>
          </ScrollReveal>
        </div>

        {/* Section 2: Our Vision */}
        <div style={{ ...styles.row, flexWrap: 'wrap-reverse' }}>
          <ScrollReveal direction="left" style={styles.imageCol}>
            <div style={styles.imageWrapper}>
              <img src={img2} alt="Our Vision - Automated Milling" className="about-image-hover" style={styles.image} />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" style={styles.textCol}>
            <div className="about-card-hover" style={styles.contentCard}>
              <div style={styles.sectionTag}>
                <Leaf size={18} /> Our Vision
              </div>
              <h2 style={styles.sectionTitle}>Empowering a healthier, limitless tomorrow.</h2>
              <p style={styles.sectionDesc}>
                Our vision outlines the desired future state we aspire to achieve, breaking barriers in traditional milling and enabling consumers to explore pure taste and culinary excellence. We strive to bridge the gap between hard-working local farmers and global dining tables, building a transparent agricultural ecosystem.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Section 3: Why Choose Us */}
        <div style={styles.row}>
          <ScrollReveal direction="left" style={styles.textCol}>
            <div className="about-card-hover" style={styles.contentCard}>
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
          </ScrollReveal>
          <ScrollReveal direction="right" style={styles.imageCol}>
            <div style={styles.imageWrapper}>
              <img src={img3} alt="Why Choose Us - High Quality Paddy" className="about-image-hover" style={styles.image} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

      {/* Journey Section */}
      <PaddyHistory />

      {/* Section 4: Leadership */}
      <section id="leadership" style={{ ...styles.section, paddingTop: '5rem', minHeight: 'auto', background: 'transparent' }}>
        <div style={styles.container}>
          <ScrollReveal direction="up">
            <div style={{
              background: '#FFFFFF',
              border: '3px solid #5C3D24',
              borderRadius: '24px',
              padding: '2rem 2.5rem',
              maxWidth: '750px',
              margin: '0 auto 3rem auto',
              boxShadow: '0 8px 30px rgba(44, 107, 55, 0.05)',
              textAlign: 'center',
            }}>
              <h2 className="gold-shimmer-text" style={{ ...styles.sectionTitle, margin: 0 }}>The Visionaries Behind Sri Krishna</h2>
            </div>
          </ScrollReveal>

          <div style={styles.leaderGrid}>
            {[
              { name: 'Mr. Kumarapa', img: kumarapaImg },
              { name: 'Mr. K. Radhakrishnan', img: radhakrishnanImg },
            ].map((leader, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.2}>
                <div className="leader-card-hover" style={styles.leaderCard}>
                  <div style={styles.leaderAvatar}>
                    <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={styles.leaderName}>{leader.name}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
