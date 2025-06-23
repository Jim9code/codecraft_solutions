import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Define section colors and themes
  const sectionThemes = {
    home: {
      bg: 'bg-white/95 backdrop-blur-sm',
      border: 'border-gray-200',
      text: 'text-gray-900',
      logo: 'from-gray-900 via-blue-600 to-cyan-500',
      navHover: 'hover:text-blue-600',
      underline: 'from-blue-500 to-cyan-400'
    },
    services: {
      bg: 'bg-gradient-to-r from-cyan-500/90 via-blue-600/90 to-purple-600/90 backdrop-blur-xl',
      border: 'border-cyan-400/50',
      text: 'text-white',
      logo: 'from-white via-cyan-200 to-blue-200',
      navHover: 'hover:text-cyan-200',
      underline: 'from-cyan-300 to-white'
    },
    about: {
      bg: 'bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-red-600/90 backdrop-blur-xl',
      border: 'border-purple-400/50',
      text: 'text-white',
      logo: 'from-white via-purple-200 to-pink-200',
      navHover: 'hover:text-purple-200',
      underline: 'from-purple-300 to-pink-300'
    },
    portfolio: {
      bg: 'bg-gradient-to-r from-green-600/90 via-emerald-600/90 to-teal-600/90 backdrop-blur-xl',
      border: 'border-green-400/50',
      text: 'text-white',
      logo: 'from-white via-green-200 to-emerald-200',
      navHover: 'hover:text-green-200',
      underline: 'from-green-300 to-emerald-300'
    },
    contact: {
      bg: 'bg-gradient-to-r from-orange-600/90 via-red-600/90 to-pink-600/90 backdrop-blur-xl',
      border: 'border-orange-400/50',
      text: 'text-white',
      logo: 'from-white via-orange-200 to-red-200',
      navHover: 'hover:text-orange-200',
      underline: 'from-orange-300 to-red-300'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Get all sections
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Find which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const currentTheme = sectionThemes[activeSection as keyof typeof sectionThemes];

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ease-in-out transform ${
      scrolled 
        ? `${currentTheme.bg} shadow-2xl border-b ${currentTheme.border}` 
        : `${currentTheme.bg} border-b ${currentTheme.border}`
    }`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Glowing Border Effect */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${currentTheme.underline} opacity-60 transition-all duration-700`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/logo.jpeg" 
                alt="CodeCraft" 
                className="h-10 w-10 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 filter drop-shadow-lg"
              />
              {/* Glowing Ring Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.underline} rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 animate-pulse blur-sm scale-150`} />
              
              {/* Orbiting Dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-75" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" />
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r ${currentTheme.logo} bg-clip-text text-transparent transition-all duration-700 transform group-hover:scale-105`}>
              CodeCraft
            </span>
            
            {/* Magic Sparkle */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping" />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative ${currentTheme.text} ${currentTheme.navHover} transition-all duration-500 font-medium group transform hover:scale-110`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  filter: activeSection === item.href.slice(1) ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Animated Underline */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${currentTheme.underline} transition-all duration-300 group-hover:w-full`} />
                
                {/* Glowing Background on Active */}
                {activeSection === item.href.slice(1) && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.underline} opacity-20 rounded-lg blur-sm scale-110 animate-pulse`} />
                )}
                
                {/* Hover Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-current rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${-10 + Math.random() * 20}px`,
                        animation: `float ${1 + Math.random()}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </a>
            ))}
          </nav>

          <button
            className={`md:hidden relative group p-2 rounded-lg transition-all duration-500 ${currentTheme.text} hover:bg-white/10`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-8 h-8 flex items-center justify-center relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-all duration-300 rotate-180 scale-110" />
              ) : (
                <Menu className="h-6 w-6 transition-all duration-300 group-hover:scale-110" />
              )}
              
              {/* Glowing Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.underline} opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-opacity duration-300`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu with Section-Based Styling */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${currentTheme.border} animate-slideDown backdrop-blur-xl`}>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${currentTheme.text} ${currentTheme.navHover} transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 relative group`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animation: `slideInLeft 0.3s ease-out ${index * 50}ms both`
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Mobile Menu Item Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.underline} opacity-0 group-hover:opacity-10 rounded transition-opacity duration-300 -mx-2 -my-1`} />
                  
                  {/* Active Indicator */}
                  {activeSection === item.href.slice(1) && (
                    <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b ${currentTheme.underline} rounded-full animate-pulse`} />
                  )}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Section Transition Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${currentTheme.underline} transition-all duration-1000 ease-out`}
          style={{
            width: `${((Object.keys(sectionThemes).indexOf(activeSection) + 1) / Object.keys(sectionThemes).length) * 100}%`
          }}
        />
      </div>
    </header>
  );
};

export default Header;