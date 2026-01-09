import React from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  TrophyIcon,
  CalendarIcon,
  MapPinIcon,
  ChevronDoubleRightIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

const Education = () => {
  const education = [
    {
      institute: "Institute of Engineering and Technology",
      type: "Computer Science Education",
      actual_location: "Ayodhya, Uttar Pradesh, India",
      location: "On-Campus",
      duration: "2023 - Present",
      grade: "Current CGPA: 7.7/10",
      roles: [
        {
          role: "Bachelor's in Computer Applications (BCA)",
          period: "July 2023 - Present · Ongoing",
          description:
            "Comprehensive curriculum covering software engineering principles, data structures, algorithms, web technologies, and database management. Actively participating in coding competitions and tech events.",
          achievements: [
            "Top 10% in Programming Competitions",
            "Active Member of Coding Club",
            "Multiple Hackathon Participant",
            "Dean's List Recognition"
          ],
          skills: [
            "Software Development",
            "Algorithms & DSA",
            "Web Technologies",
            "Database Systems",
            "Object-Oriented Programming",
            "System Design",
            "Team Collaboration",
          ],
        },
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #e6c235 1px, transparent 1px),
                             linear-gradient(to bottom, #e6c235 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["🎓", "📚", "💻", "🧠", "🚀"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-6xl md:text-8xl animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i * 15)}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${25 + i * 5}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 backdrop-blur-sm border border-[#e6c235]/20 mb-6">
            <AcademicCapIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">ACADEMIC JOURNEY</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#0a295e]">
              EDUCATION
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in computer science through formal education,
            continuous learning, and practical application of modern technologies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Education Card */}
          <div className="lg:w-2/3">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-3xl blur-xl opacity-30 group-hover:opacity-70 transition-all duration-300 -z-10"></div>

              {/* Main Card */}
              <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#0a295e] to-[#bd2323]/80 p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                        <AcademicCapIcon className="h-10 w-10 text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-1">
                          {education[0].institute}
                        </h3>
                        <p className="text-[#e6c235] font-medium text-lg">
                          {education[0].type}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="h-4 w-4 text-gray-300" />
                            <span className="text-gray-300 text-sm">{education[0].actual_location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-300" />
                            <span className="text-gray-300 text-sm">{education[0].duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Grade Badge */}
                    <div className="px-6 py-3 bg-gradient-to-r from-[#e6c235] to-[#bd2323] rounded-xl">
                      <div className="text-2xl font-black text-black">{education[0].grade.split(": ")[1]}</div>
                      <div className="text-xs font-semibold text-black opacity-90">CURRENT CGPA</div>
                    </div>
                  </div>
                </div>

                {/* Degree Details */}
                <div className="p-8">
                  {education[0].roles.map((role, i) => (
                    <div key={i} className="space-y-6">
                      {/* Degree Header */}
                      <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
                            <ChevronDoubleRightIcon className="h-6 w-6 text-[#e6c235]" />
                            {role.role}
                          </h4>
                          <div className="flex items-center gap-2 text-gray-400">
                            <CalendarIcon className="h-4 w-4" />
                            <span>{role.period}</span>
                          </div>
                        </div>
                        <div className="px-4 py-2 bg-[#0a295e]/30 text-[#e6c235] rounded-full border border-[#0a295e] text-sm font-semibold">
                          IN PROGRESS
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {role.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h5 className="text-xl font-bold text-white flex items-center gap-2">
                          <TrophyIcon className="h-5 w-5 text-[#e6c235]" />
                          Key Achievements
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {role.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 p-3 bg-black/50 rounded-lg border border-gray-800 hover:border-[#e6c235]/50 transition-all duration-300"
                            >
                              <SparklesIcon className="h-4 w-4 text-[#e6c235] flex-shrink-0" />
                              <span className="text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h5 className="text-xl font-bold text-white flex items-center gap-2">
                          <BookOpenIcon className="h-5 w-5 text-[#e6c235]" />
                          Core Skills Developed
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {role.skills.map((skill, idx) => (
                            <div
                              key={idx}
                              className="relative group/skill"
                            >
                              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] to-[#0a295e] rounded-full blur opacity-0 group-hover/skill:opacity-30 transition-opacity duration-300"></div>
                              <span className="relative px-4 py-2 text-sm font-medium rounded-full bg-black/80 border border-gray-800 text-gray-300 hover:text-[#e6c235] hover:border-[#e6c235]/50 transition-all duration-300">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certifications & Stats */}
          <div className="lg:w-1/3">
            {/* Academic Stats */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">ACADEMIC STATS</h3>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Academic Performance</span>
                    <span className="font-bold text-[#e6c235]">85%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#e6c235] to-[#bd2323] rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Technical Projects</span>
                    <span className="font-bold text-[#0a295e]">50+</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0a295e] to-[#bd2323] rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Competitions</span>
                    <span className="font-bold text-white">15+</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#bd2323] to-[#e6c235] rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Learning Focus */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-lg font-bold text-white mb-4">Current Focus</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 text-[#e6c235] rounded-full border border-gray-800">
                    Advanced DSA
                  </span>
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-[#0a295e]/20 to-[#bd2323]/20 text-white rounded-full border border-gray-800">
                    System Design
                  </span>
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-[#bd2323]/20 to-[#e6c235]/20 text-white rounded-full border border-gray-800">
                    Cloud Computing
                  </span>
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-[#e6c235]/20 to-[#0a295e]/20 text-white rounded-full border border-gray-800">
                    AI/ML Basics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Indicators */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#0a295e] rounded-full"></div>
              <span className="text-sm text-gray-400">Bachelor's of Computer Application (Current)</span>
            </div>
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
      `}</style>
    </section>
  );
};

export default Education;