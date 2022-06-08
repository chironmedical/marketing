import React from 'react';
import DoctorDetailsCard from '../elements/DoctorDetailsCard';
import SpecialistAvatar from '../elements/SpecialistAvatar';

const DoctorDetailBlock = ({
  person,
  locale,
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: DoctorDetailBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex-row relative w-4/5 h-fit-content ml-auto justify-between hidden lg:flex">
        <DoctorDetailsCard
          doctor={person}
          locale={locale}
          classValue="lg:mx-0 lg:w-2/5 my-lg-subtopic"
        />
        <SpecialistAvatar
          clipPathId="avatar-clip-path-lg"
          pathId="avatar-path-lg"
          imageSrc={person.portrait}
          classValue="w-3/5 relative"
        />
      </div>
      <div className="flex flex-col items-center relative lg:hidden">
        <SpecialistAvatar
          clipPathId="avatar-clip-path-sm"
          pathId="avatar-path-sm"
          imageSrc={person.portrait}
          classValue="w-full"
        />
        <DoctorDetailsCard
          doctor={person}
          locale={locale}
          classValue="w-inline mt-sm-subtopic"
        />
      </div>
    </div>
  )
}

interface DoctorDetailBlockProps {
  person: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(DoctorDetailBlock);
