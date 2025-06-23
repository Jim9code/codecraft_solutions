import React, { useState, useRef, useEffect } from 'react';
import { Globe, Smartphone, Code2, Palette, Shield, Zap, Sparkles, Rocket } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

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

  const services = [
    {
      icon: Globe,
      title: 'Web Sorcery',
      description: 'We don\'t just build websites - we craft digital spells that captivate, convert, and completely blow minds.',
      features: ['Reality-Bending Design', 'Lightning Speed', 'SEO Wizardry', 'Bulletproof Security'],
      color: 'from-blue-500 to-cyan-500',
      particles: 15
    },
    {
      icon: Smartphone,
      title: 'Mobile Magic',
      description: 'Apps so smooth and intuitive, users will think they\'re using technology from the future.',
      features: ['Cross-Dimensional', 'Telepathic UX', 'App Store Domination', 'Quantum Notifications'],
      color: 'from-purple-500 to-pink-500',
      particles: 12
    },
    {
      icon: Code2,
      title: 'Backend Alchemy',
      description: 'Server architecture so robust and scalable, it could power a small country\'s internet.',
      features: ['Infinite Scalability', 'Time-Travel APIs', 'Cloud Mastery', 'Real-time Everything'],
      color: 'from-green-500 to-emerald-500',
      particles: 18
    },
    {
      icon: Palette,
      title: 'Design Artistry',
      description: 'UI/UX so beautiful and intuitive, users will forget they\'re using technology.',
      features: ['Mind Reading UX', 'Emotion-Driven Design', 'Pixel Perfection', 'Future-Proof Aesthetics'],
      color: 'from-orange-500 to-red-500',
      particles: 10
    },
    {
      icon: Shield,
      title: 'Cyber Fortress',
      description: 'Security so advanced, even hackers will applaud your digital fortress.',
      features: ['Quantum Encryption', 'AI Threat Detection', 'Zero-Trust Architecture', 'Unhackable Code'],
      color: 'from-indigo-500 to-purple-500',
      particles: 20
    },
    {
      icon: Zap,
      title: 'Eternal Support',
      description: 'Support so comprehensive and proactive, problems solve themselves before you notice them.',
      features: ['Precognitive Monitoring', 'Instant Teleportation', 'Mind-Meld Debugging', 'Time-Loop Optimization'],
      color: 'from-yellow-500 to-orange-500',
      particles: 14
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-cyan-400 animate-pulse" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Superpowers
            </h2>
            <Rocket className="h-8 w-8 text-purple-400 animate-bounce" />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We don't just offer services - we deliver digital superpowers that transform businesses into legends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating Particles */}
              {hoveredCard === index && Array.from({ length: service.particles }, (_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-60 pointer-events-none`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${1 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 1}s`
                  }}
                />
              ))}

              <div className={`relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                hoveredCard === index 
                  ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Glowing Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <service.icon className="h-10 w-10 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Orbiting Elements */}
                  {hoveredCard === index && (
                    <>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    </>
                  )}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                  hoveredCard === index 
                    ? `bg-gradient-to-r ${service.color} bg-clip-text text-transparent` 
                    : 'text-white'
                }`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-all duration-300"
                      style={{ 
                        animationDelay: `${featureIndex * 100}ms`,
                        animation: hoveredCard === index ? 'slideInLeft 0.3s ease-out both' : 'none'
                      }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 transition-all duration-300 ${
                        hoveredCard === index ? 'animate-pulse scale-125' : ''
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />
                
                {/* Magic Sparkle Effect */}
                {hoveredCard === index && (
                  <div className="absolute top-4 right-4">
                    <Sparkles className="h-6 w-6 text-cyan-400 animate-spin" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <span className="relative z-10 flex items-center space-x-3">
              <span>Unleash the Magic</span>
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

export default Services;