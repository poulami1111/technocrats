import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, startDate, endDate }) => {
  return (
    <div className="mb-4 relative">
      <div className="flex justify-between items-center ">
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
        <p className="text-gray-100 text-sm">{startDate} — {endDate}</p>
      </div>
      <p className="text-gray-100">{company}</p>
      <hr className="mt-2" />

    </div>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <div className="max-w-sm  bg-black rounded-lg shadow-md text-white/50 relative overflow-hidden">
      <div className='p-6'>
        <h4 className="text-sm font-semibold uppercase text-gray-100">health Experience</h4>

        {/* Experience items */}
        <div className="mt-4">
          <ExperienceItem
            title="Dr Singh"
            company="Apollo"
            startDate="2024"
            endDate="Now"
          />
          <ExperienceItem
            title="Dr Pranav "
            company="Icu"
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
      </div>

          <div className="bg-[#FF9D23] w-36 h-36 -bottom-16  overflow-hidden blur-3xl rounded-full absolute z-10 shadow-[0_0_15px_5px_rgba(255,193,69,0.8)]"></div>
      
    </div>
  );
};

export default WorkExperience;
