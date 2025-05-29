"use client";
import { useState } from 'react';
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

interface SkillItem {
  name: string;
  icon: string;
  category: string;
}


const skills: SkillItem[] = [
  { name: 'C#', icon: '/assets/imgs/home-page-2/hero-1/icon-30.svg', category: 'Back-End' },
  { name: '.NET', icon: '/assets/imgs/home-page-2/hero-1/icon-20.svg', category: 'Back-End' },
  { name: 'Go', icon: '/assets/imgs/home-page-2/hero-1/icon-25.svg', category: 'Back-End' },
  { name: 'Scala', icon: '/assets/imgs/home-page-2/hero-1/icon-24.svg', category: 'Back-End' },
  { name: 'Python', icon: '/assets/imgs/home-page-2/hero-1/icon-27.svg', category: 'Back-End' },
  { name: 'Node.js', icon: '/assets/imgs/home-page-2/hero-1/icon-4.svg', category: 'Back-End' },
  { name: 'JavaScript', icon: '/assets/imgs/home-page-2/hero-1/icon-29.svg', category: 'Front-End' },
	{ name: 'TypeScript', icon: '/assets/imgs/home-page-2/hero-1/icon-28.svg', category: 'Front-End' },
  { name: 'React', icon: '/assets/imgs/home-page-2/hero-1/icon-6.svg', category: 'Front-End' },
  { name: 'Angular', icon: '/assets/imgs/home-page-2/hero-1/icon-23.svg', category: 'Front-End' },
  { name: 'Blazor', icon: '/assets/imgs/home-page-2/hero-1/icon-22.svg', category: 'Front-End' },
  { name: 'HTML', icon: '/assets/imgs/home-page-2/hero-1/html-5.svg', category: 'Front-End' },
  { name: 'CSS', icon: '/assets/imgs/home-page-2/hero-1/css-3.svg', category: 'Front-End' },
  { name: 'MySQL', icon: '/assets/imgs/home-page-2/hero-1/icon-18.svg', category: 'Database' },
  { name: 'PostgreSQL', icon: '/assets/imgs/home-page-2/hero-1/icon-17.svg', category: 'Database' },
  { name: 'SQL Server', icon: '/assets/imgs/home-page-2/hero-1/icon-19.svg', category: 'Database' },
  { name: 'MongoDB', icon: '/assets/imgs/home-page-2/hero-1/icon-3.svg', category: 'Database' },
  { name: 'Redis', icon: '/assets/imgs/home-page-2/hero-1/icon-16.svg', category: 'Database' },
  { name: 'AWS', icon: '/assets/imgs/home-page-2/hero-1/icon-11.svg', category: 'Cloud' },
  { name: 'Azure', icon: '/assets/imgs/home-page-2/hero-1/icon-13.svg', category: 'Cloud' },
  { name: 'GCP', icon: '/assets/imgs/home-page-2/hero-1/icon-36.svg', category: 'Cloud' },
  { name: 'Kafka', icon: '/assets/imgs/home-page-2/hero-1/kafka.svg', category: 'Messaging' },
  { name: 'RabbitMQ', icon: '/assets/imgs/home-page-2/hero-1/rabbitmq.svg', category: 'Messaging' },
  { name: 'Service Bus', icon: '/assets/imgs/home-page-2/hero-1/service-bus.svg', category: 'Messaging' },
  { name: 'GitHub Actions', icon: '/assets/imgs/home-page-2/hero-1/githubactions.svg', category: 'CI/CD' },
  { name: 'Argo CD', icon: '/assets/imgs/home-page-2/hero-1/icon-44.svg', category: 'CI/CD' },
  { name: 'Az Pipelines', icon: '/assets/imgs/home-page-2/hero-1/azurepipelines.svg', category: 'CI/CD' },
  { name: 'Docker', icon: '/assets/imgs/home-page-2/hero-1/icon-35.svg', category: 'DevOps' },
  { name: 'Kubernetes', icon: '/assets/imgs/home-page-2/hero-1/icon-34.svg', category: 'DevOps' },
];

export default function Skills() {
	const [selected, setSelected] = useState<SkillItem>(skills[0]);
	
	return (
		<>

			<section id="skills" className="section-skills-2 pt-5">
				<div className="container">
					<div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
						<div className="position-relative z-1 py-60">
							<div className="position-relative z-1">
								<div className="text-center">
									<div className="d-flex align-items-center justify-content-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> Projects </span>
									</div>
									<h3>My Skills</h3>
								</div>
								<div className="container mt-8">
									<div className="row">
										<div className="col-lg-6">
											<div className="row">
												<div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
													{/* Carausel Scroll */}
													<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
														<ul className="carouselTicker__list m-0">
															{skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
																<li key={index} className="carouselTicker__item mt-6">
																	<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 p-2" onClick={(event) => {
																		event.preventDefault();
																	}}>
																		<img src={skill.icon} alt={skill.name} />
																	</Link>
																	<span className="tool-tip">{skill.name}</span>
																</li>
															))}
														</ul>
													</Marquee>
												</div>
												<div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
													{/* Carausel Scroll */}
													<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
														<ul className="carouselTicker__list m-0">
															{skills.slice(Math.floor(skills.length / 2)).map((skill, index) => (
																<li key={index} className="carouselTicker__item mt-6">
																	<Link href="#" className="brand-logo icon_80 icon-shape rounded-3 p-2" onClick={(event) => {
																		event.preventDefault();
																	}}>
																		<img src={skill.icon} alt={skill.name} />
																	</Link>
																	<span className="tool-tip">{skill.name}</span>
																</li>
															))}
														</ul>
													</Marquee>
												</div>
											</div>
										</div>
										<div className="col-lg-6 border-start-md mt-lg-0 mt-5">
											<div className="row">
												<div className="col-md-10 mx-auto">
													<div className="h-100 position-relative">
														<ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
															{Array.from(
																skills.reduce((acc, skill) => {
																	if (!acc.has(skill.category)) acc.set(skill.category, []);
																	acc.get(skill.category)!.push(skill.name);
																	return acc;
																}, new Map<string, string[]>()),
															).map(([category, names]) => (
																<li className="mb-3" key={category}>
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">{category}:</p>
																		<span className="text-300">{names.join(', ')}</span>
																	</div>
																</li>
															))}
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute d-none d-md-block decorate">
							<div className="rotateme">
								<div className="circle-1-1" />
								<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
									<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
								<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
									<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
