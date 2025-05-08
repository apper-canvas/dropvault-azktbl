import { Link } from 'react-router-dom';
import getIcon from '../utils/iconUtils';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-full h-32 w-32 flex items-center justify-center mx-auto mb-8">
          <AlertTriangleIcon className="h-16 w-16 text-primary-500" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-surface-800 dark:text-surface-100">Page Not Found</h2>
        
        <p className="text-lg text-surface-600 dark:text-surface-300 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="btn btn-primary py-3 px-8 inline-flex items-center">
          <HomeIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

// Icon declarations
const AlertTriangleIcon = getIcon("AlertTriangle");
const HomeIcon = getIcon("Home");

export default NotFound;
