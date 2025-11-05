import Link from 'next/link';

const services = [
  { name: 'Waterproofing', href: '/services/waterproofing' },
  { name: 'Drywall Repair', href: '/services/drywall' },
  { name: 'Remodeling', href: '/services/remodeling' },
  { name: 'General Contracting', href: '/services/general' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/80 border-t border-forest-moss/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-forest flex items-center justify-center rounded-sm">
                <span className="text-cream font-heading text-2xl font-bold">C</span>
              </div>
              <div>
                <div className="font-heading text-xl leading-none text-cream">CORELINE</div>
                <div className="font-body text-xs text-forest-moss uppercase tracking-wider">Construction</div>
              </div>
            </div>
            <p className="font-body text-sm mb-4">
              Quality construction services with a focus on excellence and customer satisfaction.
            </p>
            <p className="font-body text-sm text-forest-moss">
              Licensed & Insured in California
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg text-cream mb-4 uppercase">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="font-body text-sm hover:text-terracotta transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-cream mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="font-body text-sm hover:text-terracotta transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="font-body text-sm hover:text-terracotta transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm hover:text-terracotta transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg text-cream mb-4 uppercase">Get in Touch</h3>
            <div className="space-y-3">
              <p className="font-body text-sm">
                <span className="text-forest-moss">Email:</span><br />
                <a href="mailto:josh@corelineconstruction.com" className="hover:text-terracotta transition-colors duration-300">
                  josh@corelineconstruction.com
                </a>
              </p>
              <p className="font-body text-sm">
                <span className="text-forest-moss">Phone:</span><br />
                <a href="tel:+15031234567" className="hover:text-terracotta transition-colors duration-300">
                  (503) 123-4567
                </a>
              </p>
              <p className="font-body text-sm">
                <span className="text-forest-moss">Service Area:</span><br />
                San Diego & Surrounding Areas
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-moss/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-forest-moss">
            © {currentYear} Coreline Construction Company LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="font-body text-sm text-forest-moss hover:text-terracotta transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-sm text-forest-moss hover:text-terracotta transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
