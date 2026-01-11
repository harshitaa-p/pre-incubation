import { Flame, Mail, Phone } from 'lucide-react';

export default function FireFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">DBI Pvt. Ltd.</h3>
                <p className="text-xs text-gray-400">Fire & Industrial Safety</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted partner for comprehensive fire and industrial safety solutions across India.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>safety@dbi.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 12345 67890</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Government Logos</h4>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-800 rounded p-2 text-center">
                  <span className="text-xs text-gray-500">GOVT {i}</span>
                </div>
              ))}
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
