import Section from '../shared/Section';
import Button from '../shared/Button';
import { Lightbulb } from 'lucide-react';

export default function PreIncubationHome() {
  return (
    <Section id="home" background="blue">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Darade & Budhwant Infotech Pvt. Ltd
          </h1>
          <p className="text-2xl text-blue-600 font-semibold">
            Driven by Vision, Powered by Innovation
          </p>
          <div className="prose prose-lg text-gray-700">
            <p>
              Every great innovation begins with a simple idea—one that dares to challenge the ordinary and seeks to create extraordinary impact. At Darade & Budhwant Infotech Pvt. Ltd. (DBI), we believe that the journey from idea to innovation is one that should be nurtured, supported, and celebrated.
            </p>
            <p>
              Our Pre-Incubation initiative is designed to empower early-stage innovators, startups, and student entrepreneurs with the resources, mentorship, and ecosystem support they need to transform their concepts into viable ventures. Rooted in the vision of Viksit Bharat and aligned with Atmanirbhar Bharat, we are committed to fostering a culture of innovation that contributes to national growth and global competitiveness.
            </p>
            <p>
              Whether you're a student exploring your first entrepreneurial idea, a researcher aiming to commercialize your work, or a team with a bold solution to real-world challenges, DBI's Pre-Incubation Center is your launchpad to success.
            </p>
          </div>
          <div className="pt-4">
            <Button size="lg" href="https://forms.google.com">
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
            <Lightbulb className="w-48 h-48 text-white opacity-80" />
          </div>
        </div>
      </div>
    </Section>
  );
}
