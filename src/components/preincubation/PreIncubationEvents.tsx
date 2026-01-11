import Section from '../shared/Section';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { Calendar, Trophy, Code, Presentation, Award } from 'lucide-react';

export default function PreIncubationEvents() {
  const events = [
    {
      icon: Trophy,
      title: 'Kumbhathon',
      description: 'A grand innovation marathon bringing together innovators from across the nation to solve pressing challenges.',
      date: 'Upcoming',
    },
    {
      icon: Code,
      title: 'Hackathons',
      description: 'Intensive coding and problem-solving events focused on developing tech solutions in 24-48 hours.',
      date: 'Quarterly',
    },
    {
      icon: Presentation,
      title: 'Workshops',
      description: 'Skill-building sessions on entrepreneurship, technology, design thinking, and business development.',
      date: 'Monthly',
    },
    {
      icon: Award,
      title: 'Demo Days',
      description: 'Showcase your innovations to investors, industry leaders, and potential partners.',
      date: 'Bi-Annual',
    },
  ];

  return (
    <Section id="events" background="gray">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar className="w-10 h-10 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-800">Events</h2>
        </div>
        <p className="text-xl text-gray-600">
          Join our upcoming events and be part of the innovation community
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <Card key={index}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {event.date}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" href="https://forms.google.com">
          Register for Events
        </Button>
      </div>
    </Section>
  );
}
