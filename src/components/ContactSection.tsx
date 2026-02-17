import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, CheckCircle, Mail, MapPin, Linkedin, Github } from 'lucide-react';

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
  
  const notificationTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (notificationTimerRef.current) {
        window.clearTimeout(notificationTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (notification.isVisible && notificationTimerRef.current === null) {
      notificationTimerRef.current = window.setTimeout(() => {
        setNotification(prev => ({ ...prev, isVisible: false }));
        notificationTimerRef.current = null;
      }, 5000);
    }
  }, [notification.isVisible]);

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
          message: result.message || 'Message sent successfully!'
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
          message: result.message || 'Failed to send message. Please try again.'
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
    if (notificationTimerRef.current) {
      window.clearTimeout(notificationTimerRef.current);
      notificationTimerRef.current = null;
    }
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200 space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 ${
                    errors.name ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-neutral-50 focus:bg-white'
                  }`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-neutral-50 focus:bg-white'
                  }`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 ${
                    errors.subject ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-neutral-50 focus:bg-white'
                  }`}
                  placeholder="What is this regarding?"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-400 bg-red-50' : 'border-neutral-200 bg-neutral-50 focus:bg-white'
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-neutral-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Notification */}
              {notification.isVisible && notification.isSuccess !== null && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    notification.isSuccess
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                >
                  {notification.isSuccess ? (
                    <CheckCircle size={20} className="flex-shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold mb-1">
                      {notification.isSuccess ? 'Success!' : 'Error'}
                    </p>
                    <p className="text-sm">{notification.message}</p>
                  </div>
                  <button
                    onClick={dismissNotification}
                    className="text-current opacity-60 hover:opacity-100"
                  >
                    ×
                  </button>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 border border-primary-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-600 text-white rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                    <a
                      href="mailto:rnikhilvignesh21@gmail.com"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      rnikhilvignesh21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-600 text-white rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Location</h4>
                    <p className="text-neutral-700">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-200">
                <h4 className="font-semibold text-neutral-900 mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/nikhilraghupathy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-primary-600 text-neutral-700 hover:text-white rounded-lg border border-neutral-200 hover:border-primary-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Nikhil-r21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white hover:bg-primary-600 text-neutral-700 hover:text-white rounded-lg border border-neutral-200 hover:border-primary-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
