import React from 'react';

const BannerLeftText = ({
  cover = "",
  mobileCover = "",
  title = "",
  classValue = "",
  needMargin = true,
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: BannerLeftTextPrpos): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`relative h-fit-content w-full masked mb-sm-content ${needMargin ? "mb-sm-content lg:mb-lg-subject" : ""} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <img
        alt="banner-message"
        src={`https://cdn.chiron.care/${cover}`}
        className="w-full hidden sm:block"
      />
      <img
        alt="banner-message"
        src={`https://cdn.chiron.care/${mobileCover}`}
        className="w-full sm:hidden"
      />
      <div className="flex flex-col items-center px-sm-subtopic absolute ceo-message-text-embedded w-full">
        <h1 className={`text-sm-h3-card md:text-sm-h1 ${locale !== "en-US" ? "lg:text-lg-h3-article" : ""} tracking-widest2
          leading-7 lg:leading-15 text-white whitespace-pre-line
        `}>
          { title[locale].replace('\\n', '\n') }
        </h1>
      </div>
    </div>
  );
};

interface BannerLeftTextPrpos {
  cover: string
  mobileCover: string
  title: any
  locale: string
  classValue?: string
  needMargin: boolean
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(BannerLeftText);
