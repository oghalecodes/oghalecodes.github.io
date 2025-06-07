'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ClientOnlyMotion } from '../ClientOnlyMotion';
import { HydrationDebug } from '@/lib/hydration-debug';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

// Client-only date component to prevent hydration issues
const SafeDate: React.FC<{ date: string }> = ({ date }) => {
  const [formattedDate, setFormattedDate] = useState<string>(date);
  
  useEffect(() => {
    // Only format the date on the client side after hydration
    const formatDate = (dateString: string) => {
      const dateObj = new Date(dateString + 'T00:00:00.000Z');
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
      };
      
      try {
        return dateObj.toLocaleDateString('en-US', options);
      } catch (error) {
        return dateString;
      }
    };
    
    setFormattedDate(formatDate(date));
  }, [date]);
  
  return <span suppressHydrationWarning={true}>{formattedDate}</span>;
};

export const Blog: React.FC = () => {
  // Sample blog posts - you can move this to a separate data file or fetch from CMS
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large React applications using TypeScript, including component patterns, state management, and performance optimization techniques.',
      date: '2024-05-15',
      readTime: '8 min read',
      slug: 'building-scalable-react-applications-typescript',
      tags: ['React', 'TypeScript', 'Architecture']
    },
    {
      id: 2,
      title: 'Microservices Architecture: Lessons Learned',
      excerpt: 'A deep dive into microservices architecture, including when to use it, common pitfalls to avoid, and how to handle distributed system challenges.',
      date: '2024-04-28',
      readTime: '12 min read',
      slug: 'microservices-architecture-lessons-learned',
      tags: ['Architecture', 'Microservices', 'Backend']
    },
    {
      id: 3,
      title: 'Optimizing Web Performance: A Complete Guide',
      excerpt: 'Comprehensive guide to web performance optimization, covering everything from bundle size reduction to image optimization and caching strategies.',
      date: '2024-04-10',
      readTime: '10 min read',
      slug: 'optimizing-web-performance-complete-guide',
      tags: ['Performance', 'Web Development', 'Optimization']
    }
  ];

  return (
    <>
			<section id="blog" className="section-blog-2 position-relative pt-60 pb-60">
				<div className="container">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center">
							<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
								<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
							</svg>
							<span className="text-linear-4 d-flex align-items-center"> Latest Posts </span>
						</div>
						<h3>From Blog</h3>
					</div>
					<div className="row mt-8">
						{blogPosts.map((post, index) => (
							<div key={post.id} className="col-lg-4">
								<div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
									<div className="blog-card__image position-relative">
										<div className="zoom-img rounded-2 overflow-hidden">
											<img 
												className="w-100" 
												src={`assets/imgs/home-page-2/blog/img-${index + 1}.png`} 
												alt={post.title} 
											/>
											<Link 
												className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2" 
												href={`/blog/${post.slug}`}
											>
												{post.tags[0]}
											</Link>
											<Link href={`/blog/${post.slug}`} className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
												<i className="ri-arrow-right-up-line" />
											</Link>
										</div>
									</div>
									<div className="blog-card__content position-relative text-center mt-4">
										<span className="blog-card__date fs-7">
											<SafeDate date={post.date} /> • {post.readTime}
										</span>
										<h6 className="blog-card__title mt-2">{post.title}</h6>
										<p className="blog-card__description fs-7">{post.excerpt}</p>
										<Link href={`/blog/${post.slug}`} className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
  );
};
