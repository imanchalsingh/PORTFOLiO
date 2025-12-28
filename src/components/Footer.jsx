// components/Footer.js
import React from "react";
import { 
  HeartIcon, 
  CodeBracketIcon, 
  ArrowUpIcon,
  RocketLaunchIcon,
  SparklesIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  const techStack = [
    "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL"
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/imanchalsingh", 
      icon: "🐙",
      color: "hover:text-white"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/imanchalsingh/", 
      icon: "💼",
      color: "hover:text-blue-400"
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/imanchalsingh/", 
      icon: "📸",
      color: "hover:text-pink-400"
    },
    { 
      name: "Twitter", 
      href: "https://x.com/imanchalsingh", 
      icon: "🐦",
      color: "hover:text-blue-300"
    },
    { 
      name: "LeetCode", 
      href: "https://leetcode.com/u/imanchalsingh/", 
      icon: "⚡",
      color: "hover:text-yellow-400"
    }
  ];

  return (
    <footer className="relative bg-black pt-16 pb-12 border-t border-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #bd2323 1px, transparent 1px),
                             linear-gradient(to bottom, #bd2323 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Gradient Accents */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 left-8 opacity-10">
        <CodeBracketIcon className="h-24 w-24" />
      </div>
      <div className="absolute top-8 right-8 opacity-10">
        <RocketLaunchIcon className="h-24 w-24" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bd2323] to-[#0a295e] flex items-center justify-center">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  ANCHAL <span className="text-[#e6c235]">SINGH</span>
                </h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building digital experiences with clean code, modern technologies, 
              and a passion for innovation.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <AcademicCapIcon className="h-5 w-5 text-[#e6c235]" />
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#e6c235] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#bd2323] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-black/50 text-gray-400 rounded-full border border-gray-800 hover:border-[#e6c235] hover:text-[#e6c235] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a 
                href="https://mylearninghub.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0a295e]/20 to-[#bd2323]/20 text-white rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
              >
                <AcademicCapIcon className="h-4 w-4" />
                Visit My Learning Hub
                <ArrowUpIcon className="h-4 w-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">CONNECT</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#bd2323] to-[#0a295e] flex items-center justify-center">
                  <span className="text-lg">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:singhanchal159357@gmail.com" 
                    className="text-white hover:text-[#e6c235] transition-colors duration-300"
                  >
                    singhanchal159357@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0a295e] to-[#e6c235] flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-black/50 border border-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-gray-700`}
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-black">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#bd2323] to-[#0a295e] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
                   onClick={scrollToTop}>
                <ArrowUpIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} <span className="text-white font-medium">Anchal Singh</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Made with <HeartIcon className="h-4 w-4 inline text-[#bd2323] animate-pulse" /> and lots of <CodeBracketIcon className="h-4 w-4 inline text-[#e6c235]" />
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Open to Opportunities</span>
            </div>
            <div className="hidden md:block text-gray-500">•</div>
            <div className="text-sm text-gray-400">
              v1.0 • Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Designed & Developed with Next.js, React, and Tailwind CSS
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Optimized for performance and accessibility
          </p>
        </div>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;