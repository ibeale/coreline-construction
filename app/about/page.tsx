'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const qualifications = [
  {
    title: 'CEM Degree',
    subtitle: 'Oregon State University',
    description: 'Bachelor of Science in Construction Engineering Management, providing comprehensive technical knowledge and project management expertise.',
  },
  {
    title: 'Construction Engineering Manager',
    subtitle: 'Commercial Waterproofing Specialist',
    description: 'Managed large-scale commercial projects with focus on waterproofing systems and building envelope solutions.',
  },
  {
    title: 'Licensed & Insured',
    subtitle: 'California General Contractor',
    description: 'Fully licensed and insured to operate in California, providing peace of mind and professional accountability.',
  },
];

const values = [
  {
    icon: '🎯',
    title: 'Quality First',
    description: 'Every project receives the same meticulous attention to detail and commitment to excellence.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Honest communication, transparent pricing, and standing behind our work.',
  },
  {
    icon: '⚡',
    title: 'Efficiency',
    description: 'Respecting your time and budget while delivering exceptional results.',
  },
  {
    icon: '🔧',
    title: 'Expertise',
    description: 'Technical knowledge and practical experience working together.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-charcoal bg-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/30 via-charcoal to-charcoal-light" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading text-cream mb-6">
                ABOUT
                <br />
                <span className="text-gradient">CORELINE</span>
              </h1>
              <p className="text-cream/80 text-xl font-body leading-relaxed mb-6">
                Founded on principles of quality craftsmanship, technical expertise, and customer satisfaction.
              </p>
              <p className="text-cream/70 text-lg font-body leading-relaxed">
                Coreline Construction Company is a single-person LLC dedicated to delivering exceptional
                construction services throughout San Diego and surrounding areas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-full min-h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forest to-forest-light rounded-lg opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-forest-moss/40 text-9xl mb-4">👷</div>
                  <p className="text-cream/40 font-body text-sm uppercase tracking-wider">
                    Josh Clouston
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Josh's Story Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-8">
              MEET JOSH CLOUSTON
            </h2>
            <div className="space-y-6 text-charcoal/80 font-body text-lg leading-relaxed">
              <p>
                Josh Clouston brings over a decade of construction experience to every project he undertakes.
                With a degree in Construction Engineering Management from Oregon State University, Josh combines
                academic knowledge with hands-on expertise to deliver exceptional results.
              </p>
              <p>
                His career includes significant experience in the commercial construction sector, where he served
                as a Construction Engineering Manager specializing in waterproofing. This specialized background
                gives him unique expertise in protecting buildings from water intrusion—one of the most critical
                aspects of construction in any climate.
              </p>
              <p>
                Now focused on residential work while maintaining his commercial capabilities, Josh offers San Diego
                homeowners and businesses the rare combination of technical engineering knowledge and personalized
                service. Whether it's waterproofing a flat roof, repairing drywall after water damage, remodeling
                a kitchen, or handling general contracting needs, Josh approaches each project with the same level
                of professionalism and attention to detail.
              </p>
              <p>
                As a single-person LLC, Josh provides the direct communication and accountability that larger
                companies often can't match. When you work with Coreline Construction, you work directly with
                Josh—from initial consultation through project completion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qualifications Section */}
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
              QUALIFICATIONS
            </h2>
            <p className="text-cream/70 text-lg font-body max-w-2xl mx-auto">
              Education and experience you can trust
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-charcoal-light p-8 rounded-sm border border-forest-moss/20 text-center"
              >
                <h3 className="font-heading text-2xl text-terracotta mb-2">
                  {qual.title}
                </h3>
                <div className="text-forest-moss font-body text-sm uppercase tracking-wider mb-4">
                  {qual.subtitle}
                </div>
                <p className="text-cream/70 font-body leading-relaxed">
                  {qual.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-6">
              OUR VALUES
            </h2>
            <p className="text-charcoal/70 text-lg font-body max-w-2xl mx-auto">
              The principles that guide every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-2xl text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-cream mb-6">
              SERVING SAN DIEGO
            </h2>
            <p className="text-cream/80 text-lg font-body leading-relaxed mb-8 max-w-2xl mx-auto">
              Proudly serving San Diego and surrounding areas with quality construction services.
              Licensed and insured to work throughout California.
            </p>
            <div className="inline-block bg-forest/20 border border-forest-moss/30 px-6 py-3 rounded-sm">
              <span className="text-forest-moss font-body text-sm uppercase tracking-wider">
                📍 San Diego & Surrounding Areas
              </span>
            </div>
          </motion.div>
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
              LET'S WORK TOGETHER
            </h2>
            <p className="text-cream/80 text-lg font-body mb-8 leading-relaxed">
              Ready to start your project? Get in touch for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-terracotta hover:bg-terracotta-light text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl"
              >
                Contact Us
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
