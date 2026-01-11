import Section from '../shared/Section';
import Accordion from '../shared/Accordion';

export default function PreIncubationFAQ() {
  const faqs = [
    {
      question: 'Who can apply for the Pre-Incubation Program?',
      answer: 'Students, researchers, early-stage entrepreneurs, and anyone with innovative ideas can apply. We welcome applications from diverse backgrounds and domains.',
    },
    {
      question: 'What support does DBI provide?',
      answer: 'We provide mentorship, resources, workspace, networking opportunities, access to funding, technical infrastructure, and guidance for developing your idea into a viable venture.',
    },
    {
      question: 'Is there any fee for joining?',
      answer: 'The pre-incubation program is designed to be accessible. Please contact us for detailed information about any applicable fees or available scholarships.',
    },
    {
      question: 'How long does the pre-incubation period last?',
      answer: 'The typical pre-incubation period ranges from 3 to 6 months, depending on the nature of your project and progress milestones achieved.',
    },
    {
      question: 'What happens after pre-incubation?',
      answer: 'Successful ventures can progress to full incubation, access investor networks, or continue with our extended support programs based on their growth trajectory.',
    },
  ];

  return (
    <Section id="faq" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our program
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
