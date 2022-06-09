import React from 'react';

const DownloadCard = ({
  title = "",
  image,
  href,
  classValue,
  imageWidth = "300",
  imageHeight = "300",
  locale,
  builderMode = true,
  isSelected,
  selectBlockFun,
}: DownloadCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-row w-full lg:w-1/3 mb-8 px-sm-subtopic justify-center ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-col items-center">
        <img
          alt="file-thumbnail"
          src={`https://cdn.chiron.care/${image}?width=${imageWidth}&height=${imageHeight}`}
        />
        <h2 className="text-center text-deep-blue-600 text-sm-h4-article lg:text-sm-h1 leading-7 lg:leading-12 my-sm-card lg:my-40px">
          { title[locale] ? title[locale] : title }
        </h2>
        <button
          className={`h-12 lg:h-14 font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none bg-deep-blue-600 text-white w-64`}
        >
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
              <h2 className="text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9">
                { locale === "zh-HK" && "下載" }
                { locale === "zh-CN" && "下载" }
                { locale === "en-US" && "Download" }
              </h2>
            </div>
          </a>
        </button>
      </div>
    </div>
  );
};

export interface DownloadCardProps {
  title: string
  image: string
  href: string
  classValue?: string
  imageWidth: string
  imageHeight: string
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(DownloadCard);
