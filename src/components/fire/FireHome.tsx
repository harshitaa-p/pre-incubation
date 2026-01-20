import Section from '../shared/Section';
import Button from '../shared/Button';
import FireImageSlider from './FireImageSlidebar';

export default function FireHome() {
  return (
    <Section id="home" background="blue">
      <div className="grid gap-12 items-center md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Fire & Industrial Safety Services
          </h1>

          <p className="text-2xl font-semibold text-red-600">
            Reliable safety solutions for risk prevention and preparedness
          </p>

          <div className="text-gray-700 prose prose-lg">
            <p>
              Safety is not just a requirement—it's a responsibility. At DBI Pvt.
              Ltd., we provide comprehensive fire and industrial safety solutions
              designed to protect lives, assets, and operations across diverse
              sectors.
            </p>
            <p>
              From fire detection systems to personal protective equipment, from
              safety audits to emergency response planning—we deliver end-to-end
              safety services that meet national and international standards.
            </p>
          </div>

          <div className="pt-4">
            <Button size="lg" href="https://forms.google.com" className="bg-red-500">
              Get Quotation
            </Button>
          </div>
        </div>

        <div className="w-full">
  <FireImageSlider />
</div>

      </div>
    </Section>
  );
}
