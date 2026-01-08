// components/Experience.js
import React from "react";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  CalendarIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const Experience = () => {
  const contributions = [
    {
      company: "Social Winter of Code (SWOC)",
      role: "SWOC'26 Contributor",
      duration: "Ongoing",
      tech: ["Open Source", "GitHub", "Collaboration"]
    }, {
      company: "Code Social",
      role: "WoCS'26 Contributor",
      duration: "Ongoing",
      tech: ["JavaScript", "React", "GitHub", "Typescript"]
    }, {
      company: "Open Source Connect",
      role: "OSCG'26 Contributor",
      duration: "Ongoing",
      tech: ["Open Source", "GitHub", "Collaboration"]
    },
    {
      company: "Elite Coders",
      role: "ECWoC'26 Contributor",
      duration: "Ongoing",
      tech: ["JavaScript", "React", "GitHub", "Typescript"]
    }
  ]
  const internships = [
    {
      company: "CodSoft",
      role: "Web Development Intern",
      duration: "2 weeks",
      tech: ["React", "JavaScript", "Frontend", "Rest APIs", "GitHub"]
    },
    {
      company: "CodeAlpha",
      role: "Full Stack Development Intern",
      duration: "15 days",
      tech: ["MERN Stack", "APIs", "Git"]
    },
    {
      company: "CodeClause",
      role: "Web Development Intern",
      duration: "1 month",
      tech: ["Next.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      company: "Oasis Infobyte",
      role: "Web Development & Designing Intern",
      duration: "15 days",
      tech: ["React", "Figma", "UI/UX", "Frontend", "Rest APIs"]
    },
    {
      company: "Cognifyz",
      role: "Full Stack Development Intern",
      duration: "3 weeks",
      tech: ["MERN Stack", "APIs", "Database"]
    },
    {
      company: "CodVeda Technologies",
      role: "Full Stack Development Intern",
      duration: "1 month",
      tech: ["Angular", "Node.js", "Express", "MongoDB", "REST APIs", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #bd2323 1px, transparent 1px)`,
            backgroundSize: '70px 70px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["💼", "🚀", "🌐", "⚡", "🔧", "🎯"].map((icon, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-5xl md:text-7xl animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i * 12)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${20 + i * 4}s`
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 backdrop-blur-sm border border-[#e6c235]/20 mb-6">
            <BriefcaseIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">PROFESSIONAL JOURNEY</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              EXPERIENCE
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hands-on experience through internships, open-source contributions,
            and real-world projects that have shaped my technical expertise.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/*Left Column - Internships Summary */}
          <div className="lg:w-1/2">
            {/* Internship Programs */}
            <div className="sticky top-24">
              <div className="relative group mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#e6c235] to-[#bd2323] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300 -z-10"></div>

                <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e6c235] to-[#bd2323] flex items-center justify-center">
                      <BuildingOfficeIcon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">INTERNSHIP PROGRAMS</h3>
                      <p className="text-sm text-gray-400">Completed successfully</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {internships.map((intern, idx) => (
                      <div
                        key={idx}
                        className="group/intern relative p-4 rounded-xl border border-gray-800 hover:border-gray-700 bg-black/50 hover:bg-black/80 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-white">{intern.company}</h4>
                            <p className="text-sm text-gray-400">{intern.role}</p>
                          </div>
                          <span className="text-xs px-2 py-1 bg-[#0a295e]/30 text-[#e6c235] rounded-full">
                            {intern.duration}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1">
                          {intern.tech.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="text-xs px-2 py-1 bg-black/30 text-gray-500 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6c235]/5 to-transparent opacity-0 group-hover/intern:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Contributions */}
          <div className="lg:w-1/2">
            {/* Contributions */}
            <div className="sticky top-24">
              <div className="relative group mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#e6c235] to-[#bd2323] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-300 -z-10"></div>

                <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e6c235] to-[#bd2323] flex items-center justify-center">
                      <BuildingOfficeIcon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">OPEN SOURCE CONTRIBUTIONS</h3>
                      <p className="text-sm text-gray-400">Ongoing...</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {contributions.map((intern, idx) => (
                      <div
                        key={idx}
                        className="group/intern relative p-4 rounded-xl border border-gray-800 hover:border-gray-700 bg-black/50 hover:bg-black/80 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-white">{intern.company}</h4>
                            <p className="text-sm text-gray-400">{intern.role}</p>
                          </div>
                          <span className="text-xs px-2 py-1 bg-[#0a295e]/30 text-[#e6c235] rounded-full">
                            {intern.duration}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1">
                          {intern.tech.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="text-xs px-2 py-1 bg-black/30 text-gray-500 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6c235]/5 to-transparent opacity-0 group-hover/intern:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Gained */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-[#e6c235]" />
                  KEY SKILLS GAINED
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Web Development</span>
                      <span className="text-sm font-bold text-[#bd2323]">95%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#bd2323] to-[#0a295e] rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Frontend Technologies</span>
                      <span className="text-sm font-bold text-[#e6c235]">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#e6c235] to-[#bd2323] rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Contributions</span>
                      <span className="text-sm font-bold text-white">65%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#e6c235] to-[#0a295e] rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Timeline Overview */}
        <div className="mt-16 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-2xl blur opacity-20 -z-10"></div>

          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              EXPERIENCE TIMELINE OVERVIEW
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bd2323] mb-1">2023</div>
                <div className="text-sm text-gray-400">Started BCA</div>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#bd2323] to-[#e6c235]"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#e6c235] mb-1">2024</div>
                <div className="text-sm text-gray-400">Multiple Internships</div>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#e6c235] to-[#0a295e]"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-[#0a295e] mb-1">2025</div>
                <div className="text-sm text-gray-400">Professional Experience</div>
              </div>

              <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-[#0a295e] to-[#ffffff]"></div>

              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">Future</div>
                <div className="text-sm text-gray-400">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trophy Icon Component */}
      <style jsx>{`
        .TrophyIcon {
          width: 1.25rem;
          height: 1.25rem;
        }
      `}</style>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Helper component for TrophyIcon
const TrophyIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default Experience;