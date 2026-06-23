import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquare, ExternalLink, Calendar, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import bg4 from '../assets/bg/bg4.png';

// ==========================================
// CONFIGURATION: Set your Elfsight Widget ID here
// If left blank, the website will show the custom local reviews.
// ==========================================
const ELFSIGHT_WIDGET_ID = "3bd942ee-6fa4-4aa7-b1ee-ec1e4e910f64";

const mockReviews = [
  {
    author_name: 'Rajesh Kumar',
    rating: 5,
    relative_time_description: '2 weeks ago',
    text: 'Using VIP Krishna Ponni Rice for our hotel for the last 5 years. Cooking quality is outstanding, very consistent and customers love it.',
    profile_photo_url: null,
    badge: 'Local Guide'
  },
  {
    author_name: 'Anjali Sharma',
    rating: 5,
    relative_time_description: '1 month ago',
    text: 'The Jeeraga Samba rice has a wonderful aroma! Perfect for making traditional biryani. Excellent quality and packaging.',
    profile_photo_url: null,
    badge: 'Verified Buyer'
  },
  {
    author_name: 'M. Subramanian',
    rating: 5,
    relative_time_description: '1 month ago',
    text: 'Reliable delivery and top-notch automated sorting. Zero stones or black grains. Hands down the best rice mill in Puducherry.',
    profile_photo_url: null,
    badge: 'Wholesaler'
  },
  {
    author_name: 'Priyanka R.',
    rating: 5,
    relative_time_description: '2 months ago',
    text: 'Extremely soft and fluffy Ponni rice. We have been buying directly from the mill for years. Absolute value for money.',
    profile_photo_url: null,
    badge: 'Verified Buyer'
  },
  {
    author_name: 'Venkatesh Prasad',
    rating: 4,
    relative_time_description: '3 months ago',
    text: 'Great quality Sona Masuri. The grain length and cooking properties are perfect. Excellent customer response from the management.',
    profile_photo_url: null,
    badge: 'Local Guide'
  }
];

