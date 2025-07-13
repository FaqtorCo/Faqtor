/* eslint-disable  */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import logo from '../assets/images/logo.png'
import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <img 
        src={logo} 
        alt="Faqtor Logo" 
        className="h-32 w-44 z-0" // Adjust height as needed
      />
    </Button>
  );
}