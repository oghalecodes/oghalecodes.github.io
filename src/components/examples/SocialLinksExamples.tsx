/**
 * Example usage of the shared social links function
 * This demonstrates how any component can easily use the social links
 */

import React from 'react';
import { getSocialLinks, getSocialLink, getSocialLinksData } from '@/data/socialLinks';

// Example 1: Component using full social links with icons
export const SocialIconsExample: React.FC = () => {
  const socialLinks = getSocialLinks();
  
  return (
    <div className="d-flex gap-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-decoration-none"
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
};

// Example 2: Component using only specific social link
export const EmailLinkExample: React.FC = () => {
  const emailLink = getSocialLink('email');
  
  if (!emailLink) return null;
  
  return (
    <a href={emailLink.href} className="btn btn-primary">
      <emailLink.icon size={16} className="me-2" />
      Contact Me
    </a>
  );
};

// Example 3: Component using social links data without icons (for simple lists)
export const SocialLinksListExample: React.FC = () => {
  const socialLinksData = getSocialLinksData();
  
  return (
    <ul className="list-unstyled">
      {socialLinksData.map((link, index) => (
        <li key={index}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
