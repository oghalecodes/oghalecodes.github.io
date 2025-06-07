'use client';

import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, SquareDashedMousePointer } from 'lucide-react';
import { ClientOnlyMotion } from '../ClientOnlyMotion';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	// spaceBetween: 20,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

export const Projects: React.FC = () => {
  // Sample projects data - you can move this to a separate data file
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, Node.js, and PostgreSQL. Features include user authentication, payment processing, order management, and admin dashboard.',
      image: '/projects/ecommerce.jpg',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.',
      image: '/projects/taskmanager.jpg',
      technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB', 'Material-UI'],
      githubUrl: 'https://github.com/yourusername/taskmanager',
      liveUrl: 'https://taskmanager-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps. Features location-based services and data visualization.',
      image: '/projects/weather.jpg',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Leaflet'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, comment system, and SEO optimization. Built with Next.js and headless CMS integration.',
      image: '/projects/blog.jpg',
      technologies: ['Next.js', 'Contentful', 'Vercel', 'MDX'],
      githubUrl: 'https://github.com/yourusername/blog-platform',
      liveUrl: 'https://blog-platform-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for business intelligence with interactive charts, real-time data processing, and export capabilities.',
      image: '/projects/analytics.jpg',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/analytics-dashboard',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media App',
      description: 'A social media application with post sharing, real-time messaging, and media upload functionality. Built with React Native for mobile platforms.',
      image: '/projects/social.jpg',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
      githubUrl: 'https://github.com/yourusername/social-media-app',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <>
			<div className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>
								<h3>My Recent Works</h3>
								<div className="position-relative">
									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										{featuredProjects.map((project) => (
											<SwiperSlide key={project.id}>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<img 
																className="w-100" 
																src={project.image || "assets/imgs/home-page-2/projects/img-1.png"} 
																alt={project.title} 
															/>
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">
																{project.title}
															</h4>
															<p>{project.description}</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Technologies</p>
																		<p className="text-300 mb-0 text-end">{project.technologies.join(', ')}</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Status</p>
																		<p className="text-300 mb-0 text-end">Featured Project</p>
																	</div>
																</li>
																<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Type</p>
																		<p className="text-300 mb-0 text-end">Full Stack Development</p>
																	</div>
																</li>
															</ul>
															<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																{project.liveUrl && (
																	<Link href={project.liveUrl} className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<SquareDashedMousePointer size={13} className="me-1" />
																		Live Demo
																	</Link>
																)}
																{project.githubUrl && (
																	<Link href={project.githubUrl} className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<Github size={13} className="me-1" />
																		View on Github
																	</Link>
																)}
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
										))}
									</Swiper>
									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
										<div className="swiper-button-prev end-0 shadow position-relative">
                        <ChevronLeft size={24} />
										</div>
										<div className="swiper-button-next end-0 shadow position-relative">
                        <ChevronRight size={24} />
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="images/bg/bg_4.png" alt="zelio" />
						</div>
					</div>
				</div>
			</div>
		</>
  );
};
