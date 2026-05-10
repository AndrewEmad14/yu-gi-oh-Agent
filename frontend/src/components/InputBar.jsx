import React, { useState } from 'react';

const InputBar = ({ onSend, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;
    onSend(prompt);
    setPrompt('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <footer className="p-gutter z-20">
      <div className="max-w-4xl mx-auto glass-panel border-2 border-primary-container/40 p-1 rounded-xl shadow-2xl relative">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="bg-surface-container-low p-4 rounded-t-lg border-b border-outline-variant/30">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md resize-none h-24 placeholder:text-outline/50 outline-none"
              placeholder="State your command, Duelist..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
          </div>
          <div className="flex justify-end items-center px-4 py-3">
            <button
              type="submit"
              disabled={!prompt.trim() || isLoading}
              className="bg-gradient-to-b from-primary to-primary-container px-10 py-2 rounded-lg font-display-lg text-headline-lg text-[20px] text-on-primary-container border border-primary-fixed hover:scale-105 hover:shadow-[0_0_20px_rgba(242,202,80,0.4)] transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default InputBar;
