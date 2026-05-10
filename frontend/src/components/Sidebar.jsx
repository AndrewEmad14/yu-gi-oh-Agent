import React from 'react';

const Sidebar = ({ chats, activeChatId, onSelectChat, onNewChat }) => {
  return (
    <aside className="hidden lg:flex flex-col h-full w-64 bg-surface-container dark:bg-surface-container-low border-r-2 border-primary-container/40 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.5)] py-margin-safe z-40">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <img
            alt="Duelist Profile Avatar"
            className="w-10 h-10 rounded-full border border-primary"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgMqk7HPBnyD9ozLl5aQZwF0LpYrWC1o9MraFGt0ru5OWkGWP1RAgKiEQMjb8zqxpKK6NxA2QFkkFO7qC6iXb8fvUfVpxv3M2rmANJgesxUvgXih0eBulfNB_AFl8khNuUXx6EzgM3lODnPZ1cu_jOxn-E-EgYh_wsSZT0ytRieKuRJ_gyg9m06cnc9eVaTExcvhdXLX9IUSqq-q0CzRTp3mtnuGKzEk3zVOZz4lMKRwVHvWsuixEWB9NmDPjcbehuFzv2QNIhkgaG"
          />
          <div>
            <p className="font-headline-lg text-[18px] text-primary">Master Duelist</p>
            <p className="font-label-sm text-[10px] text-on-surface-variant">Rank: King of Games</p>
          </div>
        </div>
        <button
          onClick={onNewChat}
          className="w-full py-3 px-4 bg-primary text-on-primary font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-container transition-colors active:scale-95 duration-150"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Duel Chat
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto space-y-1">
        <p className="px-6 text-[10px] font-label-sm text-on-surface-variant uppercase tracking-tighter mb-2 opacity-50">Memory Vault</p>
        
        {/* Pinned Items - Static for now */}
        <div className="bg-secondary-container text-on-secondary-container border-l-4 border-primary px-4 py-3 flex items-center gap-3 active:translate-x-1 duration-150 cursor-pointer">
          <span className="material-symbols-outlined">history</span>
          <span className="font-body-md text-body-md">Duel History</span>
        </div>
        
        <div className="mt-8 px-6 space-y-4">
          {chats.map(chat => (
            <div
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`p-3 border rounded-lg transition-colors cursor-pointer group ${activeChatId === chat.id ? 'border-primary bg-surface-container-high' : 'border-outline-variant/30 hover:border-primary/50'}`}
            >
              <p className={`text-[12px] font-label-sm ${activeChatId === chat.id ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                Duel #{chat.id} - {chat.preview}
              </p>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
