'use client';

import React from 'react';
import Link from 'next/link'

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = React.useState(0);
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'JANA Corporation',
      location: 'Ontario, Canada',
      period: 'Nov 2022 - Present',
      description: [
        'Led initiative with team members to develop digital solutions using Agile methodologies, estimating, architecting, designing software solutions.',
        'Leverage expertise in backend technologies and JavaScript frameworks to design and implement end-to-end solutions.',
        'Increased application performance by 35% by refactoring existing .Net Core codebase and implementing performance monitoring.',
        'Led strategic planning, requirements gathering and implementation of new features with focus on algorithms optimization, data science using agile scrum development methodologies.'
      ],
      technologies: ['C#', 'MSSQL', 'TypeScript', 'Python', 'Azure', '.NET Core']
    },
    {
      id: 2,
      title: 'Lead Software Engineer',
      company: 'Leatherback UK',
      location: 'Remote',
      period: 'Feb 2022 - Nov 2022',
      description: [
        'Integrated global payment API related service providers like Clear bank, Currency cloud, Stripe, MasterCard, Plaid and Providus, providing multicurrency accounts for payouts, collections, funding and exchange.',
        'Designed and developed a payment-as-a-service infrastructure, serving over 100 internal and external clients.',
        'Built a multi-tenant settlement engine that processes customer cash settlement across various time zones',
        'Led Epics to deliver sub products and initiatives end to end using the agile development framework.'
      ],
      technologies: ['C#', 'Azure', 'VueJs', 'PostgreSQL', 'Typescript', 'Docker', 'Kubernetes', 'AWS']
    },
    {
      id: 3,
      title: 'Software Architect',
      company: 'PayPecker',
      location: 'Lagos, Nigeria',
      period: 'Jul 2021 - Feb 2022',
      description: [
        'Implemented a Multi-Processor/Multi-Flow Payment Service which processes merchant payments through third party Payment Service integrations that resulted in a 10% reduction in transaction failure by allowing a dynamic and configurable payment processor',
        'Provided support to 3rd party vendors who utilized our services by integrating their countries payment systems, and other requirements.',
        'Ensured 100% code coverage through unit test and integration tests for all critical use cases.',
        'Reviewed and revised software designs to ensure technical compliance and propose architectural improvements.',
        'Develop, deploy, and maintain microservices using containerization technologies such as Docker and orchestration platforms like Kubernetes.'
      ],
      technologies: ['C#', 'PostgreSQL', 'AWS', 'Javascript', 'Docker', 'Kubernetes', 'PHP']
    },
    {
      id: 4,
      title: 'Senior Software Engineer (Team Lead)',
      company: 'Access Bank Plc',
      location: 'Lagos, Nigeria',
      period: 'Aug 2018 - Jul 2021',
      description: [
        'Developed Tamara, the banks artificial intelligent chatbot using Microsoft Azure technologies/cloud infrastructure Azure Bot Framework, App Service and Azure VM which reduced customer-human agent interaction by 200%.',
        'Supported the Access-Diamond bank merger by developing Integration API  a .Net MVC APIs for Payment Processing; rebuilt Tamada – an enhanced AI chatbot using Google GCP services.',
        'Strengthened partnership with Telecom Operator by building an API gateway for improved USSD Unstructured Supplementary Service Data) Banking Services that lead to a 40% failure rate reduction.',
        'Worked in the implementation a multi-channel Payment system used to process direct merchant payment transactions.',
        'Implemented a location-based (front-end and backend) search functionality allowing over 1 million users to search for Branch/ATM, place of interest based on the distance from their current location using the longitude/latitude data provided by the geo-names data feed and the geography data type.',
        'Enhanced the product with innovative ideas which led to a 30% increase in user satisfaction.'
      ],
      technologies: ['C#', 'Azure', 'Angular', 'MSSQL', 'MongoDB', 'Redis', 'Bootstrap']
    },
    {
      id: 5,
      title: 'Software Developer',
      company: 'Parkway Project LTD',
      location: 'Lagos, Nigeria',
      period: 'Mar 2017 - May 2018',
      description: [
        'Refined technical support for payment collection platform BankCollect) used by various top tier financial institution.',
        'Successfully designed and built plugins for payment platform; Bank3D (https://bank3d.ng)',
        'Drove collaboration and team-wide communication by leading and moderating weekly review meetings.',
        'Used Scrum Agile Methodology at work involving daily scrum meetings, planning pokers, sprint backlog, 1on1 meetings.'
      ],
      technologies: ['C#', 'Angular', 'MSSQL', 'Javascript', 'WebForms', 'Bootstrap']
    }
  ];

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
									8+
									<span className="text-300"> years of </span>
									passion
									<span className="text-300"> for <br />
										programming techniques
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											{experiences.map((exp, index) => (
												<button 
													key={exp.id} 
													onClick={() => setSelectedExperience(index)}
													className={`technology border border-1 rounded-3 p-3 text-start bg-transparent ${selectedExperience === index ? 'border-primary-2 bg-primary-2 bg-opacity-10' : ''}`}
													style={{cursor: 'pointer'}}
												>
													<div className="d-flex align-items-center gap-2">
														<div className={`rounded-circle d-flex align-items-center justify-content-center ${selectedExperience === index ? 'bg-primary-2 text-dark' : 'bg-secondary text-white'}`} style={{width: '40px', height: '40px', minWidth: '40px'}}>
															<span className="fw-bold">{exp.company.charAt(0)}</span>
														</div>
														<div className="d-flex flex-column ms-2">
															<h5 className={`mb-1 ${selectedExperience === index ? 'text-primary-2' : ''}`}>{exp.company}</h5>
															<span className="text-300">{exp.period}</span>
														</div>
													</div>
												</button>
											))}
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">{experiences[selectedExperience].title}</h6>
										<p className="text-300 mb-3">{experiences[selectedExperience].company} • {experiences[selectedExperience].location}</p>
										<ul className="mt-4">
											{experiences[selectedExperience].description.map((desc, index) => (
												<li key={index} className="text-dark mb-3">
													{desc.includes('performance') || desc.includes('35%') || desc.includes('40%') || desc.includes('45%') || desc.includes('60%') || desc.includes('30%') ? (
														<span dangerouslySetInnerHTML={{
															__html: desc.replace(/(35%|40%|45%|60%|30%|performance)/gi, '<span class="text-secondary-2">$1</span>')
														}} />
													) : desc}
												</li>
											))}
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											{experiences[selectedExperience].technologies.map((tech, index) => (
												<span key={index} className="text-300 border border-1 px-3 py-1 rounded-2">{tech}</span>
											))}
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="images/bg/bg_3.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	);
};
