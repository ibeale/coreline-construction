'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const categories = ['All', 'Waterproofing', 'Drywall', 'Remodeling', 'General'];

const projects = [
  {
    id: 1,
    title: 'Flat Roof Waterproofing',
    category: 'Waterproofing',
    description: 'Complete flat roof waterproofing with premium coating system',
    image: '🏢',
  },
  {
    id: 2,
    title: 'Water Damage Drywall Restoration',
    category: 'Drywall',
    description: 'Full drywall repair and restoration after water leak damage',
    image: '🔨',
  },
  {
    id: 3,
    title: 'Modern Kitchen Renovation',
    category: 'Remodeling',
    description: 'Complete kitchen remodel with custom cabinets and flooring',
    image: '🏠',
  },
  {
    id: 4,
    title: 'Foundation Waterproofing',
    category: 'Waterproofing',
    description: 'Exterior foundation waterproofing and drainage system',
    image: '💧',
  },
  {
    id: 5,
    title: 'Commercial Building Repair',
    category: 'General',
    description: 'Structural repairs and building envelope improvements',
    image: '🛠',
  },
  {
    id: 6,
    title: 'Bathroom Remodel',
    category: 'Remodeling',
    description: 'Full bathroom renovation with tile work and fixtures',
    image: '🚿',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen">
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
              OUR WORK
            </h1>
            <p className="text-cream/80 text-xl font-body leading-relaxed">
              Explore our portfolio of completed projects showcasing quality craftsmanship
              and attention to detail across all our service areas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-cream border-b border-charcoal/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-terracotta text-cream shadow-lg scale-105'
                    : 'bg-charcoal/10 text-charcoal hover:bg-charcoal hover:text-cream'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-charcoal rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-300 border border-forest-moss/10 hover:border-terracotta/30"
                >
                  <div className="relative h-64 bg-gradient-to-br from-forest to-forest-light flex items-center justify-center overflow-hidden">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="text-forest-moss text-xs uppercase tracking-wider font-body mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-heading text-2xl text-cream mb-3 group-hover:text-terracotta transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-cream/70 font-body text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-charcoal/50 font-body text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

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
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-cream/70 text-lg font-body max-w-2xl mx-auto">
              Don&apos;t just take our word for it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'John D.',
                text: 'Josh did an excellent job waterproofing our flat roof. Professional, knowledgeable, and the work quality is outstanding.',
              },
              {
                name: 'Sarah M.',
                text: 'The drywall repair after our leak was seamless. You can&apos;t even tell there was damage. Highly recommend!',
              },
              {
                name: 'Mike R.',
                text: 'Our kitchen remodel exceeded expectations. Josh was communicative throughout and delivered exactly what we wanted.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-charcoal-light p-8 rounded-sm border border-forest-moss/20"
              >
                <div className="text-terracotta text-4xl mb-4">&quot;</div>
                <p className="text-cream/80 font-body leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
                    <span className="text-cream font-heading text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-cream font-body text-sm">{testimonial.name}</div>
                    <div className="text-forest-moss font-body text-xs">Verified Client</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              YOUR PROJECT COULD BE NEXT
            </h2>
            <p className="text-cream/80 text-lg font-body mb-8 leading-relaxed">
              Let&apos;s discuss your construction needs and create something exceptional together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-terracotta hover:bg-terracotta-light text-cream px-8 py-4 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl"
            >
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
