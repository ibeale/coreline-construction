import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'Kitchen & Home Remodeling | Coreline Construction',
  description: 'Transform your home with expert remodeling services in San Diego. Kitchen remodels, flooring, and complete home renovations.',
};

export default function RemodelingPage() {
  return (
    <ServicePage
      title="REMODELING"
      subtitle="Transform Your Living Space"
      description="Whether you're dreaming of a new kitchen, updating your flooring, or planning a complete home renovation, we bring your vision to life with precision craftsmanship and attention to detail. We manage every aspect of your remodel from design to completion."
      features={[
        'Complete kitchen remodels and renovations',
        'Flooring installation (hardwood, tile, vinyl)',
        'Bathroom remodeling',
        'Room additions and expansions',
        'Interior and exterior painting',
        'Custom carpentry and built-ins',
      ]}
      benefits={[
        'Comprehensive project management',
        'Transparent pricing and timelines',
        'Quality craftsmanship guaranteed',
        'Licensed general contractor',
        'Coordinated subcontractor network',
        'Design consultation included',
      ]}
      icon="🏠"
    />
  );
}
