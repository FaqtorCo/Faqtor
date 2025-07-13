/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable  */
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectModal from "./ProjectModal.js";

export default function AllPortfolio({ data }) {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects by type
  const aiAgents = data.filter((item) => item.type === "AI Agent");
  const automation = data.filter((item) => item.type === "Automation");
  const webApps = data.filter((item) => item.type === "Web App");

  // Split AI Agents into first 3 and remaining (if needed)
  const firstThreeAI = aiAgents.slice(0, 3);
  const remainingAI = aiAgents.slice(3);

  // Split all projects into first 3 and remaining for "All" tab
  const firstThreeAll = data.slice(0, 3);
  const remainingAll = data.slice(3);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleKeyPress = (event, project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleProjectClick(project);
    }
  };

  const renderProjectCard = (item, index, delay = 500) => (
    <Fade triggerOnce direction="up" delay={delay * index} key={index}>
      <div
        className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-500 hover:scale-110 portofolio-card cursor-pointer"
        onClick={() => handleProjectClick(item)}
        onKeyDown={(event) => handleKeyPress(event, item)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${item.title}`}
      >
        <div className="relative">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="rounded-t-2xl z-0 w-80 h-60 object-cover"
          />
          <div className="absolute flex w-full h-full top-0 opacity-0 bg-black bg-opacity-50 justify-center items-center rounded-t-2xl group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-white mx-auto mb-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <p className="text-white text-sm">View Details</p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <h2 className=" text-center text-xl">{item.title}</h2>
        </div>
      </div>
    </Fade>
  );

  return (
    <Fade bottom>
      <section className="container mx-auto px-4 lg:px-0">
        <Tabs className="flex flex-col">
          <TabList>
            {/* Mobile: Stacked layout, Desktop: Horizontal layout */}
            <div className="flex flex-col space-y-3 mb-6 sm:flex-row sm:space-y-0 sm:space-x-3 sm:justify-center sm:flex-wrap lg:mb-5">
              <Tab>
                <button className="w-full sm:w-auto font-normal px-4 sm:px-5 py-2 text-base sm:text-lg border rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  All Projects
                </button>
              </Tab>
              <Tab>
                <button className="w-full sm:w-auto font-normal px-4 sm:px-5 py-2 text-base sm:text-lg border rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  AI Agents
                </button>
              </Tab>
              <Tab>
                <button className="w-full sm:w-auto font-normal px-4 sm:px-5 py-2 text-base sm:text-lg border rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  Automation
                </button>
              </Tab>
              <Tab>
                <button className="w-full sm:w-auto font-normal px-4 sm:px-6 lg:px-8 py-2 text-base sm:text-lg border rounded-full transition duration-300 hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  Web Apps
                </button>
              </Tab>
            </div>
          </TabList>

          {/* All Projects Tab Panel (Default) */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 justify-items-center">
              {firstThreeAll.map((item, index) =>
                renderProjectCard(item, index)
              )}
            </div>

            {/* Show More Button for All Projects */}
            {remainingAll.length > 0 && !showMore && (
              <div className="flex justify-center mt-6 sm:mt-8">
                <Fade triggerOnce direction="up" delay={800}>
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="w-full sm:w-auto bg-[#f2ffd9] hover:bg-[#C8E6A0] text-black font-semibold py-3 px-6 sm:px-8 border-2 border-[#DAF7A6] hover:border-[#C8E6A0] rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    See More Projects
                    <svg
                      className="w-4 h-4 ml-2 inline-block transition-transform duration-300 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </Fade>
              </div>
            )}

            {/* Additional All Projects */}
            {showMore && (
              <Fade triggerOnce direction="up" delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 justify-items-center mt-6 sm:mt-8">
                  {remainingAll.map((item, index) =>
                    renderProjectCard(item, index, 200)
                  )}
                </div>
              </Fade>
            )}
          </TabPanel>

          {/* AI Agents Tab Panel */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 justify-items-center">
              {firstThreeAI.map((item, index) =>
                renderProjectCard(item, index)
              )}
            </div>

            {/* Show More Button for AI Agents */}
            {remainingAI.length > 0 && !showMore && (
              <div className="flex justify-center mt-6 sm:mt-8">
                <Fade triggerOnce direction="up" delay={800}>
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="w-full sm:w-auto bg-theme-purple hover:bg-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    See More Projects
                    <svg
                      className="w-4 h-4 ml-2 inline-block transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </Fade>
              </div>
            )}

            {/* Additional AI Agent Projects */}
            {showMore && (
              <Fade triggerOnce direction="up" delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 justify-items-center mt-6 sm:mt-8">
                  {remainingAI.map((item, index) =>
                    renderProjectCard(item, index, 200)
                  )}
                </div>
              </Fade>
            )}
          </TabPanel>

          {/* Automation Tab Panel */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 justify-items-center">
              {automation.map((item, index) => renderProjectCard(item, index))}
            </div>
          </TabPanel>

          {/* Web Apps Tab Panel */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 justify-items-center">
              {webApps.map((item, index) => renderProjectCard(item, index))}
            </div>
          </TabPanel>
        </Tabs>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </section>
    </Fade>
  );
}
