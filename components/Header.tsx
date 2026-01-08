import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 border-b-2 border-brand-black' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative bg-brand-black text-brand-yellow p-1.5 rounded-lg border-2 border-brand-black group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors">
            <Music className="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-2xl font-display font-bold text-brand-black tracking-tight">
            ChillMuse
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-brand-text/80 hover:text-brand-black hover:underline decoration-2 underline-offset-4 font-medium transition-all">Why?</a>
          <a href="#features" className="text-brand-text/80 hover:text-brand-black hover:underline decoration-2 underline-offset-4 font-medium transition-all">Features</a>
          <a href="#team" className="text-brand-text/80 hover:text-brand-black hover:underline decoration-2 underline-offset-4 font-medium transition-all">Team</a>
          <button 
            onClick={onJoinWaitlist}
            className="bg-brand-black text-brand-yellow px-6 py-2.5 rounded-full font-bold border-2 border-brand-black hover:bg-brand-yellow hover:text-brand-black hover:shadow-brutal transition-all transform hover:-translate-y-0.5"
          >
            Join Waitlist
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-b-2 border-brand-black py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top-10 shadow-brutal-lg">
          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">Why ChillMuse?</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">Features</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold">Team</a>
          <button 
            onClick={() => {
              onJoinWaitlist();
              setMobileMenuOpen(false);
            }}
            className="bg-brand-yellow text-brand-black py-4 rounded-xl font-bold border-2 border-brand-black shadow-brutal"
          >
            Join Waitlist
          </button>
        </div>
      )}
    </header>
  );
};