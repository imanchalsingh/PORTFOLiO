import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const CodingProfiles = () => {
  const [filterType, setFilterType] = useState("all");

  const profiles = [
    {
      id: 1,
      name: "GitHub",
      description: "Code repository and open source contributions",
      link: "https://github.com/imanchalsingh",
      icon: "https://pngimg.com/uploads/github/github_PNG40.png",
      type: "Code-Repository",
    },
    {
      id: 2,
      name: "Codolio",
      description: "Portfolio and coding profile showcase",
      link: "https://codolio.com/profile/imanchalsingh",
      icon: "https://codolio.com/codolio_assets/gif-owl-transparent.GIF",
      type: "Portfolio",
    },
    {
      id: 3,
      name: "LeetCode",
      description: "Problem solving and algorithm challenges",
      link: "https://leetcode.com/imanchalsingh",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      type: "Problem-Solving",
    },
    {
      id: 4,
      name: "GeeksforGeeks",
      description: "Data structures and algorithm practice",
      link: "https://auth.geeksforgeeks.org/user/imanchalsingh",
      icon: "https://media.geeksforgeeks.org/wp-content/uploads/20210628182253/gfglogo.png",
      type: "Problem-Solving",
    },
    {
      id: 5,
      name: "Code360",
      description: "Coding Ninjas learning platform",
      link: "https://www.naukri.com/code360/profile/imanchalsingh",
      icon: "https://files.codingninjas.com/cnlogo-32874.png",
      type: "Learning-Platform",
    },
    {
      id: 6,
      name: "InterviewBit",
      description: "Coding interview preparation platform",
      link: "https://www.interviewbit.com/profile/anchal-singh_974",
      icon: "https://user-images.githubusercontent.com/49322948/159159046-7fbe7f20-bcc4-4142-a255-8566cd69ac98.png",
      type: "Interview-Prep",
    },
    {
      id: 7,
      name: "CodeChef",
      description: "Competitive programming platform",
      link: "https://www.codechef.com/users/imanchalsingh",
      icon: "https://cdn.codechef.com/images/cc-logo.svg",
      type: "Competitive-Programming",
    },
    {
      id: 8,
      name: "Microsoft Learn",
      description: "Microsoft technologies and certifications",
      link: "https://learn.microsoft.com/en-us/users/imanchalsingh/",
      icon: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
      type: "Learning-Platform",
    },

    {
      id: 9,
      name: "SoloLearn",
      description: "Interactive coding courses and community",
      link: "https://www.sololearn.com/en/profile/32128928",
      icon: "https://cdn-images-1.medium.com/max/1200/1*hsdk74SBj4i_UfX8SaW6YA.png",
      type: "Learning-Platform",
    },
    {
      id: 10,
      name: "TakeUForward",
      description: "DSA course and coding challenges",
      link: "https://takeuforward.org/profile/imanchalsingh",
      icon: "https://dev.takeuforward.org/static/media/Tuf%20Logo%20B.a2ce02c035734f237b8a.png",
      type: "Problem-Solving",
    },
    {
      id: 11,
      name: "Project Euler",
      description: "Mathematical/ computational problems",
      link: "https://projecteuler.net/progress",
      icon: "https://share.hawken.edu/DigiDIY/mc-web/photos/project_euler.png",
      type: "Problem-Solving",
    },
    {
      id: 12,
      name: "W3Schools",
      description: "Web development tutorials and references",
      link: "https://www.w3profile.com/imanchalsingh/",
      icon: "https://logospng.org/download/w3schools/w3schools-2048.png",
      type: "Learning-Platform",
    },
    {
      id: 13,
      name: "Codeforces",
      description: "Competitive programming contests",
      link: "https://codeforces.com/profile/imanchalsingh",
      icon: "https://codeforces.org/s/0/favicon-32x32.png",
      type: "Competitive-Programming",
    },
    {
      id: 14,
      name: "Hackerearth",
      description: "Coding challenges and hackathons",
      link: "https://www.hackerearth.com/@imanchalsingh/",
      icon: "https://utkarshtambe10.github.io/Coding-Profiles/images/hackerearth.png",
      type: "Problem-Solving",
    },
    {
      id: 15,
      name: "Codewars",
      description: "Coding challenges and kata practice",
      link: "https://www.codewars.com/users/imanchalsingh",
      icon: "https://img.icons8.com/fluency/2x/codewars.png",
      type: "Problem-Solving",
    },
    {
      id: 16,
      name: "Excercism",
      description: "Practice coding in various languages",
      link: "https://exercism.org/profiles/imanchalsingh",
      icon: "https://cdn.worldvectorlogo.com/logos/exercism.svg",
      type: "Learning-Platform",
    },
    {
      id: 17,
      name: "FreeCodeCamp",
      description: "Learn to code for free",
      link: "https://www.freecodecamp.org/imanchalsingh",
      icon: "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg",
      type: "Learning-Platform",
    },
    {
      id: 18,
      name: "JavaTpoint",
      description: "Programming tutorials and examples",
      link: "https://www.javatpoint.com/profile/imanchalsingh",
      icon: "https://codershot.com/wp-content/uploads/2023/01/JavaTpoint.png",
      type: "Learning-Platform",
    },
    {
      id: 19,
      name: "HackerRank",
      description: "Coding challenges and skill certifications",
      link: "https://www.hackerrank.com/imanchalsingh",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      type: "Problem-Solving",
    },
    {
      id: 20,
      name: "GitLab",
      description: "Code repository and CI/CD platform",
      link: "https://gitlab.com/imanchalsingh",
      icon: "https://about.gitlab.com/images/press/logo/png/gitlab-logo-500.png",
      type: "Code-Repository",
    },
    {

      id: 21,
      name: "AtCoder",
      description: "Competitive programming contests",
      link: "https://atcoder.jp/users/imanchalsingh_",
      icon: "https://img.atcoder.jp/logo/atcoder/logo_transparent.png",
      type: "Competitive-Programming",
    },
    {
      id: 22,
      name: "Roadmap.sh",
      description: "Developer roadmaps and learning paths",
      link: "https://roadmap.sh/profile/imanchalsingh",
      icon: "https://cdn-1.webcatalog.io/catalog/roadmap-sh/roadmap-sh-icon-filled-256.png?v=1687417626361",
      type: "Learning-Platform",
    },
    {
      id: 23,
      name: "Bitbucket",
      description: "Code repository and collaboration platform",
      link: "https://bitbucket.org/imanchalsingh/",
      icon: "https://freepngdesign.com/content/uploads/images/p-2855-5-bitbucket-logo-png-transparent-logo-644794998032.png",
      type: "Code-Repository",
    },
    {
      id: 24,
      name: "DevDocs.io",
      description: "API documentation browser",
      link: "https://devdocs.io/",
      icon: "https://devdocs.io/images/icon-320.png",
      type: "Learning-Platform",
    },
    {
      id: 25,
      name: "UiVerse",
      description: "UI/UX design and front-end development",
      link: "https://uiverse.io/elements",
      icon: "https://uiverse.io/favicon-32x32.png",
      type: "Learning-Platform",
    },
    {
      id: 26,
      name: "TutorialsPoint",
      description: "Programming tutorials and courses",
      link: "https://www.tutorialspoint.com/practice/dashboard.php",
      icon: "https://www.tutorialspoint.com/images/tp-logo-desk.png",
      type: "Learning-Platform",
    },
    {
      id: 27,
      name: "GUVI",
      description: "Coding and tech learning platform",
      link: "https://www.guvi.in/singhanchal15935796622",
      icon: "https://www.guvi.in/assets/images/guvi-logo.png",
      type: "Learning-Platform",
    },
    {
      id: 28,
      name: "Frontend Practice",
      description: "Frontend coding challenges and projects",
      link: "https://www.frontendpractice.com/retired/grasshopper",
      icon: "https://frontendpractice.com/favicon.ico",
      type: "Problem-Solving",
    },
    {
      id: 29,
      name: "Design Systems Repo",
      description: "Collection of design systems and resources",
      link: "https://designsystemsrepo.com/",
      icon: "https://designsystemsrepo.com/assets/images/logo.png",
      type: "Learning-Platform",
    }
  ];
  // Get unique types for the dropdown filter
  const uniqueTypes = ["all", ...new Set(profiles.map((p) => p.type))];

  // Filter profiles based on type only...
  const filteredProfiles = profiles.filter((profile) => {
    return filterType === "all" || profile.type === filterType;
  });


  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Learning & Coding Profiles
            </h2>
            {/* in this profiles has my learning activity */}
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              A collection of my coding profiles across various platforms showcasing my learning journey and coding activities.
            </p>
            <div className="w-20 h-1 bg-indigo-600"></div>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            {/* Type dropdown */}
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 rounded-md text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              >
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type.replace("-", " ")}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[350px]"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 overflow-hidden">
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="object-contain bg-gray-100 w-12 h-12 rounded-full p-1"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{profile.name}</h3>
                  <p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{profile.type.replace("-", " ")}</span>

                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">{profile.description}</p>

              <a
                href={profile.link}
                className="flex items-center justify-between mt-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit Profile</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
