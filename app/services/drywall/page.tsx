import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'Drywall Repair & Installation | Coreline Construction',
  description: 'Professional drywall installation and repair services in San Diego. Seamless finishes that restore your walls to perfect condition.',
};

export default function DrywallPage() {
  return (
    <ServicePage
      title="DRYWALL REPAIR"
      subtitle="Seamless Wall Restoration"
      description="From water damage repair to complete drywall installation, we deliver flawless finishes every time. Our expertise ensures your walls look perfect, whether we're fixing a small patch or hanging an entire room."
      features={[
        'Water damage drywall repair and replacement',
        'Hole and crack repair of all sizes',
        'Texture matching and finishing',
        'New drywall installation',
        'Ceiling repair and installation',
        'Soundproofing solutions',
      ]}
      benefits={[
        'Meticulous attention to detail',
        'Clean, efficient work practices',
        'Color and texture matching expertise',
        'Quick turnaround times',
        'Competitive pricing',
        'Complete cleanup after every job',
      ]}
      icon="🔨"
    />
  );
}
