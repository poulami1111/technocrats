import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, startDate, endDate }) => {
  return (
    <div className="mb-6 relative">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{startDate} — {endDate}</p>
      </div>
      <p className="text-sm text-orange-400 font-medium">{company}</p>
      <hr className="mt-3 border-gray-700" />
    </div>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <div className="group max-w-sm p-8 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden shadow-xl text-white border border-white/10 relative transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-orange-500/10">
      <div className="relative z-20">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-6">Health Experience</h4>

        {/* Experience items */}
        <ExperienceItem
          title="Dr Singh"
          company="Apollo"
          startDate="2024"
          endDate="Now"
        />
        <ExperienceItem
          title="Dr Pranav"
          company="ICU"
          startDate="2020"
          endDate="Now"
        />
        <ExperienceItem
          title="Dr Dey"
          company="Calcutta Hospital"
          startDate="2017"
          endDate="Now"
        />
      </div>

      {/* Gradient background effects */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default WorkExperience;

