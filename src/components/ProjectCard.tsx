'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imagePlaceholder?: string;
  demoUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  imagePlaceholder = title,
  demoUrl,
  githubUrl,
  isFeatured = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card shadow-custom shadow-hover group cursor-pointer overflow-hidden p-0 border border-transparent hover:border-primary/30 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="bg-gray-100 h-56 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover transform transition-transform duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-primary/10 to-primary/20 flex items-center justify-center text-primary/40 group-hover:scale-105 transition-transform duration-500">
              {imagePlaceholder}
            </div>
          )}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white w-full">
            <div className="flex justify-between items-center">
              {demoUrl && (
                <a 
                  href={demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4 inline-flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faChrome} />
                  Live Demo
                </a>
              )}
              
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        {isFeatured && (
          <div className="absolute top-4 right-4">
            <span className="bg-white shadow-lg rounded-full px-3 py-1 text-xs font-medium text-primary">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
          <a 
            href={demoUrl || githubUrl || '#'} 
            className="text-primary font-medium hover:underline inline-flex items-center gap-1 transition-all duration-300 hover:gap-2"
          >
            View Details
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </a>
          
          {/* Progress indicator */}
          <div className="h-1 w-12 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full animate-pulse-slow"
              style={{ width: '60%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
