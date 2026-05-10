import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import InputBar from './components/InputBar';
import ThemeToggle from './components/ThemeToggle';
import { sendMessage } from './services/chatService';

function App() {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [chatHistory, setChatHistory] = useState({});

  // Initialize with one chat
  useEffect(() => {
    const initialId = '1';
    const initialChats = [{ id: initialId, preview: 'Initial Duel...' }];
    const initialMessages = [
      { role: 'assistant', content: 'Welcome to the Nexus, Duelist. I am here to analyze your strategies and optimize your deck for the upcoming tournament. What tactics shall we discuss today?' }
    ];

    setChats(initialChats);
    setActiveChatId(initialId);
    setMessages(initialMessages);
    setChatHistory({ [initialId]: initialMessages });
  }, []);

  const handleNewChat = () => {
    const newId = String(chats.length + 1);
    const newChat = { id: newId, preview: 'New Duel...' };
    setChats([newChat, ...chats]);
    setActiveChatId(newId);
    const initialMessages = [
      { role: 'assistant', content: 'A new duel begins. What is your strategy?' }
    ];
    setMessages(initialMessages);
    setChatHistory(prev => ({ ...prev, [newId]: initialMessages }));
  };

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    if (chatHistory[id]) {
      setMessages(chatHistory[id]);
    } else {
      setMessages([]);
    }
  };

  const handleSendMessage = async (prompt) => {
    // Add user message
    const newUserMsg = { role: 'user', content: prompt };
    const updatedUserMessages = [...messages, newUserMsg];
    setMessages(updatedUserMessages);
    setChatHistory(prev => ({ ...prev, [activeChatId]: updatedUserMessages }));
    setIsLoading(true);

    try {
      // Call decoupled service
      const reply = await sendMessage(prompt);
      
      // Add assistant response
      const updatedAssistantMessages = [...updatedUserMessages, { role: 'assistant', content: reply }];
      setMessages(updatedAssistantMessages);
      setChatHistory(prev => ({ ...prev, [activeChatId]: updatedAssistantMessages }));
      
      // Update chat preview if it's a new chat
      if (updatedUserMessages.length === 2) { // Only the welcome message and one user message
        setChats(prev => prev.map(c => 
          c.id === activeChatId ? { ...c, preview: prompt.substring(0, 20) + '...' } : c
        ));
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to communicate with Nexus Oracle.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <Toaster position="top-right" toastOptions={{
        className: 'bg-surface-container-high text-on-surface border border-primary',
        style: {
          background: '#292932',
          color: '#e4e1ed',
          border: '1px solid #f2ca50'
        }
      }} />

      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-surface dark:bg-surface-dim border-b-2 border-primary-container/30 shadow-[0_0_15px_rgba(233,195,73,0.2)] flex justify-between items-center px-gutter py-4 z-50 shrink-0">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">token</span>
          <h1 className="font-display-lg text-headline-lg text-primary tracking-widest uppercase">DUELIST NEXUS</h1>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar 
          chats={chats} 
          activeChatId={activeChatId} 
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
        />

        <main className="flex-1 flex flex-col relative bg-surface-container-lowest">
          <div className="absolute inset-0 field-pattern pointer-events-none"></div>
          
          <ChatWindow messages={messages} isLoading={isLoading} />
          <InputBar onSend={handleSendMessage} isLoading={isLoading} />
        </main>

        {/* Decorative Right Column (Side Art) */}
        <aside className="hidden xl:block w-72 h-full bg-surface-container-lowest border-l-2 border-primary-container/20 p-8 shrink-0">
          <div className="relative h-full flex flex-col items-center justify-center opacity-40">
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest z-10"></div>
            <img 
              alt="Mystical side art" 
              className="w-full h-full object-cover grayscale brightness-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpHbSPk54DgjFqskZWpZ8CcBAYR6i1HAzd4Itn2N0nZgJtyRj3AQerwTBzBzcrL8Wmry5CqG6RL89tW2vGcCzj0HPuP0cMCBz6QqxFWw80V3X__iRi8Z_6AhvqcfFpNjJzNPbSynfX09N3jyj9RMfFqH_riy7e44ohD_3h1E55wn-VwtXDr-9O5BZUfEMCf_x6nXjJEb1VSISNRSqj-wRRvB5fOIXgln4IcCWYw7MjyXFwjGjRR6uXQN6PT3buZlFnEgHWi6HF1jPf"
            />
            <p className="font-display-lg text-headline-lg text-primary rotate-90 whitespace-nowrap opacity-20 text-[120px] absolute pointer-events-none">STRATEGY</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
