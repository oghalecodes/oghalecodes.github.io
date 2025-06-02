'use client';

import React, { useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ClientOnlyMotionProps extends Omit<MotionProps, 'children'> {
  children: React.ReactNode;
  className?: string;
}

export const ClientOnlyMotion: React.FC<ClientOnlyMotionProps> = ({ 
  children, 
  className,
  ...motionProps 
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};
