/* eslint-disable */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import Button from '../elements/Button';

export default function Portfolio({ data }) {
  const navigate = useNavigate();
  const featured = data.slice(0, 3);

  return (
    <section className="container mx-auto flex flex-col items-center mt-20 px-4">
      <Fade direction="right" triggerOnce>
        <h1 className="text-4xl sm:text-5xl text-center font-bold mb-2">
          Our Selected Projects
        </h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-center mb-12 text-gray-400 max-w-2xl">
          We are ready to scale up your business with our great work result.
        </p>
      </Fade>

      <div className="flex flex-col gap-8 w-full max-w-5xl">
        {featured.map((item, index) => (
          <Fade direction="up" triggerOnce delay={200 * index} key={item.id}>
            <div
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(145deg, #111111, #1a1a1a)',
                border: '1px solid #222',
              }}
              onClick={() => navigate(`/project/${item.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid #DAF7A6';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(218, 247, 166, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid #222';
                e.currentTarget.style.boxShadow = 'none';
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/project/${item.id}`);
                }
              }}
              aria-label={`View details for ${item.title}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[250px] sm:h-[350px] lg:h-[420px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="text-2xl sm:text-3xl font-bold">{item.title}</h2>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: '#DAF7A6', color: '#000' }}
                  >
                    {item.type}
                  </span>
                  {item.status && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full border border-gray-600 text-gray-400">
                      {item.status}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Tech Stack */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 6 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-500">
                        +{item.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                )}

                {/* View link */}
                <div className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                  style={{ color: '#DAF7A6' }}
                >
                  View Project
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {/* See More Button */}
      <Fade direction="up" triggerOnce delay={600}>
        <Button
          href="/project"
          type="link"
          className="flex items-center gap-2 mt-12 px-8 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ background: '#DAF7A6' }}
        >
          <span>See All Projects</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </Fade>
    </section>
  );
}
