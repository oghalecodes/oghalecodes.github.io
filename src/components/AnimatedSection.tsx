'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // For SSR compatibility
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer detects the element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's been seen, no need to keep observing
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // trigger when 10% of the element is visible
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Default classes with appropriate transforms for each animation type
  let initialClasses = 'opacity-0';
  if (!isMounted) {
    // Server-side and initial client render
    switch (animation) {
      case 'slide-up':
        initialClasses += ' translate-y-10';
        break;
      case 'slide-left':
        initialClasses += ' -translate-x-10';
        break;
      case 'slide-right':
        initialClasses += ' translate-x-10';
        break;
    }
  }

  // Animation classes based on visibility
  const animationClass = isVisible ? 'opacity-100 transform-none' : initialClasses;
  
  const delayStyle = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
