import Section from '../shared/Section';
import Button from '../shared/Button';
import Card from '../shared/Card';
import { Mail, Phone } from 'lucide-react';

export default function FireContact() {
  return (
    <Section id="contact-us" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600">
          Get in touch for safety solutions and consultations
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-800">Email</h3>
              <a href="mailto:safety@dbi.com" className="text-red-600 hover:underline">
                safety@dbi.com
              </a>
            </div>
          </Card>

          <Card>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800">Phone</h3>
              <a href="tel:+911234567890" className="text-orange-600 hover:underline">
                +91 12345 67890
              </a>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-red-50 to-orange-50">
          <div className="text-center space-y-6 py-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Request a Safety Consultation
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our safety experts will assess your requirements and provide customized solutions with competitive pricing.
            </p>
            <Button size="lg" href="https://forms.google.com">
              Contact Form
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}
