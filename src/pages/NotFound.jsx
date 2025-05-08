import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import getIcon from '../utils/iconUtils';

function NotFound() {
  // Icon declarations
  const HomeIcon = getIcon("Home");
  const AlertCircleIcon = getIcon("AlertCircle");
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center"
          >
            <AlertCircleIcon className="w-12 h-12 text-accent" />
          </motion.div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-surface-800 dark:text-surface-100">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-surface-700 dark:text-surface-200">
          Page Not Found
        </h2>
        <p className="text-surface-600 dark:text-surface-400 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="btn btn-primary py-3 px-6 text-base">
          <HomeIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </motion.div>
      
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-secondary/5 dark:bg-secondary/10"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

export default NotFound;