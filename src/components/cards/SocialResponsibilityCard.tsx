import React from 'react';

const SocialResponsibilityCard = ({
  socialResponsibility = [],
  locale = "zh-HK",
  classValue = "",
}: SocialResponsibilityCardProps): React.ReactElement => {
  const className = `${classValue}`;
  return (
    <div className={`${className} flex flex-col shadow-custom rounded-custom bg-light-blue-300 my-sm-card
      w-sm-passage-card max-w-sm-passage-card
      md:w-md-passage-card md:max-w-md-passage-card
      lg:w-lg-passage-card lg:max-w-lg-passage-card
      xl:w-xl-passage-card xl:max-w-xl-passage-card
    `}>
      <img
        src={socialResponsibility.thumbnail}
        alt={socialResponsibility.name}
        className="w-full rounded-t-custom"
      />
      <div className="flex flex-col mx-6 my-lg-card h-full">
        <div className="flex flex-row items-center mb-sm-card lg:mb-0">
          <img
            src="https://cdn.chiron.care/cms/general/icons/clock.svg"
            className="h-4 w-4"
            alt="postedAt" />
          <p className="ml-2 text-sm-p lg:text-lg-h6 text-light-blue-500 tracking-widest leading-5 lg:leading-7">
            { socialResponsibility.postedAt.replace('T', ' ') }
          </p>
        </div>
        <h3 className={`text-sm-h3-card lg:text-lg-h4-article text-deep-blue-600
          tracking-widest leading-7 lg:leading-9 mb-sm-card
        `}>
          { socialResponsibility.name }
        </h3>
        <p className="text-sm-h6 lg:text-lg-h6 text-light-blue-500 mb-lg-card tracking-widest leading-6 lg:leading-6 restricted-line-number">
          { socialResponsibility.abstract }
        </p>
        <div className="flex flex-row items-center mt-auto">
          <p className="text-deep-blue-600 text-sm-p leading-5 mr-2">
            { locale === "zh-HK" && "了解更多" }
            { locale === "zh-CN" && "了解更多" }
            { locale === "en-US" && "More" }
          </p>
          <img
            src="https://cdn.chiron.care/cms/general/icons/thin-arrow-right.svg"
            className="h-3"
            alt={locale === "zh-CN" ? "了解更多" : locale === "en-US" ? "More" : "了解更多"} />
        </div>
      </div>
    </div>
  );
};

export interface SocialResponsibilityCardProps {
  socialResponsibility: any,
  locale: string
  classValue?: string
}

export default React.memo(SocialResponsibilityCard);
