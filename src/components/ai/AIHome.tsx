import Section from '../shared/Section';
import Button from '../shared/Button';
import Card from '../shared/Card';
import { Brain, Cog, GraduationCap, Briefcase, Building, Shield } from 'lucide-react';

export default function AIHome() {
  const focusAreas = [
    { icon: Brain, title: 'Solutions', description: 'Custom AI solutions for your business' },
    { icon: Cog, title: 'Automation', description: 'Process automation and optimization' },
    { icon: GraduationCap, title: 'Training', description: 'AI/ML training and workshops' },
    { icon: Briefcase, title: 'Consulting', description: 'Strategic AI consulting services' },
    { icon: Building, title: 'Deployment', description: 'End-to-end AI deployment' },
    { icon: Shield, title: 'Support', description: '24/7 maintenance and support' },
  ];

  const applicationAreas = [
    'Education',
    'Startups & MSMEs',
    'Industrial Systems',
    'Governance & Safety',
  ];

  return (
    <>
      <Section id="home" background="blue">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              AI & Automation Solutions
            </h1>
            <p className="text-2xl text-blue-600 font-semibold">
              Practical AI Systems for a Digitally Empowered India
            </p>
            <div className="prose prose-lg text-gray-700">
              <p>
                As India marches towards Viksit Bharat 2047, we are committed to democratizing artificial intelligence and automation technologies. Aligned with the IndiaAI Mission, our solutions empower organizations across sectors to harness the power of AI for growth, efficiency, and innovation.
              </p>
              <p>
                From intelligent automation to predictive analytics, from computer vision to natural language processing—we deliver end-to-end AI solutions that transform businesses and drive India's digital economy forward.
              </p>
            </div>
            <div className="pt-4">
              <Button size="lg" href="https://forms.google.com">
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center">
              <Brain className="w-48 h-48 text-white opacity-80" />
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Focus Areas</h2>
          <p className="text-xl text-gray-600">
            Comprehensive AI and automation services for every need
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Application Areas</h2>
          <p className="text-xl text-gray-600">
            Transforming key sectors with AI-powered solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applicationAreas.map((area, index) => (
            <Card key={index}>
              <h3 className="text-xl font-bold text-gray-800 text-center">{area}</h3>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
