import ProjectDetailClient from '@/components/ProjectDetailClient';

export function generateStaticParams() {
  return [
    { slug: 'commercial-office' },
    { slug: 'residential-survey' },
    { slug: 'school-project' },
    { slug: 'warehouse-clearance' },
    { slug: 'hospital-refurbishment' },
    { slug: 'heritage-restoration' },
    { slug: 'retail-development' },
    { slug: 'housing-estate' },
    { slug: 'apartment-survey' },
  ];
}

export default function ProjectDetail() {
  return <ProjectDetailClient />;
}
