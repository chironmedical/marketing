import React from 'react';

const Paragraph = ({
  text = "",
  fontColor = "",
  textAlign,
  fontSize,
  classValue = "",
  paddingContent = {top: 0, left: 0, right: 0, bottom: 0},
  marginContent = {top: 0, left: 0, right: 0, bottom: 0},
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ParagraphProp ): React.ReactElement => {
  const marginValue = `mt-${marginContent.top} ml-${marginContent.left} mr-${marginContent.right} mb-${marginContent.bottom}`;
  const paddingValue = `pt-${paddingContent.top} pl-${paddingContent.left} pr-${paddingContent.right} pb-${paddingContent.bottom}`;
  const className = `${fontColor} ${textAlign} ${paddingValue} ${marginValue} ${classValue}`;

  return (
    <p
      className={`w-full whitespace-pre-line ${fontSize !== 'default' && fontSize} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >{ text }</p>
  );
}

interface ParagraphProp {
  text: string
  fontColor: string
  fontSize: string
  textAlign: string
  classValue?: string
  marginContent: Record<string, any>
  paddingContent: Record<string, any>
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(Paragraph);
