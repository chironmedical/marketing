import React from 'react';

const InsuranceCard = ({
  imageSrc,
  companyName = { "zh-HK": "", "zh-CN": "", "en-US": "" },
  locale = "zh-HK",
  href = { "zh-HK": "#", "zh-CN": "#", "en-US": "#" },
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: InsuranceCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col min-w-body-check-card lg:py-0 overflow-hidden w-insurance-card xl:w-xl-insurance-card h-insurance-card xl:h-xl-insurance-card rounded-square-card m-4 ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <a
        href={href[locale]}
        target="_blank"
        rel="noreferrer">
        <img
          alt="insurance-company"
          src={`https://cdn.chiron.care/${imageSrc}`}
          className="h-insurance-card-image xl:h-xl-insurance-card-image object-cover"
        />
        <div className="flex flex-row px-sm-subtopic items-center justify-between h-insurance-card-text bg-deep-blue-600">
          <h3 className="text-sm-h3-card text-white">{ companyName[locale] }</h3>
          <img alt="arrow-right" src="https://cdn.chiron.care/cms/general/icons/arrow-right-white.svg" />
        </div>
      </a>
    </div>
  );
};

interface InsuranceCardProps {
  imageSrc: string
  companyName: any
  href: any
  locale: any
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(InsuranceCard);
