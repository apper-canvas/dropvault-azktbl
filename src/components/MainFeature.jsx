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
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <div className="w-full lg:w-64 order-2 lg:order-1">
        <div className="card p-5 sticky top-20">
          <h3 className="font-semibold text-lg mb-4">Storage</h3>
          
          {/* Storage usage visualization */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>32.5 GB used</span>
              <span>50 GB</span>
            </div>
            <div className="h-2 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs text-surface-500 mt-1">65% of your storage used</p>
          </div>
          
          {/* Folders */}
          <div>
            <h4 className="font-medium text-sm uppercase text-surface-500 mb-2">Folders</h4>
            <ul className="space-y-1">
              {folders.map((folder) => (
                <li key={folder}>
                  <button 
                    onClick={() => setSelectedFolder(folder)}
                    className={`w-full text-left py-2 px-3 rounded-lg flex items-center text-sm transition-colors
                               ${selectedFolder === folder 
                                 ? 'bg-primary/10 dark:bg-primary/20 text-primary' 
                                 : 'hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-700 dark:text-surface-300'
                               }`}
                  >
                    <FolderIcon className={`w-4 h-4 mr-2 ${selectedFolder === folder ? 'text-primary' : 'text-surface-500'}`} />
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
            relative rounded-2xl border-2 border-dashed transition-all duration-200 mb-8
            p-8 flex flex-col items-center justify-center text-center
            ${isDragging 
              ? 'border-primary bg-primary/5 dark:bg-primary/10' 
              : 'border-surface-300 dark:border-surface-700 hover:border-primary dark:hover:border-primary hover:bg-surface-50 dark:hover:bg-surface-800/50'
            }
          `}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileInputChange}
            className="hidden"
          />
          
          <div className="w-16 h-16 rounded-full neumorphic flex items-center justify-center mb-4">
            <UploadCloudIcon className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2">
            {isDragging ? 'Drop files here' : 'Upload your files'}
          </h3>
          
          <p className="text-surface-600 dark:text-surface-400 mb-6 max-w-md">
            Drag and drop your files here, or click the button below to browse your files.
            Uploads will be saved to your <strong>{selectedFolder}</strong> folder.
          </p>
          
          <button
            onClick={handleButtonClick}
            className="btn btn-primary py-3 px-6 text-base shadow-sm"
          >
            Select Files
          </button>
        </div>
        
        {/* File List */}
        <div className="card p-6">
          <h3 className="font-semibold text-lg mb-4">Your Uploads</h3>
          
          {uploadedFiles.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 neumorphic rounded-full mx-auto flex items-center justify-center mb-4">
                <FileIcon className="w-8 h-8 text-surface-400 dark:text-surface-500" />
              </div>
              <p className="text-surface-600 dark:text-surface-400">
                No files uploaded yet. Drop some files above to get started.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {uploadedFiles.map((file) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center p-4 rounded-xl border border-surface-200 dark:border-surface-700
                              hover:bg-surface-50 dark:hover:bg-surface-800/70 group transition-all"
                  >
                    <div className="mr-4 flex-shrink-0">
                      {getFileIcon(file.type)}
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center mb-1">
                        <h4 className="font-medium text-surface-900 dark:text-surface-100 truncate">
                          {file.name}
                        </h4>
                        {file.isUploaded && (
                          <span className="ml-2 flex-shrink-0">
                            <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-xs text-surface-500">
                        <span className="mr-3">{formatFileSize(file.size)}</span>
                        <span className="mr-3">{file.folder}</span>
                        <span>
                          {new Date(file.lastModified).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeFile(file.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-surface-200 dark:hover:bg-surface-700"
                      aria-label="Remove file"
                    >
                      <TrashIcon className="w-4 h-4 text-surface-500 hover:text-accent" />
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