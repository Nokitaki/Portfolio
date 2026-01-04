import React, { useState } from "react";
import profilePic from "./assets/me.jpg";

// --- ASSET IMPORTS ---
import wildlitzVid from "./assets/wildlitz.mp4";
import commuDevVid from "./assets/commudev.mp4";
import fotcVid from "./assets/fotc.mp4";
import notesVid from "./assets/notes.mp4";

function App() {
  // --- STATE FOR MODAL ---
  const [selectedProject, setSelectedProject] = useState(null);

  // --- SKILLS DATA ---
  const languages = [
    { name: "JavaScript (ES6+)", level: 90, color: "bg-neon-blue" },
    { name: "Java", level: 85, color: "bg-orange-500" },
    { name: "Python", level: 80, color: "bg-green-400" },
    { name: "C / C++", level: 70, color: "bg-gray-400" },
    { name: "Kotlin", level: 75, color: "bg-purple-500" },
    { name: "SQL (MySQL/Postgres)", level: 80, color: "bg-blue-400" },
  ];

  const frameworks = [
    { name: "React + Vite", level: 90, color: "bg-cyan-400" },
    { name: "Node.js / Express", level: 85, color: "bg-green-500" },
    { name: "Spring Boot", level: 70, color: "bg-green-600" },
    { name: "PostgreSQL", level: 75, color: "bg-blue-500" },
  ];

  // --- PROJECT DATA ---
  const projects = [
    {
      id: 1,
      title: "Wildlitz",
      category: "Capstone Project | EdTech",
      description:
        "An interactive literacy platform for Grade 3 students featuring gamified phonics learning.",
      longDescription:
        "A comprehensive educational platform designed to improve literacy for Filipino Grade 3 students. It combines proven phonics-based instruction with engaging game mechanics like the 'Syllable Clapping Game', 'Sound Safari', and 'Phonics Crossword'. The system features a React+Vite frontend with rich Framer Motion animations, a Django REST Framework backend with PostgreSQL/Supabase, and OpenAI integration for dynamic content generation.",
      tags: ["React+Vite", "Django DRF", "PostgreSQL", "Framer Motion", "OpenAI API"],
      demoLink: "https://wildlitz-capstone-raeg.onrender.com/",
      githubLink: "https://github.com/Nokitaki/WildLitz-Capstone.git",
      video: wildlitzVid,
      team: [
        { name: "Joel Chandler Pili", role: "Lead Developer, Architect, Full Stack" },
        { name: "Garvey Gene Sanjorjo", role: "Project Manager, API Integrator, Docs" },
        { name: "Kenji Ermita", role: "Database Engineer, API Integrator, Full Stack" },
        { name: "Francis Kyle Lorenzana", role: "Full Stack Dev, Documentation" },
        { name: "Spencer Nacarion", role: "Full Stack Dev, Documentation" },
      ]
    },
    {
      id: 2,
      title: "CommuDev",
      category: "Social Platform | Productivity",
      description:
        "A collaborative hub for developers featuring newsfeeds, task management, and rewards.",
      longDescription:
        "CommuDev is a full-stack social platform built to foster collaboration among students and developers. It integrates social networking features like a real-time newsfeed and direct messaging with essential productivity tools such as a Kanban-style Task Manager and a shared Resource Hub. The application uses a decoupled architecture with a gamified rewards system to encourage user engagement.",
      tags: ["React+Vite", "Spring Boot", "Java", "MySQL", "CSS Modules"],
      // Separate links for decoupled architecture
      frontendLink: "https://github.com/Nokitaki/CommuDev-IE.git",
      backendLink: "https://github.com/Nokitaki/CommuDev-Appdev.git",
      video: commuDevVid,
      team: [
        { name: "Joel Chandler Pili", role: "Lead Developer, Architect, Full Stack" },
        { name: "Kenji Ermita", role: "Full Stack Developer" },
        { name: "Francis Kyle Lorenzana", role: "Full Stack Developer" },
        { name: "Garvey Gene Sanjorjo", role: "Full Stack Developer" },
        { name: "Ed Kyle Estilliore", role: "Frontend Developer" },
      ]
    },
    {
      id: 3,
      title: "Fight of the Characters",
      category: "Game Dev | Java OOP",
      description:
        "A 2D desktop fighting game featuring iconic anime characters built with Java Swing.",
      longDescription:
        "Fight of the Characters is a turn-based strategy fighting game that demonstrates advanced Object-Oriented Programming concepts. It features a diverse roster of characters (Naruto, Sasuke, Gojo, etc.) created using the Factory Pattern. The game includes multiple stages, a leaderboard system, and custom graphical components built entirely with Java Swing. It showcases inheritance, polymorphism, and complex state management in a desktop application.",
      tags: ["Java", "Swing GUI", "OOP Patterns", "Factory Pattern", "Game Logic"],
      githubLink: "https://github.com/Nokitaki/Fight-of-the-Characters",
      video: fotcVid,
      team: [
        { name: "Joel Chandler Pili", role: "Lead Developer, Architect, Full Stack" },
        { name: "John Ragelo Gare", role: "Project Manager" },
        { name: "Kenji Ermita", role: "Database Engineer" },
        { name: "Claire Andrea Saniel", role: "Full Stack Developer" },
        { name: "Ezzel Jan Francisco", role: "Full Stack Developer" },
      ]
    },
    {
      id: 4,
      title: "Secure Notes App",
      category: "Web3 Integration | Full Stack",
      description:
        "A secure note-taking application featuring wallet-based authentication and database persistence.",
      longDescription:
        "This project bridges traditional web development with Web3 concepts. Built on the PERN stack (PostgreSQL, Express, React, Node.js), it allows users to manage personal notes securely. It utilizes the MeshSDK for Cardano wallet integration to handle user identity without traditional passwords. The backend employs raw SQL with the 'pg' library for efficient and direct database interactions.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Raw SQL", "Web3 Auth"],
      githubLink: "https://github.com/Nokitaki/Notes",
      video: notesVid,
      team: [
        { name: "Ronan Jake Pacquera", role: "Lead Developer" },
        { name: "Joel Chandler Pili", role: "Software Architect, Backend Developer" },
        { name: "Alexa Hara Tumungha", role: "Full Stack Developer" },
        { name: "Claire Andrea Saniel", role: "Frontend Developer" },
        { name: "Ezzel Jan Francisco", role: "Frontend Developer" },
        { name: "Miguel Antonio Dakay", role: "Frontend Developer" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-deep-bg overflow-x-hidden relative text-white selection:bg-neon-purple selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-neon-purple rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-neon-blue rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse"></div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto backdrop-blur-sm">
        <div className="text-2xl font-bold tracking-wider cursor-pointer">
          MY<span className="text-neon-purple">PORTFOLIO</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#projects" className="hover:text-neon-blue transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-neon-blue transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-neon-blue transition">
            Contact
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1g-GlmpTtDI-Qcef9ver4GgWmN1Qfm68M/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 border border-white/20 px-6 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition backdrop-blur-md"
        >
          Resume
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left mb-16 md:mb-0">
          <div className="inline-block px-3 py-1 mb-4 border border-neon-blue/30 rounded-full bg-neon-blue/10 text-neon-blue text-xs font-bold tracking-wide uppercase">
            Available for OJT work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
              Web of Tomorrow
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue font-extrabold text-xl">
              Joel Chandler G. Pili
            </span>
            , a full-stack developer turning ideas into reality. Check out my
            college projects and technical journey below.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-neon-purple to-accent-pink text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-neon-purple/25 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/5 transition text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full blur-3xl opacity-20 animate-pulse"></div>
          {/* FACE PLACEHOLDER */}
          <img
            src={profilePic}
            alt="Joel Chandler Pili"
            className="relative w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-full border-4 border-white/10 shadow-2xl shadow-neon-purple/50 transform hover:scale-105 transition duration-500"
          />
        </div>
      </main>

      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects"
        className="relative z-10 max-w-7xl mx-auto px-8 py-24"
      >
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured <span className="text-neon-purple">Projects</span>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-start gap-12 group`}
            >
              {/* Project Visual - NOW WITH VIDEO */}
              <div
                className="w-full md:w-3/5 relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative h-[350px] bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center group-hover:border-white/30 transition shadow-2xl">
                  
                  {/* Video Background (Autoplay, Muted, Loop) */}
                  <video
                    src={project.video}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-in-out"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  {/* Play Button Overlay (Optional hint) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm border border-white/20">
                      <span className="text-3xl">▶️</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-2/5">
                <span className="text-neon-blue font-mono text-sm mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neon-blue font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* DEVELOPMENT TEAM LIST (Added here) */}
                {project.team && (
                  <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-purple rounded-full"></span> Development Team
                    </h4>
                    <div className="flex flex-col gap-2">
                      {project.team.map((member, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="text-gray-200 font-bold">{member.name}</span>
                          <span className="text-gray-500 mx-2">|</span>
                          <span className="text-gray-400">{member.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-bold border-b border-neon-purple pb-1 hover:text-neon-purple transition flex items-center gap-2"
                >
                  View Case Study <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECH ARSENAL SECTION --- */}
      <section
        id="skills"
        className="relative z-10 max-w-7xl mx-auto px-8 py-24 bg-black/20 backdrop-blur-sm border-y border-white/5"
      >
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-neon-purple">///</span> Language Proficiency
            </h3>
            <div className="space-y-6">
              {languages.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-gray-300">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-neon-blue">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-deep-bg rounded-full border border-white/10 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-neon-blue">///</span> Frameworks & Tools
            </h3>
            <div className="space-y-6 mb-12">
              {frameworks.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-gray-300">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-neon-blue">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-deep-bg rounded-full border border-white/10 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-white">
                Specialized Modules
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-300 rounded-lg text-sm">
                  ☁️ AWS Cloud Ops
                </span>
                <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 text-purple-300 rounded-lg text-sm">
                  ⛓️ Blockchain (Cardano)
                </span>
                <span className="px-3 py-1 bg-green-900/30 border border-green-500/30 text-green-300 rounded-lg text-sm">
                  🤖 ServiceNow
                </span>
                <span className="px-3 py-1 bg-orange-900/30 border border-orange-500/30 text-orange-300 rounded-lg text-sm">
                  📱 Android Dev
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="relative z-10 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-deep-bg to-transparent"></div>
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to collaborate?
          </h2>
          <p className="text-gray-400 mb-8">
            Open for Full-stack, Cloud, and Blockchain opportunities.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=joelchandlerp@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-deep-bg px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Let's Talk
          </a>

          <p className="text-gray-500 mt-12 text-sm">
            © 2025 Joel Chandler Pili. Built Different.
          </p>
        </div>
      </footer>

      {/* --- PROJECT MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          {/* Increased max-width to 6xl for larger video area */}
          <div className="bg-deep-bg border border-white/10 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-20 bg-black/50 p-2 rounded-full transition"
              onClick={() => setSelectedProject(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2">
              {/* Visual Side - NOW WITH VIDEO - UPDATED SIZING */}
              <div className="h-64 md:h-full bg-black flex items-center justify-center relative overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 pointer-events-none z-10"></div>
                
                {/* Full Video with Controls - OBJECT CONTAIN */}
                <video 
                  src={selectedProject.video}
                  className="w-full h-full object-contain" 
                  controls
                  autoPlay
                  muted={false} // Allow sound in modal if user wants
                />
              </div>

              {/* Text Side */}
              <div className="p-8 md:p-12">
                <span className="text-neon-purple font-mono text-sm font-bold tracking-wider mb-2 block">
                  {selectedProject.category}
                </span>
                <h2 className="text-4xl font-bold mb-6">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm uppercase text-gray-500 font-bold mb-3 tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-md text-sm text-neon-blue border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DYNAMIC ACTION BUTTONS */}
                <div className="flex flex-col gap-4">
                  {/* LIVE DEMO BUTTON (If available) */}
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-gradient-to-r from-neon-purple to-accent-pink text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition shadow-lg shadow-neon-purple/25"
                    >
                      🚀 View Live Demo
                    </a>
                  )}

                  {/* REPOSITORY BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    {selectedProject.frontendLink && selectedProject.backendLink ? (
                      <>
                        <a
                          href={selectedProject.frontendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-neon-blue text-deep-bg font-bold px-6 py-3 rounded-full hover:bg-white transition"
                        >
                          Frontend Repo
                        </a>
                        <a
                          href={selectedProject.backendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center border border-neon-blue text-neon-blue font-bold px-6 py-3 rounded-full hover:bg-neon-blue hover:text-deep-bg transition"
                        >
                          Backend Repo
                        </a>
                      </>
                    ) : (
                      <a
                        href={selectedProject.githubLink || "https://github.com/Nokitaki?tab=repositories"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-neon-blue text-deep-bg font-bold px-8 py-3 rounded-full hover:bg-white transition"
                      >
                        View Code on GitHub
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;