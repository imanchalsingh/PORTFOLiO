import React, { useState, useRef, useEffect } from "react";
import {
  DocumentTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
  EyeIcon
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
import postgresql from "./certificates/postgresql.png";
import reactproject from "./certificates/reactprojectis.png";

const Certificates = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const [certificates, setCertificates] = useState([]);

  // Initialize certificates data
  useEffect(() => {
    setCertificates([
         {
        id: 0,
        title: "React Project Webpack",
        issuer: "Infosys | Springboard",
        date: "January 2026",
        credentialLink: "#",
        skills: ["React", "Webpack"],
        image: reactproject,
        category: "Frontend"
      },
      {
        id: 1,
        title: "PostgreSQL Developer",
        issuer: "Infosys | Springboard",
        date: "October 2025",
        credentialLink: "#",
        skills: ["PostgreSQL", "Database"],
        image: postgresql,
        category: "Database"
      },
      {
        id: 2,
        title: "Bootstrap4 Framework",
        issuer: "Infosys | Springboard",
        date: "October 2025",
        credentialLink: "#",
        skills: ["Bootstrap", "CSS"],
        image: bootstrapccis,
        category: "Frontend"
      },
      {
        id: 3,
        title: "AI Assisted Development",
        issuer: "Coding Ninjas",
        date: "October 2025",
        credentialLink: "#",
        skills: ["AI", "Development"],
        image: ai_assiated,
        category: "AI/ML"
      },
      {
        id: 4,
        title: "CS Fundamentals",
        issuer: "Coding Ninjas",
        date: "October 2025",
        credentialLink: "#",
        skills: ["DSA", "Algorithms"],
        image: cs_fundamentals,
        category: "Fundamentals"
      },
      {
        id: 5,
        title: "Full Stack Development",
        issuer: "SimpliLearn",
        date: "October 2025",
        credentialLink: "#",
        skills: ["MERN", "Full Stack"],
        image: fullstacksl,
        category: "Full Stack"
      },
      {
        id: 6,
        title: "Express.js",
        issuer: "SimpliLearn",
        date: "October 2025",
        credentialLink: "#",
        skills: ["Node.js", "Backend"],
        image: expressjssl,
        category: "Backend"
      },
      {
        id: 7,
        title: "ChatGPT",
        issuer: "Coding Ninjas",
        date: "September 2025",
        credentialLink: "#",
        skills: ["AI", "ChatGPT"],
        image: chatgpt,
        category: "AI/ML"
      },
      {
        id: 8,
        title: "Web Development",
        issuer: "SoloLearn",
        date: "August 2024",
        credentialLink: "#",
        skills: ["React", "JavaScript"],
        image: webdev,
        category: "Web Dev"
      },
      {
        id: 9,
        title: "Front End Development",
        issuer: "SoloLearn",
        date: "October 2024",
        credentialLink: "#",
        skills: ["HTML", "CSS", "JS"],
        image: FrontendSololearn,
        category: "Frontend"
      },
      {
        id: 10,
        title: "Problem Solving",
        issuer: "Hackerrank",
        date: "August 2024",
        credentialLink: "#",
        skills: ["Algorithms", "DSA"],
        image: problemsolvinghk,
        category: "DSA"
      },
      {
        id: 11,
        title: "JavaScript Basics",
        issuer: "Hackerrank",
        date: "August 2024",
        credentialLink: "#",
        skills: ["JavaScript"],
        image: jshk,
        category: "JavaScript"
      },
      {
        id: 12,
        title: "AngularJS",
        issuer: "SoloLearn | Google",
        date: "August 2024",
        credentialLink: "#",
        skills: ["Angular", "TypeScript"],
        image: angular,
        category: "Frontend"
      },
      {
        id: 13,
        title: "Complete JavaScript Course",
        issuer: "Udemy",
        date: "August 2024",
        credentialLink: "#",
        skills: ["JavaScript", "ES6+"],
        image: jsudemy,
        category: "JavaScript"
      },
      {
        id: 14,
        title: "React Basic",
        issuer: "Hackerrank",
        date: "August 2024",
        credentialLink: "#",
        skills: ["React", "JSX"],
        image: Reacthk,
        category: "React"
      },
      {
        id: 15,
        title: "Introduction to C++",
        issuer: "SoloLearn",
        date: "June 2025",
        credentialLink: "#",
        skills: ["C++", "OOP"],
        image: CppSololearn,
        category: "Programming"
      },
      {
        id: 16,
        title: "JavaScript Web Projects",
        issuer: "Udemy",
        date: "May 2024",
        credentialLink: "#",
        skills: ["JS Projects"],
        image: udemyjs20project,
        category: "JavaScript"
      },
      {
        id: 17,
        title: "Introduction to JavaScript",
        issuer: "SoloLearn",
        date: "August 2024",
        credentialLink: "#",
        skills: ["JavaScript"],
        image: jssololearn,
        category: "JavaScript"
      },
      {
        id: 18,
        title: "Python Basic",
        issuer: "Hackerrank",
        date: "August 2024",
        credentialLink: "#",
        skills: ["Python"],
        image: pythonBasichk,
        category: "Python"
      },
      {
        id: 19,
        title: "Introduction to Python",
        issuer: "SoloLearn",
        date: "September 2024",
        credentialLink: "#",
        skills: ["Python"],
        image: pythonsololearn,
        category: "Python"
      },
      {
        id: 20,
        title: "Fundamentals of HTML5",
        issuer: "Coding Ninjas",
        date: "September 2025",
        credentialLink: "#",
        skills: ["HTML5"],
        image: FundamentalhtmlCN,
        category: "HTML"
      },
      {
        id: 21,
        title: "Fundamentals of CSS",
        issuer: "Coding Ninjas",
        date: "September 2025",
        credentialLink: "#",
        skills: ["CSS3"],
        image: FundamentalCSSCN,
        category: "CSS"
      },
      {
        id: 22,
        title: "CSS Basics",
        issuer: "Hackerrank",
        date: "August 2024",
        credentialLink: "#",
        skills: ["CSS"],
        image: csshk,
        category: "CSS"
      },
      {
        id: 23,
        title: "Introduction to HTML",
        issuer: "SoloLearn",
        date: "August 2024",
        credentialLink: "#",
        skills: ["HTML"],
        image: html,
        category: "HTML"
      },
      {
        id: 24,
        title: "50 Projects in 50 Days",
        issuer: "Udemy",
        date: "May 2024",
        credentialLink: "#",
        skills: ["Projects", "JS"],
        image: udemyhtmlcssjschallenge,
        category: "Projects"
      },
      {
        id: 25,
        title: "Build Responsive Websites",
        issuer: "Udemy",
        date: "May 2023",
        credentialLink: "#",
        skills: ["HTML", "CSS"],
        image: udemyhtmlcssjs,
        category: "Web Dev"
      },
    ]);
  }, []);

  const categories = ["All", "Frontend", "JavaScript", "React", "Backend", "Database", "AI/ML", "DSA", "Web Dev"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates = activeCategory === "All"
    ? certificates
    : certificates.filter(cert => cert.category === activeCategory);



  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

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
              background-color: #111;
            }
            img { 
              max-width: 100%; 
              max-height: 90vh; 
              border-radius: 12px;
              box-shadow: 0 20px 60px rgba(0,0,0,0.4);
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
    <section id="certificates" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Certificate Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(#bd2323 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Certificate Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["📜", "🏆", "🎓", "⭐", "✅", "📝"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-6xl md:text-8xl animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${20 + i * 4}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 backdrop-blur-sm border border-[#e6c235]/20 mb-6">
            <DocumentTextIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">ACHIEVEMENTS & CERTIFICATIONS</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              CERTIFICATES
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and achievements validating expertise across modern technologies.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { value: certificates.length.toString(), label: "Total Certificates", color: "#bd2323" },
            { value: "15+", label: "Platforms", color: "#e6c235" },
            { value: "6+", label: "Categories", color: "#0a295e" },
            { value: "2023-25", label: "Timeline", color: "#ffffff" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center group"
            >
              <div
                className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
              }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                ? 'bg-gradient-to-r from-[#bd2323] to-[#0a295e] text-white scale-105'
                : 'bg-black/40 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white'}`}
            >
              {category}
              {activeCategory === category && (
                <span className="ml-2">
                  ({category === "All" ? certificates.length : certificates.filter(c => c.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Certificate Carousel */}
        <div className="relative mb-12">


          {/* Carousel Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {filteredCertificates.map((certificate) => (
              <div
                key={certificate.id}
                className="flex-none w-[300px] md:w-[350px]"
              >
                <div className="group relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-all duration-300 -z-10"></div>

                  {/* Certificate Card */}
                  <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300">
                    {/* Image Container */}
                    <div
                      className="h-48 relative overflow-hidden cursor-pointer"
                      onClick={() => openImageInNewTab(certificate.image, certificate.title)}
                    >
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-[#bd2323] to-[#0a295e] text-white rounded-full">
                          {certificate.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-4 bg-black/80 rounded-full">
                          <EyeIcon className="h-8 w-8 text-[#e6c235]" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                        {certificate.title}
                      </h3>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[#e6c235] font-medium">{certificate.issuer}</p>
                        <span className="text-sm text-gray-400">{certificate.date}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {certificate.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-black/50 text-gray-400 rounded-full border border-gray-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <button
                          onClick={() => openImageInNewTab(certificate.image, certificate.title)}
                          className="flex items-center gap-2 text-sm text-[#e6c235] hover:text-white transition-colors duration-300"
                        >
                          <ArrowDownTrayIcon className="h-4 w-4" />
                          View Full Certificate
                        </button>
                        <span className="text-xs text-gray-500">#{certificate.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0a295e]/20 to-[#bd2323]/20 backdrop-blur-sm rounded-full border border-gray-800">
            <SparklesIcon className="h-5 w-5 text-[#e6c235]" />
            <span className="text-gray-300">
              All certificates are verifiable and available for detailed view
            </span>
          </div>
        </div>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Certificates;