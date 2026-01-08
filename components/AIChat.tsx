
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const SocialLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialItems = [
    { icon: 'fa-whatsapp', name: 'WhatsApp', url: PERSONAL_INFO.whatsapp, color: 'bg-emerald-500' },
    { icon: 'fa-github', name: 'GitHub', url: PERSONAL_INFO.github, color: 'bg-slate-800' },
    { icon: 'fa-x-twitter', name: 'X / Twitter', url: PERSONAL_INFO.twitter, color: 'bg-black' },
    { icon: 'fa-linkedin', name: 'LinkedIn', url: PERSONAL_INFO.linkedin, color: 'bg-indigo-600' }
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[150] flex flex-col items-end">
      {/* Expanded Menu */}
      <div className={`flex flex-col items-end gap-4 mb-6 transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        {socialItems.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 px-8 py-5 rounded-full text-white font-black shadow-2xl transition-all hover:scale-110 active:scale-95 ${item.color}`}
          >
            <i className={`fab ${item.icon} text-xl`}></i>
            <span className="text-xs uppercase tracking-widest">{item.name}</span>
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-500 ${isOpen ? 'bg-white text-black rotate-90 scale-90' : 'bg-indigo-600 hover:scale-110'}`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-paper-plane'} text-2xl`}></i>
      </button>
    </div>
  );
};

export default SocialLinks;
