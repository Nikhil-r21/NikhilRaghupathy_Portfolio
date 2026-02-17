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
  'Cloud Migration (AWS/Azure)',
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

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 min-h-[48px] border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-base ${
      hasError ? 'border-red-500' : 'border-neutral-300'
    }`;

  return (
    <AnimatePresence>
      {isFreelanceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            ref={modalRef}
            className="bg-white w-full sm:max-w-2xl sm:rounded-2xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="relative p-5 sm:p-6 pb-8">
              <button
                type="button"
                onClick={closeFreelanceModal}
                className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-1 pr-10">Let&apos;s Work Together</h2>
              <div className="w-14 h-1 bg-primary-600 rounded mb-4" />
              <p className="text-neutral-600 text-sm sm:text-base mb-6">
                Share your project details and I&apos;ll get back within 24 hours with a proposal.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className={inputClass(!!errors.name)}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email <span className="text-red-500">*</span>
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
                      className={inputClass(!!errors.email)}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', {
                        required: 'Phone is required',
                        pattern: {
                          value: /^(\+91|91)?[6-9]\d{9}$/,
                          message: 'Valid Indian phone number required',
                        },
                      })}
                      className={inputClass(!!errors.phone)}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      {...register('companyName')}
                      className={inputClass(false)}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-1">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectType"
                    {...register('projectType', { required: 'Please select a project type' })}
                    className={inputClass(!!errors.projectType)}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1">
                      Budget <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="budget"
                      {...register('budget', { required: 'Please select budget' })}
                      className={inputClass(!!errors.budget)}
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-1">
                      Timeline <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="timeline"
                      {...register('timeline', { required: 'Please select timeline' })}
                      className={inputClass(!!errors.timeline)}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-red-500">{errors.timeline.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Project Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    {...register('message', {
                      required: 'Requirements are required',
                      minLength: { value: 20, message: 'At least 20 characters' },
                    })}
                    rows={4}
                    className={`${inputClass(!!errors.message)} min-h-[120px] resize-y`}
                    placeholder="Describe your project: infrastructure, goals, requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full min-h-[48px] py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isSubmitting
                      ? 'bg-neutral-400 cursor-not-allowed text-white'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Project Inquiry'
                  )}
                </button>

                {submitSuccess && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                    <p className="font-semibold">Inquiry sent successfully!</p>
                    <p className="text-sm mt-1">I&apos;ll get back within 24 hours.</p>
                  </div>
                )}

                {submitSuccess === false && submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm mt-1">{submitError}</p>
                  </div>
                )}
              </form>

              <p className="mt-4 pt-4 border-t border-neutral-200 text-xs text-neutral-500 text-center">
                Your details are used only to respond to your inquiry.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FreelanceModal;