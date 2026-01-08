import React, { useState, useEffect } from 'react';
import { Smile, Sliders, Palette, ChevronRight, CloudRain, Zap, Sun } from 'lucide-react';

export const Features: React.FC = () => {
  const [moodIndex, setMoodIndex] = useState(0);

  const moods = [
    { 
      icon: <CloudRain className="w-24 h-24 text-brand-black" strokeWidth={2.5} />, 
      label: "Feeling: Melancholy ☁️",
      color: "bg-blue-300" 
    },
    { 
      icon: <Zap className="w-24 h-24 text-brand-black" strokeWidth={2.5} />, 
      label: "Feeling: Energetic ⚡",
      color: "bg-brand-yellow"
    },
    { 
      icon: <Sun className="w-24 h-24 text-brand-black" strokeWidth={2.5} />, 
      label: "Feeling: Hopeful ☀️",
      color: "bg-brand-accent"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMoodIndex((prev) => (prev + 1) % moods.length);
    }, 2000); // Change mood every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const currentMood = moods[moodIndex];

  return (
    <section id="features" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight">
              A playlist that <br/>
              <span className="bg-brand-yellow px-2 inline-block -rotate-1 border-2 border-brand-black shadow-brutal">cares about you.</span>
            </h2>
        </div>

        <div className="space-y-24">
          
          {/* Feature 1: Mood Mirroring */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="bg-white border-2 border-brand-black p-8 rounded-[2.5rem] shadow-brutal-lg flex items-center justify-center overflow-hidden aspect-square">
                <div className="relative text-center">
                    <div className={`w-48 h-48 ${currentMood.color} rounded-full border-4 border-brand-black flex items-center justify-center relative shadow-brutal mb-6 mx-auto animate-float transition-colors duration-500`}>
                        <div key={moodIndex} className="animate-in zoom-in duration-300">
                          {currentMood.icon}
                        </div>
                    </div>
                    <div className="bg-brand-black text-white px-6 py-3 rounded-full font-bold inline-block transform rotate-2 transition-all duration-300 min-w-[200px]">
                        {currentMood.label}
                    </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 rounded-2xl bg-brand-black flex items-center justify-center mb-6 text-brand-yellow shadow-brutal transform -rotate-3">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Mood Check & Character</h3>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6 font-medium">
                Meet your new AI companion. It mirrors your emotions in real-time, validating how you feel without judgement. Seeing your mood visualized helps you externalize it.
              </p>
            </div>
          </div>

          {/* Feature 2: Smart Shift */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-1">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow border-2 border-brand-black flex items-center justify-center mb-6 text-brand-black shadow-brutal transform rotate-3">
                <Sliders className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Smart Shift Playlist</h3>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6 font-medium">
                Using the <strong>ISO-Principle</strong>, we curate a journey. We start with songs that match your current mood, then gradually shift the tempo, lyrics, and vibe to lift you up to a positive state.
              </p>
              <div className="bg-white border-2 border-brand-black p-4 rounded-xl inline-block shadow-brutal">
                  <div className="flex items-center gap-2 text-sm font-bold">
                      <span className="w-3 h-3 rounded-full bg-gray-400"></span> Sad
                      <ChevronRight className="w-4 h-4" />
                      <span className="w-3 h-3 rounded-full bg-brand-yellow"></span> Calm
                      <ChevronRight className="w-4 h-4" />
                      <span className="w-3 h-3 rounded-full bg-brand-accent"></span> Happy
                  </div>
              </div>
            </div>
            <div className="order-2 relative">
                <div className="bg-brand-black p-8 rounded-[2.5rem] shadow-brutal-lg aspect-square flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#F4E06D 2px, transparent 2px)', backgroundSize: '20px 20px'}}></div>
                    
                    {/* Music Cards */}
                    <div className="w-full bg-white/10 p-4 rounded-xl flex items-center gap-4 border border-white/20 blur-[1px] scale-95 opacity-50">
                        <div className="w-10 h-10 bg-white/20 rounded-lg"></div>
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                    </div>
                    <div className="w-full bg-brand-yellow p-4 rounded-xl flex items-center gap-4 border-2 border-white scale-105 z-10 shadow-xl">
                        <div className="w-10 h-10 bg-brand-black rounded-lg flex items-center justify-center">
                            <div className="w-1 h-3 bg-brand-yellow mx-0.5 animate-pulse"></div>
                            <div className="w-1 h-5 bg-brand-yellow mx-0.5 animate-pulse delay-75"></div>
                            <div className="w-1 h-2 bg-brand-yellow mx-0.5 animate-pulse delay-150"></div>
                        </div>
                        <div>
                            <div className="h-3 w-32 bg-brand-black rounded mb-2"></div>
                            <div className="h-2 w-20 bg-brand-black/50 rounded"></div>
                        </div>
                    </div>
                    <div className="w-full bg-white/10 p-4 rounded-xl flex items-center gap-4 border border-white/20 blur-[1px] scale-95 opacity-50">
                        <div className="w-10 h-10 bg-white/20 rounded-lg"></div>
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                    </div>
                </div>
            </div>
          </div>

          {/* Feature 3: AI Journaling */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="bg-white border-2 border-brand-black p-8 rounded-[2.5rem] shadow-brutal-lg aspect-square flex items-center justify-center relative bg-contain bg-center bg-no-repeat overflow-hidden">
                    
                    {/* Collage Container */}
                    <div className="relative w-[300px] h-[400px] bg-[#dcdcdc] rotate-3 shadow-[4px_4px_0px_0px_rgba(18,18,18,0.5)] border border-brand-black/20 overflow-hidden flex-shrink-0">
                        
                        {/* Background Map Texture */}
                        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80")', backgroundSize: 'cover'}}></div>

                        {/* Big Ben Left */}
                        <div className="absolute top-0 left-0 w-[55%] h-[60%] overflow-hidden border-r-2 border-brand-black/10">
                             <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&q=80" className="w-full h-full object-cover sepia-[0.3]" alt="Big Ben" />
                        </div>

                        {/* Top Right: Cafe/Vibe */}
                        <div className="absolute top-0 right-0 w-[45%] h-[40%] overflow-hidden bg-red-100 p-2">
                             <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&q=80" className="w-full h-full object-cover rounded-sm rotate-2 shadow-sm" alt="Coffee" />
                        </div>

                        {/* Cutout Text LONDON */}
                        <div className="absolute top-[45%] left-0 w-full z-20 flex justify-center gap-1 font-black font-display text-4xl transform -rotate-6 mix-blend-hard-light drop-shadow-md">
                            <span className="bg-brand-black text-white px-1 py-1 -rotate-3">L</span>
                            <span className="bg-brand-yellow text-brand-black px-1 py-1 rotate-2">O</span>
                            <span className="bg-brand-accent text-white px-1 py-1 -rotate-1">N</span>
                            <span className="bg-white text-brand-black px-1 py-1 rotate-3 border border-black">D</span>
                            <span className="bg-brand-black text-white px-1 py-1 -rotate-2">O</span>
                            <span className="bg-brand-yellow text-brand-black px-1 py-1 rotate-1">N</span>
                        </div>

                        {/* Phone Booth Bottom Left */}
                        <div className="absolute bottom-0 left-0 w-[60%] h-[45%] overflow-hidden border-t-2 border-brand-black/20 border-r-2">
                             <img src="https://images.unsplash.com/photo-1520986606214-8b456906c813?w=400&q=80" className="w-full h-full object-cover contrast-125" alt="Phone Booth" />
                        </div>

                        {/* Taxi Bottom Right */}
                        <div className="absolute bottom-0 right-0 w-[40%] h-[50%] overflow-hidden bg-gray-200">
                             <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&q=80" className="w-full h-full object-cover grayscale-[0.5]" alt="Taxi" />
                        </div>

                        {/* Ticket Sticker */}
                        <div className="absolute top-4 left-4 bg-white border border-black px-2 py-1 text-[0.5rem] font-mono rotate-[-10deg] shadow-sm z-30">
                            LHR ✈️
                            <br/>
                            BDG PASS
                        </div>

                         {/* Bear/Cute Sticker */}
                        <div className="absolute top-[35%] right-2 text-3xl z-30 drop-shadow-lg rotate-12">
                             🐻
                        </div>
                         {/* Heart Sticker */}
                        <div className="absolute bottom-4 left-[55%] text-2xl z-30 drop-shadow-lg -rotate-12">
                             🇬🇧
                        </div>

                    </div>

                    <div className="absolute bottom-6 bg-white/90 backdrop-blur-md border-2 border-brand-black px-5 py-2 rounded-full font-bold shadow-brutal rotate-[-2deg] z-40 flex items-center gap-2">
                        <span>Generated for You</span>
                        <Palette className="w-4 h-4 text-brand-accent" />
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-16 h-16 rounded-2xl bg-brand-accent border-2 border-brand-black flex items-center justify-center mb-6 text-brand-black shadow-brutal transform rotate-2">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">AI Art Journaling</h3>
              <p className="text-lg text-brand-text/70 leading-relaxed mb-6 font-medium">
                Words can be hard. ChillMuse automatically generates aesthetic daily collages based on the music you listened to and your mood logs. It's a diary you don't have to write—perfect for your Stories.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
