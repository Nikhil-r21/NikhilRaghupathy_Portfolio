import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useModalStore } from '../store/useModalStore';

type FreelanceFormInputs = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  companyName?: string;
};

const projectTypes = [
  'DevOps Implementation',
  'Cloud Migration (AWS/Azure/GCP)',
  'Infrastructure as Code (Terraform/CloudFormation)',
  'CI/CD Pipeline Setup',
  'Docker & Containerization',
  'Kubernetes Orchestration',
  'Server Configuration & Management',
  'Monitoring & Alerting Solutions',
  'Security Implementation',
  'Performance Optimization',
  'Others DevOps Solution'
];

const budgetRanges = [
  'Under ₹1,000',
  '₹1000 - ₹5,000',
  '₹5000 - ₹10,000',
  '₹10,000 - ₹15,000',
  'Above ₹15,000',
  'Let\'s discuss'
];

const timelineOptions = [
  'Urgent (Within 1 week)',
  'Within 2 weeks',
  'Within a month',
  'Within 2 months',
  'Within 3 months',
  'Flexible timeline'
];

const FreelanceModal: React.FC = () => {
  const { isFreelanceModalOpen, closeFreelanceModal } = useModalStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState<boolean | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FreelanceFormInputs>();

  // Close modal on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFreelanceModalOpen) {
        closeFreelanceModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeFreelanceModal();
      }
    };

    if (isFreelanceModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isFreelanceModalOpen, closeFreelanceModal]);

  const onSubmit: SubmitHandler<FreelanceFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    try {
      const response = await fetch('/api/freelance-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        reset();
        
        // Close modal after successful submission after 3 seconds
        setTimeout(() => {
          closeFreelanceModal();
          setSubmitSuccess(null);
        }, 3000);
      } else {
        throw new Error(result.message || 'Failed to send inquiry');
      }
      
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send inquiry. Please try again later.');
      console.error('Error sending inquiry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isFreelanceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <motion.div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative p-6">
              <button
                onClick={closeFreelanceModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Let's Work Together</h2>
              <div className="w-16 h-1 bg-blue-600 mb-4"></div>
              <p className="text-gray-600 mb-6">
                Tell me about your project requirements and I'll get back to you within 24 hours with a detailed proposal.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
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
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^(\+91|91)?[6-9]\d{9}$/,
                          message: 'Please enter a valid Indian phone number',
                        },
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Company Name (Optional) */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      {...register('companyName')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    {...register('projectType', { required: 'Please select a project type' })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                      errors.projectType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="budget"
                      {...register('budget', { required: 'Please select a budget range' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.budget ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Timeline <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="timeline"
                      {...register('timeline', { required: 'Please select a timeline' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.timeline ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.timeline.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...register('message', {
                      required: 'Project requirements are required',
                      minLength: {
                        value: 20,
                        message: 'Please provide more details (at least 20 characters)',
                      },
                    })}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please describe your project in detail - current infrastructure, goals, challenges, specific requirements, etc."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
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
                      Sending Inquiry...
                    </>
                  ) : (
                    'Send Project Inquiry'
                  )}
                </button>

                {/* Success message */}
                {submitSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                    <p className="font-medium">🎉 Inquiry sent successfully!</p>
                    <p className="text-sm mt-1">
                      Thank you for reaching out! I'll review your requirements and get back to you within 24 hours with a detailed proposal.
                    </p>
                  </div>
                )}

                {/* Error message */}
                {submitSuccess === false && submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                    <p className="font-medium">Something went wrong!</p>
                    <p className="text-sm mt-1">{submitError}</p>
                  </div>
                )}
              </form>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FreelanceModal;