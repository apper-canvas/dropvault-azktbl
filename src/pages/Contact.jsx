import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import getIcon from '../utils/iconUtils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        toast.success('Your message has been sent! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    } else {
      toast.error('Please fix the errors in the form before submitting.');
    }
  };

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-900">
      {/* Header */}
      <div className="bg-white dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <DatabaseIcon className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-surface-800 dark:text-white">DropVault</span>
            </Link>
            <Link to="/" className="btn btn-outline py-2 px-4 text-sm">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-primary-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
        <div className="container-custom py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get in Touch</h1>
          <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="card p-6 md:p-8 space-y-8">
              <h2 className="text-2xl font-semibold text-surface-800 dark:text-surface-100">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-surface-800 dark:text-surface-200">Our Office</h3>
                    <p className="text-surface-600 dark:text-surface-400 mt-1">123 Innovation Drive, Tech Park<br />San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-surface-800 dark:text-surface-200">Phone</h3>
                    <p className="text-surface-600 dark:text-surface-400 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <MailIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-surface-800 dark:text-surface-200">Email</h3>
                    <p className="text-surface-600 dark:text-surface-400 mt-1">contact@dropvault.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
                    <ClockIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-surface-800 dark:text-surface-200">Business Hours</h3>
                    <p className="text-surface-600 dark:text-surface-400 mt-1">Monday - Friday: 9AM - 5PM PST<br />Weekends: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-surface-200 dark:border-surface-700">
                <h3 className="font-medium text-surface-800 dark:text-surface-200 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-surface-100 dark:bg-surface-700 p-2 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors">
                    <TwitterIcon className="h-5 w-5 text-surface-600 dark:text-surface-300" />
                  </a>
                  <a href="#" className="bg-surface-100 dark:bg-surface-700 p-2 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors">
                    <LinkedinIcon className="h-5 w-5 text-surface-600 dark:text-surface-300" />
                  </a>
                  <a href="#" className="bg-surface-100 dark:bg-surface-700 p-2 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors">
                    <GithubIcon className="h-5 w-5 text-surface-600 dark:text-surface-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-surface-800 dark:text-surface-100 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`input-field ${errors.name ? 'border-accent dark:border-accent' : ''}`} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-sm text-accent">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`input-field ${errors.email ? 'border-accent dark:border-accent' : ''}`} placeholder="your.email@example.com" />
                    {errors.email && <p className="mt-1 text-sm text-accent">{errors.email}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`input-field ${errors.subject ? 'border-accent dark:border-accent' : ''}`} placeholder="How can we help you?" />
                  {errors.subject && <p className="mt-1 text-sm text-accent">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" className={`input-field resize-none ${errors.message ? 'border-accent dark:border-accent' : ''}`} placeholder="Tell us more about your inquiry..."></textarea>
                  {errors.message && <p className="mt-1 text-sm text-accent">{errors.message}</p>}
                </div>
                
                <button type="submit" disabled={loading} className={`btn btn-primary py-3 px-6 w-full md:w-auto ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Icon declarations
const ArrowLeftIcon = getIcon("ArrowLeft");
const DatabaseIcon = getIcon("Database");
const MapPinIcon = getIcon("MapPin");
const PhoneIcon = getIcon("Phone");
const MailIcon = getIcon("Mail");
const ClockIcon = getIcon("Clock");
const TwitterIcon = getIcon("Twitter");
const LinkedinIcon = getIcon("Linkedin");
const GithubIcon = getIcon("Github");

export default Contact;