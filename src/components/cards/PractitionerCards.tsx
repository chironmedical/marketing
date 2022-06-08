import React from 'react';
import SimpleDoctorCard from '../cards/SimpleDoctorCard';

const PractitionerCards = ({
  people,
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: PractitionerCardsProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col mt-sm-subject xl:mt-lg-content w-full lg:w-lg-inline xl:w-xl-inline ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-col xl:flex-row w-full">
        {
          people.map((person, index) => (
            <div
              className="flex flex-row xl:w-1/2 justify-center"
              key={`person-${index}`}
            >
              <SimpleDoctorCard
                image={person.thumbnail}
                name={person.name}
                role={person.role}
                locale={locale}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

interface PractitionerCardsProps {
  people: Record<string, any>
  locale?: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(PractitionerCards);