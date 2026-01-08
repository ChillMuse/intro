import React from 'react';
import { Cpu, ShieldCheck, Music2 } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black text-brand-cream border-t-2 border-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-brand-yellow font-bold tracking-widest text-sm uppercase border border-brand-yellow px-3 py-1 rounded-full">Under the Hood</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">Psychology meets Technology</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-brand-yellow text-brand-black rounded-xl flex items-center justify-center mb-6">
                    <Music2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Lyrical Embedding</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                    We don't just classify by genre. We analyze lyrical depth to match songs that resonate with your specific emotional frequency.
                </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-brand-accent text-brand-black rounded-xl flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Hybrid Scoring</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Our unique recommendation engine balances <strong>Lyrics (70%)</strong> + <strong>Audio Preference (30%)</strong> for the perfect therapeutic mix.
                </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-green-400 text-brand-black rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Privacy First</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Transient Data Use. Your feelings are yours. Logs are encrypted and deleted immediately after your journal entry is generated.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};