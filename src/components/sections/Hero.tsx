'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowDownToLine, Github, Linkedin, Mail } from 'lucide-react';
import { ClientOnlyMotion } from '../ClientOnlyMotion';
import Link from "next/link"
import Marquee from 'react-fast-marquee'
import { getTools } from '@/data/tools';

export const Hero: React.FC = () => {
  const tools = getTools();
  
  return (
    <section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img src="images/hero/hr-photo.png" alt="iamoghale" />
										<div className="position-absolute start-50 translate-middle-x icon-decorate" style={{ bottom: '-15px' }}>
											<img src="images/personal-logo.svg" alt="iamoghale" />
										</div>
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3">
										<div className="text-secondary-2 d-flex align-items-center">
											&lt;span&gt;
											<div className="text-dark">
												<div className="typewriter">
													<h1 className="fs-6 fw-medium">Hey, I’m Oghale</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h1 className="fs-50 my-3">Senior <span className="text-linear-4">{'{'}Full Stack{'}'}</span> Software developer<span className="flicker">_</span></h1>
										<p className="mb-6 text-secondary-2">&lt;p&gt;<span className="text-dark">Drawing on over eight years of experience across Banking, FinTech, Insurance, Real Estate, and Logistics, I leverage</span> <span className="text-secondary-2">C#</span>, <span className="text-secondary-2">.NET Core</span>, <span className="text-secondary-2">Node.js</span>, <span className="text-secondary-2">React</span>, <span className="text-secondary-2">Angular</span><span className="text-dark">, and modern cloud-native & DevOps practices such as </span><span className="text-secondary-2">Azure</span>, <span className="text-secondary-2">AWS</span>, <span className="text-secondary-2">Kubernetes</span>, <span className="text-secondary-2">Terraform</span>, and <span className="text-secondary-2">GitOps</span><span className="text-dark"> to architect and deliver scalable, secure, and high-performance web solutions that drive business impact and delight users.</span>&lt;/p&gt;</p>
										<div className="row">
											<div className="col-7">
												{/* Carousel Scroll */}
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list list-unstyled">
														{tools.map((tool, index) => (
															<li key={index} className="carouselTicker__item">
																<div className="brand-logo icon_60 icon-shape rounded-3 d-flex align-items-center justify-content-center">
																	<img 
																		src={tool.image} 
																		alt={tool.alt || tool.label} 
																		width={38} 
																		height={38}
																		className="tech-icon"
																	/>
																</div>
															</li>
														))}
													</ul>
												</Marquee>
											</div>
											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">...and more</span>
											</div>
										</div>
										<Link href="/assets/resume.pdf" className="btn me-2 text-300 ps-0 mt-4" download="Oghale_Resume.pdf">
                      <ArrowDownToLine className='text-primary-2' />
											[ Download my CV ]
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="images/bg/bg.png" alt="zelio" />
					<img className="bg-d" src="images/bg/bg-dark.png" alt="zelio" />
				</div>
			</section>
  );
};
