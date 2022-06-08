import React from 'react';

const IconCard = ({
  iconSrc,
  imageWidth,
  imageHeight,
  title,
  content,
  fontColor = "text-deep-blue-600",
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: IconCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col items-center lg:px-40px tracking-widest ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      { 
        iconSrc && (
          <img
            alt="icon"
            src={`https://cdn.chiron.care/${iconSrc}?width=${imageWidth}&height=${imageHeight}`}
            className="w-10 h-10 lg:w-20 lg:h-20"
          />
        )
      }
      <div className="flex flex-col items-center mt-lg-card w-full">
        <h1 className={`text-sm-h3-card lg:text-lg-h3-card leading-7 lg:leading-8 ${fontColor} mb-sm-card lg:mb-lg-card text-center whitespace-pre-line`}>
          { title[locale] ? title[locale].replace(/\\n/g, "\n") : title.replace(/\\n/g, "\n") }
        </h1>
        {
          content[locale] && (
            <p className="text-sm-h6 tracking-widest leading-6 text-custom-grey-400 w-full text-justify lg:text-center">
              { content[locale] ? content[locale] : content }
            </p>
          )
        }
      </div>
    </div>
  );
};

interface IconCardProps {
  iconSrc: string
  imageWidth: string
  imageHeight: string
  title: string
  fontColor: string
  content: string
  classValue?: string
  locale: string

  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(IconCard);
