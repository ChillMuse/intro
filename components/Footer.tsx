import React from 'react';
import { Instagram, Twitter, Music, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2">
             <div className="bg-brand-yellow text-brand-black p-1 rounded">
                <Music className="w-5 h-5" />
             </div>
             <span className="text-xl font-bold font-display tracking-tight">ChillMuse</span>
          </div>

          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Contact</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 flex items-center justify-center gap-1 font-medium">
            <span>&copy; {new Date().getFullYear()} ChillMuse. Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>by high schoolers.</span>
        </div>
      </div>
    </footer>
  );
};