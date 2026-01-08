import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { Technology } from './components/Technology';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';

const App: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen relative bg-brand-cream text-brand-black">
      {/* Organic Shapes Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-yellow rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-yellow rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onJoinWaitlist={openWaitlist} />
        <main className="flex-grow">
          <Hero onJoinWaitlist={openWaitlist} />
          <Problem />
          <Features />
          <Technology />
          <Team />
        </main>
        <Footer />
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
};

export default App;