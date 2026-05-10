import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Default to dark mode based on requirements
    return document.documentElement.classList.contains('dark') || true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="material-symbols-outlined p-2 text-on-surface-variant hover:text-primary transition-colors"
      title="Toggle Light/Dark Mode"
    >
      {isDark ? 'light_mode' : 'dark_mode'}
    </button>
  );
};

export default ThemeToggle;
