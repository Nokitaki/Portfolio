import React from 'react';

function App() {
  
  // --- PROJECT DATA (Edit this later with your real projects!) ---
  const projects = [
    {
      id: 1,
      title: "Cyborg Chronicles",
      description: "A futuristic blog platform built with React and Three.js. Features immersive 3D interactions and a neon-soaked UI design.",
      tags: ["React", "Three.js", "Tailwind"],
      // Use 'even' ID to swap image position later
      align: "left" 
    },
    {
      id: 2,
      title: "Neon Commerce",
      description: "Full-stack E-commerce store with real-time inventory tracking. Optimized for speed and high conversion rates.",
      tags: ["Node.js", "MongoDB", "Express"],
      align: "right"
    },
    {
      id: 3,
      title: "AI Chat Interface",
      description: "A dark-mode chat interface connecting to OpenAI's API. Features streaming text responses and code syntax highlighting.",
      tags: ["API Integration", "Next.js", "CSS Modules"],
      align: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-deep-bg overflow-x-hidden relative text-white selection:bg-neon-purple selection:text-white">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-neon-purple rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-neon-blue rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-pulse"></div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto backdrop-blur-sm">
        <div className="text-2xl font-bold tracking-wider cursor-pointer">
          DEV<span className="text-neon-purple">PORTFOLIO</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#projects" className="hover:text-neon-blue transition">Projects</a>
          <a href="#about" className="hover:text-neon-blue transition">About</a>
          <a href="#contact" className="hover:text-neon-blue transition">Contact</a>
        </div>
        <button className="bg-white/10 border border-white/20 px-6 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition backdrop-blur-md">
          Resume
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-left mb-16 md:mb-0">
          <div className="inline-block px-3 py-1 mb-4 border border-neon-blue/30 rounded-full bg-neon-blue/10 text-neon-blue text-xs font-bold tracking-wide uppercase">
            Available for work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
              Web of Tomorrow
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            I am a full-stack developer turning ideas into reality. 
            Check out my college projects and technical journey below.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <a href="#projects" className="bg-gradient-to-r from-neon-purple to-accent-pink text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-neon-purple/25">
              View My Work
            </a>
            <button className="border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/5 transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side: Hero Visual */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full blur-3xl opacity-20 animate-pulse"></div>
          {/* PLACEHOLDER: FACE / INTRO VIDEO */}
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] bg-gradient-to-b from-white/10 to-transparent rounded-3xl border border-white/10 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500">
            <span className="text-6xl mb-4">👋</span>
            <p className="text-gray-300 font-mono text-sm">
              [PLACEHOLDER: YOUR FACE]<br/>
              Insert Image or Video Here
            </p>
          </div>
        </div>
      </main>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured <span className="text-neon-purple">Projects</span>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 group`}
            >
              
              {/* Project Visual (Placeholder) */}
              <div className="w-full md:w-3/5 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative h-[350px] bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center group-hover:border-white/30 transition">
                  {/* REPLACE THIS WITH <img> or <video> LATER */}
                  <div className="text-center">
                    <span className="text-5xl mb-2 block opacity-50">🎬</span>
                    <p className="text-gray-500 font-mono text-sm">
                      [PLACEHOLDER: {project.title} Visual]<br/>
                      1920x1080 Screenshot or Demo Video
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-2/5">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neon-blue font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-sm font-bold border-b border-neon-purple pb-1 hover:text-neon-purple transition flex items-center gap-2">
                  View Case Study <span>→</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER / CALL TO ACTION --- */}
      <footer className="relative z-10 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-deep-bg to-transparent"></div>
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to collaborate?</h2>
          <button className="bg-white text-deep-bg px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Let's Talk
          </button>
          <p className="text-gray-500 mt-12 text-sm">© 2025 Your Name. Built with React & Tailwind.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;