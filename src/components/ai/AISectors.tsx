import Section from '../shared/Section';
import Card from '../shared/Card';
import { GraduationCap, Factory, Heart, Building2, Leaf, ShoppingCart, Users, Globe } from 'lucide-react';

export default function AISectors() {
  const sectors = [
    { icon: GraduationCap, title: 'Education', color: 'blue' },
    { icon: Factory, title: 'Manufacturing', color: 'gray' },
    { icon: Heart, title: 'Healthcare', color: 'red' },
    { icon: Building2, title: 'Real Estate', color: 'orange' },
    { icon: Leaf, title: 'Agriculture', color: 'green' },
    { icon: ShoppingCart, title: 'Retail & E-commerce', color: 'purple' },
    { icon: Users, title: 'HR & Recruitment', color: 'pink' },
    { icon: Globe, title: 'Government & Public Services', color: 'blue' },
  ];

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    gray: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
    red: 'bg-red-100 text-red-600 hover:bg-red-200',
    orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    green: 'bg-green-100 text-green-600 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    pink: 'bg-pink-100 text-pink-600 hover:bg-pink-200',
  };

  return (
    <Section id="sectors" background="blue" className='py-0'>
      <div className="relative min-h-[600px]">
        <div className="overflow-hidden absolute inset-0 opacity-30 pointer-events-none">
          <img
            src="/images/ai/ai-circuit.svg"
            alt=""
            className="object-cover w-full h-full"
            style={{ minHeight: '600px' }}
          />
        </div>

        <div className="relative z-10">
          <div className="pt-5 mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">Sectors We Serve</h2>
            <p className="text-xl text-gray-600">
              AI solutions tailored for diverse industries
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card key={index}>
                  <button className="space-y-4 w-full text-center transition-all duration-300 group hover:scale-105">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${colorClasses[sector.color]} group-hover:shadow-lg transform group-hover:rotate-6`}>
                      <Icon className="w-8 h-8 transition-transform transform group-hover:scale-110" />
                    </div>
                    <h3 className="font-semibold text-gray-800 transition-colors group-hover:text-blue-600">{sector.title}</h3>
                  </button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
