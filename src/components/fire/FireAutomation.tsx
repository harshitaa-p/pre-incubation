import Section from '../shared/Section';
import Card from '../shared/Card';
import { Bell, Eye, Radio, FileCheck, Layout } from 'lucide-react';

export default function FireAutomation() {
  const automationFeatures = [
    {
      icon: Bell,
      title: 'Fire Detection Systems',
      description: 'Automated fire detection with smart sensors, heat detectors, and intelligent alarm systems.',
    },
    {
      icon: Eye,
      title: 'Safety Monitoring & Alerts',
      description: 'Real-time monitoring of safety parameters with instant alerts and notifications.',
    },
    {
      icon: Radio,
      title: 'Emergency Response Automation',
      description: 'Automated emergency protocols, notification systems, and response coordination.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Monitoring',
      description: 'Automated compliance tracking, report generation, and regulatory adherence management.',
    },
    {
      icon: Layout,
      title: 'Centralized Dashboards',
      description: 'Unified control panels for monitoring all safety systems, equipment status, and incidents.',
    },
  ];

  return (
    <Section id="automation" background="blue">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Automation in Safety</h2>
        <p className="text-xl text-gray-600">
          Smart safety systems powered by cutting-edge technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {automationFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index}>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
