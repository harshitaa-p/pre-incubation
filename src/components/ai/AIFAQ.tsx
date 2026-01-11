import Section from '../shared/Section';
import Accordion from '../shared/Accordion';

export default function AIFAQ() {
  const faqs = [
    {
      question: 'What AI services does DBI provide?',
      answer: 'We offer custom AI solution development, automation consulting, machine learning model training, computer vision systems, natural language processing, predictive analytics, and end-to-end AI deployment and support.',
    },
    {
      question: 'How can AI benefit my organization?',
      answer: 'AI can automate repetitive tasks, improve decision-making through data insights, enhance customer experiences, optimize operations, reduce costs, and unlock new revenue opportunities through intelligent systems.',
    },
    {
      question: 'Do you work with startups and MSMEs?',
      answer: 'Yes! We specialize in making AI accessible to organizations of all sizes. We offer flexible pricing models and scalable solutions designed specifically for startups and MSMEs.',
    },
    {
      question: 'How long does AI implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple automation projects can be deployed in weeks, while comprehensive AI systems may take several months. We provide detailed timelines during the consultation phase.',
    },
    {
      question: 'Do you provide training and support?',
      answer: 'Absolutely! We offer comprehensive training programs for your team and provide ongoing support to ensure smooth operation and continuous improvement of AI systems.',
    },
  ];

  return (
    <Section id="faq" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600">
          Common questions about our AI & automation services
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