/** Animated star rating — stars pop in one by one */
function AnimatedStars({ rating, visible }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
      {[1, 2, 3, 4, 5].map((starIdx) => (
        <div
          key={starIdx}
          className={visible ? 'star-pop' : ''}
          style={{
            animationDelay: visible ? `${starIdx * 0.12}s` : '0s',
            opacity: visible ? undefined : 0,
          }}
        >
          <Star
            size={16}
            fill={starIdx <= rating ? '#C99414' : 'none'}
            color={starIdx <= rating ? '#C99414' : 'rgba(44, 107, 55, 0.15)'}
          />
        </div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [reviews] = useState(mockReviews);
  const [googleRating] = useState(4.8);
  const [totalRatings] = useState(124);
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);
  const [starsVisible, setStarsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Load Elfsight Widget Script if Widget ID is provided
  useEffect(() => {
    if (!ELFSIGHT_WIDGET_ID) return;

    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Observe section for star animations
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setStarsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.70), rgba(251, 246, 238, 0.70)), url(${bg4})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '8rem 2rem 5rem 2rem',
      minHeight: 'auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        .review-card {
          background: #FFFFFF !important;
          border: 3px solid #5C3D24 !important;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 8px 30px rgba(0, 102, 204, 0.04);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative;
          overflow: hidden;
        }
        .review-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: linear-gradient(135deg, #2C6B37 0%, #0066CC 100%) !important;
          border-color: transparent !important;
          box-shadow: 0 15px 40px rgba(0, 102, 204, 0.2) !important;
        }
        .review-card:hover h4,
        .review-card:hover p,
        .review-card:hover span,
        .review-card:hover div {
          color: #FFFFFF !important;
          transition: color 0.3s ease;
        }
        .review-card:hover svg {
          stroke: #FFFFFF !important;
          color: #FFFFFF !important;
          transition: all 0.3s ease;
        }
        .google-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FAF9F6;
          border: 1px solid rgba(44, 107, 55, 0.15);
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 800;
          color: #2C6B37;
          transition: all 0.3s ease;
        }
        .review-card:hover .google-badge {
          background: rgba(255, 255, 255, 0.2) !important;
          border-color: #FFFFFF !important;
          color: #FFFFFF !important;
        }
        .star-pop {
          animation: starPop 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
          opacity: 0;
        }
        @keyframes starPop {
          0% { transform: scale(0) rotate(-30deg); opacity: 0; }
          60% { transform: scale(1.3) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {ELFSIGHT_WIDGET_ID ? (
          /* Live Elfsight Widget */
          <div>
            <ScrollReveal direction="up">
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{
                  fontSize: '0.9rem',
                  letterSpacing: '0.4em',
                  color: '#2C6B37',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  justifyContent: 'center'
                }}>
                  <MessageSquare size={16} color="#2C6B37" /> What People Say
                </div>
                <h2 className="gold-shimmer-text" style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: '#1C231A',
                  marginBottom: '1rem',
                }}>
                  Google Customer Reviews
                </h2>
              </div>
            </ScrollReveal>
            
            <div className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`} data-elfsight-app-lazy></div>
          </div>
        ) : (
          /* Fallback Custom Local Reviews */
          <div>
            {/* Header */}
            <ScrollReveal direction="up">
              <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative' }}>
                <div style={{
                  fontSize: '0.9rem',
                  letterSpacing: '0.4em',
                  color: '#2C6B37',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  justifyContent: 'center'
                }}>
                  <MessageSquare size={16} color="#2C6B37" /> What People Say
                </div>
                
                <h2 className="gold-shimmer-text" style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: '#1C231A',
                  marginBottom: '1.5rem',
                }}>
                  Google Customer Reviews
                </h2>
                
                <div style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(44, 107, 55, 0.15)',
                  borderRadius: '50px',
                  padding: '0.75rem 2rem',
                  maxWidth: '650px',
                  margin: '0 auto 2rem auto',
                  boxShadow: '0 8px 30px rgba(44, 107, 55, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#C99414' }}>{googleRating.toFixed(1)}</span>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={16} fill="#C99414" color="#C99414" />
                      ))}
                    </div>
                  </div>
                  <div style={{ width: '1px', height: '20px', background: 'rgba(44, 107, 55, 0.15)' }} />
                  <p style={{ color: '#5C6757', margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
                    Based on {totalRatings} verified Google Business ratings
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Reviews Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {reviews.map((r, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} duration={0.6}>
                  <div className="review-card">
                    {/* Decorative quotation mark background */}
                    <div style={{
                      position: 'absolute',
                      top: 10,
                      right: 15,
                      opacity: 0.04,
                      pointerEvents: 'none',
                      fontSize: '5rem',
                      fontFamily: "'Cinzel', serif",
                      color: '#2C6B37',
                      lineHeight: 1,
                    }}>
                      "
                    </div>

                    {/* Header info */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{
                          width: '44px', height: '44px', borderRadius: '50%',
                          background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem',
                          boxShadow: '0 4px 10px rgba(44, 107, 55, 0.15)'
                        }}>
                          {r.author_name ? r.author_name.charAt(0) : 'G'}
                        </div>
                        <div>
                          <h4 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800, fontSize: '1rem', color: '#1C231A', margin: 0 }}>
                            {r.author_name}
                          </h4>
                          <span style={{ fontSize: '0.75rem', color: '#5C6757', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                            <Calendar size={12} /> {r.relative_time_description || 'Recently'}
                          </span>
                        </div>
                      </div>
                      <div className="google-badge">
                        G
                      </div>
                    </div>

                    {/* Animated Stars */}
                    <AnimatedStars rating={r.rating} visible={starsVisible} />

                    {/* Review Text */}
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: '#5C6757',
                      fontStyle: 'italic',
                      margin: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      "{r.text}"
                    </p>

                    {/* User Role Badge */}
                    {r.badge && (
                      <div style={{
                        marginTop: '1.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: '#2C6B37',
                        letterSpacing: '0.1em'
                      }}>
                        <Award size={12} /> {r.badge}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA to write reviews */}
            <ScrollReveal direction="up" delay={0.2}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button
                  onClick={() => window.open('https://maps.google.com/?q=Sri+Krishna+Modern+Rice+Mill+Andiyarpalayam+Puducherry', '_blank')}
                  onMouseEnter={() => setIsHoveredBtn(true)}
                  onMouseLeave={() => setIsHoveredBtn(false)}
                  className="glow-pulse-btn"
                  style={{
                    background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                    color: '#FFFFFF',
                    padding: '1.1rem 2.4rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(44, 107, 55, 0.25)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transform: isHoveredBtn ? 'translateY(-3px)' : 'translateY(0)'
                  }}
                >
                  <span>Write a Review on Google</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}
