'use client';

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <button 
      className=" transition-all hover:bg-gray-300/70 dark:hover:bg-gray-200/20 rounded-[50%] p-2 hover:text-yellow-300 dark:hover:text-orange-400"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === "dark" ? (
      <BsFillSunFill className='w-5 h-5' />
      ) : (
      <BsFillMoonFill className='w-5 h-5' />
      )}
    </button>
    
);
}