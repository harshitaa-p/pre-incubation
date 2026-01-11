import Section from '../shared/Section';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { Wrench, Users, DollarSign, Network, BookOpen } from 'lucide-react';

export default function PreIncubationInnovationCell() {
  const offerings = [
    {
      icon: Wrench,
      title: 'Tools & Resources',
      description: 'Access to state-of-the-art tools, technology platforms, and infrastructure for prototyping and development.',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Guidance from industry experts, successful entrepreneurs, and academic leaders to refine your business model.',
    },
    {
      icon: DollarSign,
      title: 'Funding',
      description: 'Pathways to seed funding, grants, and connections with investor networks to fuel your venture.',
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Connect with like-minded innovators, potential co-founders, industry partners, and ecosystem stakeholders.',
    },
    {
      icon: BookOpen,
      title: 'Workshops',
      description: 'Regular training sessions, bootcamps, and skill-building workshops on entrepreneurship and innovation.',
    },
  ];

  return (
    <Section id="innovation-cell" background="white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Innovation Cell</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Inspired by the spirit of Nirmaan - Building India's Future. Our Innovation Cell provides comprehensive support for early-stage innovators.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((offering, index) => {
          const Icon = offering.icon;
          return (
            <Card key={index}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" href="https://forms.google.com">
          Join Innovation Cell
        </Button>
      </div>
    </Section>
  );
}
