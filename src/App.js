import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PaddyHistory from './components/PaddyHistory';
import About from './components/About';
import Products from './components/Products';
import Quality from './components/Quality';
import Stats from './components/Stats';
import Customers from './components/Customers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import logoImg from './assets/logo/SKRM_logo.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page, sectionId = null) => {
    setCurrentPage(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#1A1A0E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        color: '#FFF8E7',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}>
        <style>{`
          @keyframes pulse-glow {
            0% { transform: scale(0.95); filter: drop-shadow(0 0 15px rgba(212,160,23,0.35)); }
            50% { transform: scale(1.03); filter: drop-shadow(0 0 30px rgba(212,160,23,0.7)); }
            100% { transform: scale(0.95); filter: drop-shadow(0 0 15px rgba(212,160,23,0.35)); }
          }
          .pulse-logo {
            animation: pulse-glow 2.5s infinite ease-in-out;
            width: clamp(140px, 20vw, 200px);
            height: clamp(140px, 20vw, 200px);
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #D4A017;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            display: block;
            margin: 0 auto;
          }
          .loading-text {
            font-family: 'Cinzel', serif;
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            letter-spacing: 0.25em;
            color: #D4A017;
            margin-top: 2rem;
            text-transform: uppercase;
            text-shadow: 0 2px 10px rgba(212, 160, 23, 0.25);
            text-align: center;
          }
        `}</style>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <img src={logoImg} alt="Sri Krishna Modern Rice Mill Logo" className="pulse-logo" />
          <center><h1 className="loading-text">Sri Krishna Modern Rice Mill</h1></center>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Stats />
          <Products />
          <Quality />
          <Customers />
          <Testimonials />
          <Contact />
        </>
      ) : (
        <About />
      )}
      <Footer />
    </div>
  );
}
