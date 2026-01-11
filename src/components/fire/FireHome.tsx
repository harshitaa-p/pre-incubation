import Section from '../shared/Section';
import Button from '../shared/Button';
import { Shield } from 'lucide-react';

export default function FireHome() {
  return (
    <Section id="home" background="blue">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Fire & Industrial Safety Services
          </h1>
          <p className="text-2xl text-red-600 font-semibold">
            Reliable safety solutions for risk prevention and preparedness
          </p>
          <div className="prose prose-lg text-gray-700">
            <p>
              Safety is not just a requirement—it's a responsibility. At DBI Pvt. Ltd., we provide comprehensive fire and industrial safety solutions designed to protect lives, assets, and operations across diverse sectors.
            </p>
            <p>
              From fire detection systems to personal protective equipment, from safety audits to emergency response planning—we deliver end-to-end safety services that meet national and international standards.
            </p>
          </div>
          <div className="pt-4">
            <Button size="lg" href="https://forms.google.com">
              Get Quotation
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-96 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center">
            <Shield className="w-48 h-48 text-white opacity-80" />
          </div>
        </div>
      </div>
    </Section>
  );
}
