'use client';

import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      className="navbar-custom"
      variant="light"
      data-bs-theme={mounted ? theme : 'light'}
      suppressHydrationWarning
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">
          YourName.dev
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <Menu size={24} />
        </BootstrapNavbar.Toggle>
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          
          <Nav>
            <button 
              className="btn btn-outline-secondary me-2"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{ border: 'none', background: 'transparent' }}
              suppressHydrationWarning
            >
              {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Nav.Link 
              href="/resume.pdf" 
              target="_blank"
              className="btn btn-outline-primary"
            >
              Resume
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
