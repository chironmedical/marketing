import React from 'react';

const ImageIcon = ({
  locale = "zh-HK",
  imageSrc = "",
  title ="",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ImageIconProp ): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <img
        alt="issue"
        src={`https://cdn.chiron.care/${imageSrc}`}
        className="h-32"
      />
      <h3 className="text-sm-h3-card lg:text-lg-h3-card leading-7 lg:leading-9 text-deep-blue-600 text-center mt-sm-card lg:mt-lg-card whitespace-pre-line">
        { title[locale].replace(/\\n/g, "\n") }
      </h3>
    </div>
  );
}

interface ImageIconProp {
  locale: string
  imageSrc: string
  title: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default ImageIcon;
