import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Target, Heart, Zap, Sparkles, Rocket, Code } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Reduced threshold for better detection
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Innovation Beyond Reality',
      description: 'We don\'t just follow trends - we create them. Our solutions are so advanced, they make science fiction look outdated.',
      color: 'from-blue-500 to-cyan-500',
      particles: 12
    },
    {
      icon: Users,
      title: 'Telepathic Collaboration',
      description: 'We understand your vision before you even speak it. Our team becomes an extension of your thoughts and dreams.',
      color: 'from-purple-500 to-pink-500',
      particles: 15
    },
    {
      icon: Award,
      title: 'Perfection Redefined',
      description: 'Excellence isn\'t our goal - it\'s our starting point. We deliver results that exceed even your wildest expectations.',
      color: 'from-green-500 to-emerald-500',
      particles: 10
    },
    {
      icon: Heart,
      title: 'Obsessive Passion',
      description: 'We don\'t just love what we do - we\'re completely obsessed with creating digital masterpieces that change lives.',
      color: 'from-red-500 to-orange-500',
      particles: 18
    }
  ];

  const stats = [
    { number: '∞', label: 'Lines of Magic Code', icon: Code },
    { number: '100+', label: 'Mind-Blown Clients', icon: Sparkles },
    { number: '24/7', label: 'Innovation Mode', icon: Zap },
    { number: '∞', label: 'Creative Possibilities', icon: Rocket }
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        {/* Floating Geometric Shapes */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            ) : i % 3 === 1 ? (
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rotate-45" />
            ) : (
              <div className="w-2 h-6 bg-gradient-to-b from-green-400 to-emerald-500" />
            )}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Company Info */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <img 
                    src="/logo.jpeg" 
                    alt="CodeCraft" 
                    className="h-16 w-16 object-contain rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to a colored div if logo fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'h-16 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300';
                      fallback.innerHTML = '<span class="text-white font-bold text-xl">CC</span>';
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    About CodeCraft
                  </h2>
                  <div className="flex items-center space-x-2 mt-2">
                    <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
                    <span className="text-cyan-400 font-semibold">Where Magic Meets Code</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're not just developers - we're digital alchemists who transform impossible ideas into 
                  breathtaking realities. Every line of code we write is infused with creativity, innovation, 
                  and a touch of magic that makes the impossible possible.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Based in Nigeria but thinking globally, we've revolutionized how businesses connect with 
                  their audiences through mind-bending digital experiences that leave lasting impressions.
                </p>
              </div>
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animation: isVisible ? 'slideInUp 0.6s ease-out both' : 'none'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <stat.icon className="h-8 w-8 text-cyan-400 group-hover:animate-pulse" />
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent mb-4">
                Our Core Values
              </h3>
              <p className="text-gray-400">The principles that fuel our digital sorcery</p>
            </div>
            
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group relative"
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: isVisible ? 'slideInRight 0.6s ease-out both' : 'none'
                }}
              >
                {/* Floating Particles */}
                {activeValue === index && Array.from({ length: value.particles }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${value.color} rounded-full opacity-60 pointer-events-none`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${1 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 1}s`
                    }}
                  />
                ))}

                <div className={`relative flex items-start space-x-6 p-6 rounded-2xl transition-all duration-500 ${
                  activeValue === index 
                    ? 'bg-gray-800/70 backdrop-blur-xl border border-cyan-400 shadow-2xl shadow-cyan-500/25 transform scale-105' 
                    : 'bg-gray-800/30 border border-gray-700 hover:border-gray-600'
                }`}>
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeValue === index 
                      ? `bg-gradient-to-br ${value.color} transform rotate-12 scale-110` 
                      : 'bg-gray-700'
                  }`}>
                    <value.icon className={`h-8 w-8 transition-colors duration-300 ${
                      activeValue === index ? 'text-white' : 'text-cyan-400'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold mb-3 transition-all duration-300 ${
                      activeValue === index 
                        ? `bg-gradient-to-r ${value.color} bg-clip-text text-transparent` 
                        : 'text-white'
                    }`}>
                      {value.title}
                    </h4>
                    <p className={`transition-colors duration-300 ${
                      activeValue === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {value.description}
                    </p>
                  </div>

                  {/* Magic Sparkle Effect */}
                  {activeValue === index && (
                    <div className="absolute top-4 right-4">
                      <Sparkles className="h-6 w-6 text-cyan-400 animate-spin" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;