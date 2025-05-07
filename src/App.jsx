import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Terms from './pages/Terms';
import getIcon from './utils/iconUtils';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-900 text-surface-800 dark:text-surface-100 transition-colors duration-300 relative">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 transition-all duration-300 shadow-card hover:shadow-soft-lg"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
          {darkMode ? (
            <SunIcon className="w-5 h-5 text-yellow-400" />
          ) : (
            <MoonIcon className="w-5 h-5 text-surface-700" />
          )}
        </button>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={true}
        theme={darkMode ? "dark" : "light"}
        toastClassName="!bg-white/90 !dark:bg-surface-800/90 !backdrop-blur-sm !text-surface-800 !dark:text-surface-100 !shadow-soft !rounded-xl !border !border-surface-200 !dark:border-surface-700/50 !font-medium"
        className="!z-[9999]"
      />
    </div>
  );
}

// Icon declarations
const SunIcon = getIcon("Sun");
const MoonIcon = getIcon("Moon");

export default App;