import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="font-semibold text-gray-800">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 py-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
