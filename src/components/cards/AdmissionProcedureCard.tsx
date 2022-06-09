import React from 'react';

const AdmissionProcedureCard = ({
  title = { "zh-HK": "", "zh-CN": "", "en-US": "" },
  subtitle = { "zh-HK": "", "zh-CN": "", "en-US": "" },
  imageSrc,
  locale = "zh-HK",
  classValue = "",
  marginContent = {top: 0, left: "auto", right: "auto", bottom: 0},
  builderMode = true,
  isSelected,
  selectBlockFun,
}: AdmissionProcedureCardProps): React.ReactElement => {
  const marginValue = `mt-${marginContent.top} ml-${marginContent.left} mr-${marginContent.right} mb-${marginContent.bottom}`;
  const className = `${marginValue} ${classValue}`;

  return (
    <div className={`flex flex-col py-sm-subtopic overflow-hidden min-w-body-check-card items-center tracking-widest
      w-body-check-card h-body-check-card xl:w-xl-body-check-card xl:h-xl-body-check-card rounded-square-card
      shadow-contact-card bg-avatar-purple ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <h1 className={`${locale !== "zh-HK" ? "text-sm-h2 leading-9" : "text-sm-h4-article"} lg:text-sm-h1 lg:leading-10 text-deep-blue-600 mx-sm-subtopic text-center`}>
        { title[locale].replace(/\\n/g, "\n") }
      </h1>
      {
        subtitle[locale].length ? (
          <p className={`text-sm-p lg:text-lg-h6 text-light-blue-500 mt-lg-card px-sm-card text-center lg:text-left`}>
            { subtitle[locale] }
          </p>
        ) : ""
      }
      <img
        alt="admission-procedure"
        src={`https://cdn.chiron.care/${imageSrc}`}
        className="mt-sm-subtopic xl:mt-lg-subtopic"
      />
    </div>
  );
};

export interface AdmissionProcedureCardProps {
  title: any
  subtitle: any
  imageSrc: string
  locale: string
  classValue?: string
  marginContent: Record<string, any>
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(AdmissionProcedureCard);
