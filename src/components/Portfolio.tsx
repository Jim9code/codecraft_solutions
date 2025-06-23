import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Zap, Sparkles, Eye, Code, Rocket } from 'lucide-react';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const projects = [
    {
      title: 'Quantum E-Commerce',
      description: 'An e-commerce platform so advanced, it predicts what customers want before they know it themselves. Features AI-powered recommendations and holographic product previews.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Quantum', 'AI Engine', 'Blockchain', 'Hologram API'],
      category: 'Web Sorcery',
      color: 'from-blue-500 to-cyan-500',
      impact: '500% conversion increase'
    },
    {
      title: 'Telepathic Banking',
      description: 'A mobile banking app that reads your financial intentions. Secure transactions through biometric thoughts and quantum encryption.',
      image: 'https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Neural Interface', 'Quantum Security', 'Biometric Thoughts'],
      category: 'Mobile Magic',
      color: 'from-purple-500 to-pink-500',
      impact: 'Zero fraud incidents'
    },
    {
      title: 'AI Healthcare Oracle',
      description: 'Healthcare platform that diagnoses patients through their digital aura. Combines machine learning with mystical healing algorithms.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Digital Aura', 'Healing Algorithms', 'Quantum Diagnosis'],
      category: 'Digital Healing',
      color: 'from-green-500 to-emerald-500',
      impact: '99.9% accuracy rate'
    },
    {
      title: 'Time-Travel Learning',
      description: 'Educational platform that lets students learn from historical figures through time-portal technology and holographic teachers.',
      image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Time Portals', 'Holographic Teachers', 'Memory Implants'],
      category: 'Education Magic',
      color: 'from-orange-500 to-red-500',
      impact: '1000% retention rate'
    },
    {
      title: 'Molecular Gastronomy',
      description: 'Restaurant management system that creates dishes at the molecular level. Orders are fulfilled by nano-robots in real-time.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Nano-Robots', 'Molecular Cuisine', 'Taste Prediction'],
      category: 'Culinary Tech',
      color: 'from-yellow-500 to-orange-500',
      impact: 'Michelin Star guaranteed'
    },
    {
      title: 'Dimensional Real Estate',
      description: 'Property platform that shows homes across multiple dimensions. Virtual tours include parallel universe comparisons.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Multiverse API', 'Dimensional Tours', 'Reality Comparison'],
      category: 'Space-Time Commerce',
      color: 'from-indigo-500 to-purple-500',
      impact: 'Infinite property options'
    }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        {/* Floating Code Snippets */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {['<magic/>', 'function()', '{ code }', 'AI.think()', 'quantum.js'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="h-8 w-8 text-cyan-400 animate-bounce" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Digital Masterpieces
            </h2>
            <Code className="h-8 w-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Behold our portfolio of impossible projects that redefined what's possible in the digital realm.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: isVisible ? 'slideInUp 0.6s ease-out both' : 'none'
              }}
            >
              {/* Floating Particles */}
              {hoveredProject === index && Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-gradient-to-r ${project.color} rounded-full opacity-60 pointer-events-none`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${1 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 1}s`
                  }}
                />
              ))}

              <div className={`relative bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 border ${
                hoveredProject === index 
                  ? 'border-cyan-400 shadow-cyan-500/25' 
                  : 'border-gray-700'
              }`}>
                {/* Image Container with Overlay Effects */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Holographic Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-scan" />
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <button className={`bg-gradient-to-r ${project.color} text-white p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-2xl`}>
                        <Eye className="h-6 w-6" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-xl text-white p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-2xl">
                        <ExternalLink className="h-6 w-6" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-xl text-white p-4 rounded-full hover:scale-110 transition-transform duration-200 shadow-2xl">
                        <Github className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-xl`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/80 backdrop-blur-xl text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-400/50">
                      {project.impact}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold transition-all duration-300 ${
                      hoveredProject === index 
                        ? `bg-gradient-to-r ${project.color} bg-clip-text text-transparent` 
                        : 'text-white'
                    }`}>
                      {project.title}
                    </h3>
                    {hoveredProject === index && (
                      <Sparkles className="h-6 w-6 text-cyan-400 animate-spin" />
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className={`px-3 py-1 rounded-lg text-sm border transition-all duration-300 ${
                          hoveredProject === index
                            ? `bg-gradient-to-r ${project.color} text-white border-transparent shadow-lg`
                            : 'bg-gray-700 text-gray-300 border-gray-600'
                        }`}
                        style={{ 
                          animationDelay: `${tagIndex * 100}ms`,
                          animation: hoveredProject === index ? 'slideInUp 0.3s ease-out both' : 'none'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${project.color} blur-xl -z-10`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <span className="relative z-10 flex items-center space-x-3">
              <span>Witness More Magic</span>
              <Zap className="h-6 w-6 group-hover:animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;