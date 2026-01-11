import AIHeader from '../components/ai/AIHeader';
import AIHome from '../components/ai/AIHome';
import AIVisionMission from '../components/ai/AIVisionMission';
import AISectors from '../components/ai/AISectors';
import AIFAQ from '../components/ai/AIFAQ';
import AIFooter from '../components/ai/AIFooter';

export default function AIAutomationLayout() {
  return (
    <div className="min-h-screen bg-white">
      <AIHeader />
      <AIHome />
      <AIVisionMission />
      <AISectors />
      <AIFAQ />
      <AIFooter />
    </div>
  );
}
