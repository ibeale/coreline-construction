import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'General Contracting Services | Coreline Construction',
  description: 'Comprehensive construction services for residential and commercial projects in San Diego. Licensed general contractor.',
};

export default function GeneralPage() {
  return (
    <ServicePage
      title="GENERAL CONTRACTING"
      subtitle="Full-Service Construction Solutions"
      description="As a licensed general contractor with both residential and commercial experience, we handle projects of all sizes with professionalism and expertise. From small repairs to major construction projects, we're your trusted partner."
      features={[
        'Residential construction and renovation',
        'Commercial building improvements',
        'Project planning and management',
        'Permit acquisition and code compliance',
        'Structural repairs and modifications',
        'Maintenance and emergency repairs',
      ]}
      benefits={[
        'Licensed and insured general contractor',
        'CEM degree - technical expertise',
        'Commercial and residential experience',
        'Full project management capabilities',
        'Direct communication throughout project',
        'Competitive pricing with no hidden fees',
      ]}
      icon="🛠️"
    />
  );
}
