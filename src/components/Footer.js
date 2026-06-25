import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import footerBgClean from '../assets/bg/footer_bg_clean.png';

// Custom Social Icons to match mockup style perfectly
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.003 3.003 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.475 20.455 12 20.455 12 20.455s7.524 0 9.388-.51a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const WheatStalk = () => (
  <svg viewBox="0 0 24 36" width="30" height="45" style={{ marginTop: '1.25rem', alignSelf: 'flex-start' }} aria-hidden="true">
    <path d="M12 34V6" stroke="#C99414" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 6C12 2 10 1 12 0C14 1 12 2 12 6" fill="#C99414" />
    {[10, 16, 22, 28].map((y, idx) => (
      <g key={idx}>
        <path d={`M12 ${y} C8 ${y-3} 5 ${y-1} 5 ${y+2} C7 ${y+3} 10 ${y+1} 12 ${y}`} fill="#C99414" />
        <path d={`M12 ${y} C16 ${y-3} 19 ${y-1} 19 ${y+2} C17 ${y+3} 14 ${y+1} 12 ${y}`} fill="#C99414" />
      </g>
    ))}
  </svg>
);

export default function Footer() {
  const quickLinks = [
    { name: 'About Our Mill', id: 'about' },
    { name: 'Our Process', id: 'history' },
    { name: 'Rice Varieties', id: 'products' },
    { name: 'Sustainable Farming', id: 'quality' },
    { name: 'Careers', id: 'contact' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'Press & Media', id: 'testimonials' },
    { name: 'Community Impact', id: 'testimonials' }
  ];

  const socialChannels = [
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/SriKrishnaModernRiceMill/', label: 'Facebook' },
    { icon: <XIcon />, url: 'https://x.com', label: 'X (formerly Twitter)' },
    { icon: <InstagramIcon />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <LinkedinIcon />, url: 'https://www.linkedin.com/company/srikrishnarice/', label: 'LinkedIn' },
    { icon: <YoutubeIcon />, url: 'https://youtube.com', label: 'YouTube' }
  ];

  return (
    <footer style={{
      backgroundImage: `linear-gradient(to right, rgba(56, 38, 24, 0.95) 0%, rgba(56, 38, 24, 0.85) 50%, rgba(56, 38, 24, 0.55) 100%), url(${footerBgClean})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderTop: '1px solid rgba(201, 148, 20, 0.3)',
      padding: '5rem 3rem 2.5rem',
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      marginTop: '2rem',
      color: '#EADDC9'
    }} className="footer-container">
      {/* Accent glow line at top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent 5%, #C99414 20%, #A0740E 50%, #C99414 80%, transparent 95%)',
        opacity: 0.8,
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="responsive-footer-grid">
          {/* Column 1: About */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.3rem',
              color: '#FFFFFF',
              fontWeight: 600,
              margin: 0,
              letterSpacing: '0.03em'
            }}>
              About Sri Krishna Rice Mill
            </h3>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: 1.7,
              margin: 0,
              color: '#E5D3C0',
              fontWeight: 400
            }}>
              Bringing you the finest, locally sourced rice with a commitment to quality and community for over 60 years. Our modern milling processes ensure every grain is perfect.
            </p>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 0',
                transition: 'opacity 0.2s',
                fontFamily: "'Raleway', sans-serif"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = '0.8';
                const circle = e.currentTarget.querySelector('.discover-arrow-circle');
                if (circle) circle.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = '1';
                const circle = e.currentTarget.querySelector('.discover-arrow-circle');
                if (circle) circle.style.transform = 'translateX(0)';
              }}
            >
              Discover More
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                transition: 'transform 0.3s'
              }} className="discover-arrow-circle">
                <ArrowRight size={14} color="#382618" />
              </span>
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.3rem',
              color: '#FFFFFF',
              fontWeight: 600,
              margin: 0,
              letterSpacing: '0.03em'
            }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-start' }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ margin: 0 }}>
                  <span
                    onClick={() => {
                      if (link.name === 'Careers') {
                        alert('Join our team! Send your resume to careers@srikrishnarice.com');
                      } else {
                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      color: '#E5D3C0',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: 500
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#C99414';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#E5D3C0';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ color: '#C99414' }}>•</span> {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.3rem',
              color: '#FFFFFF',
              fontWeight: 600,
              margin: 0,
              letterSpacing: '0.03em'
            }}>
              Contact Us
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', lineHeight: 1.5, color: '#E5D3C0' }}>
              <div>
                <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>Registered Office :</strong> R.S.No:138/1&2 Mankuppam main road, Andiyarpalayam, P.O, Gangarampalaiyam, Puducherry, 605108
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>Corporate Office :</strong> Andiyarpalayam, Puducherry, India
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>Call :</strong>{' '}
                <a 
                  href="tel:+919999999999" 
                  style={{ color: '#E5D3C0', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C99414'}
                  onMouseLeave={e => e.currentTarget.style.color = '#E5D3C0'}
                >
                  +91 XXXXX XXXXX
                </a>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>Email :</strong>{' '}
                <a 
                  href="mailto:info@srikrishnarice.com" 
                  style={{ color: '#E5D3C0', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C99414'}
                  onMouseLeave={e => e.currentTarget.style.color = '#E5D3C0'}
                >
                  info@srikrishnarice.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.3rem',
              color: '#FFFFFF',
              fontWeight: 600,
              margin: 0,
              letterSpacing: '0.03em'
            }}>
              Follow Us
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {socialChannels.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255, 255, 255, 0.4)',
                    color: '#FFFFFF',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <WheatStalk />
          </div>
        </div>

        {/* Divider and Copyright Row */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#B0A294'
        }}>
          <div>
            © 2026 Sri Krishna Modern Rice Mill. All Rights Reserved. – The Journey of a Grain
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.05em' }}>
            THE FULL JOURNEY
            <Sparkles size={14} color="#C99414" />
          </div>
        </div>
      </div>
    </footer>
  );
}
