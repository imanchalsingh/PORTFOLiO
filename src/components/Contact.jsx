import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  UserIcon
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email!");
      return;
    }

    setIsSubmitting(true);
    
    // Create a mailto link with subject and body
    const mailtoLink = `mailto:singhanchal159357@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${encodeURIComponent(message || `Hello Anchal,\n\nI came across your portfolio and would like to connect regarding...\n\nBest regards,\n[Your Name]`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after a delay
    setTimeout(() => {
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Location",
      value: "Uttar Pradesh, India",
      description: "Open to remote opportunities",
      color: "#bd2323"
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email",
      value: "singhanchal159357@gmail.com",
      description: "Response within 24 hours",
      color: "#e6c235"
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Availability",
      value: "Open to Work",
      description: "Immediately available",
      color: "#0a295e"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/imanchalsingh/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "#0077B5"
    },
    {
      name: "GitHub",
      url: "https://github.com/imanchalsingh",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "#333333"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/imanchalsingh/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "#E1306C"
    },
    {
      name: "Twitter",
      url: "https://x.com/imanchalsingh",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "#1DA1F2"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/imanchalsingh/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ),
      color: "#FFA116"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/imanchalsingh",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 3.5C4.5 2.119 5.619 1 7 1s2.5 1.119 2.5 2.5S8.381 6 7 6 4.5 4.881 4.5 3.5zm12 0c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5S20.381 6 19 6s-2.5-1.119-2.5-2.5zm0 17c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm-12 0c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5S8.381 23 7 23s-2.5-1.119-2.5-2.5z"/>
        </svg>
      ),
      color: "#5B4638"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Connection Lines Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #e6c235 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#bd2323]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-[#0a295e]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {["📧", "💬", "📱", "🌐", "🚀", "💼"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-white/10 text-5xl md:text-7xl animate-float"
            style={{
              left: `${5 + i * 18}%`,
              top: `${15 + (i * 12)}%`,
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
            <ChatBubbleLeftRightIcon className="h-4 w-4 text-[#e6c235]" />
            <span className="text-sm font-semibold text-white tracking-wider">LET'S CONNECT</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e6c235] to-[#bd2323]">
              CONTACT
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's collaborate and build something amazing together. 
            I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div 
                    className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-300 -z-10"
                    style={{ backgroundColor: info.color }}
                  ></div>
                  
                  <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <div style={{ color: info.color }}>
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{info.title}</h3>
                        <p className="text-sm text-gray-400">{info.description}</p>
                      </div>
                    </div>
                    <p 
                      className="text-xl font-semibold"
                      style={{ color: info.color }}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <SparklesIcon className="h-6 w-6 text-[#e6c235]" />
                CONNECT WITH ME
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <div style={{ color: social.color }}>
                          {social.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-white">{social.name}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                          Visit Profile
                        </div>
                      </div>
                    </div>
                    <ArrowRightIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 group-hover:text-[#e6c235] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-[#0a295e]/20 to-[#bd2323]/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Email Response</span>
                    <span className="text-sm font-bold text-[#e6c235]">24 hours</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#e6c235] to-[#bd2323] rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">Social Media</span>
                    <span className="text-sm font-bold text-[#bd2323]">12 hours</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#bd2323] to-[#0a295e] rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bd2323] via-[#e6c235] to-[#0a295e] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-300 -z-10"></div>
              
              <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl border border-gray-800 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bd2323] to-[#0a295e] flex items-center justify-center">
                    <PaperAirplaneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">SEND A MESSAGE</h3>
                    <p className="text-gray-400">Direct email communication</p>
                  </div>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e6c235] focus:border-transparent transition-all duration-300"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e6c235] focus:border-transparent transition-all duration-300"
                        placeholder="Project Inquiry / Collaboration"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="5"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e6c235] focus:border-transparent transition-all duration-300"
                      placeholder="Tell me about your project, requirements, timeline..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-[#bd2323] to-[#0a295e] text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#bd2323]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Opening Email Client...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    This will open your default email client with a pre-filled message
                  </p>
                </form>

                {/* Additional Contact Methods */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h4 className="text-lg font-bold text-white mb-4">Alternative Contact Methods</h4>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => window.open('https://www.linkedin.com/in/imanchalsingh/', '_blank')}
                      className="px-4 py-2 bg-gradient-to-r from-[#0077B5] to-[#0A66C2] text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                    >
                      LinkedIn Message
                    </button>
                    <button
                      onClick={() => window.open('https://github.com/imanchalsingh', '_blank')}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 border border-gray-700"
                    >
                      GitHub Issues
                    </button>
                  </div>
                </div>
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
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;