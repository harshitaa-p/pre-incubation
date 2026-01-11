import { Brain, Mail, Phone, MapPin } from 'lucide-react';

export default function AIFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">DBI Pvt. Ltd.</h3>
                <p className="text-xs text-gray-400">AI & Automation</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Empowering India's digital transformation through practical AI solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ai@dbi.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Partners</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-800 text-sm font-semibold">MIT-ADT University</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Government Initiatives</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>IndiaAI Mission</p>
              <p>Viksit Bharat 2047</p>
              <p>Digital India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Darade & Budhwant Infotech Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
