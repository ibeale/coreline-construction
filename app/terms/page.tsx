export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-heading text-charcoal mb-8">
          TERMS OF SERVICE
        </h1>
        <div className="space-y-6 text-charcoal/80 font-body leading-relaxed">
          <p>
            This terms of service page will be updated soon with our complete terms and conditions.
          </p>
          <p>
            For any questions, please contact us at{' '}
            <a href="mailto:josh@corelineconstruction.com" className="text-terracotta hover:underline">
              josh@corelineconstruction.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
