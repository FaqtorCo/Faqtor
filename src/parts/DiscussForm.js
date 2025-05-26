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
        <div className="bg-white rounded-2xl p-8 shadow-lg" style={{marginTop:'60px'}}>
          <Fade direction="down" triggerOnce>
            <h2 className="text-3xl  font-bold mb-6">Send Us a Message</h2>
          </Fade>

          <Fade direction="up" triggerOnce>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="flex items-center text-text-primary text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  className="rounded-lg border border-gray-300 p-3 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-theme-purple/30 "
                  onChange={actions.onChange}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="flex items-center text-text-primary text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  className="rounded-lg border border-gray-300 p-3 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-theme-purple/30 "
                  onChange={actions.onChange}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="flex items-center text-text-primary text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  className="rounded-lg border border-gray-300 p-3 bg-gray-50 w-full focus:outline-none focus:ring-2 focus:ring-theme-purple/30 "
                  onChange={actions.onChange}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="flex items-center text-text-primary text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  className="rounded-lg border border-gray-300 p-3 bg-gray-50 max-w-lg h-40 focus:outline-none focus:ring-2 focus:ring-theme-purple/30 "
                  onChange={actions.onChange}
                />
              </div>

              <Button
  className="w-full py-3 mt-2 bg-[#f2ffd9] text-black border-2 border-[#DAF7A6] rounded-lg hover:bg-[#C8E6A0] hover:border-[#C8E6A0] transition duration-200 focus:outline-none"
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
<div>
        <h1 style={{fontSize:'40px'}}>Book a meeting with us!</h1>

        <div className="bg-white rounded-2xl p-8 shadow-lg" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'center',alignItems:'center' }}>
  <iframe
    src="https://cal.com/faqtor?theme=light"
    width="500"
    height="737"
    frameBorder="0"
  ></iframe>
</div>
</div>
      </div>

      <ToastContainer />
    </section>
    <hr />

    </>
  );
};