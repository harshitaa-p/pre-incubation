import Section from '../shared/Section';
import Card from '../shared/Card';
import { Eye, Target } from 'lucide-react';

export default function AIVisionMission() {
  return (
    <Section id="our-vision-and-mission" background="white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision & Mission</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Vision</h3>
              <p className="text-gray-700">
                To be India's trusted partner in AI adoption—making intelligent automation accessible, affordable, and impactful for organizations of all sizes, contributing to a digitally empowered Viksit Bharat 2047.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Mission</h3>
              <p className="text-gray-700">
                To deliver practical, ethical, and scalable AI solutions that solve real-world challenges—empowering education, industry, governance, and entrepreneurship through cutting-edge technology aligned with IndiaAI Mission.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
