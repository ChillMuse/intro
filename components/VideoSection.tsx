import React, { useState } from 'react';
import { Play, Star, Sparkles, ExternalLink } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const videoId = "YyQFrJjWNt8";

  return (
    <section className="py-24 bg-brand-yellow border-b-2 border-brand-black relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 text-brand-black/10 transform -rotate-12 hidden md:block">
        <Star className="w-24 h-24 fill-current" />
      </div>
      <div className="absolute bottom-10 right-10 text-brand-black/10 transform rotate-12 hidden md:block">
        <Sparkles className="w-32 h-32" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        <div className="mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-black text-brand-yellow font-bold text-sm mb-6 border-2 border-transparent shadow-sm">
                <Play className="w-4 h-4 fill-current" />
                <span>Watch the Promo</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-brand-black leading-tight">
                <span className="bg-white px-2 inline-block transform -rotate-2 border-2 border-brand-black shadow-brutal mt-2">The ChillMuse Experience</span>
            </h2>
            <p className="text-xl font-medium text-brand-black/80 max-w-2xl mx-auto leading-relaxed">
                See how we're flipping the script on emotional wellness. Music that listens to you, not just the other way around.
            </p>
        </div>

        {/* Video Container */}
        <div 
            className="max-w-5xl mx-auto relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Abstract shapes behind video */}
            <div className={`absolute -top-4 -left-4 w-full h-full bg-white rounded-[2.5rem] border-2 border-brand-black shadow-brutal -z-10 transition-transform duration-300 ${isHovered ? 'translate-x-2 translate-y-2' : ''}`}></div>
            
            <div className="relative aspect-video w-full bg-brand-black rounded-[2rem] border-4 border-brand-black shadow-brutal-lg overflow-hidden flex flex-col">
                <iframe 
                    className="w-full h-full object-cover flex-grow"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`} 
                    title="ChillMuse Promo Video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
            </div>
            
            {/* Fallback Link */}
            <div className="mt-4 flex justify-end">
                <a 
                    href={`https://youtu.be/${videoId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-black/60 hover:text-brand-black transition-colors"
                >
                    Watch on YouTube <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};
