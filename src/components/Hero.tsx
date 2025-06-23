import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Code, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`
      }}
    />
  ));
  
   const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
            transition: 'all 0.5s ease-out'
          }}
        ></div>
        {floatingElements}
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `matrixRain ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                  Welcome to the Future
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="inline-block animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                  Crafting
                </span>
                <br />
                <span 
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block animate-slideInUp"
                  style={{ animationDelay: '0.4s' }}
                >
                  Digital Magic
                </span>
                <br />
                <span className="inline-block animate-slideInUp" style={{ animationDelay: '0.6s' }}>
                  One
                </span>{' '}
                <span 
                  className="relative inline-block animate-slideInUp"
                  style={{ animationDelay: '0.8s' }}
                >
                  <Code className="inline h-16 w-16 text-cyan-400 animate-spin-slow" />
                </span>{' '}
                <span className="inline-block animate-slideInUp" style={{ animationDelay: '1s' }}>
                  at a Time
                </span>
              </h1>
              
              <p className={`text-xl text-gray-300 leading-relaxed transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                We don't just build websites and apps – we create digital experiences that leave people speechless. 
                From mind-bending animations to cutting-edge functionality, we push the boundaries of what's possible.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button onClick={scrollToContact} className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>See the Magic</span>
              </button>
            </div>

            <div className={`flex items-center space-x-8 pt-8 transform transition-all duration-1000 delay-1200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {[
                { number: '100+', label: 'Mind-Blown Clients' },
                { number: '∞', label: 'Creative Possibilities' },
                { number: '24/7', label: 'Innovation Mode' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            {/* 3D Floating Code Editor */}
            <div className="relative perspective-1000">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl transform hover:rotateY-5 transition-transform duration-500 border border-cyan-500/30">
                <div className="bg-gray-800 rounded-2xl p-6 space-y-4 relative overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <span className="text-gray-400 text-sm ml-4">CodeCraft.exe</span>
                  </div>
                  
                  {/* Animated Code Lines */}
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-cyan-400">magic</span>
                      <span className="text-white">=</span>
                      <span className="text-green-400">'CodeCraft'</span>
                      <div className="w-2 h-4 bg-cyan-400 animate-pulse ml-1"></div>
                    </div>
                    <div className="h-4 bg-gradient-to-r from-blue-600 to-transparent rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-600 to-transparent rounded w-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="h-4 bg-gradient-to-r from-cyan-600 to-transparent rounded w-5/6 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    
                    {/* 3D Holographic Display */}
                    <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse"></div>
                      <img 
                        src="/logo.jpeg" 
                        alt="CodeCraft" 
                        className="h-16 w-16 object-contain relative z-10 animate-float"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent animate-scan"></div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <div className="h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded w-20 animate-pulse"></div>
                      <div className="h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded w-16 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating Status Indicators */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 border-2 border-green-400 rounded-2xl shadow-2xl p-4 animate-bounce">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-white animate-pulse" />
                  <span className="text-sm font-bold text-white">Creating Magic...</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-600 border-2 border-purple-400 rounded-2xl shadow-2xl p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-white animate-spin" />
                  <span className="text-sm font-bold text-white">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;