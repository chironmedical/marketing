import React from 'react';

const EmergencyContactCard = ({
  iconSrc,
  content = {'zh-HK': '', 'zh-CN': '', 'en-US': ''},
  href = "#",
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun
}: EmergencyContactCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <a className={`flex flex-row m-4 overflow-hidden items-center tracking-widest justify-center
      w-body-check-card xl:w-xl-body-check-card rounded-square-card py-sm-subtopic px-sm-subtopic
      shadow-contact-card bg-deep-blue-600 ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={selectBlockFun}
    >
      <img
        alt="emergency-contact"
        src={`https://cdn.chiron.care/${iconSrc}`}
        className="w-10 h-10 lg:w-fit-content lg:h-fit-content"
      />
      <h1 className="text-sm-h3-card lg:text-sm-h3-article leading-9 lg:leading-10 text-center text-white whitespace-pre-line ml-sm-subtopic">
        { content[locale].replace(/\\n/g, "\n") }
      </h1>
    </a>
  );
};

interface EmergencyContactCardProps {
  iconSrc: string
  locale: string
  title: string
  content: any
  href: string
  imageSrc: string
  classValue?: string

  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(EmergencyContactCard);
