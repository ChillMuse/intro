import React from 'react';

const TEAM = [
  { 
      name: 'Ian', 
      role: 'Leader / Engineer', 
      description: 'API & Data Architecture. Coding Club President.',
      color: 'bg-brand-yellow',
      image: 'https://raw.githubusercontent.com/ChillMuse/intro/5af5f8da60f260698ae54a2bd360e86ffc5db307/components/p_ian.jpg'
  },
  { 
      name: 'Joan', 
      role: 'Research / Biz Strategy', 
      description: 'Business Modeling & Market Strategy.',
      color: 'bg-brand-accent',
      image: 'https://raw.githubusercontent.com/ChillMuse/intro/5af5f8da60f260698ae54a2bd360e86ffc5db307/components/p_joan.jpg'
  },
  { 
      name: 'Pauline', 
      role: 'UI/UX Design', 
      description: 'UX & UI Design',
      color: 'bg-green-400',
      image: 'https://raw.githubusercontent.com/ChillMuse/intro/5af5f8da60f260698ae54a2bd360e86ffc5db307/components/p_pauline.jpg'
  },
  { 
      name: 'Haim', 
      role: 'Video / Design', 
      description: 'Visual Storytelling & Content Creation.',
      color: 'bg-blue-400',
      image: 'https://raw.githubusercontent.com/ChillMuse/intro/5af5f8da60f260698ae54a2bd360e86ffc5db307/components/p_haim.jpg'
  },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Built by Students, <br/> For Students.</h2>
            <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
                We're a team of 4 founders who've been there. We're building the tool we wished we had.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => (
                <div key={idx} className="group relative">
                    <div className={`absolute inset-0 ${member.color} rounded-[2rem] translate-x-2 translate-y-2 border-2 border-brand-black`}></div>
                    <div className="relative bg-white border-2 border-brand-black p-6 rounded-[2rem] h-full hover:-translate-y-1 hover:-translate-x-1 transition-transform cursor-default">
                        <div className={`w-20 h-20 rounded-full border-2 border-brand-black mb-4 overflow-hidden relative ${member.color} shadow-sm`}>
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold font-display">{member.name}</h3>
                        <p className="text-brand-text/50 text-xs uppercase tracking-wider font-bold mt-1 mb-3">{member.role}</p>
                        <p className="text-brand-text/80 text-sm font-medium">
                            {member.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
