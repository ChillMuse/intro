import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Smile, Music, Footprints } from 'lucide-react';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinWaitlist }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % 3);
    }, 2000); // Switch every 2 seconds (2x faster)
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-brand-black shadow-brutal mb-8 animate-[fadeIn_1s_ease-out] rotate-[-2deg] hover:rotate-0 transition-transform">
          <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-bold text-brand-black tracking-wide">
            Coming Soon to iOS & Android
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tight text-brand-black">
          Break the <br className="hidden md:block" />
          <span className="relative inline-block px-4">
            <span className="absolute inset-0 bg-brand-yellow -rotate-2 rounded-lg -z-10 shadow-brutal"></span>
            Echo Chamber
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-text mb-4">
          When music makes you sadder... ChillMuse.
        </h2>

        <p className="text-lg md:text-xl text-brand-text/70 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          The AI-powered music companion that transforms passive listening into active wellness. 
          Stop spiraling—start tuning into a better headspace.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button 
            onClick={onJoinWaitlist}
            className="w-full sm:w-auto px-8 py-4 bg-brand-black text-white rounded-xl font-bold text-lg border-2 border-brand-black hover:bg-brand-text/90 shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-brand-black bg-white text-brand-black font-bold shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-accent" />
            How It Works
          </button>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-20 relative mx-auto max-w-4xl w-full flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-yellow/30 blur-[60px] rounded-full -z-10"></div>
            
            {/* Abstract Device Frame */}
            <div className="bg-white border-4 border-brand-black rounded-[3rem] p-4 shadow-brutal-lg w-full max-w-[340px] rotate-3 hover:rotate-0 transition-transform duration-500 relative bg-clip-padding">
                <div className="bg-brand-cream rounded-[2.5rem] border-2 border-brand-black/10 overflow-hidden aspect-[9/18] relative">
                    
                    {/* Status Bar Mock */}
                    <div className="absolute top-6 w-full px-8 flex justify-between items-center text-brand-black/20 z-20">
                        <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center"><div className="w-1.5 h-1.5 bg-current rounded-full"></div></div>
                        <div className="w-16 h-2 rounded-full bg-current"></div>
                    </div>

                    {/* Carousel Content */}
                    <div className="w-full h-full relative">
                        
                        {/* Slide 0: Intro (Smile) - Increased Size */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                            <div className="w-64 h-64 bg-brand-yellow rounded-full border-4 border-brand-black flex items-center justify-center shadow-brutal mb-10 animate-float">
                                <Smile className="w-32 h-32 text-brand-black" strokeWidth={2.5} />
                            </div>
                            <h3 className="text-4xl font-black font-display mb-3">Hi, Alex!</h3>
                            <p className="text-center text-brand-text/60 font-medium text-lg px-2">How's your vibe today?</p>
                        </div>

                        {/* Slide 1: Sadness (Rain) - Replaced with Github Raw URL for mood-2.png */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 ease-in-out ${currentSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                            <div className="relative mb-8 w-72 h-72 flex items-center justify-center">
                                 <img 
                                    src="https://raw.githubusercontent.com/ChillMuse/intro/f4e1ce780820e2e0b4c806aef2b4394640912dad/components/mood-2.png" 
                                    alt="Sad Mood" 
                                    className="w-full h-full object-contain drop-shadow-xl"
                                 />
                            </div>
                            <h3 className="text-3xl font-black font-display mb-3 text-brand-black">Feeling Blue?</h3>
                            <p className="text-center text-brand-text/60 font-medium text-lg px-2">It's okay. Let's process this together.</p>
                        </div>

                        {/* Slide 2: Active (Walking) - Replaced with Github Raw URL for mood-1.png */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700 ease-in-out ${currentSlide === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                            <div className="relative mb-8 w-72 h-72 flex items-center justify-center">
                                 <img 
                                    src="https://raw.githubusercontent.com/ChillMuse/intro/f4e1ce780820e2e0b4c806aef2b4394640912dad/components/mood-1.png" 
                                    alt="Walking Mood" 
                                    className="w-full h-full object-contain drop-shadow-xl"
                                 />
                            </div>
                            <h3 className="text-3xl font-black font-display mb-3">Walk it Off</h3>
                            <p className="text-center text-brand-text/60 font-medium text-lg px-2">Better beats, better steps, better days.</p>
                        </div>

                    </div>

                    {/* Persistent Player UI */}
                    <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-brand-cream via-brand-cream to-transparent pt-12">
                        <div className="bg-white p-4 rounded-xl border-2 border-brand-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 transform transition-all hover:scale-105 cursor-pointer">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-brand-black border-2 border-brand-black transition-colors duration-500 ${currentSlide === 1 ? 'bg-blue-300' : currentSlide === 2 ? 'bg-green-400' : 'bg-brand-yellow'}`}>
                                {currentSlide === 2 ? <Footprints className="w-6 h-6" /> : <Music className="w-6 h-6" />}
                            </div>
                            <div className="text-left overflow-hidden flex-1">
                                <div className="text-xs font-bold uppercase tracking-wider text-brand-text/50 mb-0.5">
                                    {currentSlide === 0 ? 'Now Playing' : currentSlide === 1 ? 'Up Next' : 'Queueing'}
                                </div>
                                <div className="font-bold text-base truncate">
                                    {currentSlide === 0 ? 'Morning Vibes' : currentSlide === 1 ? 'Rainy Days' : 'Power Walk Mix'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-0 xl:-left-12 bg-white p-4 rounded-2xl border-2 border-brand-black shadow-brutal -rotate-6 hidden md:block animate-float z-20" style={{animationDelay: '1s'}}>
                <span className="font-bold text-lg flex items-center gap-2">
                    <Music className="w-5 h-5 text-brand-accent" />
                    Emotional Regulation
                </span>
            </div>
            <div className="absolute bottom-1/3 right-0 xl:-right-12 bg-brand-yellow p-4 rounded-2xl border-2 border-brand-black shadow-brutal rotate-6 hidden md:block animate-float z-20" style={{animationDelay: '2s'}}>
                <span className="font-bold text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-black" />
                    AI Journaling
                </span>
            </div>
        </div>
      </div>
    </section>
  );
};
