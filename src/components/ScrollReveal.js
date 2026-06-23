import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal — wrapper component that animates children into view on scroll.
 * Uses IntersectionObserver for performance. CSS-only animations (GPU-accelerated).
 * 
 * Props:
 *   direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none' (default: 'up')
 *   delay: number in seconds (default: 0)
 *   duration: number in seconds (default: 0.8)
 *   threshold: 0-1 (default: 0.15)
 *   distance: px distance to travel (default: 50)
 *   once: boolean — only animate once (default: true)
 *   style: additional styles
 *   className: additional className
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  distance = 50,
  once = true,
  style = {},
  className = '',
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up': return `translate3d(0, ${distance}px, 0)`;
      case 'down': return `translate3d(0, -${distance}px, 0)`;
      case 'left': return `translate3d(${distance}px, 0, 0)`;
      case 'right': return `translate3d(-${distance}px, 0, 0)`;
      case 'scale': return 'translate3d(0, 20px, 0) scale(0.92)';
      default: return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        willChange: 'opacity, transform',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
