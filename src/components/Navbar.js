import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import logoImg from '../assets/logo/SKRM_logo.png';

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: '#FFFFFF',
    borderBottom: '1px solid rgba(44, 107, 55, 0.1)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '100%',
  },
  container: {
    width: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0.6rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  linksGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flex: 1,
  },
  leftLinks: {
    justifyContent: 'flex-end',
    marginRight: '2rem',
  },
  rightLinks: {
    justifyContent: 'flex-start',
    marginLeft: '2rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 1001,
    transition: 'transform 0.3s ease',
  },
  logo: {
    height: '65px',
    width: '65px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2.5px solid #2C6B37',
    boxShadow: '0 4px 12px rgba(44, 107, 55, 0.15)',
    transition: 'all 0.3s ease',
  },
  link: {
    color: '#3A4435',
    textDecoration: 'none',
    fontSize: '0.85rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 700,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    position: 'relative',
    padding: '4px 0',
  },
  cta: {
    background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
    color: '#FFFFFF',
    padding: '0.6rem 1.5rem',
    borderRadius: '30px',
    border: 'none',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 700,
    fontSize: '0.8rem',
    cursor: 'pointer',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(44, 107, 55, 0.25)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
};

export default function Navbar({ currentPage, navigateTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  const leftNavItems = ['home', 'about'];
  const rightNavItems = ['products', 'quality', 'testimonials', 'contact'];

  return (
    <div style={{
      ...styles.wrapper,
      padding: scrolled ? '0.1rem 0' : '0.4rem 0',
      borderBottom: scrolled ? '1px solid rgba(44, 107, 55, 0.15)' : '1px solid rgba(44, 107, 55, 0.08)',
      boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.06)' : '0 4px 20px rgba(0,0,0,0.03)',
    }}>
      <nav style={styles.container}>
        
        {/* Logo Left */}
        <div 
          className="desktop-logo"
          onClick={() => { handleNavClick('home'); setMobileMenuOpen(false); }} 
          style={{
            ...styles.logoContainer,
            transform: scrolled ? 'scale(0.9)' : 'scale(1)'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = scrolled ? 'scale(0.95)' : 'scale(1.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = scrolled ? 'scale(0.9)' : 'scale(1)'; }}
        >
          <img 
            src={logoImg} 
            alt="Sri Krishna Modern Rice Mill" 
            style={{
              ...styles.logo,
              height: scrolled ? '55px' : '65px',
              width: scrolled ? '55px' : '65px',
            }} 
          />
        </div>

        {/* Desktop Navigation Links & CTA Right */}
        <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
          <ul style={{ ...styles.linksGroup, justifyContent: 'flex-end', gap: '2.2rem' }}>
            {['home', 'about', 'products', 'quality', 'testimonials', 'contact'].map(item => {
              const isActive = (item === 'about' && currentPage === 'about') || (item === 'home' && currentPage === 'home' && !window.location.hash);
              return (
                <li key={item}>
                  <span style={{
                    ...styles.link,
                    color: isActive ? '#2C6B37' : '#3A4435'
                  }} onClick={() => handleNavClick(item)}
                    onMouseEnter={e => { e.target.style.color = '#2C6B37'; }}
                    onMouseLeave={e => { e.target.style.color = isActive ? '#2C6B37' : '#3A4435'; }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </li>
              );
            })}
          </ul>
          
          <button 
            style={styles.cta}
            onMouseEnter={e => { 
              e.currentTarget.style.transform = 'translateY(-2px)'; 
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(44, 107, 55, 0.35)'; 
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.transform = 'translateY(0)'; 
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(44, 107, 55, 0.25)'; 
            }}
            onClick={() => handleNavClick('contact')}
          >
            <PhoneCall size={14} /> Get Quote
          </button>
        </div>

        {/* Mobile Header elements */}
        <div className="mobile-only-header-group" style={{ width: '100%', display: 'none', justifyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={() => { handleNavClick('home'); setMobileMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src={logoImg} alt="Sri Krishna Logo" style={{ height: '45px', width: '45px', borderRadius: '50%', border: '2px solid #2C6B37' }} />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              style={{
                ...styles.cta,
                padding: '0.45rem 1rem',
                fontSize: '0.75rem',
                boxShadow: 'none'
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
                color: '#2C6B37',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#FFFFFF',
            borderBottom: '2px solid #2C6B37',
            boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            zIndex: 999,
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem', padding: 0, margin: 0 }}>
              {['home', 'about', 'products', 'quality', 'testimonials', 'contact'].map(item => {
                const isActive = (item === 'about' && currentPage === 'about') || (item === 'home' && currentPage === 'home');
                return (
                  <li key={item} style={{ textAlign: 'center' }}>
                    <span style={{
                      ...styles.link,
                      fontSize: '0.95rem',
                      display: 'block',
                      padding: '0.45rem',
                      color: isActive ? '#2C6B37' : '#3A4435'
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
          </div>
        )}
      </nav>

      {/* Inject styling for display toggling */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav-links, .desktop-logo {
            display: none !important;
          }
          .mobile-only-header-group {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
