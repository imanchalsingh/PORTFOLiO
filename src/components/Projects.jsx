// components/Projects.js
import React, { useState } from "react";
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import MindMapX from "./Projects/MindMapX.png";
import Jobable from "./Projects/Jobable.png";
import FileSharingSystem from "./Projects/FileSharingSystem.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "MindMapX - AI-Powered Mind Mapping Tool",
      description:
        "An innovative mind mapping application that leverages AI to help users brainstorm, organize ideas, and enhance creativity.",
      image: MindMapX,
      tags: ["React", "CSS", "AI", "JavaScript"],
      liveUrl: "https://mindmapx-imanchalsingh.vercel.app/",
      codeUrl: "https://github.com/imanchalsingh/mindmap",
    },
    {
      id: 2,
      title: "Jobable - Job Search Application",
      description:
        "A job search platform that aggregates listings from various sources, allowing users to filter and apply for jobs seamlessly.",
      image: Jobable,
      tags: ["React", " API", "CSS"],
      liveUrl: "https://jobable-jobsearchapp.vercel.app/",
      codeUrl: "https://github.com/imanchalsingh/jobable",
    },
    {
      id: 3,
      title: "File Sharing System",
      description:
        "A secure and efficient file sharing platform that allows users to upload, share, and manage files with ease.",
      image: FileSharingSystem,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://file-sharing-system-ashen.vercel.app/register",
      codeUrl: "https://github.com/imanchalsingh/File-Sharing-System",
    },
  ];

  const filters = [
    "All",
    "React",
    "JavaScript",
    "Node.js",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-600 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white text-gray-800 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={project.codeUrl}
                    className="p-2 bg-white text-gray-800 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
