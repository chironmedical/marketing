import React from 'react';

const BodyCheckCard = ({
  price,
  title,
  imageSrc,
  imageWidth,
  imageHeight,
  locale = "zh-HK",
  leaflet,
  fontColor,
  btnBackgroundColor,
  marginContent = {top: 0, left: "auto", right: "auto", bottom: 0},
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: BodyCheckCardProps): React.ReactElement => {
  const marginValue = `mt-${marginContent.top} ml-${marginContent.left} mr-${marginContent.right} mb-${marginContent.bottom}`;
  const className = `${marginValue} ${classValue}`;

  return (
    <div
      className={`flex flex-col px-sm-subtopic py-sm-subtopic overflow-hidden min-w-body-check-card
      w-body-check-card h-body-check-card border xl:w-xl-body-check-card xl:h-xl-body-check-card border-light-blue-200
      rounded-square-card shadow-contact-card relative bg-avatar-purple ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="w-full lg:bg-avatar-purple">
        <div className="flex flex-row items-end mx-auto">
          <h2 className={`text-sm-h3-card leading-7 text-left ${locale !== "en-US" ? "xl:text-sm-h1 xl:leading-10" : "xl:text-sm-h3-article xl:leading-8"} tracking-widest whitespace-pre-line text-deep-blue-600 mb-lg-card lg:mb-0`}>
            { title[locale] ? title[locale].replace(/\\n/g, "\n") : "" }
          </h2>
        </div>
      </div>
      <h1 className={`text-sm-h2 lg:text-lg-h3-article tracking-widest leading-9 lg:leading-15 lg:mt-lg-card lg:mb-sm-subtopic ${fontColor}`}>
        { price }
      </h1>
      <a
        href={`https://cdn.chiron.care/${leaflet}`}
        target="_blank"
        rel="noreferrer">
        <button
          className={`font-bold leading-loose rounded-custom outline-none w-24 h-10 xl:w-36 lg:h-14 tracking-widest lg:text-center lg:mb-sm-subtopic ${fontColor} ${btnBackgroundColor}`}
        >
          <h3 className="text-sm-h6 xl:text-lg-h4-article leading-loose font-normal">
            { locale === "zh-HK" && "了解更多" }
            { locale === "zh-CN" && "了解更多" }
            { locale === "en-US" && "More" }
          </h3>
        </button>
      </a>
      <img
        alt="service-background"
        src={`https://cdn.chiron.care/${imageSrc}?width=${imageWidth}&height=${imageHeight}`}
        className="absolute w-right-bottom-image-purple h-right-bottom-image-purple"
        style={{ bottom: "-10px", right: "-10px" }}
      />
    </div>
  );
};

interface BodyCheckCardProps {
  price: string
  title: string
  imageSrc: string
  imageWidth: string
  imageHeight: string
  locale: string
  leaflet: string
  fontColor: string
  textColor: string
  btnBackgroundColor: string
  classValue?: string
  marginContent: any

  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(BodyCheckCard);
