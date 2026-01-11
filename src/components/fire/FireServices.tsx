import Section from '../shared/Section';
import Card from '../shared/Card';
import { Flame, HardHat, Shield, AlertTriangle, MapPin, ClipboardCheck } from 'lucide-react';

export default function FireServices() {
  const services = [
    {
      icon: Flame,
      title: 'Fire Safety Equipment',
      description: 'Fire extinguishers, hydrant systems, sprinklers, fire alarms, smoke detectors, and emergency lighting.',
    },
    {
      icon: HardHat,
      title: 'Industrial Safety Equipment',
      description: 'Safety helmets, gloves, safety shoes, harnesses, fall protection systems, and rescue equipment.',
    },
    {
      icon: Shield,
      title: 'Road Safety Equipment',
      description: 'Traffic cones, barricades, reflective jackets, road signs, speed bumps, and safety barriers.',
    },
    {
      icon: AlertTriangle,
      title: 'Personal Protective Equipment (PPE)',
      description: 'Full-body suits, respiratory protection, eye protection, hearing protection, and specialized PPE.',
    },
    {
      icon: MapPin,
      title: 'Escape Route Planning',
      description: 'Emergency exit design, evacuation plans, assembly point marking, and signage installation.',
    },
    {
      icon: ClipboardCheck,
      title: 'Safety Audits',
      description: 'Comprehensive safety assessments, risk analysis, compliance checks, and improvement recommendations.',
    },
  ];

  return (
    <Section id="services" background="white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-xl text-gray-600">
          Comprehensive safety solutions for every industry
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index}>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
