import Section from '../shared/Section';
import Card from '../shared/Card';
import { Target, Eye } from 'lucide-react';

export default function PreIncubationAbout() {
  return (
    <Section id="about-us" background="white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          DBI Pvt. Ltd. is committed to building an innovation-driven ecosystem that empowers entrepreneurs, students, and startups to bring their ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Vision</h3>
              <p className="text-gray-700">
                To establish a world-class pre-incubation ecosystem that nurtures early-stage innovation, fosters entrepreneurial mindsets, and contributes to India's journey towards becoming a global innovation hub by 2047.
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
                To provide accessible resources, mentorship, and infrastructure that enable innovators to validate ideas, develop prototypes, and prepare for full-scale incubation—supporting India's Atmanirbhar Bharat and Viksit Bharat initiatives.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
