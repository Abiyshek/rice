import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo/SKRM_logo.png';

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  nav: {
    width: '90%',
    maxWidth: '1200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 2rem',
    borderRadius: '100px',
    background: 'rgba(26, 26, 14, 0.65)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(212, 160, 23, 0.15)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
  },
  navScrolled: {
    background: 'rgba(26, 26, 14, 0.92)',
    border: '1px solid rgba(212, 160, 23, 0.35)',
    boxShadow: '0 12px 40px 0 rgba(212, 160, 23, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  },
  links: { display: 'flex', gap: '2rem', listStyle: 'none' },
  link: {
    color: 'rgba(255,248,231,0.8)', textDecoration: 'none',
    fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase',
    fontWeight: 600, transition: 'color 0.3s',
    cursor: 'pointer',
  },
  cta: {
    background: 'linear-gradient(135deg, #D4A017, #E8623A)',
    color: '#1A1A0E', padding: '0.55rem 1.4rem',
    borderRadius: '25px', border: 'none',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700, fontSize: '0.8rem',
    cursor: 'pointer', letterSpacing: '0.05em',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
};

export default function Navbar({ currentPage, navigateTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item === 'home') {
      navigateTo('home');
    } else if (item === 'about') {
      navigateTo('about');
    } else {
      navigateTo('home', item);
    }
  };

  return (
    <div style={{
      ...styles.wrapper,
      padding: scrolled ? '0.75rem 1rem' : '1.5rem 1rem'
    }}>
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        {/* Logo Container */}
        <div onClick={() => { handleNavClick('home'); setMobileMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '12px' }}>
          <img src={logoImg} alt="Sri Krishna Modern Rice Mill" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>

        {/* Desktop Links */}
        <ul className="desktop-nav-links" style={styles.links}>
          {['home', 'about', 'history', 'products', 'quality', 'testimonials', 'contact'].map(item => {
            const isActive = (item === 'about' && currentPage === 'about') || (item === 'home' && currentPage === 'home' && !window.location.hash);
            return (
              <li key={item}>
                <span style={{
                  ...styles.link,
                  color: isActive ? '#D4A017' : 'rgba(255,248,231,0.8)'
                }} onClick={() => handleNavClick(item)}
                  onMouseEnter={e => e.target.style.color = '#D4A017'}
                  onMouseLeave={e => e.target.style.color = isActive ? '#D4A017' : 'rgba(255,248,231,0.8)'}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="desktop-nav-cta">
          <button style={styles.cta}
            onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 8px 25px rgba(212,160,23,0.5)'; }}
            onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none'; }}
            onClick={() => handleNavClick('contact')}
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile-Only Header Group (Get Quote + Hamburger Menu) */}
        <div className="mobile-only-header-group" style={{ alignItems: 'center', gap: '10px' }}>
          <button 
            style={{
              ...styles.cta,
              padding: '0.45rem 1rem',
              fontSize: '0.75rem',
            }}
            onClick={() => {
              handleNavClick('contact');
              setMobileMenuOpen(false);
            }}
          >
            Get Quote
          </button>
          <button 
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFF8E7',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '0.75rem',
            background: 'rgba(26, 26, 14, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(212, 160, 23, 0.35)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            zIndex: 999,
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
              {['home', 'about', 'history', 'products', 'quality', 'testimonials', 'contact'].map(item => {
                const isActive = (item === 'about' && currentPage === 'about') || (item === 'home' && currentPage === 'home');
                return (
                  <li key={item} style={{ textAlign: 'center' }}>
                    <span style={{
                      ...styles.link,
                      fontSize: '1rem',
                      display: 'block',
                      padding: '0.55rem',
                      color: isActive ? '#D4A017' : 'rgba(255,248,231,0.8)'
                    }} onClick={() => {
                      handleNavClick(item);
                      setMobileMenuOpen(false);
                    }}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  </li>
                );
              })}
            </ul>
            <button style={{
              ...styles.cta,
              width: '100%',
              padding: '0.75rem',
              fontSize: '0.9rem',
            }} onClick={() => {
              handleNavClick('contact');
              setMobileMenuOpen(false);
            }}>
              Get a Quote
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
