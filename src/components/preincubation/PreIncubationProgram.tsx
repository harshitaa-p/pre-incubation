import Section from '../shared/Section';
import Card from '../shared/Card';
import { Globe, Users, Briefcase, BookOpen } from 'lucide-react';

export default function PreIncubationProgram() {
  const programElements = [
    {
      icon: Briefcase,
      title: 'Establishment of Pre-Incubation Center',
      description: 'A dedicated physical and virtual space equipped with workstations, meeting rooms, and collaboration zones.',
    },
    {
      icon: Globe,
      title: 'Website & Digital Platform Development',
      description: 'An intuitive online portal for registration, resource access, mentor connect, and progress tracking.',
    },
    {
      icon: Users,
      title: 'Field-Level Engagement',
      description: 'Outreach programs, campus drives, and community engagement to identify and onboard innovators from diverse backgrounds.',
    },
    {
      icon: BookOpen,
      title: 'Access to Resources, Mentorship & Experts',
      description: 'Curated support system including technical labs, business mentors, legal advisors, and funding facilitators.',
    },
  ];

  return (
    <Section id="pre-incubation-program" background="blue">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Pre-Incubation Program</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive program aligned with Atmanirbhar Bharat to nurture India's next generation of innovators
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {programElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{element.title}</h3>
                  <p className="text-gray-600">{element.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Supporting Atmanirbhar Bharat</h3>
        <p className="text-gray-700 text-center max-w-4xl mx-auto">
          Our pre-incubation program is designed to strengthen India's self-reliance by empowering local innovators,
          fostering indigenous technology development, and creating sustainable ventures that contribute to national growth.
          Through strategic partnerships with educational institutions, government bodies, and industry leaders, we are
          building a robust ecosystem that transforms ideas into impactful solutions for India and the world.
        </p>
      </div>
    </Section>
  );
}
