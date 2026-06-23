import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function ContactCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <ScrollReveal direction="up" delay={index * 0.1} duration={0.6}>
      <div 
        onClick={item.onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          textAlign: 'center', padding: '1.8rem 1.2rem',
          background: hovered ? 'linear-gradient(135deg, #2C6B37 0%, #0066CC 100%)' : '#FFFFFF',
          border: hovered ? '3px solid transparent' : '3px solid #5C3D24',
          borderRadius: 16,
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          cursor: 'pointer',
          boxShadow: hovered ? '0 15px 35px rgba(0, 102, 204, 0.18)' : '0 8px 24px rgba(0,0,0,0.02)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        }}
      >
        <div className={hovered ? '' : 'icon-bounce'} style={{ fontSize: '1.5rem', marginBottom: 8, transition: 'all 0.3s' }}>
          {React.createElement(item.icon, { size: 24, color: hovered ? '#FFFFFF' : '#2C6B37' })}
        </div>
        <div style={{ 
          fontSize: '0.75rem', 
          letterSpacing: '0.15em', 
          color: hovered ? '#EAECEE' : '#5C6757', 
          marginBottom: 6, 
          fontWeight: 700, 
          textTransform: 'uppercase',
          transition: 'color 0.3s'
        }}>
          {item.label}
        </div>
        <div style={{ 
          fontSize: '0.88rem', 
          color: hovered ? '#FFFFFF' : '#1C231A', 
          fontWeight: 800, 
          lineHeight: 1.5,
          transition: 'color 0.3s'
        }}>
          {item.value}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Contact() {

  const socials = [
    {
      icon: FacebookIcon,
      label: 'Facebook',
      value: '/SriKrishnaModernRiceMill',
      onClick: () => window.open('https://www.facebook.com/SriKrishnaModernRiceMill/', '_blank'),
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Sri Krishna Modern Rice Mill',
      onClick: () => window.open('https://www.linkedin.com/company/srikrishnarice/', '_blank'),
    },
  ];

  const contactDetails = [
    { 
      icon: MapPin, 
      label: 'Address', 
      value: 'R.S.No:138/1&2 Mankuppam main road, Andiyarpalayam, P.O, Gangarampalaiyam, Puducherry, 605108',
      onClick: () => window.open('https://maps.google.com/?q=Sri+Krishna+Modern+Rice+Mill+Andiyarpalayam+Puducherry', '_blank'),
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 XXXXX XXXXX',
      onClick: () => {
        const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0 && window.innerWidth <= 768);
        if (isMobile) {
          window.location.href = 'tel:+919999999999';
        } else {
          window.open('https://wa.me/919999999999', '_blank');
        }
      },
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'info@srikrishnarice.com',
      onClick: () => window.open('https://mail.google.com/mail/?view=cm&to=info@srikrishnarice.com', '_blank'),
    },
  ];

  return (
    <section id="contact" style={{
      background: 'linear-gradient(135deg, #FAF8F5 0%, #FAF2E8 100%)',
      padding: '8rem 3rem', minHeight: 'auto',
    }}>

      <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.9rem', letterSpacing: '0.4em', color: '#C99414', textTransform: 'uppercase', marginBottom: 12, fontWeight: 800 }}>
              Connect With Us
            </div>
            <h2 className="gold-shimmer-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1C231A', marginBottom: '1.5rem' }}>
              Get a Quote
            </h2>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(44, 107, 55, 0.15)',
              borderRadius: '50px',
              padding: '0.75rem 2rem',
              maxWidth: '650px',
              margin: '0 auto',
              boxShadow: '0 8px 30px rgba(44, 107, 55, 0.04)',
            }}>
              <p style={{ color: '#5C6757', margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
                Bulk orders, export inquiries, or just a question — we'd love to hear from you.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact info */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
          {contactDetails.map((c, i) => (
            <ContactCard key={i} item={c} index={i} />
          ))}
        </div>

        {/* Social channels */}
        <div className="responsive-grid-2">
          {socials.map((s, i) => (
            <ContactCard key={i} item={s} index={i + 3} />
          ))}
        </div>

        {/* Feedback & Requirement CTA Button */}
        <ScrollReveal direction="up" delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <button
              onClick={() => window.open('https://forms.gle/hYcCQCLbAZouTpTX7', '_blank')}
              className="glow-pulse-btn"
              style={{
                background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                color: '#FFFFFF',
                padding: '1.25rem 3.5rem',
                borderRadius: '50px',
                border: 'none',
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(44, 107, 55, 0.25)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(44, 107, 55, 0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 107, 55, 0.25)';
              }}
            >
              Submit Requirements & Feedback
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
