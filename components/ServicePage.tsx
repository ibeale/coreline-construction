'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: string;
}

export default function ServicePage({
  title,
  subtitle,
  description,
  features,
  benefits,
  icon,
}: ServicePageProps) {
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
            <div className="text-7xl mb-6">{icon}</div>
            <h1 className="text-5xl md:text-7xl font-heading text-cream mb-6">
              {title}
            </h1>
            <p className="text-xl text-forest-moss font-body mb-6 uppercase tracking-wider">
              {subtitle}
            </p>
            <p className="text-cream/80 text-lg font-body leading-relaxed max-w-3xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-8">
                WHAT WE OFFER
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-2 h-2 bg-terracotta rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-charcoal/80 font-body text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-8">
                WHY CHOOSE US
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-2 h-2 bg-forest rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <p className="text-charcoal/80 font-body text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-cream mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="text-cream/80 text-lg font-body mb-8 leading-relaxed">
              Contact us today for a free consultation and quote for your {title.toLowerCase()} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-terracotta hover:bg-terracotta-light text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl"
              >
                Request Free Quote
              </Link>
              <a
                href="tel:+15031234567"
                className="bg-transparent border-2 border-cream hover:bg-cream hover:text-charcoal text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300"
              >
                Call (503) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
