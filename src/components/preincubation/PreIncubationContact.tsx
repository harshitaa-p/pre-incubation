import Section from '../shared/Section';
import Card from '../shared/Card';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function PreIncubationContact() {
  return (
    <Section id="contact-us" background="white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600">
          Get in touch with us for any queries or support
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-800">Email</h3>
            <a href="mailto:info@dbi.com" className="text-blue-600 hover:underline text-sm">
              info@dbi.com
            </a>
          </div>
        </Card>

        <Card>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800">Phone</h3>
            <a href="tel:+911234567890" className="text-green-600 hover:underline text-sm">
              +91 12345 67890
            </a>
          </div>
        </Card>

        <Card>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-800">WhatsApp</h3>
            <a href="https://wa.me/911234567890" className="text-emerald-600 hover:underline text-sm">
              Message Us
            </a>
          </div>
        </Card>

        <Card>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-bold text-gray-800">Address</h3>
            <p className="text-gray-600 text-sm">
              Pune, Maharashtra, India
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
