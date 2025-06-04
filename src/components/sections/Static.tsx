
'use client'
import { CalendarClock, HeartPulse, Medal, Presentation } from 'lucide-react'
import CountUp from 'react-countup'
import { getYearsOfExperience } from '@/data/personal'

export default function Static() {
	const yearsOfExperience = getYearsOfExperience();
	
	return (
		<>
			<div className="section-static-1 z-0">
				<div className="container position-relative z-1">
					<div className="bg-3 py-60 border border-1 rounded-3 position-relative overflow-hidden">
						<div className="inner">
							<div className="row align-items-center justify-content-lg-around justify-content-center">
								<div className="col-lg-auto col-md-6 text-center text-lg-start">
									<div className="counter-item-cover counter-item">
										<div className="content mx-auto">
											<CalendarClock className='text-primary-2' />
											<h2 className="text-300 my-0 fs-50">
												<CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={yearsOfExperience} />
												<span className="fs-50 text-300 mb-0">+</span>
											</h2>
											<p className="fs-6 mb-0 text-dark">Year Experience</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6 text-center text-lg-start">
									<div className="counter-item-cover counter-item">
										<div className="content mx-auto">
											<Presentation className='text-primary-2'/>
											<h2 className="text-300 my-0 fs-50">
												<CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={250} />
												<span className="fs-50 text-300 mb-0">+</span>
											</h2>
											<p className="fs-6 mb-0 text-dark">Projects Completed</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6 text-center text-lg-start">
									<div className="counter-item-cover counter-item">
										<div className="content mx-auto">
											<HeartPulse className='text-primary-2'/>
											<h2 className="text-300 my-0 fs-50">
												<CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={680} />
												<span className="fs-50 text-300 mb-0">+</span>
											</h2>
											<p className="fs-6 mb-0 text-dark">Satisfied Clients</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6 text-center text-lg-start">
									<div className="counter-item-cover counter-item">
										<div className="content mx-auto">
											<Medal className='text-primary-2' />
											<h2 className="text-300 my-0 fs-50">
												<CountUp className="odometer text-dark fw-medium" enableScrollSpy={true} end={18} />
												<span className="fs-50 text-300 mb-0">+</span>
											</h2>
											<p className="fs-6 mb-0 text-dark">Awards Winner</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="background position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="/images/bg/bg_1.png" />
					</div>
				</div>
			</div>

		</>
	)
}
