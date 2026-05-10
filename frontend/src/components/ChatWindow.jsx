import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

const ChatWindow = ({ messages, isLoading }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-gutter py-8 space-y-8 scroll-smooth z-10">
      {messages.length === 0 && !isLoading && (
        <div className="flex items-center justify-center h-full opacity-50">
          <p className="font-display-lg text-headline-lg text-primary text-center">
            Awaiting your command, Duelist...
          </p>
        </div>
      )}

      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg.content} isAssistant={msg.role === 'assistant'} />
      ))}

      {isLoading && (
        <div className="flex items-start gap-4 max-w-3xl">
          <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center border border-secondary text-secondary mystical-glow animate-pulse shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
          </div>
          <div className="glass-panel border-2 border-secondary/20 p-4 rounded-tr-xl rounded-b-xl italic text-secondary/70 flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
            <span className="font-label-sm tracking-widest">The Assistant is thinking...</span>
          </div>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;
