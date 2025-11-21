import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ } from '../../data/faqs';

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about FairyAI"
}) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors text-left"
              >
                <span className="font-semibold text-lg text-neutral-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-neutral-600 flex-shrink-0 transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openFAQ === index && (
                <div className="px-6 py-5 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-700 leading-relaxed">
                    {faq.hasLink ? (
                      <>
                        {faq.answer.split('See our')[0]}
                        See our <Link to="/privacy" className="text-soft-blue-600 hover:text-soft-blue-700 underline">Privacy Policy</Link> for full details.
                      </>
                    ) : faq.hasEmail ? (
                      <>
                        {faq.answer.split('contact us at')[0]}
                        contact us at <a href="mailto:support@fairyai.co.uk" className="text-soft-blue-600 hover:text-soft-blue-700 underline">support@fairyai.co.uk</a>
                        {faq.answer.split('support@fairyai.co.uk')[1]}
                      </>
                    ) : (
                      faq.answer
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
