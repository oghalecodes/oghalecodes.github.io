'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';

export const NavbarWrapper: React.FC = () => {
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = (): void => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
  };

  // OffCanvas
  const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
  const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas);

  return (
    <Navbar 
      isOffCanvas={isOffCanvas} 
      handleOffCanvas={handleOffCanvas} 
      handleMobileMenu={handleMobileMenu} 
      isMobileMenu={isMobileMenu} 
    />
  );
};
