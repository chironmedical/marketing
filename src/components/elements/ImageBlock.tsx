import React from 'react';

const ImageBlock = ({
  imageSrc = "",
  alt = "",
  srcSet = "",
  classValue = "",
  imageWidth,
  imageHeight,
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ImageBlockProp ): React.ReactElement => {
  const className = `${classValue}`;

  const imgSrc = (src) => {
    const httpCheck = new RegExp("^(http|https)://", "i");

    return httpCheck.test(src) ? src : `https://cdn.chiron.care/${imageSrc}?width=${imageWidth}&height=${imageHeight}`;
  }

  return (
    <img
      alt={ alt }
      src={ imgSrc(imageSrc) }
      className={`${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      srcSet={ srcSet }
      onClick={selectBlockFun}
    />
  );
}

interface ImageBlockProp {
  imageSrc: string
  alt: string
  srcSet: string
  classValue?: string
  imageWidth: string
  imageHeight: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default ImageBlock;
