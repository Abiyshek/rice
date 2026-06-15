import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

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

  return (
    <section id="contact" style={{
      background: 'transparent',
      padding: '8rem 3rem', minHeight: 'auto',
    }}>

      <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.4em', color: '#000000', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>
            Connect With Us
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFF8E7', marginBottom: '1rem' }}>
            Get a Quote
          </h2>
          <div style={{
            background: 'rgba(26, 26, 14, 0.65)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 160, 23, 0.25)',
            borderRadius: '50px',
            padding: '0.75rem 2rem',
            maxWidth: '650px',
            margin: '0 auto',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}>
            <p style={{ color: '#FFF8E7', margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
              Bulk orders, export inquiries, or just a question — we'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact info */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { 
              icon: MapPin, 
              label: 'Address', 
              value: 'Madagadipet, Puducherry',
              onClick: () => window.open('https://maps.google.com/?q=Sri+Krishna+Modern+Rice+Mill+Madagadipet+Puducherry', '_blank'),
            },
            { 
              icon: Phone, 
              label: 'Phone', 
              value: '+91 XXXX XXXXXX',
              onClick: () => {
                const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0 && window.innerWidth <= 768);
                if (isMobile) {
                  window.location.href = 'tel:+919876543210';
                } else {
                  window.open('https://wa.me/919876543210', '_blank');
                }
              },
            },
            { 
              icon: Mail, 
              label: 'Email', 
              value: 'info@srikrishnarice.com',
              onClick: () => window.open('https://mail.google.com/mail/?view=cm&to=info@srikrishnarice.com', '_blank'),
            },
          ].map((c, i) => (
            <div key={i}
              onClick={c.onClick}
              style={{
                textAlign: 'center', padding: '1.5rem 1rem',
                background: 'rgba(144, 200, 100, 0.75)',
                border: '2px solid rgba(90, 150, 50, 0.9)',
                borderRadius: 14,
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(144, 200, 100, 0.9)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(144, 200, 100, 0.75)'}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{React.createElement(c.icon, { size: 24, color: '#1A1A0E' })}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#1A1A0E', marginBottom: 4, fontWeight: 700 }}>{c.label}</div>
              <div style={{ fontSize: '0.85rem', color: '#1A1A0E', fontWeight: 700 }}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Social channels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {socials.map((s, i) => (
            <div key={i}
              onClick={s.onClick}
              style={{
                textAlign: 'center', padding: '1.5rem 1rem',
                background: 'rgba(144, 200, 100, 0.75)',
                border: '2px solid rgba(90, 150, 50, 0.9)',
                borderRadius: 14,
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(144, 200, 100, 0.9)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(144, 200, 100, 0.75)'}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{React.createElement(s.icon, { size: 24, color: '#1A1A0E' })}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#1A1A0E', marginBottom: 4, fontWeight: 700 }}>{s.label}</div>
              <div style={{ fontSize: '0.85rem', color: '#1A1A0E', fontWeight: 700 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Feedback & Requirement CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button
            onClick={() => window.open('https://forms.gle/hYcCQCLbAZouTpTX7', '_blank')}
            style={{
              background: 'linear-gradient(135deg, #D4A017, #E8623A)',
              color: '#1A1A0E',
              padding: '1.25rem 3rem',
              borderRadius: '50px',
              border: 'none',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(212,160,23,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(212,160,23,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(212,160,23,0.4)'; }}
          >
            Submit Requirements & Feedback
          </button>
        </div>
      </div>
    </section>
  );
}
