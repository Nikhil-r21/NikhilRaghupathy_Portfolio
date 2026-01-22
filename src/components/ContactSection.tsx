import React, { useRef, useState, useEffect } from 'react';
import { Send, AlertCircle, CheckCircle, Mail, MapPin, Phone, X } from 'lucide-react';

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type NotificationState = {
  isVisible: boolean;
  isSuccess: boolean | null;
  message: string | null;
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormInputs>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormInputs>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    isSuccess: null,
    message: null
  });
  
  // Timer reference for auto-dismissal
  const notificationTimerRef = useRef<number | null>(null);

  // Clear notification timer on unmount
  useEffect(() => {
    return () => {
      if (notificationTimerRef.current) {
        window.clearTimeout(notificationTimerRef.current);
      }
    };
  }, []);

  // Set up auto-dismissal when notification becomes visible
  useEffect(() => {
    if (notification.isVisible && notificationTimerRef.current === null) {
      notificationTimerRef.current = window.setTimeout(() => {
        setNotification(prev => ({ ...prev, isVisible: false }));
        notificationTimerRef.current = null;
      }, 3000);
    }
  }, [notification.isVisible]);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<FormInputs> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormInputs]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Reset any existing notification
    setNotification({
      isVisible: false,
      isSuccess: null,
      message: null
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setNotification({
          isVisible: true,
          isSuccess: true,
          message: result.message || 'Message sent successfully! You will receive a confirmation email shortly.'
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setErrors({});
      } else {
        setNotification({
          isVisible: true,
          isSuccess: false,
          message: result.message || 'Failed to send message. Please try again later.'
        });
      }
    } catch (error) {
      setNotification({
        isVisible: true,
        isSuccess: false,
        message: 'Network error. Please check your connection and try again.'
      });
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const dismissNotification = () => {
    // Clear any existing timer
    if (notificationTimerRef.current) {
      window.clearTimeout(notificationTimerRef.current);
      notificationTimerRef.current = null;
    }
    
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="What is this regarding?"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Write your message here..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg transition-colors flex items-center justify-center font-semibold ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {/* Notification Messages */}
              {notification.isVisible && notification.isSuccess !== null && (
                <div 
                  className={`p-4 ${
                    notification.isSuccess 
                      ? 'bg-green-50 border-green-200 text-green-700' 
                      : 'bg-red-50 border-red-200 text-red-700'
                  } border rounded-lg flex items-start transition-opacity duration-300 ease-in-out`}
                >
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    {notification.isSuccess ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">
                      {notification.isSuccess ? 'Message sent successfully!' : 'Something went wrong!'}
                    </p>
                    <p className="text-sm mt-1">{notification.message}</p>
                  </div>
                  <button 
                    onClick={dismissNotification}
                    className={`p-1 ml-2 rounded-full ${
                      notification.isSuccess 
                        ? 'hover:bg-green-100' 
                        : 'hover:bg-red-100'
                    }`}
                    aria-label="Close notification"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a
                    href="mailto:rnikhilvignesh21@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    rnikhilvignesh21@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 84287 54385</p>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
              <p className="text-gray-600 mb-4">
                Follow me on social media for updates on my latest projects and tech insights.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/nikhilraghupathy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com/Nikhil-r21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://medium.com/@rnikhilvignesh21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 1043.63 592.71"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M588.67,296.14c0,163.63-131.36,296.14-293.32,296.14S2,459.77,2,296.14,133.36,0,295.32,0,588.67,132.5,588.67,296.14Z"/>
                      <path d="M758.59,296.14c0,146.07-65.41,264.48-146.1,264.48s-146.1-118.41-146.1-264.48S531.8,31.66,612.49,31.66,758.59,150.07,758.59,296.14Z"/>
                      <path d="M1041.63,296.14c0,140.07-29.34,253.65-65.52,253.65s-65.52-113.58-65.52-253.65,29.34-253.65,65.52-253.65,65.52,113.58,65.52,253.65Z"/>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
