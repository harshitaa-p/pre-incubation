import { useWebsite, WebsiteType } from '../context/WebsiteContext';
import { websiteTheme } from '../config/websiteTheme';

export default function WebsiteSwitcher() {
  const { currentWebsite, setCurrentWebsite } = useWebsite();

  const websites: { value: WebsiteType; label: string }[] = [
    { value: 'pre-incubation', label: 'Pre-Incubation' },
    { value: 'ai-automation', label: 'AI & Automation' },
    { value: 'fire-safety', label: 'Fire & Safety' },
  ];

  return (
    <div className="sticky top-0 z-50 px-4 py-3 text-white shadow-lg bg-slate-900">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        <span className="text-sm font-medium">Our Websites:</span>

        <div className="flex gap-2">
          {websites.map((website) => (
            <button
              key={website.value}
              onClick={() => setCurrentWebsite(website.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentWebsite === website.value
                  ? `${websiteTheme[website.value].primary} text-white shadow-lg`
                  : `bg-slate-800 text-slate-300 ${websiteTheme[website.value].primaryHover}`
              }`}
            >
              {website.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
