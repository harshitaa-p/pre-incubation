import PreIncubationHeader from '../components/preincubation/PreIncubationHeader';
import PreIncubationHome from '../components/preincubation/PreIncubationHome';
import PreIncubationAbout from '../components/preincubation/PreIncubationAbout';
import PreIncubationLearn from '../components/preincubation/PreIncubationLearn';
import PreIncubationInnovationCell from '../components/preincubation/PreIncubationInnovationCell';
import PreIncubationProgram from '../components/preincubation/PreIncubationProgram';
import PreIncubationEvents from '../components/preincubation/PreIncubationEvents';
import PreIncubationContact from '../components/preincubation/PreIncubationContact';
import PreIncubationFAQ from '../components/preincubation/PreIncubationFAQ';
import PreIncubationFooter from '../components/preincubation/PreIncubationFooter';

export default function PreIncubationLayout() {
  return (
    <div className="min-h-screen bg-white">
      <PreIncubationHeader />
      <PreIncubationHome />
      <PreIncubationAbout />
      <PreIncubationLearn />
      <PreIncubationInnovationCell />
      <PreIncubationProgram />
      <PreIncubationEvents />
      <PreIncubationContact />
      <PreIncubationFAQ />
      <PreIncubationFooter />
    </div>
  );
}
