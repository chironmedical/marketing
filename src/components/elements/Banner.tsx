import React from 'react';

const Banner = ({
  isImageBackground = false,
  imageSrc,
  title,
  subtitle,
  needMargin = true,
  video,
  isVisionPage,
  locale = "zh-HK",
  shortLocale,
  classValue = "",
  imageWidth,
  imageHeight,
  builderMode = true,
  isSelected,
  selectBlockFun,
}: BannerPrpos): React.ReactElement => {
  // eslint-disable-next-line no-unused-vars
  const [imageDelay, setImageDelay] = React.useState(true);
  const className = `${classValue}`;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageDelay(false);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-center relative h-fit-content w-full masked ${needMargin ? "mb-sm-content lg:mb-lg-subject" : ""} ${isImageBackground?'':`flex flex-col w-full text-center py-sm-content lg:py-lg-subject bg-deep-blue-600`} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        imageSrc && (
          <img
            alt="header-background"
            src={`https://cdn.chiron.care/${imageSrc}?width=${imageWidth ? imageWidth : 'auto'}&height=${imageHeight ? imageHeight : 'auto'}`}
            className={`w-full ${ video && !imageDelay ? "hidden" : "block" }`}
            loading="lazy"
          />
        )
      }
      {
        video && (
          <video
            loop
            muted
            autoPlay
            preload="auto"
            className={`w-full ${!imageDelay ? "block" : "hidden"}`}
            >
            <source
              src={`https://cdn.chiron.care/${video}`}
              type="video/mp4"
            />
          </video>
        )
      }
      {
        isImageBackground && <div className="absolute top-0 h-full w-full shaded-overlay" />
      }
      <div className={`flex flex-col items-center px-sm-card
        ${isImageBackground ? `absolute w-full ${isVisionPage ? "text-center-embedded-vision lg:text-center-embedded" : "text-center-embedded"}` : "py-sm-content lg:py-lg-subject"}
      `}>
        {
          title !== "" && (
            <h1 
              className={`${shortLocale !== "en" ? "text-sm-h1 lg:text-lg-h1 lg:leading-21 leading-10" : isVisionPage ? "text-sm-h3-article lg:text-lg-h1" : "text-sm-h1 lg:text-lg-h1 leading-10"} text-center whitespace-pre-line text-white`}>
              { title[locale] ? title[locale].replace(/\\n/g, "\n") : "" }
            </h1>
          )
        }
        {
          subtitle !== "" && (
            <p className={`tracking-widest text-white text-center whitespace-pre-line ${!isImageBackground ? "mt-sm-card lg:mt-0" : ""}
              lg:mt-lg-card text-sm-h5 lg:text-sm-h1 leading-6 lg:leading-11 text-white
            `}>
              { subtitle[locale] ? subtitle[locale].replace(/\\n/g, "\n") : "" }
            </p>
          )
        }
      </div>
    </div>
  );
};

export interface i18nText {
  "zh-HK": string
  "zh-CN": string
  "en-US": string
}

export interface BannerPrpos {
  isImageBackground: boolean
  imageSrc: string
  title: string | i18nText
  subtitle: string | i18nText
  locale: string
  needMargin: boolean
  video: string
  isVisionPage: boolean
  shortLocale: string
  classValue?: string
  imageWidth: string
  imageHeight: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(Banner);
