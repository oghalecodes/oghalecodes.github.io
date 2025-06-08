'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ClientOnlyMotion } from '../ClientOnlyMotion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'danger'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAlertType('success');
      setShowAlert(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setAlertType('danger');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@iamoghale.com',
      link: 'mailto:contact@iamoghale.com'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+1-647-231-9543',
      link: 'tel:+1-647-231-9543'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Toronto, ON Canada',
      link: 'https://www.google.com/maps/place/Etobicoke,+ON/@43.6723503,-79.5954673,13z/data=!3m1!4b1!4m6!3m5!1s0x882b3760d44c33c5:0x59e9c8bf2149d577!8m2!3d43.6204946!4d-79.5131983!16zL20vMDFoNTdy?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <>
			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-3">Let’s connect</h3>
									<form action="#">
										<div className="row g-3">
											<div className="col-md-6 ">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="name" name="name" placeholder="Your name" aria-label="username" />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="phone" name="phone" placeholder="Phone" aria-label="phone" />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="email" name="email" placeholder="Emaill" aria-label="email" />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="subject" name="subject" placeholder="Subject" aria-label="subject" />
											</div>
											<div className="col-12">
												<textarea className="form-control bg-3 border border-1 rounded-3" id="message" name="message" placeholder="Message" aria-label="With textarea" defaultValue={""} />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-primary-2 rounded-2">
													Send Message
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							{contactInfo.map((contact, index) => (
								<div key={index} className="d-flex align-items-center mb-3 position-relative d-inline-flex">
									<div className="d-inline-block">
										<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
											<contact.icon size={26} className="text-primary-2" />
										</div>
									</div>
									<div className="ps-3 h-100">
										<span className="text-400 fs-6">{contact.title}</span>
										<h6 className="mb-0">{contact.value}</h6>
									</div>
									{contact.link && (
										<a href={contact.link} className="position-absolute top-0 start-0 w-100 h-100" />
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
  );
};
