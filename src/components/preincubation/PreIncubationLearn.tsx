import Section from '../shared/Section';
import Card from '../shared/Card';
import { Layers, Sprout, Shield, GraduationCap, Zap, Heart, Factory, Film, Home, Truck } from 'lucide-react';

export default function PreIncubationLearn() {
  const domains = [
    { icon: Layers, title: 'Advanced Materials & Infrastructure', color: 'blue' },
    { icon: Sprout, title: 'Agriculture & Food Technology', color: 'green' },
    { icon: Shield, title: 'Defense, Space & Security', color: 'red' },
    { icon: GraduationCap, title: 'Education & Business Excellence', color: 'purple' },
    { icon: Zap, title: 'Energy & Sustainability', color: 'yellow' },
    { icon: Heart, title: 'Healthcare Technologies', color: 'pink' },
    { icon: Factory, title: 'Manufacturing & Industry 4.0', color: 'gray' },
    { icon: Film, title: 'Media & Entertainment', color: 'orange' },
    { icon: Home, title: 'Sustainable Design & Habitat', color: 'teal' },
    { icon: Truck, title: 'Transport & Mobility', color: 'indigo' },
  ];

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    red: 'bg-red-100 text-red-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    pink: 'bg-pink-100 text-pink-600',
    gray: 'bg-gray-100 text-gray-600',
    orange: 'bg-orange-100 text-orange-600',
    teal: 'bg-teal-100 text-teal-600',
    indigo: 'bg-indigo-100 text-indigo-600',
  };

  return (
    <Section id="learn" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Learn & Innovate</h2>
        <p className="text-xl text-gray-600">
          Explore diverse domains and find your innovation path
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <Card key={index}>
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${colorClasses[domain.color]}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {domain.title}
                </h3>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
