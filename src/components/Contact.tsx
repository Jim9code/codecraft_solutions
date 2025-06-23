import React, { useState, useRef, useEffect } from 'react';
import { Mail, MessageCircle, Zap, Sparkles, Rocket, MapPin } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Professional Communication',
      details: 'codecraft4th@gmail.com',
      action: 'Click to compose email',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=codecraft4th@gmail.com&su=Project%20Inquiry%20from%20Website&body=Hi%20CodeCraft%20Team,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AProject%20Type:%20%0ABudget:%20%0ATimeline:%20%0A%0ADetails:%0A%0A%0ABest%20regards,',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      particles: 15
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      subtitle: 'Instant Messaging',
      details: '+234 701 427 8746',
      action: 'Click to start WhatsApp chat',
      link: 'https://wa.me/2347014278746?text=Hi%20CodeCraft!%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20project%20with%20you.',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      particles: 12
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-500"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        {/* Floating Magic Elements */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 4 === 0 ? (
              <Sparkles className="h-4 w-4 text-cyan-400" />
            ) : i % 4 === 1 ? (
              <Zap className="h-3 w-3 text-purple-400" />
            ) : i % 4 === 2 ? (
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            ) : (
              <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400" />
            )}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="h-8 w-8 text-cyan-400 animate-pulse" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <Sparkles className="h-8 w-8 text-purple-400 animate-bounce" />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to bring your digital vision to life? Choose your preferred way to connect with us and let's create something extraordinary together.
          </p>
        </div>

        {/* Main Contact Methods */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredContact(index)}
                onMouseLeave={() => setHoveredContact(null)}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: isVisible ? 'slideInUp 0.6s ease-out both' : 'none'
                }}
              >
                {/* Floating Particles */}
                {hoveredContact === index && Array.from({ length: method.particles }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${method.color} rounded-full opacity-60 pointer-events-none`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${1 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 1}s`
                    }}
                  />
                ))}

                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-gray-800/50 backdrop-blur-xl p-10 rounded-3xl border border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative text-center">
                    {/* Icon */}
                    <div className={`w-24 h-24 bg-gradient-to-br ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <method.icon className="h-12 w-12 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3">
                        <h3 className="font-bold text-white text-2xl">{method.title}</h3>
                        {hoveredContact === index && (
                          <Sparkles className="h-6 w-6 text-cyan-400 animate-spin" />
                        )}
                      </div>
                      
                      <div className="text-gray-400 text-sm">{method.subtitle}</div>
                      
                      <div className={`text-2xl font-mono mb-4 transition-all duration-300 ${
                        hoveredContact === index 
                          ? `bg-gradient-to-r ${method.color} bg-clip-text text-transparent` 
                          : 'text-cyan-400'
                      }`}>
                        {method.details}
                      </div>
                      
                      <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                        {method.action}
                      </div>
                    </div>

                    {/* Action Indicator */}
                    <div className="flex-shrink-0 mt-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse`}>
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-scan" />
                </a>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`text-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Based in Abuja, Nigeria</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're available 24/7 to discuss your project and bring your digital dreams to life. 
                Whether you prefer email for detailed discussions or WhatsApp for quick chats, we're here to help.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <span className="font-semibold">Ready to Create Digital Magic Together</span>
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;