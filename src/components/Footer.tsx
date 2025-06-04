'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart } from 'lucide-react';
import { getSocialLinks } from '@/data/socialLinks';

export const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');
  
  useEffect(() => {
    setMounted(true);
    // Set the year only after mounting to avoid hydration mismatch
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const socialLinks = getSocialLinks();

  return (
    <footer>
				<div className="bg-dark text-light section-footer-2 position-relative">
					<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
						<div className="text-center">
							<a className="d-flex main-logo align-items-center justify-content-center mb-3">
								<img src="/images/personal-logo.svg" alt="iamoghale" className="w-40 h-auto" />
								<span className="fs-4 ms-2">IAMOGHALE</span>
							</a>
							<div className="d-flex justify-content-center gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label} >
                      <link.icon size={18} />
                  </a>
                ))}
							</div>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<a href="#about" className="fs-6"> About me </a>
								<a href="#resume" className="fs-6"> Resume </a>
								<a href="#services" className="fs-6"> Services </a>
								<a href="#portfolio" className="fs-6"> Portfolio </a>
								<a href="#blog" className="fs-6"> Blog </a>
								<a href="#contact" className="fs-6"> Contact </a>
							</div>
						</div>
					</div>
				</div>
			</footer>


    // <p className="text-muted mb-0" suppressHydrationWarning>
    // //           © {currentYear} Your Name. All rights reserved.
    // //         </p>
  );
};
