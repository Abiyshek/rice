import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, ExternalLink, Calendar, Award } from 'lucide-react';

// ==========================================
// CONFIGURATION: Set your Elfsight Widget ID here
// If left blank, the website will show the custom local reviews.
// ==========================================
const ELFSIGHT_WIDGET_ID = ""; // Paste your Elfsight widget ID here (e.g. "f56b3e7a-12e0-4a8b...")

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

export default function Testimonials() {
  const [reviews] = useState(mockReviews);
  const [googleRating] = useState(4.8);
  const [totalRatings] = useState(124);
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);

  // Load Elfsight Widget Script if Widget ID is provided
  useEffect(() => {
    if (!ELFSIGHT_WIDGET_ID) return;

    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="testimonials" style={{
      background: 'transparent',
      padding: '8rem 2rem 5rem 2rem',
      minHeight: 'auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        .review-card {
          background: rgba(26, 26, 14, 0.65) !important;
          backdrop-filter: blur(16px);
          border: 1px solid rgba(212, 160, 23, 0.18) !important;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative;
        }
        .review-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 160, 23, 0.5) !important;
          box-shadow: 0 15px 40px rgba(212, 160, 23, 0.15) !important;
        }
        .google-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(26, 26, 14, 0.8);
          border: 1px solid rgba(212, 160, 23, 0.25);
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #D4A017;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {ELFSIGHT_WIDGET_ID ? (
          /* Live Elfsight Widget */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                fontSize: '0.9rem',
                letterSpacing: '0.4em',
                color: '#000000',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center'
              }}>
                <MessageSquare size={16} color="#D4A017" /> What People Say
              </div>
              <h2 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#FFF8E7',
                marginBottom: '1rem',
                textShadow: '0 4px 10px rgba(0,0,0,0.5)'
              }}>
                Google Customer Reviews
              </h2>
            </div>
            
            <div className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`} data-elfsight-app-lazy></div>
          </div>
        ) : (
          /* Fallback Custom Local Reviews */
          <div>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative' }}>
              <div style={{
                fontSize: '0.9rem',
                letterSpacing: '0.4em',
                color: '#000000',
                textTransform: 'uppercase',
                marginBottom: 12,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: 'center'
              }}>
                <MessageSquare size={16} color="#D4A017" /> What People Say
              </div>
              
              <h2 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#FFF8E7',
                marginBottom: '1rem',
                textShadow: '0 4px 10px rgba(0,0,0,0.5)'
              }}>
                Google Customer Reviews
              </h2>
              
              <div style={{
                background: 'rgba(26, 26, 14, 0.65)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(212, 160, 23, 0.25)',
                borderRadius: '50px',
                padding: '0.75rem 2rem',
                maxWidth: '650px',
                margin: '0 auto 2rem auto',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#D4A017' }}>{googleRating.toFixed(1)}</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} fill="#D4A017" color="#D4A017" />
                    ))}
                  </div>
                </div>
                <div style={{ width: '1px', height: '20px', background: 'rgba(255,248,231,0.2)' }} />
                <p style={{ color: '#FFF8E7', margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
                  Based on {totalRatings} verified Google Business ratings
                </p>
              </div>
            </div>

            {/* Reviews Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {reviews.map((r, idx) => (
                <div key={idx} className="review-card">
                  {/* Header info */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #D4A017, #E8623A)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#FFF8E7', fontWeight: 700, fontSize: '1.1rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                      }}>
                        {r.author_name ? r.author_name.charAt(0) : 'G'}
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: '1rem', color: '#FFF8E7', margin: 0 }}>
                          {r.author_name}
                        </h4>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255, 248, 231, 0.55)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          <Calendar size={12} /> {r.relative_time_description || 'Recently'}
                        </span>
                      </div>
                    </div>
                    <div className="google-badge">
                      G
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                    {[1, 2, 3, 4, 5].map((starIdx) => (
                      <Star
                        key={starIdx}
                        size={16}
                        fill={starIdx <= r.rating ? '#D4A017' : 'none'}
                        color={starIdx <= r.rating ? '#D4A017' : 'rgba(255,248,231,0.2)'}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'rgba(255, 248, 231, 0.85)',
                    fontStyle: 'italic',
                    margin: 0
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
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#D4A017',
                      letterSpacing: '0.1em'
                    }}>
                      <Award size={12} /> {r.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA to write reviews */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <button
                onClick={() => window.open('https://maps.google.com/?q=Sri+Krishna+Modern+Rice+Mill+Andiyarpalayam+Puducherry', '_blank')}
                onMouseEnter={() => setIsHoveredBtn(true)}
                onMouseLeave={() => setIsHoveredBtn(false)}
                style={{
                  background: isHoveredBtn ? 'linear-gradient(135deg, #E8623A, #D4A017)' : 'linear-gradient(135deg, #D4A017, #E8623A)',
                  color: '#1A1A0E',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(212,160,23,0.4)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transform: isHoveredBtn ? 'translateY(-3px)' : 'translateY(0)'
                }}
              >
                <span>Write a Review on Google</span>
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
