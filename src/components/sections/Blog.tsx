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
  image?: string; // Optional image property
  excerpt: string;
  url: string; 
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
      title: 'Hosting Multiple .NET Applications on AWS Elastic Beanstalk (Linux)',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Lr8QI-XuJd7C3UHQ73Riqg.jpeg',
      excerpt: '🚀 Just published a guide on deploying multiple .NET 9 apps on a single AWS Elastic Beanstalk environment using Nginx as a reverse proxy! This setup optimizes costs, simplifies management, and enhances inter-app communication—perfect for development and staging scenarios. Covered configuring ports, setting up Nginx, and deployment steps for Blazor, Web API, and Auth services. Check it out if youre looking to streamline your .NET deployments! ',
      url: 'https://medium.com/@oghalecodes/hosting-multiple-net-9-applications-on-aws-elastic-beanstalk-linux-4d5f5e4c446e',
      date: '2024-03-01',
      readTime: '6 min read',
      slug: 'hosting-multiple-net-9-applications-on-aws-elastic-beanstalk-linux-4d5f5e4c446e',
      tags: ['.Net', 'AWS', 'Architecture']
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
												src={post.image || "https://via.placeholder.com/600x400"} 
												alt={post.title} 
											/>
											<Link 
												className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2" 
												href={`${post.url}`}
											>
												{post.tags[0]}
											</Link>
											<Link href={`${post.url}`} className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
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
										<Link href={`${post.url}`} className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
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
