/* eslint-disable linebreak-style */
/* eslint-disable */

/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      name,             // Shorthand for name: name
      company,          // Shorthand for company: company
      phone,            // Shorthand for phone: phone
      email,            // Shorthand for email: email
      message: projectIdea,
      from_name: `${name} - ${company}`,
      to_name: 'Faqtor',
    };

    if (
      name !== ''
      && company !== ''
      && email !== ''
      && phone !== ''
      && projectIdea !== ''
    ) {
      emailjs.send(
        'service_n5ctd8p',
        'template_m2xfcd6',
        templateParams,
        'GdZMP6QQPOpFbK3Kx',
      )
        .then(() => {
          toast.success('Success! we\'\ll get back to you soon. Thank you!');
          resetForm();
        }, (error) => {
          toast.error(error);
        });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <>  
   
      {/* Centered About Us Heading */}
      <div className="w-full flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-4 text-center" style={{ color: '#daf7a7', textShadow: 'none' }}>
        Let's Discuss Your Project
        </h1>
      </div>
  
    <section className="flex container mx-auto mt-10 justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left Side - Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <Fade direction="down" triggerOnce>
            <h2 className="text-3xl text-theme-purple font-bold mb-6">Send Us a Message</h2>
          </Fade>

          <Fade direction="up" triggerOnce>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="flex items-center text-text-primary text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Email Address
                </label>
                <Form
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  placeholder="Enter your email address"
                  className="rounded-lg border border-gray-300 p-3 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-theme-purple/30 focus:border-theme-purple"
                  onChange={actions.onChange}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="flex items-center text-text-primary text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Phone Number
                </label>
                <Form
                  id="phone"
                  name="phone"
                  type="text"
                  value={data.phone}
                  placeholder="Enter your phone number"
                  className="rounded-lg border border-gray-300 p-3 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-theme-purple/30 focus:border-theme-purple"
                  onChange={actions.onChange}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="flex items-center text-text-primary text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  Company Name
                </label>
                <Form
                  id="company"
                  name="company"
                  type="text"
                  value={data.company}
                  placeholder="Enter your company name"
                  className="rounded-lg border border-gray-300 p-3 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-theme-purple/30 focus:border-theme-purple"
                  onChange={actions.onChange}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="flex items-center text-text-primary text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  Project Details
                </label>
                <Form
                  id="projectIdea"
                  name="projectIdea"
                  type="textarea"
                  value={data.projectIdea}
                  placeholder="Describe your project requirements, goals, and timeline..."
                  className="rounded-lg border border-gray-300 p-3 bg-gray-50 max-w-lg h-40 focus:outline-none focus:ring-2 focus:ring-theme-purple/30 focus:border-theme-purple"
                  onChange={actions.onChange}
                />
              </div>

              <Button
                className="w-full py-3 mt-2 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple transition duration-200 focus:outline-none"
                type="button"
                onClick={submitEmail}
              >
                Submit Request
              </Button>

              <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                Your information is encrypted and secure. We respect your privacy and will never share your data with third parties.
              </div>
            </div>
          </Fade>
        </div>

        {/* Right Side - Direct Contact */}
       {/* Right Side - Direct Contact */}
<div className="bg-white rounded-2xl p-8 shadow-lg">
  <Fade direction="down" triggerOnce>
    <h2 className="text-3xl text-theme-purple font-bold mb-6">Direct Contact</h2>
  </Fade>

  <Fade direction="up" triggerOnce>
    <div className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex items-start">
          <div className=" p-3 rounded-full mr-4 flex items-center justify-center">
            {/* Email icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-theme-blue mb-2">Email</h3>
            <a href="mailto:contact@faqtor.co?subject=Inquiry%20from%20Website&body=Hello%20Faqtor%20Team,%0A%0AI%20would%20like%20to%20inquire%20about..." className="text-gray-600 hover:text-theme-purple transition-colors">
  <p className="mb-1">contact@faqtor.co</p>
</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex items-start">
          <div className=" p-3 rounded-full mr-4 flex items-center justify-center">
            {/* Phone icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-theme-blue mb-2">Phone</h3>
            <p className="text-gray-600 mb-1">+44 74 75623737</p>
            <p className="text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM EST</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex items-start">
          <div className=" p-3 rounded-full mr-4 flex items-center justify-center">
            {/* Location icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-theme-blue mb-2">Location</h3>
            <p className="text-gray-600 mb-1">International House, 64 Nile Street</p>
            <p className="text-gray-600">London, United Kingdom</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex items-center text-theme-blue">
          <svg className="w-5 h-5 mr-2 text-theme-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p>We typically respond to inquiries within 2-4 business hours</p>
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
          </svg>
        </a>
        <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors">
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  </Fade>
</div>
      </div>

      <ToastContainer />
    </section>
    <hr />
    <div className="bg-white rounded-2xl p-8 shadow-lg" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'center',alignItems:'center' }}>
      <h1 style={{fontSize:'40px'}}>Book a meeting with us!</h1>
  <iframe
    src="https://cal.com/faqtor?theme=light"
    width="900"
    height="700"
    frameBorder="0"
  ></iframe>
</div>
    </>
  );
};