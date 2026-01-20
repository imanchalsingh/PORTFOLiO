import React from "react";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ServerIcon,
  CpuChipIcon,
  SparklesIcon,
  ChartBarIcon,
  CloudIcon,
  CommandLineIcon
} from "@heroicons/react/24/outline";

const About = () => {
  // Field Specialization Data
  const fieldSpecializations = [
    { name: "Frontend Development", level: 85, icon: <PaintBrushIcon className="h-5 w-5" />, color: "#bd2323" },
    { name: "Backend Development", level: 75, icon: <ServerIcon className="h-5 w-5" />, color: "#0a295e" },
    { name: "MERN & MEAN Stack", level: 70, icon: <CpuChipIcon className="h-5 w-5" />, color: "#e6c235" },
    { name: "Full Stack Development", level: 80, icon: <CommandLineIcon className="h-5 w-5" />, color: "#bd2323" },
    { name: "Data Analysis & Data Science", level: 65, icon: <ChartBarIcon className="h-5 w-5" />, color: "#0a295e" },
    { name: "Cloud Computing", level: 60, icon: <CloudIcon className="h-5 w-5" />, color: "#ffffff" },
  ];

  // Tech Stack Data
  const techStack = [
    { name: "React" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind CSS", },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Angular" },
    { name: "Prisma" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "GitLab" },
    { name: "Matlab" },
    { name: "Figma" },
    { name: "Next.js" },
    { name: "REST API" },
    { name: "C/C++" },
    { name: "Python" },
    { name: "Docker" },
    { name: "Java" },
    { name: "AWS" },
    { name: "Jest" },
    { name: "GraphQL" },
    { name: "MySQL" },
    { name: "NumPy" },
    { name: "Pandas" },
    { name: "Matplotlib" },
    { name: "Redux" },
    { name: "Sass" },
    { name: "Webpack" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Bootstrap" },
    { name: "D3.js" },
    { name: "TensorFlow" },
    { name: "Firebase" }
  ];


  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Diagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #0a295e 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-[#e6c235]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["{ }", "</>", "=>", "()", "[]", "==="].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-white/5 font-mono text-6xl md:text-8xl font-bold animate-float"
            style={{
              left: `${5 + i * 15}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${20 + i * 5}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 backdrop-blur-sm border border-[#e6c235]/20 mb-6">
            <SparklesIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">TECHNICAL EXPERTISE</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              ABOUT • SKILLS • STACK
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer specializing in modern web technologies, data analysis,
            and creating scalable digital solutions with cutting-edge tools.
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Column - Developer Section */}
          <div className="lg:w-1/2">
            <div className="relative group mb-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-2xl blur opacity-30 group-hover:opacity-70 transition-all duration-300 -z-10"></div>

              <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#bd2323] to-[#0a295e] rounded-xl flex items-center justify-center">
                    <CodeBracketIcon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">THE DEVELOPER</h3>
                    <p className="text-gray-400">Full Stack Developer & CS Student</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-6 mb-8">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Final-year Computer Science student passionate about creating
                    exceptional digital experiences. I specialize in modern web
                    technologies and full-stack development, bridging design with
                    functionality to build applications that are both beautiful
                    and robust.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    My approach combines technical expertise with creative problem-solving.
                    Currently advancing skills in cloud architecture, microservices,
                    and AI integration to build the next generation of web applications.
                  </p>
                </div>

                {/* Experience Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "100%", label: "Dedication", color: "#e6c235" },
                    { value: "∞", label: "Passion", color: "#ffffff" }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                    >
                      <div className="text-2xl font-bold text-white mb-1" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CS Field Section */}
          <div className="lg:w-1/2">
            {/* Field Specializations */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">FIELD SPECIALIZATIONS</h3>
                <span className="text-xs px-3 py-1 bg-[#0a295e]/30 text-[#e6c235] rounded-full border border-[#0a295e]">
                  SKILL LEVELS
                </span>
              </div>

              <div className="space-y-6">
                {fieldSpecializations.map((field, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${field.color}20` }}
                        >
                          <div style={{ color: field.color }}>
                            {field.icon}
                          </div>
                        </div>
                        <span className="font-medium text-white">{field.name}</span>
                      </div>
                      <span
                        className="font-bold px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: `${field.color}20`,
                          color: field.color
                        }}
                      >
                        {field.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-current/30"
                        style={{
                          width: `${field.level}%`,
                          backgroundColor: field.color
                        }}
                      ></div>
                    </div>

                    <div
                      className="absolute -inset-4 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300 -z-10"
                      style={{ backgroundColor: field.color }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs px-3 py-1 bg-[#bd2323]/30 text-white rounded-full border border-[#bd2323]">
              TECH STACKS
            </span>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
            <div className="flex flex-wrap gap-3 mb-6">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-900/50 text-gray-400"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Career Path */}
        <div className="mt-16 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-2xl blur opacity-20 -z-10"></div>
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
              CAREER PATH & ASPIRATIONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#bd2323] to-[#0a295e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CodeBracketIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Software Engineer</h4>
                <p className="text-gray-400 text-sm">Building scalable enterprise solutions</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0a295e] to-[#e6c235] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Tech Lead</h4>
                <p className="text-gray-400 text-sm">Leading development teams & architecture</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e6c235] to-[#bd2323] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">AI/ML Engineer</h4>
                <p className="text-gray-400 text-sm">Intelligent systems & data solutions</p>
              </div>
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
          animation: float 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;