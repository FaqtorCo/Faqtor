/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { DiscussForm } from 'parts/DiscussForm';

import Footer from 'parts/Footer';
import Discuss from 'parts/Discuss';

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectIdea: '',
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectIdea: '',
    });
  };

  return (
    <>
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Discuss />
      <Footer />
    </>
  );
};
