import React from 'react';
import { ArrowRight, Sparkles, Smile, Headphones } from 'lucide-react';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinWaitlist }) => {
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
        <div className="mt-20 relative mx-auto max-w-4xl w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-yellow/30 blur-[60px] rounded-full -z-10"></div>
            
            {/* Abstract Device Frame */}
            <div className="bg-white border-4 border-brand-black rounded-[3rem] p-4 shadow-brutal-lg max-w-[320px] mx-auto rotate-3 hover:rotate-0 transition-transform duration-500 relative bg-clip-padding">
                <div className="bg-brand-cream rounded-[2.5rem] border-2 border-brand-black/10 overflow-hidden aspect-[9/19] relative flex flex-col items-center justify-center">
                    
                    {/* Mock UI Elements */}
                    <div className="absolute top-8 w-full px-6 flex justify-between items-center text-brand-black/20">
                        <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center"><div className="w-1 h-1 bg-current rounded-full"></div></div>
                        <div className="w-16 h-2 rounded-full bg-current"></div>
                    </div>

                    <div className="text-center z-10 p-6">
                        <div className="w-32 h-32 mx-auto bg-brand-yellow rounded-full border-2 border-brand-black flex items-center justify-center mb-6 shadow-brutal animate-float">
                            <Smile className="w-16 h-16 text-brand-black" />
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-2">Hi, Alex!</h3>
                        <p className="text-sm text-brand-text/60 mb-6">You seem a bit down. Let's shift the vibe gradually?</p>
                        
                        <div className="bg-white p-4 rounded-xl border-2 border-brand-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent">
                                <Headphones className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-bold uppercase tracking-wider text-brand-text/50">Next Track</div>
                                <div className="font-bold text-sm">Better Days Ahead</div>
                            </div>
                        </div>
                    </div>

                    {/* Gradient Overlay at bottom */}
                    <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-brand-yellow/20 to-transparent"></div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 md:left-20 bg-white p-4 rounded-2xl border-2 border-brand-black shadow-brutal -rotate-6 hidden md:block animate-float" style={{animationDelay: '1s'}}>
                <span className="font-bold text-lg">🎵 Emotional Regulation</span>
            </div>
            <div className="absolute bottom-1/3 right-10 md:right-20 bg-brand-yellow p-4 rounded-2xl border-2 border-brand-black shadow-brutal rotate-6 hidden md:block animate-float" style={{animationDelay: '2s'}}>
                <span className="font-bold text-lg">✨ AI Journaling</span>
            </div>
        </div>
      </div>
    </section>
  );
};