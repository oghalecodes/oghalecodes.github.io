import { Github, Linkedin, Mail, Twitter, Facebook } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  platform: string;
}

export const getSocialLinks = (): SocialLink[] => [
  {
    icon: Github,
    href: 'https://github.com/oghalecodes',
    label: 'GitHub',
    platform: 'github'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/oghaleetomu',
    label: 'LinkedIn',
    platform: 'linkedin'
  },
  {
    icon: Mail,
    href: 'mailto:oghale@iamoghale.com',
    label: 'Email',
    platform: 'email'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/iamoghale',
    label: 'Twitter',
    platform: 'twitter'
  }
];

// Alternative function to get specific social links
export const getSocialLink = (platform: string): SocialLink | undefined => {
  return getSocialLinks().find(link => link.platform === platform);
};

// Function to get social links as simple objects (for components that don't need icons)
export const getSocialLinksData = () => {
  return getSocialLinks().map(({ href, label, platform }) => ({
    href,
    label,
    platform
  }));
};
