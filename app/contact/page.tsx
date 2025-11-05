'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Implement actual form submission to API endpoint or email service
      // For now, simulate a successful submission
      console.log('Form data:', data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-charcoal bg-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/30 via-charcoal to-charcoal-light" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading text-cream mb-6">
              GET IN TOUCH
            </h1>
            <p className="text-cream/80 text-xl font-body leading-relaxed">
              Ready to start your project? Fill out the form below or give us a call.
              We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading text-charcoal mb-8">
                REQUEST A QUOTE
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-charcoal font-body text-sm uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 rounded-sm font-body text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-terracotta transition-colors duration-300"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-terracotta text-sm font-body">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-charcoal font-body text-sm uppercase tracking-wider mb-2">
                    Email Address *
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
                    className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 rounded-sm font-body text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-terracotta transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-terracotta text-sm font-body">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-charcoal font-body text-sm uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 rounded-sm font-body text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-terracotta transition-colors duration-300"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-terracotta text-sm font-body">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service Field */}
                <div>
                  <label htmlFor="service" className="block text-charcoal font-body text-sm uppercase tracking-wider mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 rounded-sm font-body text-charcoal focus:outline-none focus:border-terracotta transition-colors duration-300"
                  >
                    <option value="">Select a service...</option>
                    <option value="waterproofing">Waterproofing</option>
                    <option value="drywall">Drywall Repair</option>
                    <option value="remodeling">Remodeling</option>
                    <option value="general">General Contracting</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-terracotta text-sm font-body">{errors.service.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-charcoal font-body text-sm uppercase tracking-wider mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Please provide project details' })}
                    className="w-full px-4 py-3 bg-charcoal/5 border border-charcoal/20 rounded-sm font-body text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-terracotta transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-terracotta text-sm font-body">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-terracotta hover:bg-terracotta-light disabled:bg-charcoal/30 text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-forest/20 border border-forest-moss/30 text-forest p-4 rounded-sm"
                  >
                    <p className="font-body text-sm">
                      ✓ Thank you! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-terracotta/20 border border-terracotta/30 text-terracotta p-4 rounded-sm"
                  >
                    <p className="font-body text-sm">
                      ✗ Something went wrong. Please try again or call us directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-heading text-charcoal mb-8">
                  CONTACT INFO
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-forest flex items-center justify-center rounded-sm flex-shrink-0">
                      <span className="text-cream text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-charcoal mb-1">PHONE</h3>
                      <a
                        href="tel:+15031234567"
                        className="text-charcoal/70 hover:text-terracotta font-body transition-colors duration-300"
                      >
                        (503) 123-4567
                      </a>
                      <p className="text-charcoal/50 font-body text-sm mt-1">
                        Mon-Fri: 8am - 6pm
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-forest flex items-center justify-center rounded-sm flex-shrink-0">
                      <span className="text-cream text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-charcoal mb-1">EMAIL</h3>
                      <a
                        href="mailto:josh@corelineconstruction.com"
                        className="text-charcoal/70 hover:text-terracotta font-body transition-colors duration-300 break-all"
                      >
                        josh@corelineconstruction.com
                      </a>
                      <p className="text-charcoal/50 font-body text-sm mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-forest flex items-center justify-center rounded-sm flex-shrink-0">
                      <span className="text-cream text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-charcoal mb-1">SERVICE AREA</h3>
                      <p className="text-charcoal/70 font-body">
                        San Diego & Surrounding Areas
                      </p>
                      <p className="text-charcoal/50 font-body text-sm mt-1">
                        Licensed & Insured in California
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Box */}
              <div className="bg-charcoal p-8 rounded-sm">
                <h3 className="font-heading text-2xl text-cream mb-4">
                  WHY CHOOSE US?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Free consultations and quotes',
                    'Licensed and insured contractor',
                    'Over 10 years of experience',
                    'Direct communication with owner',
                    'Quality workmanship guaranteed',
                    'Transparent pricing',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-terracotta rounded-full mt-2 flex-shrink-0" />
                      <span className="text-cream/80 font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-terracotta/10 border-2 border-terracotta/30 p-6 rounded-sm">
                <h3 className="font-heading text-xl text-charcoal mb-2">
                  EMERGENCY REPAIRS?
                </h3>
                <p className="text-charcoal/70 font-body text-sm mb-3">
                  For urgent construction issues, call us directly.
                </p>
                <a
                  href="tel:+15031234567"
                  className="inline-block bg-terracotta hover:bg-terracotta-light text-cream px-6 py-3 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-forest to-forest-light rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-forest-moss/40 text-7xl mb-4">🗺️</div>
                <p className="text-cream/40 font-body text-sm uppercase tracking-wider">
                  Service Area Map
                </p>
                <p className="text-cream/30 font-body text-xs mt-2">
                  Proudly serving San Diego County
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
