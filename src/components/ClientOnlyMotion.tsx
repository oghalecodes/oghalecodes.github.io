'use client';

import React, { useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ClientOnlyMotionProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fallbackClassName?: string;
}

export const ClientOnlyMotion: React.FC<ClientOnlyMotionProps> = ({ 
  children, 
  className,
  style,
  fallbackClassName,
  ...motionProps 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    
    return () => cancelAnimationFrame(timer);
  }, []);

  // Render static version during SSR and initial client render
  if (!mounted) {
    return (
      <div 
        className={fallbackClassName || className} 
        style={style}
        suppressHydrationWarning
      >
        {children}
      </div>
    );
  }

  // Render animated version after hydration
  return (
    <motion.div 
      className={className} 
      style={style}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
