import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const CodingProfiles = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const profiles = [
    {
      id: 1,
      name: "GitHub",
      description: "Code repository and open source contributions",
      link: "https://github.com/imanchalsingh",
      icon: "https://pngimg.com/uploads/github/github_PNG40.png",
      status: "Currently Learning",
      type: "code-repo",
    },
    {
      id: 2,
      name: "GitLab",
      description: "Code repository and CI/CD platform",
      link: "https://gitlab.com/imanchalsingh",
      icon: "https://about.gitlab.com/images/press/logo/png/gitlab-logo-500.png",
      status: "Currently Learning",
      type: "code-repo",
    },
    {
      id: 3,
      name: "LeetCode",
      description: "Problem solving and algorithm challenges",
      link: "https://leetcode.com/imanchalsingh",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      status: "Currently Learning",
      type: "problem-solving",
    },
    {
      id: 4,
      name: "GeeksforGeeks",
      description: "Data structures and algorithm practice",
      link: "https://auth.geeksforgeeks.org/user/imanchalsingh",
      icon: "https://media.geeksforgeeks.org/wp-content/uploads/20210628182253/gfglogo.png",
      status: "Currently Learning",
      type: "problem-solving",
    },
    {
      id: 5,
      name: "InterviewBit",
      description: "Coding interview preparation platform",
      link: "https://www.interviewbit.com/profile/anchal-singh_974",
      icon: "https://user-images.githubusercontent.com/49322948/159159046-7fbe7f20-bcc4-4142-a255-8566cd69ac98.png",
      status: "Currently Learning",
      type: "interview-prep",
    },
    {
      id: 6,
      name: "Codolio",
      description: "Portfolio and coding profile showcase",
      link: "https://codolio.com/profile/imanchalsingh",
      icon: "https://codolio.com/codolio_assets/gif-owl-transparent.GIF",
      status: "Currently Learning",
      type: "portfolio",
    },
    {
      id: 7,
      name: "HackerRank",
      description: "Coding challenges and skill certifications",
      link: "https://www.hackerrank.com/imanchalsingh",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      status: "Not Active",
      type: "problem-solving",
    },
    {
      id: 8,
      name: "CodeChef",
      description: "Competitive programming platform",
      link: "https://www.codechef.com/users/imanchalsingh",
      icon: "https://cdn.codechef.com/images/cc-logo.svg",
      status: "Currently Learning",
      type: "competitive-programming",
    },
    {
      id: 9,
      name: "Codeforces",
      description: "Competitive programming contests",
      link: "https://codeforces.com/profile/imanchalsingh",
      icon: "https://codeforces.org/s/0/favicon-32x32.png",
      status: "Not Active",
      type: "competitive-programming",
    },

    {
      id: 10,
      name: "SoloLearn",
      description: "Interactive coding courses and community",
      link: "https://www.sololearn.com/en/profile/32128928",
      icon: "https://cdn-images-1.medium.com/max/1200/1*hsdk74SBj4i_UfX8SaW6YA.png",
      status: "Not Active",
      type: "learning-platform",
    },
    {
      id: 11,
      name: "TakeUForward",
      description: "DSA course and coding challenges",
      link: "https://takeuforward.org/profile/imanchalsingh",
      icon: "https://dev.takeuforward.org/static/media/Tuf%20Logo%20B.a2ce02c035734f237b8a.png",
      status: "Not Active",
      type: "problem-solving",
    },
    {
      id: 12,
      name: "Project Euler",
      description: "Mathematical/ computational problems",
      link: "https://projecteuler.net/progress",
      icon: "https://share.hawken.edu/DigiDIY/mc-web/photos/project_euler.png",
      status: "Not Active",
      type: "problem-solving",
    },
    {
      id: 13,
      name: "W3Schools",
      description: "Web development tutorials and references",
      link: "https://www.w3profile.com/imanchalsingh/",
      icon: "https://logospng.org/download/w3schools/w3schools-2048.png",
      status: "Currently Learning",
      type: "learning-platform",
    },
    {
      id: 14,
      name: "Code360",
      description: "Coding Ninjas learning platform",
      link: "https://www.naukri.com/code360/profile/imanchalsingh",
      icon: "https://files.codingninjas.com/cnlogo-32874.png",
      status: "Currently Learning",
      type: "learning-platform",
    },
    {
      id: 15,
      name: "Hackerearth",
      description: "Coding challenges and hackathons",
      link: "https://www.hackerearth.com/@imanchalsingh/",
      icon: "https://utkarshtambe10.github.io/Coding-Profiles/images/hackerearth.png",
      status: "Not Active",
      type: "problem-solving",
    },
    {
      id: 16,
      name: "Codewars",
      description: "Coding challenges and kata practice",
      link: "https://www.codewars.com/users/imanchalsingh",
      icon: "https://img.icons8.com/fluency/2x/codewars.png",
      status: "Currently Learning",
      type: "problem-solving",
    },
    {
      id: 17,
      name: "Excercism",
      description: "Practice coding in various languages",
      link: "https://exercism.org/profiles/imanchalsingh",
      icon: "https://cdn.worldvectorlogo.com/logos/exercism.svg",
      status: "Not Active",
      type: "learning-platform",
    },
    {
      id: 18,
      name: "FreeCodeCamp",
      description: "Learn to code for free",
      link: "https://www.freecodecamp.org/imanchalsingh",
      icon: "https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.jpg",
      status: "Not Active",
      type: "learning-platform",
    },
    {
      id: 19,
      name: "JavaTpoint",
      description: "Programming tutorials and examples",
      link: "https://www.javatpoint.com/profile/imanchalsingh",
      icon: "https://codershot.com/wp-content/uploads/2023/01/JavaTpoint.png",
      status: "Not Active",
      type: "learning-platform",
    }

  ];
  // Get unique types for the dropdown filter
  const uniqueTypes = ["all", ...new Set(profiles.map((p) => p.type))];

  // Filter profiles based on status and type
  const filteredProfiles = profiles.filter((profile) => {
    const statusMatch =
      filterStatus === "all"
        ? true
        : filterStatus === "active"
          ? profile.status === "Currently Learning"
          : profile.status === "Not Active";

    const typeMatch = filterType === "all" ? true : profile.type === filterType;

    return statusMatch && typeMatch;
  });

  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              My Learning Profiles
            </h2>
            <div className="w-20 h-1 bg-indigo-600"></div>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            {/* Status buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${filterStatus === "all" ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus("active")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${filterStatus === "active" ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilterStatus("not-active")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${filterStatus === "not-active" ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                Not Active
              </button>
            </div>

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
                  <p className="text-sm mt-1">
                    {profile.status === "Currently Learning" ? (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {profile.status}
                      </span>
                    ) : (
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full">
                        {profile.status}
                      </span>
                    )}
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
