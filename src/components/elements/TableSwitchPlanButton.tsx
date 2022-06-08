import React from 'react';

const TableSwitchPlanButton = ({
  iconSrc,
  unselectedIconSrc = "",
  selected = true,
  shortFormName,
  desktopCursor = false,
  textColor,
  backgroundColor,
  classValue = "",
  onClickFn,
  textSize = "text-sm-h5",
  switchable = true,
}: TableSwitchPlanButtonPrpos): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <button
      className={`flex flex-col items-center justify-end cursor-pointer focus:outline-none ${desktopCursor ? "lg:cursor-pointer" : "lg:cursor-default"} ${className}`}
      onClick={onClickFn}
    >
      <img
        alt="plan-type"
        src={`https://cdn.chiron.care/${iconSrc}`}
        className={`w-8 lg:w-12 ${selected ? "block" : `hidden ${!switchable ? "lg:block" : ""}`}`}
      />
      <img
        alt="unselected-plan-type"
        src={`https://cdn.chiron.care/${unselectedIconSrc}`}
        className={`w-8 lg:w-12 ${selected ? "hidden" : `block ${!switchable ? "lg:hidden" : ""}`}`}
      />
      <h6 className={`${textSize} leading-6 tracking-widest my-1 ${!selected ? `text-light-blue-400 ${!switchable ? `lg:text-${textColor}` : ""}` : `text-${textColor}`}`}>
        { shortFormName }
      </h6>
      <div className={`h-2px w-full ${!selected ? `bg-light-blue-400 ${!switchable ? `lg:bg-${backgroundColor}` : "" }` : `bg-${backgroundColor}`}`} />
    </button>
  );
};

interface TableSwitchPlanButtonPrpos {
  iconSrc?: string
  unselectedIconSrc?: string
  selected?: boolean
  shortFormName?: any
  desktopCursor?: boolean
  textColor?: string
  backgroundColor?: string
  classValue?: string
  onClickFn?: any
  textSize?: string
  switchable?: boolean
}

export default React.memo(TableSwitchPlanButton);
