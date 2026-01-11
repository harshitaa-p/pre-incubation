import Section from '../shared/Section';
import Card from '../shared/Card';
import { FileText } from 'lucide-react';

export default function FireAbout() {
  return (
    <Section id="about-us" background="white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <div className="prose prose-lg text-gray-700">
            <p>
              DBI Pvt. Ltd. extends the legacy of S.B Fire & Safety, bringing decades of expertise in fire and industrial safety solutions to organizations across India. We are committed to the Atmanirbhar Bharat vision, providing indigenous safety solutions that meet global standards.
            </p>
            <p>
              Our team of certified safety professionals works closely with clients to assess risks, implement preventive measures, and ensure compliance with statutory regulations. We serve industries ranging from manufacturing and construction to healthcare and hospitality.
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Government Recognition</h3>
              <p className="text-gray-700">
                We operate under government guidelines and maintain certifications from national safety authorities. Our solutions align with Bureau of Indian Standards (BIS) and comply with the National Building Code of India.
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  [Government Letter/Certificate Placeholder]
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
