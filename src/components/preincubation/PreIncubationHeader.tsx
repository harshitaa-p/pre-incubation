import { Building2 } from 'lucide-react';

export default function PreIncubationHeader() {
  const menuItems = ['Home', 'About Us', 'Learn', 'Innovation Cell', 'Pre-Incubation Program', 'Events', 'Contact Us'];

  const scrollToSection = (item: string) => {
    const id = item.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">DBI Pvt. Ltd.</h1>
              <p className="text-xs text-gray-600">Pre-Incubation</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600">GOVT</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
