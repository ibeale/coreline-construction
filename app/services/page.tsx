'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Waterproofing',
    description: 'Expert waterproofing solutions for residential and commercial properties. Specializing in flat roof coatings, foundation waterproofing, and comprehensive water intrusion solutions.',
    icon: '💧',
    href: '/services/waterproofing',
    features: ['Flat Roof Coatings', 'Foundation Waterproofing', 'Deck & Balcony Solutions'],
  },
  {
    title: 'Drywall Repair',
    description: 'Professional drywall installation and repair services. From water damage restoration to seamless texture matching, we deliver flawless finishes.',
    icon: '🔨',
    href: '/services/drywall',
    features: ['Water Damage Repair', 'Hole & Crack Repair', 'Texture Matching'],
  },
  {
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen with expert remodeling services. Complete renovations including flooring, cabinets, countertops, and custom solutions.',
    icon: '🏠',
    href: '/services/remodeling',
    features: ['Kitchen Renovations', 'Flooring Installation', 'Custom Carpentry'],
  },
  {
    title: 'General Contracting',
    description: 'Comprehensive construction services for all your residential and commercial needs. Licensed contractor with full project management capabilities.',
    icon: '🛠️',
    href: '/services/general',
    features: ['Project Management', 'Code Compliance', 'Structural Repairs'],
  },
];

export default function ServicesPage() {
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
              OUR SERVICES
            </h1>
            <p className="text-cream/80 text-xl font-body leading-relaxed">
              Comprehensive construction solutions backed by over a decade of experience.
              From waterproofing to complete remodels, we deliver quality craftsmanship every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="group block h-full bg-charcoal hover:bg-charcoal-light p-8 rounded-sm transition-all duration-300 hover:shadow-2xl border border-forest-moss/10 hover:border-terracotta/30"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h2 className="font-heading text-3xl text-cream mb-4 group-hover:text-terracotta transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-cream/70 font-body leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-forest-moss rounded-full" />
                        <span className="text-cream/60 font-body text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-charcoal bg-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-cream mb-6">
              WHY CHOOSE CORELINE
            </h2>
            <p className="text-cream/70 text-lg font-body max-w-2xl mx-auto">
              Experience, expertise, and commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Expert Experience',
                description: 'Over 10 years in construction with specialized expertise in waterproofing as a former Construction Engineering Manager.',
              },
              {
                title: 'Technical Knowledge',
                description: 'CEM degree from Oregon State University provides deep understanding of construction engineering and management.',
              },
              {
                title: 'Quality Guarantee',
                description: 'Licensed and insured in California. We stand behind our work with comprehensive warranties and exceptional service.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-charcoal-light p-8 rounded-sm border border-forest-moss/20"
              >
                <h3 className="font-heading text-2xl text-terracotta mb-4">
                  {item.title}
                </h3>
                <p className="text-cream/70 font-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
              LET'S BUILD SOMETHING GREAT
            </h2>
            <p className="text-cream/80 text-lg font-body mb-8 leading-relaxed">
              Ready to start your project? Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-terracotta hover:bg-terracotta-light text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl"
              >
                Request Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-cream hover:bg-cream hover:text-charcoal text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
