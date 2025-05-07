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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 border-b border-surface-200 dark:border-surface-700">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="mr-3 p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
              <DropboxIcon className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DropVault
            </h1>
          </div>
          
          <nav className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="btn btn-outline py-2 px-4 text-sm">
              <GithubIcon className="w-4 h-4 mr-2" />
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
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              Manage your files with secure and intuitive 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> drag-and-drop </span>
              simplicity
            </h2>
            <p className="text-lg md:text-xl text-surface-600 dark:text-surface-300 max-w-2xl mx-auto mb-12">
              Upload, organize, and share your files securely with DropVault's modern, 
              intuitive interface - designed for professionals who value efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <div className="card p-6 text-left">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <UploadIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Drag & Drop Upload</h3>
                <p className="text-surface-600 dark:text-surface-400">
                  Simple, intuitive interface for uploading files with visual progress indicators.
                </p>
              </div>
              
              <div className="card p-6 text-left">
                <div className="w-12 h-12 rounded-full bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mb-4">
                  <LayersIcon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Organize & Categorize</h3>
                <p className="text-surface-600 dark:text-surface-400">
                  Keep your files organized with custom folders, tags, and smart filters.
                </p>
              </div>
              
              <div className="card p-6 text-left">
                <div className="w-12 h-12 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4">
                  <ShieldIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Sharing</h3>
                <p className="text-surface-600 dark:text-surface-400">
                  Share files securely with customizable permissions and expiring links.
                </p>
              </div>
            </div>
          </section>

          {/* Main Feature Section */}
          <section id="features" className="pt-6">
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
              <a href="#" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">
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