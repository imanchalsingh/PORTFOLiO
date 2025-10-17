import React, { useState } from "react";
import {
  DocumentTextIcon,
  ViewColumnsIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
// Import all certificate images
import angular from "./certificates/angular.jpg";
import CppSololearn from "./certificates/CppSololearn.png";
import csshk from "./certificates/csshk.png";
import FrontendSololearn from "./certificates/FrontendSololearn.png";
import FundamentalCSSCN from "./certificates/FundamentalCSSCN.png";
import FundamentalhtmlCN from "./certificates/FundamentalhtmlCN.png";
import html from "./certificates/html.jpg";
import jshk from "./certificates/jshk.png";
import jssololearn from "./certificates/jssololearn.jpg";
import jsudemy from "./certificates/jsudemy.jpg";
import problemsolvinghk from "./certificates/problemsolvinghk.png";
import pythonBasichk from "./certificates/pythonBasichk.png";
import pythonsololearn from "./certificates/pythonsololearn.jpg";
import Reacthk from "./certificates/Reacthk.png";
import udemyhtmlcssjs from "./certificates/udemyhtmlcssjs.png";
import udemyhtmlcssjschallenge from "./certificates/udemyhtmlcssjschallenge.jpg";
import udemyjs20project from "./certificates/udemyjs20project.png";
import webdev from "./certificates/webdev.jpg";
import chatgpt from "./certificates/chatgptcc.png";
import expressjssl from "./certificates/expressjssl.png";
import fullstacksl from "./certificates/full-stack-sl.png";
import ai_assiated from "./certificates/ai-assited.png";
import cs_fundamentals from "./certificates/cs-fundamentals.png";
import bootstrapccis from "./certificates/bootstrapccis.png";

const Certificates = () => {
  const [viewMode, setViewMode] = useState("horizontal"); // "horizontal" or "grid"

  const certificates = [
    {
      id: 0,
      title: "Bootstrap4 Framework",
      issuer: "Infosys | Springboard",
      date: "October 2025",
      credentialLink: "#",
      skills: ["Bootstrap", "CSS", "Responsive Design"],
      image: bootstrapccis,
    },
    {
      id: 1,
      title: "Ai Assisted Development",
      issuer: "Coding Ninjas",
      date: "October 2025",
      credentialLink: "#",
      skills: ["AI", "Machine Learning", "NLP"],
      image: ai_assiated,
    },
    {
      id: 2,
      title: "Computer Science Fundamentals",
      issuer: "Coding Ninjas",
      date: "October 2025",
      credentialLink: "#",
      skills: ["Data Structures", "Algorithms", "Problem Solving"],
      image: cs_fundamentals,
    },
    {
      id: 3,
      title: "Full Stack Development",
      issuer: "SimpliLearn|Skillup",
      date: "October 2025",
      credentialLink: "#",
      skills: ["React", "Node.js", "Express.js", "MongoDB"],
      image: fullstacksl,
    },
    {
      id: 4,
      title: "Express.js",
      issuer: "SimpliLearn|Skillup",
      date: "October 2025",
      credentialLink: "#",
      skills: ["Express.js", "Node.js", "Backend Development"],
      image: expressjssl,
    },
    {
      id: 5,
      title: "ChatGPT",
      issuer: "Coding Ninjas",
      date: "September 2025",
      credentialLink: "#",
      skills: ["AI", "Machine Learning", "NLP"],
      image: chatgpt,
    },
    {
      id: 5,
      title: "Web Development",
      issuer: "SoloLearn",
      date: "August 2024",
      credentialLink: "#",
      skills: ["React", "JavaScript", "Redux", " HTML", "CSS"],
      image: webdev,
    },
    {
      id: 6,
      title: "Front End Development",
      issuer: "SoloLearn",
      date: "October 2024",
      credentialLink: "#",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      image: FrontendSololearn,
    },
    {
      id: 7,
      title: "Problem Solving",
      issuer: "Hackerrank",
      date: "August 2024",
      credentialLink: "#",
      skills: ["JavaScript", "Algorithms", "Data Structures"],
      image: problemsolvinghk,
    },
    {
      id: 8,
      title: "JavaScript Basics",
      issuer: "Hackerrank",
      date: "August 2024",
      credentialLink: "#",
      skills: ["JavaScript", "ES6", "DOM Manipulation"],
      image: jshk,
    },
    {
      id: 9,
      title: "AngularJS",
      issuer: "SoloLearn | Google",
      date: "August 2024",
      credentialLink: "#",
      skills: ["Angular", "TypeScript", "JavaScript", "SPA"],
      image: angular,
    },
    {
      id: 10,
      title: "The Complete JavaScript Course 2024: From Zero to Expert!",
      issuer: "Udemy",
      date: "August 2024",
      credentialLink: "#",
      skills: ["AWS", "Cloud Computing", "Infrastructure"],
      image: jsudemy,
    },
    {
      id: 11,
      title: "React Basic",
      issuer: "Hackerrank",
      date: "August 2024",
      credentialLink: "#",
      skills: ["React", "JavaScript", "JSX"],
      image: Reacthk,
    },
    {
      id: 12,
      title: "Introduction to C++",
      issuer: "SoloLearn",
      date: "June 2025",
      credentialLink: "#",
      skills: ["C++", "OOP", "STL"],
      image: CppSololearn,
    },
    {
      id: 13,
      title: "JavaScript Web Projects",
      issuer: "Udemy",
      date: "May 2024",
      credentialLink: "#",
      skills: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
      image: udemyjs20project,
    },
    {
      id: 14,
      title: "Introduction to JavaScript",
      issuer: "SoloLearn",
      date: "August 2024",
      credentialLink: "#",
      skills: ["JavaScript", "ES6", "DOM Manipulation"],
      image: jssololearn,
    },
    {
      id: 15,
      title: "Python Basic",
      issuer: "Hackerrank",
      date: "August 2024",
      credentialLink: "#",
      skills: ["Python"],
      image: pythonBasichk,
    },
    {
      id: 16,
      title: "Introduction to Python Programming",
      issuer: "SoloLearn",
      date: "September 2024",
      credentialLink: "#",
      skills: ["Python", "Data Structures", "OOP"],
      image: pythonsololearn,
    },
    {
      id: 17,
      title: "Fundamentals of HTML5",
      issuer: "Coding Ninjas",
      date: "September 2025",
      credentialLink: "#",
      skills: ["HTML5", "Web Development", "Web Design"],
      image: FundamentalhtmlCN,
    },
    {
      id: 18,
      title: "Fundamentals of CSS",
      issuer: "Coding Ninjas",
      date: "September 2025",
      credentialLink: "#",
      skills: ["CSS3", "Flexbox", "Grid"],
      image: FundamentalCSSCN,
    },
    {
      id: 19,
      title: "CSS Bsics",
      issuer: "Hackerrank",
      date: "August 2024",
      credentialLink: "#",
      skills: ["CSS", "Flexbox", "Grid"],
      image: csshk,
    },
    {
      id: 20,
      title: "Introduction to HTML",
      issuer: "SoloLearn",
      date: "August 2024",
      credentialLink: "#",
      skills: ["HTML", "Web Development", "Web Design"],
      image: html,
    },
    {
      id: 21,
      title: "50 Projects in 50 Days - HTML, CSS & JavaScript",
      issuer: "Udemy",
      date: "May 2024",
      credentialLink: "#",
      skills: ["JavaScript", "HTML", "CSS", "Web Projects"],
      image: udemyhtmlcssjschallenge,
    },
    {
      id: 22,
      title: "Build Responsive Real-World Websites with HTML and CSS",
      issuer: "Udemy",
      date: "May 2023",
      credentialLink: "#",
      skills: ["HTML", "CSS", "Responsive Design"],
      image: udemyhtmlcssjs,
    },
  ];
  // Function to handle opening image in new tab
  const openImageInNewTab = (imageSrc, title) => {
    const newTab = window.open("", "_blank");
    newTab.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              display: flex; 
              justify-content: center; 
              align-items: center; 
              min-height: 100vh;
              background-color: #f3f4f6;
            }
            img { 
              max-width: 100%; 
              max-height: 90vh; 
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              border-radius: 8px;
            }
            .title {
              position: absolute;
              top: 20px;
              left: 50%;
              transform: translateX(-50%);
              font-family: Arial, sans-serif;
              font-size: 18px;
              color: #333;
            }
          </style>
        </head>
        <body>
          <img src="${imageSrc}" alt="${title}" />
        </body>
      </html>
    `);
    newTab.document.close();
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Certificates
            </h2>
            <div className="w-20 h-1 bg-indigo-600"></div>
          </div>

          <div className="mt-6 md:mt-0 flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("horizontal")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${viewMode === "horizontal"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300"
                }`}
            >
              <ArrowsRightLeftIcon className="w-4 h-4 mr-2" />
              Horizontal View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${viewMode === "grid"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300"
                }`}
            >
              <ViewColumnsIcon className="w-4 h-4 mr-2" />
              Grid View
            </button>
          </div>
        </div>

        <div
          className={`${viewMode === "horizontal"
            ? "flex overflow-x-auto pb-6 space-x-6 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            }`}
          style={viewMode === "horizontal" ? { scrollbarWidth: "thin" } : {}}
        >
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${viewMode === "horizontal" ? "min-w-[350px]" : ""
                }`}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                  <DocumentTextIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {certificate.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {certificate.issuer}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Issued: {certificate.date}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() =>
                    openImageInNewTab(certificate.image, certificate.title)
                  }
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center transition-colors duration-300"
                >
                  View credential
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
