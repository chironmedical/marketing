import React from 'react';

const Header = ({
  text = "",
  fontColor = "",
  textAlign,
  fontSize,
  headingType = "h1",
  classValue = "",
  paddingContent = {top: 0, left: 0, right: 0, bottom: 0},
  marginContent = {top: 0, left: 0, right: 0, bottom: 0},
  builderMode = true,
  isSelected,
  selectBlockFun,
}: HeaderProp ): React.ReactElement => {
  const marginValue = `mt-${marginContent.top} ml-${marginContent.left} mr-${marginContent.right} mb-${marginContent.bottom}`;
  const paddingValue = `pt-${paddingContent.top} pl-${paddingContent.left} pr-${paddingContent.right} pb-${paddingContent.bottom}`;
  const className = `${fontColor} ${textAlign} ${paddingValue} ${marginValue} ${classValue}`;

  return (
    <>
      {
        headingType === "h1" && (
          <h1
            className={`w-full ${fontSize === 'default' ? 'text-5xl' : fontSize} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
            onClick={selectBlockFun}
          >{ text }</h1>
        )
      }
      {
        headingType === "h2" && (
          <h2
            className={`w-full ${fontSize === 'default' ? 'text-4xl' : fontSize} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
            onClick={selectBlockFun}
          >{ text }</h2>
        )
      }
      {
        headingType === "h3" && (
          <h3
            className={`w-full ${fontSize === 'default' ? 'text-3xl' : fontSize} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
            onClick={selectBlockFun}
          >{ text }</h3>
        )
      }
      {
        headingType === "h4" && (
          <h4
            className={`w-full ${fontSize === 'default' ? 'text-2xl' : fontSize} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
            onClick={selectBlockFun}
          >{ text }</h4>
        )
      }
      {
        headingType === "h5" && (
          <h5
            className={`w-full ${fontSize === 'default' ? 'text-xl' : fontSize} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
            onClick={selectBlockFun}
          >{ text }</h5>
        )
      }
      {
        headingType === "h6" && (
          <h6
            className={`w-full ${fontSize === 'default' ? 'text-lg' : fontSize} ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
            onClick={selectBlockFun}
          >{ text }</h6>
        )
      }
    </>
  );
}

interface HeaderProp {
  text: string
  fontColor: string
  textAlign: string
  fontSize: string
  headingType: string
  classValue?: string
  marginContent: Record<string, any>
  paddingContent: Record<string, any>
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(Header);
