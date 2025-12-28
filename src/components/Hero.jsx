// components/Hero.js
import React from "react";
import { FiArrowRight, FiMail, FiCode, FiTool, FiCpu, FiZap } from "react-icons/fi";
import { TbBrandNextjs, TbBrandReact, TbBrandNodejs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Geometric Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #bd2323 1px, transparent 1px),
                             linear-gradient(to bottom, #bd2323 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Color accents */}
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-[#bd2323]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-[#0a295e]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#e6c235]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#e6c235] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#bd2323]/20 to-[#0a295e]/20 backdrop-blur-sm border border-[#bd2323]/30 mb-8 animate-pulse">
            <div className="w-2 h-2 bg-[#e6c235] rounded-full"></div>
            <span className="text-sm font-semibold text-white tracking-wider">
              FULL STACK DEVELOPER | SOFTWARE ENGINEER
            </span>
          </div>

          {/* Main Hero Text */}
          <div className="mb-8 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#bd2323]/10 to-[#0a295e]/10 blur-xl rounded-3xl -z-10"></div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#e6c235]">
                ANCHAL
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e]">
                SiNGH
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 max-w-3xl">
            Crafting Digital Excellence with{" "}
            <span className="text-[#e6c235]">Code</span> &{" "}
            <span className="text-[#bd2323]">Creativity</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Transforming complex problems into elegant, high-performance solutions.
            Specializing in modern web technologies to build scalable applications
            that drive real business impact.
          </p>

          {/* Tech Stack Marquee */}
          <div className="w-full max-w-4xl mb-12 overflow-hidden">
            <div className="flex items-center justify-center gap-8 animate-marquee whitespace-nowrap">
              {[TbBrandReact, TbBrandNextjs, TbBrandNodejs, SiMongodb, SiTailwindcss, FiCode, FiTool, FiCpu].map((Icon, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800"
                >
                  <Icon className="w-8 h-8 text-[#e6c235]" />
                  <span className="text-white font-semibold text-lg">
                    {["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "Code", "Tools", "DevOps"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#bd2323] to-[#0a295e] text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 hover:-translate-y-1 min-w-[200px]"
            >
              <span>EXPLORE WORK</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] to-[#0a295e] rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
            </a>

            <a
              href="#contact"
              className="group relative px-8 py-4 bg-transparent text-white rounded-xl border-2 border-[#e6c235] hover:bg-[#e6c235]/10 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 hover:-translate-y-1 min-w-[200px]"
            >
              <FiMail className="text-[#e6c235]" />
              <span>CONNECT NOW</span>
            </a>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes to your global CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;