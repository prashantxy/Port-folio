import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black-100">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16">
  <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-text">Prashant Dubey</h1>
    <p className="text-lg md:text-2xl mb-6">Application Developer & Software Engineer</p>
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <a
        href="https://github.com/prashantxy"
        className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-300"
      >
        <Github size={20} /> GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/prashant-dubey-59826521b/"
        className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-300"
      >
        <Linkedin size={20} /> LinkedIn
      </a>
      <a
        href="mailto:pdubey1924@gmail.com"
        className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-300"
      >
        <Mail size={20} /> Email
      </a>
    </div>
  </div>
</header>


      {/* About Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 text-base md:text-lg">
            I am a software engineer pursuing B.E. from Chandigarh University. Currently
            working as an Application Developer Intern at ARL, I specialize in full-stack development with
            expertise in React Native, Node.js, and various modern technologies.
          </p>
        </div>
      </section>

     {/* Experience Section */}
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800 text-center">Experience</h2>

    {/* Experience Item */}
    <div className="bg-black p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-700 transition-all duration-300">Application Developer Intern</h3>
          <p className="text-gray-600 text-sm">ARL</p>
        </div>
        <p className="text-gray-600 text-sm">Oct 2024 - Present</p>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Developed a mobile application using React Native and Expo, increasing user engagement by 30%</li>
        <li>Implemented a Node.js backend system, improving data handling efficiency by 25%</li>
        <li>Optimized application performance, reducing load times by 20%</li>
      </ul>
    </div>
  </div>
</section>


     {/* Projects Section */}
<section className="py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-blue-800">Featured Projects</h2>

    {/* Smart Fleet Management */}
    <div className="bg-gradient-to-r from-gray-100 to-white p-6 rounded-lg shadow-lg mb-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800 hover:text-blue-700 transition-colors duration-300">Smart Fleet Management</h3>
        <a
          href="https://dtc-project.vercel.app/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
      <p className="text-gray-600 mb-4">Next.js, ML, Dijkstra's Algorithm</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Developed a route optimization model reducing travel time by 25%</li>
        <li>Implemented Dijkstra's algorithm for efficient rerouting in real-time</li>
        <li>Integrated AI system to predict and improve maintenance efficiency by 30%</li>
      </ul>
     
    </div>

    {/* NASA Space Apps Challenge */}
    <div className="bg-gradient-to-r from-gray-100 to-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800 hover:text-blue-700 transition-colors duration-300">NASA Space Apps Challenge Project</h3>
        <a
          href="https://nasa-space-app-2024-ten.vercel.app/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
      <p className="text-gray-600 mb-4">React,three.js,ML, Blockchain</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Developed an ML-based asteroid detection model with 95% accuracy</li>
        <li>Created interactive 3D simulations for celestial bodies</li>
        <li>Implemented blockchain reward system for 200+ users to track achievements</li>
      </ul>
      
    </div>
  </div>
</section>
{/* Skills Section */}
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">Technical Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { category: 'Languages', skills: 'C++, Python, Java, JavaScript, TypeScript' },
        { category: 'Front-End', skills: 'React-Redux, Next.js' },
        { category: 'Back-End', skills: 'Node.js, Express, REST API' },
        { category: 'Containerization', skills: 'Docker, Kubernetes, Docker Hub' },
        { category: 'Cloud', skills: 'AWS, Azure, GCP' },
        { category: 'CI/CD', skills: 'Jenkins, GitLab CI' },
      ].map((skill, index) => (
        <div
          key={index}
          className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{skill.category}</h3>
          <p className="text-gray-700">{skill.skills}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Achievements Section */}
<section className="py-12 bg-black relative overflow-hidden">
  {/* Background Glow Effects */}
  <div className="absolute inset-0">
    <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-transparent opacity-30 rounded-full w-96 h-96 blur-3xl animate-pulse -top-20 -left-20" />
    <div className="bg-gradient-to-br from-pink-500 via-red-600 to-transparent opacity-30 rounded-full w-96 h-96 blur-3xl animate-pulse -bottom-20 -right-20" />
  </div>

  {/* Content Container */}
  <div className="relative container mx-auto px-6 md:px-12">
    <h2
      className="text-2xl md:text-4xl font-extrabold text-white mb-6 text-center animate-fade-in-down"
    >
      Achievements
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Competitions */}
      <div
        className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-in"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://img.icons8.com/ios-filled/50/4caf50/medal.png"
            alt="Competition Icon"
            className="h-10 w-10"
          />
          <h3 className="text-xl font-semibold text-white">Competitions</h3>
        </div>
        <p className="text-gray-400">🏆 Winner of NASA Space Apps Challenge, Mohali Chapter</p>
      </div>
      {/* Hackathons */}
      <div
        className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://img.icons8.com/ios-filled/50/fa314a/code.png"
            alt="Hackathon Icon"
            className="h-10 w-10"
          />
          <h3 className="text-xl font-semibold text-white">Hackathons</h3>
        </div>
        <ul className="text-gray-400 space-y-2">
          <li>🎯 1st position at Cryptic Hunt (national-level)</li>
          <li>🎖️ 4th rank in Tekathon SIH (800 teams)</li>
        </ul>
      </div>
      {/* Coding Profiles */}
      <div
        className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://img.icons8.com/ios-filled/50/3b82f6/code-file.png"
            alt="Coding Icon"
            className="h-10 w-10"
          />
          <h3 className="text-xl font-semibold text-white">Coding Profiles</h3>
        </div>
        <div className="space-y-4">
          {[
            { name: "LeetCode", url: "https://leetcode.com/u/pdubey1924/", level: 80 },
            { name: "Codeforces", url: "https://codeforces.com/profile/pdubey1924", level: 70 },
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/pdubeyzunu/", level: 85 },
            { name: "AtCoder", url: "https://atcoder.jp/users/Keizer_19", level: 65 },
          ].map((profile, index) => (
            <div key={index}>
              <a
                href={profile.url}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-500 font-medium"
              >
                <ChevronRight size={16} /> {profile.name}
              </a>
              <div className="relative w-full bg-gray-700 rounded-full h-2 mt-1">
                <div
                  className="bg-blue-500 h-2 rounded-full animate-grow"
                  style={{ width: `${profile.level}%`, animationDelay: `${index * 0.2}s` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

 

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p>&copy; 2024 Prashant Dubey. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built using React and TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}

