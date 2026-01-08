import React, { useEffect, useRef } from 'react';
import { RefreshCcw, HeartCrack, ZapOff, Repeat, Music, Disc, Mic2, Headphones } from 'lucide-react';

const EchoVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = container.clientWidth;
    let height = container.clientHeight;
    
    const setSize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    
    setSize();
    window.addEventListener('resize', setSize);

    // --- Animation Logic ---

    const emotions = [
        { name: 'SADNESS', color: '96, 165, 250', hex: '#60A5FA', face: '😢' }, // blue-400
        { name: 'ANGER', color: '248, 113, 113', hex: '#F87171', face: '😠' },   // red-400
        { name: 'ANXIETY', color: '167, 139, 250', hex: '#A78BFA', face: '😰' }, // purple-400
        { name: 'NUMBNESS', color: '156, 163, 175', hex: '#9CA3AF', face: '😐' }, // gray-400
    ];

    // Bouncer State
    // Speed kept moderate
    const initVx = (Math.random() > 0.5 ? 1 : -1) * (2.0);
    const initVy = (Math.random() > 0.5 ? 1 : -1) * (2.0);

    const bouncer = {
        x: width / 2,
        y: height / 2,
        vx: initVx, 
        vy: initVy,
        size: 100 // Diameter of the circle
    };

    // Trail for the echo effect
    const trail: {x: number, y: number, opacity: number}[] = [];
    
    let currentEmotionIndex = 0;
    let lastSwitchTime = 0;

    const animate = (timestamp: number) => {
      if (!lastSwitchTime) lastSwitchTime = timestamp;

      // Emotion Switching Logic (every 3s)
      if (timestamp - lastSwitchTime > 3000) {
          currentEmotionIndex = (currentEmotionIndex + 1) % emotions.length;
          lastSwitchTime = timestamp;
      }
      const currentEmotion = emotions[currentEmotionIndex];

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Update Bouncer Position
      bouncer.x += bouncer.vx;
      bouncer.y += bouncer.vy;

      // Wall Bouncing Logic
      const radius = bouncer.size / 2;
      
      if (bouncer.x - radius < 0) {
          bouncer.x = radius;
          bouncer.vx *= -1;
      } else if (bouncer.x + radius > width) {
          bouncer.x = width - radius;
          bouncer.vx *= -1;
      }

      if (bouncer.y - radius < 0) {
          bouncer.y = radius;
          bouncer.vy *= -1;
      } else if (bouncer.y + radius > height) {
          bouncer.y = height - radius;
          bouncer.vy *= -1;
      }

      // Add trail point
      trail.push({ x: bouncer.x, y: bouncer.y, opacity: 0.4 });

      // Draw Trail
      for (let i = trail.length - 1; i >= 0; i--) {
          const t = trail[i];
          t.opacity -= 0.01; // Fade speed
          if (t.opacity <= 0) {
              trail.splice(i, 1);
          } else {
              ctx.beginPath();
              // Trail dots are slightly smaller than the main body (radius * 0.6)
              ctx.arc(t.x, t.y, radius * 0.6, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${currentEmotion.color}, ${t.opacity})`;
              ctx.fill();
          }
      }

      // Draw Solid Circle Background (No transparency)
      ctx.beginPath();
      ctx.arc(bouncer.x, bouncer.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = currentEmotion.hex; // Solid color
      ctx.fill();
      
      // Draw Border
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#121212'; // brand-black
      ctx.stroke();

      // Draw Emoji
      ctx.font = `${bouncer.size * 0.6}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Slight vertical offset for emoji centering
      ctx.fillText(currentEmotion.face, bouncer.x, bouncer.y + (bouncer.size * 0.05));
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[500px] bg-brand-cream rounded-[2.5rem] border-2 border-brand-black overflow-hidden relative mb-16 shadow-brutal transition-all">
      
      {/* Background Wallpaper Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex flex-wrap content-center justify-center gap-16 p-8 -rotate-12 scale-150 select-none z-0">
         {Array.from({ length: 45 }).map((_, i) => {
            const Icon = [Music, Disc, Mic2, Headphones][i % 4];
            return <Icon key={i} className="w-20 h-20 text-brand-black" strokeWidth={1.5} />;
         })}
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-10" />
      
      <div className="absolute top-8 left-0 w-full text-center pointer-events-none z-20 px-4">
        <span className="inline-block bg-white/90 backdrop-blur-sm border-2 border-brand-black shadow-brutal px-6 py-3 rounded-2xl">
            <span className="text-xl md:text-2xl font-black font-display text-brand-black tracking-tight uppercase">
                Echo Chamber in Your Music Playlist
            </span>
        </span>
      </div>
    </div>
  );
};

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 relative bg-white border-y-2 border-brand-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-6">The Emotional Echo Chamber</h2>
          <p className="text-xl text-brand-text/70 font-medium">
            Sad music making you sadder? Existing algorithms are designed for engagement, not wellness. They trap you in a loop.
          </p>
        </div>

        {/* Interactive Visual */}
        <div className="max-w-5xl mx-auto">
            <EchoVisual />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Repeat className="w-10 h-10 text-brand-black" />,
              title: "The Sadness Loop",
              description: "Sad User → Sad Songs → Deeper Sadness. Streaming services validate your mood initially but reinforce it indefinitely."
            },
            {
              icon: <HeartCrack className="w-10 h-10 text-brand-accent" />,
              title: "Passive Listening",
              description: "Without active intervention, you're just consuming emotions that drain your battery instead of recharging it."
            },
            {
              icon: <ZapOff className="w-10 h-10 text-brand-black" />,
              title: "Algorithmic Trap",
              description: "You want to feel better, but the 'Up Next' queue keeps pulling you back down into the dark."
            }
          ].map((item, index) => (
            <div key={index} className="p-8 rounded-[2rem] bg-brand-cream border-2 border-brand-black shadow-brutal hover:shadow-brutal-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all group">
              <div className="w-16 h-16 rounded-full bg-brand-yellow border-2 border-brand-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
              <p className="text-brand-text/70 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
