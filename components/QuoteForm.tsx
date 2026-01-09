
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

interface QuoteFormProps {
  onClose: () => void;
}

const companyTypes = [
  "Home Services - HVAC",
  "Home Services - Plumbing",
  "Home Services - Electrical",
  "Home Services - Landscaping",
  "Home Services - Handyman",
  "Professional Services - Lawyer",
  "Professional Services - Accountant",
  "Professional Services - Real Estate",
  "Professional Services - Consultant",
  "Health & Wellness - Gym/Fitness",
  "Health & Wellness - Salon/Spa",
  "Health & Wellness - Medical Clinic",
  "Health & Wellness - Dental",
  "Local Retail - Coffee Shop",
  "Local Retail - Restaurant",
  "Local Retail - Boutique",
  "Local Retail - Specialty Store",
  "Other"
];

export const QuoteForm: React.FC<QuoteFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyType: '',
    otherCompanyType: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const submissionData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      companyType: formData.companyType === 'Other' ? formData.otherCompanyType : formData.companyType,
      website: formData.website || 'N/A'
    };

    // Create a hidden iframe to submit form without CORS issues
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden-form-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Create a hidden form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://services.leadconnectorhq.com/hooks/OcvKVh9DjfdJduvHiTaT/webhook-trigger/dd044643-e78a-49d8-9f76-66e05c653e0c';
    form.target = 'hidden-form-iframe';

    // Add form fields
    Object.entries(submissionData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Clean up and show success after a short delay
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black overflow-y-auto"
    >
      {/* Background Grid */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-2xl"
        >
          {!isSubmitted ? (
            <>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Logo size={40} />
                  <span className="font-bold text-xl tracking-tight uppercase">Origin</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                  Get Your <span className="text-indigo-600">Free Quote</span>
                </h1>
                <p className="text-xl text-white/60">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold uppercase tracking-widest text-white/60 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-white/60 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-widest text-white/60 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-bold uppercase tracking-widest text-white/60 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Company Type */}
                <div>
                  <label htmlFor="companyType" className="block text-sm font-bold uppercase tracking-widest text-white/60 mb-2">
                    Company Type *
                  </label>
                  <select
                    id="companyType"
                    name="companyType"
                    required
                    value={formData.companyType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    <option value="" disabled className="bg-black">Select your industry...</option>
                    {companyTypes.map((type) => (
                      <option key={type} value={type} className="bg-black">{type}</option>
                    ))}
                  </select>
                </div>

                {/* Other Company Type (conditional) */}
                {formData.companyType === 'Other' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label htmlFor="otherCompanyType" className="block text-sm font-bold uppercase tracking-widest text-white/60 mb-2">
                      Please Specify *
                    </label>
                    <input
                      type="text"
                      id="otherCompanyType"
                      name="otherCompanyType"
                      required
                      value={formData.otherCompanyType}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Your industry type"
                    />
                  </motion.div>
                )}

                {/* Website */}
                <div>
                  <label htmlFor="website" className="block text-sm font-bold uppercase tracking-widest text-white/60 mb-2">
                    Existing Website <span className="text-white/30">(if applicable)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-center py-2">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-10 py-5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-indigo-500/40 transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center glass rounded-3xl p-12"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-black tracking-tighter mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-white/60 mb-8">
                We've received your request and will be in touch within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="px-10 py-4 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-2xl font-bold text-lg transition-all"
              >
                Back to Website
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
