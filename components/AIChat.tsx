
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const SocialLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialItems = [
    { icon: 'fa-whatsapp', name: 'WhatsApp', url: PERSONAL_INFO.whatsapp, color: 'bg-emerald-500' },
    { icon: 'fa-x-twitter', name: 'X / Twitter', url: PERSONAL_INFO.twitter, color: 'bg-slate-900' },
    { icon: 'fa-instagram', name: 'Instagram', url: PERSONAL_INFO.instagram, color: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Expanded Menu */}
      <div className={`flex flex-col items-end gap-3 mb-4 transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        {socialItems.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-4 rounded-3xl text-white font-bold shadow-xl transition-all hover:scale-110 active:scale-95 ${item.color}`}
          >
            <i className={`fab ${item.icon} text-xl`}></i>
            <span className="text-sm whitespace-nowrap">{item.name}</span>
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-500 ${isOpen ? 'bg-slate-800 rotate-180' : 'bg-indigo-600 hover:scale-110 active:scale-95'}`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
      </button>
    </div>
  );
};

export default SocialLinks;
