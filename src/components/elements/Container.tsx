import React from 'react';

import Blocks from './Blocks';

const Container = ({
  classValue = "",
  width,
  height,
  flexDirection = "flex-col",
  flexWrap = "flex-wrap",
  justifyContent = "justify-content-start",
  isFull = false,
  fullContainer = false,
  paddingContent = {top: 0, left: 0, right: 0, bottom: 0},
  marginContent = {top: 0, left: "auto", right: "auto", bottom: 0},
  _children = [],
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ContainerProps): React.ReactElement => {
  const paddingValue = `pt-${paddingContent.top} pl-${paddingContent.left} pr-${paddingContent.right} pb-${paddingContent.bottom}`;
  const marginValue = `mt-${marginContent.top} ml-${marginContent.left} mr-${marginContent.right} mb-${marginContent.bottom}`;
  const fullContainerStyle = `${fullContainer ? 'w-full' : 'w-inline lg:w-lg-inline xl:w-xl-inline' }`;
  const className = `${paddingValue} ${marginValue} ${flexDirection} ${flexWrap} ${justifyContent} ${fullContainerStyle} ${classValue}`;

  return (
    <>
    {
      isFull ? (
        <div
          className={`flex tracking-widest items-center lg:items-start ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
          onClick={selectBlockFun}
        >
          <Blocks
            _blocks={ _children }
            builderMode={builderMode}
          />
        </div>
      ) : (
        <div
          className={`flex flex-row ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
          style={{ width: width, height: height }}
          onClick={selectBlockFun}
        >
          <div className="flex-row justify-center hidden lg:flex bg-avatar-purple lg:w-1/4 lg:px-lg-subtopic py-lg-subtopic">
          </div>
          <div className={`p-4 mt-sm-content lg:my-lg-content lg:items-start w-inline lg:w-4/5 mx-auto`}>
            <div
              className={`${className}`}
            >
              <Blocks
                _blocks={ _children }
                builderMode={ builderMode }
              />
            </div>
          </div>
        </div>
      )
    }
    </>
  );
}

interface ContainerProps {
  classValue?: string
  width: number
  height: number
  flexDirection: string
  flexWrap: string
  justifyContent: string
  isFull: boolean
  fullContainer: boolean
  marginContent: Record<string, any>
  paddingContent: Record<string, any>
  _children: Record<string, any>
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default Container;
