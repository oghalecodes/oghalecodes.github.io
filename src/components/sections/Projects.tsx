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
  timeline?: string; // Optional property for project timeline
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
      title: 'Payment Settlement Engine',
      description: ' Developed an engine to facilitate, process, and settle financial transactions between parties, such as individuals, businesses, or financial institutions across various timezone inadition Improve customer experience by providing dynamic settlement scheduling.',
      image: '/images/projects/leatherback-app.png',
      technologies: ['.NET', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
      liveUrl: 'https://leatherback.co/',
      featured: true
    },
    {
      id: 2,
      title: 'USSD Payment Channel',
      description: ' Worked with other engineers in the migration of a critical financial service which processes the most financial transactions in the bank.  Improve system reliability and efficiency using event based architecture. Leveraged on Redis caching system to improve system reliability resulting in 10% increase in transaction success rate',
      image: '/images/projects/abp-ussd.jpeg',
      technologies: ['.NET', 'MSSQL', 'TypeScript', 'Angular', 'Azure'],
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
      title: 'Omni-Commerce Infrastructure',
      description: ' Contributed as a lead engineer for the design/development of an omni-commerce project with over 30 inventory locations. The project involved building a robust infrastructure to support multiple sales channels, including online and in-store transactions, inventory management, and customer engagement.',
      image: '/projects/blog.jpg',
      technologies: ['.NET', 'PHP', 'TypeScript', 'RabbitMQ', 'AWS', 'Octopus'],
      featured: false
    },
    {
      id: 5,
      title: 'GitOps Implementation',
      description: ' Directed the migration of the organizations infrastructure and deployment processes to a fully GitOps-enabled environment. Employed Terraform for infrastructure as code, GitHub Actions for continuous integration and continuous deployment CI/CD, and Argo CD for application deployment and synchronization.',
      image: '/projects/social.jpg',
      technologies: ['GitHub Actions', 'Biceps', 'Terraform', 'Argo CD', 'Azure'],
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <>
			<section id="projects" className="section-projects-2 pt-5">
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
                                {project.timeline && (<li className="text-dark mb-3 border-bottom pb-3">
																	<div className="d-flex justify-content-between">
																		<p className="text-dark mb-0 text-end">Completion Time</p>
																		<p className="text-300 mb-0 text-end">{project.timeline}</p>
																	</div>
																</li>
                                  )}
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
