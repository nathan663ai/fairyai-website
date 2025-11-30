import React from 'react';

const USPStrip: React.FC = () => {
  const usps = [
    {
      id: 1,
      stat: "6",
      label: "Art Styles",
      sublabel: "per character"
    },
    {
      id: 2,
      stat: "12",
      label: "Languages",
      sublabel: "Stories & Songs"
    },
    {
      id: 3,
      stat: "2-12",
      label: "Ages",
      sublabel: "Content adapts"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-soft-blue-50 to-soft-green-50 border-y border-soft-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {usps.map((usp) => (
            <div key={usp.id} className="flex flex-col items-center">
              {/* Large Stat Circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-soft-blue-100 to-soft-green-100 rounded-full flex items-center justify-center mb-3 shadow-md">
                <span className="text-2xl md:text-3xl font-bold text-soft-blue-600">
                  {usp.stat}
                </span>
              </div>
              {/* Label */}
              <h3 className="font-semibold text-neutral-900 text-base md:text-lg mb-1">
                {usp.label}
              </h3>
              {/* Sublabel */}
              <p className="text-sm text-neutral-600">
                {usp.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPStrip;
