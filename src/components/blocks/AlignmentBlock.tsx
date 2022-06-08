import React from 'react';

const AlignmentBlock = ({
  imageSrc,
  imageWidth = "auto",
  imageHeight = "auto",
  title = {'zh-HK': '', 'zh-CN': '', 'en-US': ''},
  content,
  locale = "zh-HK",
  titleBeforeImage = false,
  alignment = "left",
  fontColor = "text-light-blue-500",
  haveBtn = false,
  btnLink = "#",
  btnImg = "",
  btnText = "",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: AlignmentBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col w-full ${locale !== "en-US" ? "tracking-widest" : ""} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div
        className={`flex flex-col lg:flex-row lg:justify-between w-full items-center mx-0 my-auto`}
      >
        {
          titleBeforeImage && (
            title[locale].length ? (
              <h1 className="text-sm-h1 leading-11 text-deep-blue-600 w-full text-center mb-sm-content lg:hidden">
                { title[locale] }
              </h1>
            ) : null
          )
        }
        {
          alignment === "left" && (
            <div className="hidden lg:flex flex-col items-center lg:items-start lg:mr-lg-content">
              <h1 className="text-sm-h1 lg:text-lg-h3-article leading-11 lg:leading-15 text-deep-blue-600 mb-lg-subtopic">
                { title[locale] }
              </h1>
              <p className={`lg:hidden text-sm-h3-card lg:text-lg-h3-card leading-8 lg:leading-10 ${fontColor} text-justify whitespace-pre-line`}>
                { content[locale] ? content[locale].replace(/\\n/g, "\n") : "" }
              </p>
              <p className={`hidden lg:block text-sm-h3-card lg:text-lg-h3-card leading-8 lg:leading-10 ${fontColor} text-justify whitespace-pre-line`}>
                { content[locale] ? content[locale].replace(/\\n/g, "\n") : "" }
              </p>

              {
                haveBtn && (
                  <button className="h-12 lg:h-14 font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none bg-deep-blue-600 text-white mt-sm-subtopic lg:mt-lg-subtopic ">
                    <a
                      href={ btnLink[locale] }
                      target="_blank"
                      rel="noreferrer">
                      <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
                        {
                          btnImg && (
                            <img
                              alt="icon"
                              src={`https://cdn.chiron.care/${btnImg}`}
                              className="lg:w-7 mr-sm-card" />
                          )
                        }
                        <h2 className="text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9">
                          { btnText[locale] }
                        </h2>
                      </div>
                    </a>
                  </button>
                )
              }
            </div>
          )
        }
        <img
          alt="alignment-card-img"
          src={`https://cdn.chiron.care/${imageSrc}?width=${imageWidth}&height=${imageHeight}`}
          className="mb-sm-subtopic w-inline-image lg:w-lg-inline-image xl:w-xl-inline-image lg:min-h-lg-vision-image xl:min-h-xl-vision-image"
        />
        <div className="flex flex-col items-center lg:hidden">
          {
            !titleBeforeImage && (
              title[locale].length ? (
                <h1 className="text-sm-h1 lg:text-lg-h3-article leading-11 lg:leading-15 text-deep-blue-600 mb-sm-subtopic lg:mb-lg-subtopic">
                  { title[locale] }
                </h1>
              ) : null
            )
          }
          <p className={`lg:hidden text-sm-h3-card lg:text-lg-h3-card leading-8 lg:leading-10 ${fontColor} text-justify whitespace-pre-line`}>
            { content[locale] ? content[locale].replace(/\\n/g, "\n") : "" }
          </p>
          <p className={`hidden lg:block text-sm-h3-card lg:text-lg-h3-card leading-8 lg:leading-10 ${fontColor} text-justify whitespace-pre-line`}>
            { content[locale] ? content[locale].replace(/\\n/g, "\n") : "" }
          </p>
        </div>
        {
          alignment === "right" && (
            <div className="flex-col items-center lg:items-start lg:ml-lg-content hidden lg:flex">
              {
                title[locale].length ? (
                  <h1 className="text-sm-h1 lg:text-lg-h3-article leading-11 lg:leading-15 text-deep-blue-600 mb-lg-subtopic">
                    { title[locale] }
                  </h1>
                ) : null
              }
              <p className={`lg:hidden text-sm-h3-card lg:text-lg-h3-card leading-8 lg:leading-10 ${fontColor} text-justify whitespace-pre-line`}>
                { content[locale] ? content[locale].replace(/\\n/g, "\n") : "" }
              </p>
              <p className={`hidden lg:block text-sm-h3-card lg:text-lg-h3-card leading-8 lg:leading-10 ${fontColor} text-justify whitespace-pre-line`}>
                { content[locale] ? content[locale].replace(/\\n/g, "\n") : "" }
              </p>

              {
                haveBtn && (
                  <button className="h-12 lg:h-14 font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none bg-deep-blue-600 text-white mt-sm-subtopic lg:mt-lg-subtopic ">
                    <a
                      href={ btnLink[locale] }
                      target="_blank"
                      rel="noreferrer">
                      <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
                        {
                          btnImg && (
                            <img
                              alt="icon"
                              src={`https://cdn.chiron.care/${btnImg}`}
                              className="lg:w-7 mr-sm-card" />
                          )
                        }
                        <h2 className="text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9">
                          { btnText[locale] }
                        </h2>
                      </div>
                    </a>
                  </button>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

interface AlignmentBlockProps {
  imageSrc: string
  imageWidth: string
  imageHeight: string
  title: any
  content: any
  locale: string
  titleBeforeImage: boolean
  alignment: string
  fontColor: string
  haveBtn?: boolean

  btnLink: string
  btnImg: string
  btnText: string

  classValue?: string

  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(AlignmentBlock);
