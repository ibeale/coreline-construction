'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Waterproofing',
    description: 'Expert waterproofing solutions for residential and commercial properties. Protect your investment from water damage.',
    icon: '💧',
    href: '/services/waterproofing',
  },
  {
    title: 'Drywall Repair',
    description: 'Professional drywall installation and repair. Seamless finishes that restore your walls to perfect condition.',
    icon: '🔨',
    href: '/services/drywall',
  },
  {
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into the heart of your home with custom remodeling solutions.',
    icon: '🏠',
    href: '/services/remodeling',
  },
  {
    title: 'General Contracting',
    description: 'Comprehensive construction services for all your residential and commercial projects.',
    icon: '🛠️',
    href: '/services/general',
  },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-texture opacity-50" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest/30 via-charcoal to-charcoal-light" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="bg-forest/20 border border-forest-moss/30 text-forest-moss px-4 py-2 rounded-sm text-sm font-body uppercase tracking-wider">
                  Licensed & Insured in California
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-6xl md:text-8xl font-heading text-cream mb-6 leading-tight"
              >
                BUILDING
                <br />
                <span className="text-gradient">EXCELLENCE</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-cream/80 text-lg md:text-xl font-body mb-8 max-w-xl leading-relaxed"
              >
                Expert construction services specializing in waterproofing, remodeling, and general contracting.
                Serving San Diego with integrity and craftsmanship.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-terracotta hover:bg-terracotta-light text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl text-center"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-forest-moss hover:border-terracotta text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 text-center"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-forest-moss/20"
              >
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="font-heading text-3xl md:text-4xl text-terracotta mb-1">
                      {stat.value}
                    </div>
                    <div className="font-body text-sm text-cream/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block relative h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forest to-forest-light rounded-lg opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-forest-moss/40 text-9xl mb-4">🏗️</div>
                  <p className="text-cream/40 font-body text-sm uppercase tracking-wider">
                    Project Photos Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-forest-moss/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-terracotta rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-heading text-charcoal mb-6">
              OUR SERVICES
            </h2>
            <p className="text-charcoal/70 text-lg font-body max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-charcoal hover:bg-charcoal-light p-8 rounded-sm transition-all duration-300 hover:shadow-2xl border border-forest-moss/10 hover:border-terracotta/30"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-2xl text-cream mb-3 group-hover:text-terracotta transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-cream/70 font-body leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-terracotta font-body text-sm uppercase tracking-wider inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-charcoal bg-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-heading text-cream mb-6">
                EXPERIENCED
                <br />
                <span className="text-gradient">PROFESSIONAL</span>
              </h2>
              <div className="space-y-4 text-cream/80 font-body leading-relaxed">
                <p>
                  Josh Clouston brings over a decade of construction experience, specializing in
                  both residential and commercial projects. With a degree in Construction Engineering
                  Management from Oregon State University, Josh combines technical expertise with
                  practical craftsmanship.
                </p>
                <p>
                  As a former Construction Engineering Manager specializing in waterproofing, Josh
                  has the knowledge and skills to handle even the most challenging projects with
                  precision and care.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-8 bg-transparent border-2 border-forest-moss hover:border-terracotta text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-full min-h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forest to-forest-light rounded-lg opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-forest-moss/40 text-9xl mb-4">👷</div>
                  <p className="text-cream/40 font-body text-sm uppercase tracking-wider">
                    Photo Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-texture opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-heading text-cream mb-6">
              READY TO START
              <br />
              YOUR PROJECT?
            </h2>
            <p className="text-cream/80 text-lg font-body mb-8 leading-relaxed">
              Get in touch today for a free consultation and quote.
              Let's bring your construction vision to life.
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
    </>
  );
}
