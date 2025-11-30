import React from 'react';

const USPStrip: React.FC = () => {
  const usps = [
    {
      id: 1,
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Characters They Actually Remember",
      color: "text-soft-green-600"
    },
    {
      id: 2,
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Stories That Grow Into Books",
      color: "text-soft-blue-600"
    },
    {
      id: 3,
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-fairy-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Age-Smart Content (2-12)",
      color: "text-fairy-purple-600"
    }
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-soft-blue-50 to-soft-green-50 border-y border-soft-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
          {usps.map((usp) => (
            <div key={usp.id} className="flex flex-col items-center">
              {/* Icon Circle */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                {usp.icon}
              </div>
              {/* Text */}
              <h3 className="font-semibold text-neutral-900 text-sm md:text-base">
                {usp.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPStrip;
