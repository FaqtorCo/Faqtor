/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Fade from 'react-awesome-reveal';

export default function AllTeam({ data }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {
            data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fade bottom triggerOnce delay={200 * index} key={index}>
                <div className="flex flex-col w-72 rounded-xl shadow-xl border border-light-theme-purple overflow-hidden transform transition duration-500 hover:scale-105">
                  <div className="w-full h-80 overflow-hidden">
                    <img src={item.imageUrl} alt="Team Member" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-theme-blue text-center text-xl font-bold">{item.name}</h2>
                    <p className="font-light  text-center">{item.position}</p>
                    <p className="font-light  text-center">{item.experience}</p>

                  </div>
                </div>
              </Fade>
            ))
          }
        </div>
      </div>
    </section>
  );
}
