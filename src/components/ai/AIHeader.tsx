import { Brain } from 'lucide-react';

export default function AIHeader() {
  const menuItems = ['Home', 'Our Vision & Mission', 'AI & Automation', 'Sectors', 'Contact Us'];

  const scrollToSection = (item: string) => {
    const id = item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40 border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                DBI Pvt. Ltd.
              </h1>
              <p className="text-xs text-gray-600 font-medium">AI & Automation</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 group/item"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover/item:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
