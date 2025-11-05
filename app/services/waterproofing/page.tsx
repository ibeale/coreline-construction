import ServicePage from '@/components/ServicePage';

export const metadata = {
  title: 'Waterproofing Services | Coreline Construction',
  description: 'Expert waterproofing solutions for residential and commercial properties in San Diego. Protect your investment from water damage.',
};

export default function WaterproofingPage() {
  return (
    <ServicePage
      title="WATERPROOFING"
      subtitle="Protect Your Property from Water Damage"
      description="With years of experience as a Construction Engineering Manager specializing in waterproofing, Josh brings unparalleled expertise to every project. From flat roof coatings to foundation waterproofing, we provide comprehensive solutions that stand the test of time and San Diego's climate."
      features={[
        'Flat roof waterproofing and coating systems',
        'Foundation and basement waterproofing',
        'Deck and balcony waterproofing',
        'Commercial building envelope solutions',
        'Water intrusion assessment and repair',
        'Preventative waterproofing treatments',
      ]}
      benefits={[
        'Over 10 years of specialized waterproofing experience',
        'CEM degree from Oregon State University',
        'Former Construction Engineering Manager',
        'Licensed and insured in California',
        'Comprehensive warranties on all waterproofing work',
        'Using industry-leading materials and techniques',
      ]}
      icon="💧"
    />
  );
}
