import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-center w-14 h-8 rounded-full 
        transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDarkMode 
          ? 'bg-gray-700 focus:ring-blue-500' 
          : 'bg-yellow-200 focus:ring-yellow-500'
        }
      `}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Background gradient */}
      <div className={`
        absolute inset-0 rounded-full transition-all duration-300
        ${isDarkMode 
          ? 'bg-gradient-to-r from-blue-900 to-purple-900' 
          : 'bg-gradient-to-r from-yellow-300 to-orange-300'
        }
      `} />
      
      {/* Toggle circle */}
      <motion.div
        className={`
          relative z-10 flex items-center justify-center w-6 h-6 rounded-full shadow-lg
          transition-all duration-300 transform
          ${isDarkMode 
            ? 'bg-gray-800 text-blue-400 translate-x-3' 
            : 'bg-white text-yellow-600 -translate-x-3'
          }
        `}
        animate={{
          x: isDarkMode ? 12 : -12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {isDarkMode ? (
          <Moon size={14} className="drop-shadow-sm" />
        ) : (
          <Sun size={14} className="drop-shadow-sm" />
        )}
      </motion.div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun 
          size={12} 
          className={`transition-opacity duration-300 ${
            isDarkMode ? 'opacity-30' : 'opacity-60'
          } text-yellow-600`} 
        />
        <Moon 
          size={12} 
          className={`transition-opacity duration-300 ${
            isDarkMode ? 'opacity-60' : 'opacity-30'
          } text-blue-400`} 
        />
      </div>
    </motion.button>
  )
}

export default ThemeToggle
