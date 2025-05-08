import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

function MainFeature() {
  // Icon declarations
  const UploadCloudIcon = getIcon("UploadCloud");
  const XIcon = getIcon("X");
  const FileIcon = getIcon("File");
  const ImageIcon = getIcon("Image");
  const FileTextIcon = getIcon("FileText");
  const FilmIcon = getIcon("Film");
  const FileAudioIcon = getIcon("FileAudio");
  const ArchiveIcon = getIcon("Archive");
  const FileIcon2 = getIcon("File");
  const TrashIcon = getIcon("Trash");
  const FolderIcon = getIcon("Folder");
  const CheckCircleIcon = getIcon("CheckCircle");
  
  // State for the file upload zone
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('My Files');
  const fileInputRef = useRef(null);
  
  const folders = ['My Files', 'Work', 'Personal', 'Projects', 'Archives'];
  
  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };
  
  // Handle file upload
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFiles(files);
    }
  };
  
  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      processFiles(files);
    }
  };
  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  
  // Process and add files to the state
  const processFiles = (files) => {
    const newFiles = Array.from(files).map(file => ({
      id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: new Date(file.lastModified),
      folder: selectedFolder,
      isUploaded: true,
      progress: 100
    }));
    
    setUploadedFiles([...newFiles, ...uploadedFiles]);
    toast.success(`${newFiles.length} file${newFiles.length > 1 ? 's' : ''} uploaded successfully`);
  };
  
  // Remove a file from the list
  const removeFile = (id) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
    toast.info("File removed");
  };
  
  // Format file size into readable format
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  // Get icon based on file type
  const getFileIcon = (type) => {
    if (type.startsWith('image/')) {
      return <ImageIcon className="w-6 h-6 text-primary" />;
    } else if (type.startsWith('text/')) {
      return <FileTextIcon className="w-6 h-6 text-secondary" />;
    } else if (type.startsWith('video/')) {
      return <FilmIcon className="w-6 h-6 text-accent" />;
    } else if (type.startsWith('audio/')) {
      return <FileAudioIcon className="w-6 h-6 text-purple-500" />;
    } else if (type.includes('zip') || type.includes('compressed') || type.includes('archive')) {
      return <ArchiveIcon className="w-6 h-6 text-amber-500" />;
    } else {
      return <FileIcon2 className="w-6 h-6 text-surface-500" />;
    }
  };
  
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Sidebar */}
      <div className="w-full lg:w-64 order-2 lg:order-1">
        <div className="card p-6 sticky top-24 shadow-soft-lg border border-surface-200 dark:border-surface-700">
          <h3 className="font-semibold text-lg mb-6 border-b border-surface-100 dark:border-surface-800 pb-3">Storage</h3>
          
          {/* Storage usage visualization */}
          <div className="mb-10">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-surface-800 dark:text-surface-200">32.5 GB used</span>
              <span className="text-surface-500">50 GB</span>
            </div>
            <div className="h-3 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative" style={{ width: '65%' }}>
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 rounded-full"></div>
              </div>
            </div>
            <p className="text-xs text-surface-500 mt-2">65% of your storage used</p>
          </div>
          
          {/* Folders */}
          <div>
            <h4 className="font-medium text-xs uppercase tracking-wider text-surface-500 mb-3">Folders</h4>
            <ul className="space-y-1.5">
              {folders.map((folder) => (
                <li key={folder}>
                  <button 
                    onClick={() => setSelectedFolder(folder)}
                    className={`w-full text-left py-3 px-4 rounded-xl flex items-center text-sm transition-all duration-200
                               ${selectedFolder === folder 
                                ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-medium shadow-sm border border-primary-200 dark:border-primary-800/50' 
                                : 'hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-700 dark:text-surface-300 hover:shadow-sm border border-transparent'
                               }`}
                  >
                    <FolderIcon className={`w-4.5 h-4.5 mr-3 ${selectedFolder === folder ? 'text-primary' : 'text-surface-500'}`} />
                    {folder}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  
      {/* Main Content */}
      <div className="w-full lg:flex-1 order-1 lg:order-2">
        {/* Upload Zone */}
        <div 
          className={`
            relative rounded-3xl border-3 border-dashed transition-all duration-300 mb-12
            p-14 flex flex-col items-center justify-center text-center
            ${isDragging 
              ? 'border-primary-500 bg-primary-50/80 dark:bg-primary-900/30 scale-[1.02] shadow-lg' 
              : 'border-surface-300 dark:border-surface-700 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-surface-50/90 dark:hover:bg-surface-800/60 hover:scale-[1.01] hover:shadow-md'
            }
          `}
          onDragEnter={handleDragEnter} 
          onDragOver={handleDragOver} 
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-60 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-200/20 dark:bg-secondary-800/10 rounded-full blur-2xl"></div>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileInputChange}
            className="hidden"
          />

          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/70 dark:to-primary-800/40 shadow-lg flex items-center justify-center mb-8 transition-all relative z-10">
            <UploadCloudIcon className={`w-12 h-12 ${isDragging ? 'text-primary-600 dark:text-primary-400 animate-bounce' : 'text-primary-600 dark:text-primary-400'}`} />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
            {isDragging ? 'Drop files here!' : 'Upload your files'}
          </h3>
          
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-10 max-w-lg relative z-10">
            Drag and drop your files here, or click the button below to browse your files.
            Uploads will be saved to your <span className="font-semibold text-primary-600 dark:text-primary-400 px-2 py-0.5 bg-primary-50 dark:bg-primary-900/40 rounded-md">{selectedFolder}</span> folder.
          </p>
          
          <button
            onClick={handleButtonClick}
            className="btn btn-gradient py-4 px-10 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium relative z-10"
          >
            <UploadCloudIcon className="w-5 h-5 mr-2" />
            Browse Files
          </button>
        </div>
        
        {/* File List */}
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-4">Your Uploads</h3>
          
          {uploadedFiles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-2xl bg-surface-100 dark:bg-surface-800 mx-auto flex items-center justify-center mb-6 shadow-sm">
                <FileIcon className="w-10 h-10 text-surface-400 dark:text-surface-500 opacity-70" />
              </div>
              <p className="text-lg text-surface-600 dark:text-surface-400">
                No files uploaded yet. Drop some files above to get started.
              </p>
            </div>
          ) : (
            <AnimatePresence>
              <div className="space-y-5">
                {uploadedFiles.map(file => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center p-5 rounded-2xl border border-surface-200 dark:border-surface-700
                              hover:bg-white/80 dark:hover:bg-surface-800/70 group transition-all duration-200
                              hover:shadow-md hover:scale-[1.01] hover:border-surface-300 dark:hover:border-surface-600"
                  >
                    <div className="mr-5 flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center group-hover:bg-surface-50 dark:group-hover:bg-surface-700 transition-colors">
                        {getFileIcon(file.type)}
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center mb-1.5">
                        <h4 className="font-semibold text-surface-900 dark:text-surface-100 truncate group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                          {file.name}
                        </h4>
                        {file.isUploaded && (
                          <span className="ml-2 flex-shrink-0">
                            <CheckCircleIcon className="w-4 h-4 text-success dark:text-success-light" />
                           </span>
                         )}
                       </div>
                       <div className="flex items-center text-xs text-surface-500 dark:text-surface-400">
                         <span className="mr-3">
                          {formatFileSize(file.size)}
                        </span>
                        <span className="mr-3 flex items-center">
                          <FolderIcon className="w-3 h-3 mr-1 opacity-70" />
                          {file.folder}
                        </span>
                        <span className="opacity-70">
                          {new Date(file.lastModified).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    <button
                       onClick={() => removeFile(file.id)}
                       className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-2.5 rounded-full hover:bg-accent-light/10 dark:hover:bg-accent-dark/20 hover:text-accent dark:hover:text-accent-light transform hover:scale-110"
                       aria-label="Remove file" title="Remove file">
                       <TrashIcon className="w-5 h-5" />
                     </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainFeature;
                ))}