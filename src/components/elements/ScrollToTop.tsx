'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
  smooth?: boolean;
  showProgress?: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 300,
  className = '',
  smooth = true,
  showProgress = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      
      if (scrolled > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (showProgress) {
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (maxScroll > 0) {
          const progress = (scrolled / maxScroll) * 100;
          setScrollProgress(Math.min(progress, 100));
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [threshold, showProgress]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  if (!isVisible) return null;

  return (
    <button
      className={`btn-scroll-top active-progress ${className}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      style={{
        position: 'fixed',
        right: '1.5rem',
        bottom: '1.5rem',
        width: '3rem',
        height: '3rem',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        zIndex: 1010,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        backgroundColor: 'var(--bs-primary-rgb)',
        color: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
    >
      {showProgress ? (
        <div className="position-relative d-flex align-items-center justify-content-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style={{
              position: 'absolute',
              transform: 'rotate(-90deg)',
            }}
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.2"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
              style={{
                transition: 'stroke-dashoffset 0.1s ease',
              }}
            />
          </svg>
          <ChevronUp size={20} />
        </div>
      ) : (
        <ChevronUp size={20} />
      )}
    </button>
  );
};

export default ScrollToTop;
