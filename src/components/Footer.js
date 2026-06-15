import React from 'react';
import { Wheat, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo/SKRM_logo.png';

export default function Footer() {
  return (
    <footer style={{
      background: '#0A0F05',
      borderTop: '1px solid rgba(212,160,23,0.2)',
      padding: '4rem 3rem 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '4rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
              <img src={logoImg} alt="Sri Krishna Modern Rice Mill" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <p style={{ color: 'rgba(255,248,231,0.5)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: 320 }}>
              Three generations of milling excellence. From the paddy fields of Tamil Nadu 
              to tables worldwide — purity in every grain since 1960.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Cinzel', serif", color: '#D4A017', marginBottom: '1.2rem', fontSize: '1rem' }}>
              Quick Links
            </h4>
            {['About', 'History', 'Products', 'Quality', 'Testimonials', 'Contact'].map(item => (
              <div key={item} style={{ marginBottom: 8 }}>
                <span
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ color: 'rgba(255,248,231,0.5)', fontSize: '0.85rem', cursor: 'pointer', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  onMouseEnter={e => e.target.style.color = '#D4A017'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,248,231,0.5)'}
                >
                  <ArrowRight size={14} /> {item}
                </span>
              </div>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Cinzel', serif", color: '#D4A017', marginBottom: '1.2rem', fontSize: '1rem' }}>
              Products
            </h4>
            {['White Ponni', 'Sona Masuri', 'Jeeraga Samba', 'Deluxe Ponni', 'BPT Rice', 'Swarna'].map(p => (
              <div key={p} style={{ color: 'rgba(255,248,231,0.5)', fontSize: '0.85rem', marginBottom: 8, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Wheat size={14} /> {p}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,248,231,0.08)',
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ color: 'rgba(255,248,231,0.3)', fontSize: '0.8rem' }}>
            © 2024 Sri Krishna Modern Rice Mill. All rights reserved.
          </div>
          <div style={{ color: 'rgba(255,248,231,0.3)', fontSize: '0.8rem' }}>
            Madagadipet, Puducherry • Since 1960
          </div>
        </div>
      </div>
    </footer>
  );
}
