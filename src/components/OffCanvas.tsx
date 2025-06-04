import { X } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { getSocialLinks } from '@/data/socialLinks'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	const { theme } = useTheme()
	const socialLinks = getSocialLinks()
	
	return (
		<>
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
					<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
                        <X size={18} color={`var(--bs-primary-rgb)`} />
					</div>
					<div className="offCanvas__logo mb-5">
						<h3 className="mb-0">Get in touch</h3>
					</div>
					<div className="offCanvas__side-info mb-30">
						<div className="contact-list mb-30">
							<p className="fs-6 fw-medium text-200 mb-5">I&apos;m always excited to take on new projects and collaborate with innovative minds.</p>
							<div className="mb-3">
								<span className="text-400 fs-5">Phone Number</span>
								<p className="mb-0">+1-234-567-8901</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Email</span>
								<p className="mb-0">oghale@iamoghale.com</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Address</span>
								<p className="mb-0">0811 Erdman Prairie Road, Joaville, California 90210</p>
							</div>
						</div>
						<div className="contact-list">
							<p className="text-400 fs-5 mb-2">Social</p>
							<div className="d-md-flex d-none gap-3">
								{socialLinks.map((link, index) => (
									<Link key={index} href={link.href} target="_blank" rel="noopener noreferrer">
										<link.icon size={18} />
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}  onClick={handleOffCanvas}/>
		</>
	)
}