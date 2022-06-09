import React from 'react';

const PassageCard = ({
  imageSrc,
  postedAt = "",
  title,
  abstract,
  author,
  locale,
  classValue = ""
}: PassageCardProps): React.ReactElement => {
  const className = `${classValue}`;

  const getUnknowAuthorName = (locale) => {
    const name = {
      "zh-HK": "楷和醫療",
      "zh-CN": "楷和医疗",
      "en-US": "Chiron Medical"
    };
    return name[locale];
  }

  return (
    <div className={`${className} flex flex-col bg-white shadow-custom rounded-custom my-sm-subtopic zoom
      w-sm-passage-card max-w-sm-passage-card
      md:w-md-passage-card md:max-w-md-passage-card
      lg:w-lg-passage-card lg:max-w-lg-passage-card
      xl:w-xl-passage-card xl:max-w-xl-passage-card
    `}>
      <img
        src={imageSrc}
        className="w-full rounded-t-custom max-h-passage-card-image"
        alt={title}
        loading="lazy"
      />
      <div className="flex flex-col mx-6 my-2 h-full">
        {
          postedAt !== "" && (
            <div className="flex flex-row items-center mb-sm-card lg:mb-0">
              <img src="https://cdn.chiron.care/cms/general/icons/clock.svg" className="h-4 w-4" alt={postedAt}/>
              <p className="ml-2 text-sm-p lg:text-lg-h6 text-light-blue-500 tracking-widest leading-5 lg:leading-7">
                { postedAt.replace('T', ' ') }
              </p>
            </div>
          )
        }
        <h3 className={`text-sm-h3-card lg:text-lg-h4-article text-deep-blue-600 restricted-line-number-single
          tracking-widest leading-8 lg:leading-9 mb-sm-card
        `}>
          { title }
        </h3>
        <p className="text-sm-h6 lg:text-lg-h6 text-light-blue-500 tracking-widest leading-6 lg:leading-6 mb-lg-card restricted-line-number">
          { abstract.replace(/<(.*?)>/g, '') }
        </p>
        {
          author && (
            <div className="flex flex-col w-full mt-auto">
              <div className="h-px w-full bg-light-blue-500" />
              <div className={`flex flex-row items-center justify-between my-sm-card ${locale === "en-US" ? "h-en-passage-card-bottom-section" : ""}`}>
                <div className="flex flex-row items-center">
                  <img
                    alt="doctor-avatar"
                    src={author.avatar}
                    className="w-12 xl:w-16 h-12 xl:h-16 align-middle object-cover rounded-half"
                    loading="lazy"
                  />
                  <div className="flex flex-col ml-sm-card">
                    <h3 className={`text-sm-h5 leading-6 ${locale !== "en-US" ? "xl:leading-10 xl:text-lg-h4-article" : "xl:text-lg-h4-card"} text-deep-blue-600`}>
                      { author.name ? author.name : getUnknowAuthorName(locale) }
                    </h3>
                    <p className={`text-sm-p xl:text-lg-h6 leading-5 ${locale !== "en-US" ? "xl:leading-7" : ""} text-light-blue-500`}>
                      { author.title ? (author.title.indexOf(',') !== -1 ? author.title.substr(0, author.title.indexOf(',')) : author.title) : " " }
                    </p>
                  </div>
                </div>
                <img src="https://cdn.chiron.care/cms/general/icons/thin-arrow-right.svg" alt="" loading="lazy"/>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export interface PassageCardProps {
  imageSrc: string
  postedAt: string
  title: string
  abstract: string
  author?: any
  locale: string
  classValue?: string
}

export default React.memo(PassageCard);
