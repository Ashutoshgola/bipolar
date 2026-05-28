import React from 'react';
import { Moon, Sun } from 'lucide-react';

// Receive isDark and setIsDark as props from the parent
export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-orange-400 hover:scale-110 transition-all duration-300"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}