import { Brain, Mail, Phone, MapPin } from 'lucide-react';

export default function AIFooter() {
  return (
    <footer className="relative bg-slate-900 text-white py-12 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <img
          src="/images/ai/ai-particles.svg"
          alt=""
          className="w-full h-full object-cover"
          style={{ minHeight: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4 group">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  DBI Pvt. Ltd.
                </h3>
                <p className="text-xs text-gray-400">AI & Automation</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering India's digital transformation through practical AI solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-blue-400">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:ai@dbi.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group/link">
                <Mail className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                <span>ai@dbi.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group/link">
                <Phone className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                <span>+91 12345 67890</span>
              </a>
              <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors group/link cursor-pointer">
                <MapPin className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-blue-400">Partners</h4>
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-3 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <p className="text-gray-800 text-sm font-semibold">MIT-ADT University</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-blue-400">Government Initiatives</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="hover:text-cyan-400 transition-colors cursor-pointer hover:translate-x-1 duration-200">IndiaAI Mission</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer hover:translate-x-1 duration-200">Viksit Bharat 2047</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer hover:translate-x-1 duration-200">Digital India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Darade & Budhwant Infotech Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors relative group/footer">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover/footer:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors relative group/footer">
                Terms & Conditions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover/footer:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
