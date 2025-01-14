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
        <h4 className="text-sm font-semibold uppercase text-gray-100">Work Experience</h4>

        {/* Experience items */}
        <div className="mt-4">
          <ExperienceItem
            title="Product Designer"
            company="Pioneer"
            startDate="2022"
            endDate="Now"
          />
          <ExperienceItem
            title="Product Designer"
            company="Digital"
            startDate="2020"
            endDate="2022"
          />
          <ExperienceItem
            title="UX/UI Designer"
            company="Digital"
            startDate="2017"
            endDate="2020"
          />
        </div>
      </div>

          <div className="bg-[#FF9D23] w-36 h-36 -bottom-16  overflow-hidden blur-3xl rounded-full absolute z-10 shadow-[0_0_15px_5px_rgba(255,193,69,0.8)]"></div>
      
    </div>
  );
};

export default WorkExperience;
