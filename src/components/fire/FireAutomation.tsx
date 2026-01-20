import Section from '../shared/Section';
import Card from '../shared/Card';

import fireAlarm from '../../public/assets/img/fire-alarm.png';
import safetyMonitoring from '../../public/assets/img/safety-monitoring.png';
import emergencyResponse from '../../public/assets/img/emergency.png';
import compliance from '../../public/assets/img/comp-monitoring.png';
import dashboard from '../../public/assets/img/centralized-dash.png';

export default function FireAutomation() {
  const automationFeatures = [
    {
      image: fireAlarm,
      title: 'Fire Detection Systems',
      description:
        'Automated fire detection with smart sensors, heat detectors, and intelligent alarm systems.',
    },
    {
      image: safetyMonitoring,
      title: 'Safety Monitoring & Alerts',
      description:
        'Real-time monitoring of safety parameters with instant alerts and notifications.',
    },
    {
      image: emergencyResponse,
      title: 'Emergency Response Automation',
      description:
        'Automated emergency protocols, notification systems, and response coordination.',
    },
    {
      image: compliance,
      title: 'Compliance Monitoring',
      description:
        'Automated compliance tracking, report generation, and regulatory adherence management.',
    },
    {
      image: dashboard,
      title: 'Centralized Dashboards',
      description:
        'Unified control panels for monitoring all safety systems, equipment status, and incidents.',
    },
  ];

  return (
    <Section id="automation" background="blue">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">
          Automation in Safety
        </h2>
        <p className="text-xl text-gray-600">
          Smart safety systems powered by cutting-edge technology
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {automationFeatures.map((feature, index) => (
          <Card key={index}>
            <div className="flex flex-col h-full">
              {/* Image Section */}
              <div className="flex justify-center items-center mb-4 w-full h-48">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Text Section */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
