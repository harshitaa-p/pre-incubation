import { WebsiteProvider, useWebsite } from './context/WebsiteContext';
import WebsiteSwitcher from './components/WebsiteSwitcher';
import PreIncubationLayout from './layouts/PreIncubationLayout';
import AIAutomationLayout from './layouts/AIAutomationLayout';
import FireSafetyLayout from './layouts/FireSafetyLayout';

function AppContent() {
  const { currentWebsite } = useWebsite();

  return (
    <>
      <WebsiteSwitcher />
      <div className="transition-opacity duration-300 ease-in-out">
        {currentWebsite === 'pre-incubation' && <PreIncubationLayout />}
        {currentWebsite === 'ai-automation' && <AIAutomationLayout />}
        {currentWebsite === 'fire-safety' && <FireSafetyLayout />}
      </div>
    </>
  );
}

function App() {
  return (
    <WebsiteProvider>
      <AppContent />
    </WebsiteProvider>
  );
}

export default App;
