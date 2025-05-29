"use client";
import { useState } from 'react';
import Link from 'next/link'

// Utility to calculate full years difference between two dates
function calculateYears(start: Date, end: Date) {
  let years = end.getFullYear() - start.getFullYear();
  if (
    end.getMonth() < start.getMonth() ||
    (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
  ) {
    years--;
  }
  return years;
}

interface ExperienceItem {
  company: string;
  logo: string;
  alt: string;
  range: string;
  title: string;
  bullets: string[];
  techTags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'JANA Corporation',
    logo: '/assets/imgs/home-page-2/experience/jana_fl_fc.png',
    alt: 'JANA Corporation',
    range: '11/2022 - Present',
    title: 'Senior Software Engineer',
    bullets: [
      'Led Agile teams to architect and develop digital solutions, improving delivery speed and code quality.',
      'Refactored .NET Core codebase, boosting performance by 35% and optimized database queries for a 40% improvement.',
      'Implemented automated unit and integration tests, increasing maintainability by 20%.',
      'Directed troubleshooting across environments to resolve performance bottlenecks and critical system issues.',
    ],
    techTags: ['C#', 'Azure', 'Azure Bus Services', 'Azure Functions', 'MS SQL', 'Python'],
  },
  {
    company: 'Leatherback UK',
    logo: '/assets/imgs/home-page-2/experience/LB-Logo-Blue.png',
    alt: 'Leatherback UK',
    range: '02/2022 - 11/2022',
    title: 'Lead Software Engineer',
    bullets: [
      'Built and maintained RESTful APIs in .NET Core, serving high-traffic endpoints.',
      'Integrated third-party payment gateways, improving transaction reliability by 25%.',
      'Collaborated on front-end features using React and Angular for responsive user interfaces.',
    ],
    techTags: ['.NET Core', 'React', 'Angular', 'Docker'],
  },
  {
    company: 'PayPecker',
    logo: '/assets/imgs/home-page-2/experience/kc-logo.png',
    alt: 'PayPecker',
    range: '07/2021 - 02/2022',
    title: 'Lead Software Engineer/Software Architect',
    bullets: [
      'Developed goal-based savings application features in .NET and React Native.',
      'Designed and implemented CI/CD pipelines using Azure DevOps.',
      'Optimized Redis caching for real-time data synchronization, reducing latency by 30%.',
    ],
    techTags: ['.NET', 'React Native', 'Redis', 'Azure DevOps'],
  },
  {
    company: 'Access Bank Plc',
    logo: '/assets/imgs/home-page-2/experience/access.png',
    alt: 'Access Bank Plc',
    range: '08/2018 - 07/2021',
    title: 'Senior Software Engineer ',
    bullets: [
      'Developed AI chatbot on Azure, reducing human agent load by 200%.',
      'Automated business processes with PHP and ProcessMaker, improving efficiency by 40%.',
      'Built API gateway with Azure API Management for FinTech integrations.',
    ],
    techTags: ['Azure', 'PHP', 'ProcessMaker', 'API Management'],
  },
  {
    company: 'Parkway Project Ltd',
    logo: '/assets/imgs/home-page-2/experience/parkway.svg',
    alt: 'Parkway Project Ltd',
    range: '03/2017 - 05/2018',
    title: 'Software Engineer',
    bullets: [
      'Developed CRM app in FileMaker handling millions of daily transactions.',
      'Implemented ETL pipelines with .NET, Python, and MySQL for forecasting.',
      'Managed AWS infrastructure (EC2, S3, RDS), ensuring high availability.',
    ],
    techTags: ['FileMaker', 'Python', 'MySQL', 'AWS'],
  },
];

export default function Experience() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const yearsExperience = calculateYears(new Date('2017-03-01'), new Date());
	const selected = experiences[selectedIndex];

	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Expericence </span>
								</div>
								<h3>
									+{yearsExperience}
									<span className="text-300"> years of </span>
									passion 
									<span className="text-300"> for <br /> programming techniques
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											{experiences.map((exp, index) => (
												<Link
													key={index}
													href="#"
													className={`technology border border-1 rounded-3 p-3 ${selectedIndex === index ? 'active' : ''}`}
													onClick={(e) => {
														e.preventDefault();
														setSelectedIndex(index);
													}}
												>
													<div className="d-flex align-items-center gap-2">
														<img src={exp.logo} alt={exp.alt} className='sm-logo'/>
														<div className="d-flex flex-column ms-2">
															<h5 className="mb-1">{exp.company}</h5>
															<span className="text-300">{exp.range}</span>
														</div>
													</div>
												</Link>
											))}
										</div>
									</div>

									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">{selected.title}</h6>
										<ul className="mt-4">
											{selected.bullets.map((bullet, index) => (
												<li key={index} className="text-dark mb-3">
													{bullet}
												</li>
											))}
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											{selected.techTags.map((tag, index) => (
												<Link key={index} href="#" className="text-300 border border-1 px-3 py-1">
													{tag}
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
