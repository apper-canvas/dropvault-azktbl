import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MainFeature from '../components/MainFeature';
import getIcon from '../utils/iconUtils';

function Home() {
  // Icon declarations
  const DropboxIcon = getIcon("Database");
  const GithubIcon = getIcon("Github");
  const UploadIcon = getIcon("Upload");
  const ShieldIcon = getIcon("Shield");
  const LayersIcon = getIcon("Layers");
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-primary-300/10 via-transparent to-transparent dark:from-primary-600/10 mask-radial-faded"></div>
        <div className="absolute bottom-0 right-0 left-0 h-[500px] bg-gradient-radial from-secondary-300/10 via-transparent to-transparent dark:from-secondary-600/10 mask-radial-faded"></div>
        <div className="absolute inset-0 bg-grid opacity-40"></div>
      </div>
      
      {/* Header */}
      <header className="py-6 border-b border-surface-200 dark:border-surface-700 bg-white/80 dark:bg-surface-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="mr-3 p-2 rounded-xl bg-primary-100/80 dark:bg-primary-900/50 shadow-sm">
              <DropboxIcon className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">
              DropVault
            </h1>
          </div>
          
          <nav className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline py-2 px-4 text-sm"
              aria-label="View source code on GitHub"
            >
              <GithubIcon 
                className="w-4 h-4 mr-2" 
                aria-hidden="true"
              />
              Source
            </a>
            <a href="#features" className="btn btn-primary py-2 px-4 text-sm">
              <UploadIcon className="w-4 h-4 mr-2" />
              Start Uploading
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 md:py-20">
        <div className="container-custom">
          {/* Hero Section */}
          <section className="mb-24 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
              Manage your files with secure and intuitive 
              <span className="gradient-text"> drag-and-drop </span>
              simplicity
            </h2>
            <p className="text-lg md:text-xl text-surface-600 dark:text-surface-300 max-w-2xl mx-auto mb-14">
              Upload, organize, and share your files securely with DropVault's modern, 
              intuitive interface - designed for professionals who value efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              <div className="card p-8 text-left card-hover-subtle relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-100 dark:bg-primary-900/30 rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-5 shadow-sm transform group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <UploadIcon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Drag & Drop Upload</h3>
                  <p className="text-surface-600 dark:text-surface-400">
                    Simple, intuitive interface for uploading files with visual progress indicators.
                  </p>
                </div>
              </div>
              
              <div className="card p-8 text-left card-hover-subtle relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-100 dark:bg-secondary-900/30 rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-100 dark:bg-secondary-900/50 flex items-center justify-center mb-5 shadow-sm transform group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <LayersIcon className="w-7 h-7 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">Organize & Categorize</h3>
                  <p className="text-surface-600 dark:text-surface-400">
                    Keep your files organized with custom folders, tags, and smart filters.
                  </p>
                </div>
              </div>
              
              <div className="card p-8 text-left card-hover-subtle relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-light/10 dark:bg-accent-dark/20 rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-accent-light/20 dark:bg-accent-dark/30 flex items-center justify-center mb-5 shadow-sm transform group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <ShieldIcon className="w-7 h-7 text-accent dark:text-accent-light" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">Secure Sharing</h3>
                  <p className="text-surface-600 dark:text-surface-400">
                    Share files securely with customizable permissions and expiring links.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Main Feature Section */}
          <section id="features" className="pt-10">
            <MainFeature />
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-surface-200 dark:border-surface-700 mt-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-surface-600 dark:text-surface-400 text-sm">
                © {new Date().getFullYear()} DropVault. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                Terms
              </a>
              <a href="#" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
                Privacy
              </a>
                  <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;