import React from 'react';

const HorizontalRule = ({
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: HorizontalRuleProps): React.ReactElement => {
  const className = `${classValue}`
  return (
    <hr
      className={`${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    />
  );
}

interface HorizontalRuleProps {
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default HorizontalRule;
