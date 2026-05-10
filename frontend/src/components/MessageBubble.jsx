import React from 'react';

const MessageBubble = ({ message, isAssistant }) => {
  if (isAssistant) {
    return (
      <div className="flex items-start gap-4 max-w-3xl">
        <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-secondary text-secondary mystical-glow shrink-0">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
        </div>
        <div className="glass-panel border-2 border-secondary/40 p-6 rounded-tr-xl rounded-b-xl mystical-glow card-sheen">
          <p className="font-headline-lg text-[18px] text-secondary mb-2 uppercase tracking-wide">Nexus Oracle</p>
          <p className="text-on-surface leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 max-w-3xl ml-auto flex-row-reverse">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-primary-container text-on-primary champion-glow shrink-0">
        <span className="material-symbols-outlined">person</span>
      </div>
      <div className="bg-surface-container-high border-2 border-primary/40 p-6 rounded-tl-xl rounded-b-xl champion-glow">
        <p className="font-headline-lg text-[18px] text-primary mb-2 uppercase tracking-wide text-right">Champion</p>
        <p className="text-on-surface leading-relaxed text-right whitespace-pre-wrap">
          {message}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
