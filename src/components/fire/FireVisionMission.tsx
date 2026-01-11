import Section from '../shared/Section';
import Card from '../shared/Card';
import { Eye, Target } from 'lucide-react';

export default function FireVisionMission() {
  return (
    <Section id="our-vision-and-mission" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision & Mission</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <Eye className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Vision</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• To be India's most trusted fire and industrial safety partner</li>
                <li>• Creating safer workplaces and communities nationwide</li>
                <li>• Setting benchmarks in safety standards and services</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Mission</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide comprehensive safety solutions that prevent accidents and save lives</li>
                <li>• Ensure compliance with national and international safety regulations</li>
                <li>• Educate organizations on proactive safety culture</li>
                <li>• Deliver quality products and services at competitive prices</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
