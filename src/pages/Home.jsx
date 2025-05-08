import { Link } from 'react-router-dom';
import MainFeature from '../components/MainFeature';
import getIcon from '../utils/iconUtils';

function Home() {
  // Icon declarations
  const DropboxIcon = getIcon("Database");
  const GithubIcon = getIcon("Github");
  const UploadIcon = getIcon("Upload");
  const ShieldIcon = getIcon("Shield");
  const LayersIcon = getIcon("Layers");
  const ArrowRightIcon = getIcon("ArrowRight");
  const CheckIcon = getIcon("Check");
  const SparklesIcon = getIcon("Sparkles");
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-primary-300/10 via-transparent to-transparent dark:from-primary-600/10 mask-radial-faded"></div>
        <div className="absolute bottom-0 right-0 left-0 h-[500px] bg-gradient-radial from-secondary-300/10 via-transparent to-transparent dark:from-secondary-600/10 mask-radial-faded"></div>
        <div className="absolute inset-0 bg-grid opacity-40"></div>
      </div>
      
      {/* Header */}
      <header className="py-5 border-b border-surface-200 dark:border-surface-700 bg-white/90 dark:bg-surface-900/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
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
            <a href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline py-2 px-4 text-sm"
              aria-label="View source code on GitHub"
            >
              <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
              Source
            </a>
            <a
              href="#features"
              className="btn btn-primary py-2 px-4 text-sm group"
            >
              <UploadIcon className="w-4 h-4 mr-2" />
              Start Uploading
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="container-custom">
          <section className="mb-32 text-center relative">
            <div className="absolute -left-24 top-1/3 w-40 h-40 bg-primary-400/5 dark:bg-primary-400/10 rounded-full blur-2xl"></div>
            <div className="absolute -right-20 top-1/4 w-60 h-60 bg-secondary-400/5 dark:bg-secondary-400/10 rounded-full blur-3xl"></div>
            <div className="absolute left-1/4 bottom-0 w-20 h-20 bg-accent-light/5 dark:bg-accent-light/10 rounded-full blur-xl"></div>
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/40 border border-primary-100 dark:border-primary-700/50 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 shadow-sm">
              <SparklesIcon className="w-4 h-4 mr-1.5" />
              <span>New Cloud Storage Solution</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Securely manage files with 
              <span className="inline-block relative mx-2">
                <span className="gradient-text relative z-10"> drag-and-drop </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 dark:bg-primary-800/30 -rotate-1 rounded-full blur-sm -z-0"></div>
              </span>
              simplicity
            </h2>
            <p className="text-xl md:text-2xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Upload, organize, and share your files securely with a beautiful,
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
              <a href="#features" className="btn btn-primary py-3.5 px-8 text-base font-medium shadow-lg shadow-primary/20 dark:shadow-primary/10 hover:scale-105 transition-all duration-300">
                <UploadIcon className="w-5 h-5 mr-2" />
                Start Uploading
              </a>
              <a href="#features" className="btn btn-outline py-3.5 px-8 text-base font-medium hover:scale-105 transition-all duration-300">
                Learn More 
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Feature cards in a more modern layout */}
            <div className="relative max-w-6xl mx-auto mb-8">
              {/* Main feature card */}
              <div className="relative z-10 bg-white dark:bg-surface-800 rounded-3xl shadow-soft-lg border border-surface-200/80 dark:border-surface-700/50 overflow-hidden max-w-3xl mx-auto floating-animation">
                <div className="absolute inset-0 bg-grid-overlay opacity-80"></div>
                <div className="relative p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/70 dark:to-primary-800/40 flex items-center justify-center shadow-md">
                      <UploadIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-surface-900 dark:text-white">Intuitive File Management</h3>
                      <p className="text-surface-700 dark:text-surface-300 text-lg leading-relaxed mb-5">
                        Effortlessly organize and access your files with our drag-and-drop interface. No learning curve, just pure efficiency.
                      </p>
                      <ul className="space-y-3">
                        {['Smart file organization', 'Secure file encryption', 'Advanced sharing controls'].map((item, i) => (
                          <li key={i} className="flex items-center text-surface-700 dark:text-surface-300">
                            <span className="w-5 h-5 rounded-full bg-success-light/20 dark:bg-success-dark/20 flex items-center justify-center mr-3 shrink-0">
                              <CheckIcon className="w-3 h-3 text-success" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Decorative circle in background */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-50 dark:bg-primary-900/20 rounded-full opacity-80 rotating-slow"></div>
              </div>

              {/* Supporting feature cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="card p-6 flex items-start gap-4 card-hover transition-all hover:-translate-y-2 duration-300">
                  <div className="w-14 h-14 rounded-xl bg-secondary-100 dark:bg-secondary-900/50 flex items-center justify-center shadow-md">
                    <LayersIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Organize & Categorize</h3>
                    <p className="text-surface-600 dark:text-surface-400">
                      Easily organize your files into categories with our intuitive drag-and-drop interface.
                    </p>
                </div>
                
                <div className="card p-6 flex items-start gap-4 card-hover transition-all hover:-translate-y-2 duration-300">
                  <div className="w-14 h-14 rounded-xl bg-accent-light/20 dark:bg-accent-dark/30 flex items-center justify-center shadow-md">
                    <ShieldIcon className="w-7 h-7 text-accent dark:text-accent-light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Sharing</h3>
                    <p className="text-surface-600 dark:text-surface-400">
                      Share your files securely with customizable permissions and expiration dates.
                    </p>
                  </div>
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
      <footer className="py-10 border-t border-surface-200 dark:border-surface-700 mt-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-surface-600 dark:text-surface-400 text-sm">
            </div>
                © {new Date().getFullYear()} DropVault. All rights reserved.
              </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">Terms</Link>
              <Link to="/privacy" className="text-surface-600 dark:text-surface-400 hover:text-primary dark:hover:text-primary-light transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;