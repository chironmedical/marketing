import React from 'react';

const HTMLRender = ({
  content = "",
  fontColor,
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: HTMLRenderProps): React.ReactElement => {
  const className = `${fontColor} ${classValue}`;

  return (
    <div
      className={`${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      dangerouslySetInnerHTML={{ __html: addClassNameToArticle(content) }}
      onClick={selectBlockFun}
    >
    </div>
  );
};

const addClassNameToArticle = (html) => {
  let processingHTML = html || "";

  processingHTML = processingHTML.replace(/h2/g, `h2 class="text-sm-h2 lg:text-sm-h1 font-bold"`);

  processingHTML = processingHTML.replace(/h3/g, `h3 class="text-sm-h3-article lg:text-sm-h2 text-gray-800 font-bold"`);

  processingHTML = processingHTML.replace(/h5/g, `h5 class="text-sm-h5 lg:text-lg-h5 text-gray-800 font-bold"`);

  processingHTML = processingHTML.replace(/h6/g, `h6 class="text-sm-h6 lg:text-lg-h6"`);

  processingHTML = processingHTML.replace(/strong/g, `strong class="font-bold"`);

  processingHTML = processingHTML.replace(/youtube-player/g, `w-full`);

  return processingHTML;
}

export interface HTMLRenderProps {
  content: string
  fontColor: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(HTMLRender);