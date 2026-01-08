import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white border-2 border-brand-black rounded-3xl p-8 shadow-brutal-lg transform transition-all animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-text/40 hover:text-brand-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 border-2 border-brand-black shadow-brutal">
                <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-2">You're on the list!</h3>
            <p className="text-brand-text/70">Thanks for vibing with us. We'll be in touch soon.</p>
            <button 
              onClick={onClose}
              className="mt-6 text-brand-black underline font-bold hover:text-brand-accent"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display mb-2">Join the Movement</h3>
              <p className="text-brand-text/70 text-sm font-medium">
                Get early access to ChillMuse and help shape the future of teenage mental wellness.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-brand-text uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-cream border-2 border-brand-black rounded-xl px-4 py-3 text-brand-black placeholder-gray-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-brand-yellow text-brand-black border-2 border-brand-black font-bold py-3 rounded-xl hover:bg-brand-accent transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Joining...
                    </>
                ) : (
                    "Get Early Access"
                )}
              </button>
            </form>
            <p className="text-center text-xs text-brand-text/50 mt-6 font-medium">
                No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
};