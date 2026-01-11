import FireHeader from '../components/fire/FireHeader';
import FireHome from '../components/fire/FireHome';
import FireAbout from '../components/fire/FireAbout';
import FireVisionMission from '../components/fire/FireVisionMission';
import FireServices from '../components/fire/FireServices';
import FireAutomation from '../components/fire/FireAutomation';
import FireContact from '../components/fire/FireContact';
import FireFooter from '../components/fire/FireFooter';

export default function FireSafetyLayout() {
  return (
    <div className="min-h-screen bg-white">
      <FireHeader />
      <FireHome />
      <FireAbout />
      <FireVisionMission />
      <FireServices />
      <FireAutomation />
      <FireContact />
      <FireFooter />
    </div>
  );
}
