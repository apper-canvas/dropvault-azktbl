import { Link } from 'react-router-dom';
import getIcon from '../utils/iconUtils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-surface-800 border-t border-surface-200 dark:border-surface-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <DatabaseIcon className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-surface-800 dark:text-white">DropVault</span>
            </div>
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              Securely upload, organize, and manage your files with our 
              cloud storage solution. Easy sharing, advanced security, and anywhere access.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-surface-800 dark:text-surface-100">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-surface-800 dark:text-surface-100">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/security" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">Security</Link></li>
              <li><Link to="/cookies" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-surface-800 dark:text-surface-100">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-surface-600 dark:text-surface-400">123 Innovation Drive, Tech Park, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary mr-2" />
                <span className="text-surface-600 dark:text-surface-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-primary mr-2" />
                <span className="text-surface-600 dark:text-surface-400">contact@dropvault.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-surface-200 dark:border-surface-700 mt-10 pt-6 text-center">
          <p className="text-surface-600 dark:text-surface-400">&copy; {currentYear} DropVault Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Icon declarations
const DatabaseIcon = getIcon("Database");
const TwitterIcon = getIcon("Twitter");
const LinkedinIcon = getIcon("Linkedin");
const GithubIcon = getIcon("Github");
const InstagramIcon = getIcon("Instagram");
const MapPinIcon = getIcon("MapPin");
const PhoneIcon = getIcon("Phone");
const MailIcon = getIcon("Mail");

export default Footer;