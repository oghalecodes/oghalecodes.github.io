'use client';

import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ClientOnlyMotion } from '../ClientOnlyMotion';

interface Skill {
  name: string;
  image: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', image: '/images/tech-icons/react.svg' },
        { name: 'Next.js', image: '/images/tech-icons/react.svg' },
        { name: 'TypeScript', image: '/images/tech-icons/typescript.svg' },
        { name: 'JavaScript', image: '/images/tech-icons/javascript.svg' },
        { name: 'Vue.js', image: '/images/tech-icons/vue.svg' },
        { name: 'HTML5', image: '/images/tech-icons/html-5.svg' },
        { name: 'CSS3', image: '/images/tech-icons/css3.svg' },
        { name: 'Sass', image: '/images/tech-icons/sass.svg' },
        { name: 'Bootstrap', image: '/images/tech-icons/bootstrap.svg' },
        { name: 'Tailwind CSS', image: '/images/tech-icons/tailwind.svg' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', image: '/images/tech-icons/nodejs.svg' },
        { name: 'Express.js', image: '/images/tech-icons/nodejs.svg' },
        { name: 'Python', image: '/images/tech-icons/python.svg' },
        { name: 'Django', image: '/images/tech-icons/django.svg' },
        { name: 'PHP', image: '/images/tech-icons/php.svg' },
        { name: 'Java', image: '/images/tech-icons/java.svg' },
        { name: 'C#', image: '/images/tech-icons/csharp.svg' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', image: '/images/tech-icons/postgresql.svg' },
        { name: 'MySQL', image: '/images/tech-icons/mysql.svg' },
        { name: 'MongoDB', image: '/images/tech-icons/mongodb.svg' },
        { name: 'Redis', image: '/images/tech-icons/redis.svg' },
        { name: 'Elasticsearch', image: '/images/tech-icons/elastic.svg' },
        { name: 'Firebase', image: '/images/tech-icons/firebase.svg' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', image: '/images/tech-icons/aws.svg' },
        { name: 'Azure', image: '/images/tech-icons/azure.svg' },
        { name: 'Google Cloud', image: '/images/tech-icons/gcp.svg' },
        { name: 'Docker', image: '/images/tech-icons/docker.svg' },
        { name: 'Kubernetes', image: '/images/tech-icons/kubernetes.svg' },
        { name: 'Jenkins', image: '/images/tech-icons/jenkins.svg' },
        { name: 'GitHub Actions', image: '/images/tech-icons/githubactions.svg' },
        { name: 'Terraform', image: '/images/tech-icons/terraform.svg' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', image: '/images/tech-icons/git.svg' },
        { name: 'Linux', image: '/images/tech-icons/linux.svg' }
      ]
    }
  ];

  // Function to get random skills from all categories
  const getRandomSkills = (count: number): Skill[] => {
    const allSkills = skillCategories.flatMap(category => category.skills);
    const shuffled = [...allSkills].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Get random skills for both marquees
  const marqueeSkills1 = getRandomSkills(5);
  const marqueeSkills2 = getRandomSkills(5);

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
										<span className="text-linear-4 d-flex align-items-center"> What I Use </span>
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
														<ul className="carouselTicker__list m-0 list-unstyled">
															{marqueeSkills1.map((skill, index) => (
																<li key={index} className="carouselTicker__item mt-6">
																	<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																		<img src={skill.image} alt={skill.name} />
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
														<ul className="carouselTicker__list m-0 list-unstyled">
															{marqueeSkills2.map((skill, index) => (
																<li key={index} className="carouselTicker__item mt-6">
																	<Link href="#" className="brand-logo icon_80 icon-shape rounded-3">
																		<img src={skill.image} alt={skill.name} />
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
															{skillCategories.map((category, index) => (
																<li key={index} className="mb-3">
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">{category.title}:</p>
																		<span className="text-300">{category.skills.map(skill => skill.name).join(', ')}</span>
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
  );
};
