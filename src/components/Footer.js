import React from 'react';
import { Wheat, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo/SKRM_logo.png';

export default function Footer() {
  return (
    <footer style={{
      background: '#FFFFFF',
      borderTop: '1px solid rgba(44, 107, 55, 0.12)',
      padding: '4rem 3rem 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="responsive-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
              <img src={logoImg} alt="Sri Krishna Modern Rice Mill" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #2C6B37' }} />
            </div>
            <p style={{ color: '#5C6757', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: 320 }}>
              Three generations of milling excellence. From the paddy fields of Tamil Nadu 
              to tables worldwide — purity in every grain since 1960.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800, color: '#1C231A', marginBottom: '1.2rem', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            {['About', 'Products', 'Quality', 'Testimonials', 'Contact'].map(item => (
              <div key={item} style={{ marginBottom: 8 }}>
                <span
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ color: '#5C6757', fontSize: '0.85rem', cursor: 'pointer', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}
                  onMouseEnter={e => e.target.style.color = '#2C6B37'}
                  onMouseLeave={e => e.target.style.color = '#5C6757'}
                >
                  <ArrowRight size={12} color="#2C6B37" /> {item}
                </span>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800, color: '#1C231A', marginBottom: '1.2rem', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Products
            </h4>
            {['White Ponni', 'Sona Masuri', 'Jeeraga Samba', 'Deluxe Ponni', 'BPT Rice', 'Swarna'].map(p => (
              <div key={p} style={{ color: '#5C6757', fontSize: '0.85rem', marginBottom: 8, display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500 }}>
                <Wheat size={12} color="#2C6B37" /> {p}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(44, 107, 55, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ color: '#8C9787', fontSize: '0.8rem' }}>
            © 2024 Sri Krishna Modern Rice Mill. All rights reserved.
          </div>
          <div style={{ color: '#8C9787', fontSize: '0.8rem' }}>
            Andiyarpalayam, Puducherry • Since 1960
          </div>
        </div>
      </div>
    </footer>
  );
}
