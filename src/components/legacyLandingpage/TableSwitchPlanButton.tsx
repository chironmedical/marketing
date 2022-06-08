import React from 'react';

const TableSwitchPlanButton = ({
  iconSrc,
  unselectedIconSrc = "",
  selected = true,
  shortFormName = 'hk',
  desktopCursor = false,
  textColor,
  backgroundColor,
  className = "",
  onClickFn,
  textSize = "text-sm-h5",
  switchable = true,
}: TableSwitchPlanButtonProps): React.ReactElement => {
  return (
    <button
      className={`flex flex-col items-center justify-end cursor-pointer focus:outline-none ${desktopCursor ? "lg:cursor-pointer" : "lg:cursor-default"} ${className}`}
      onClick={onClickFn}
    >
      <img
        alt="plan-type"
        src={iconSrc}
        className={`w-8 lg:w-12 ${selected ? "block" : `hidden ${!switchable ? "lg:block" : ""}`}`}
      />
      <img
        alt="unselected-plan-type"
        src={unselectedIconSrc}
        className={`w-8 lg:w-12 ${selected ? "hidden" : `block ${!switchable ? "lg:hidden" : ""}`}`}
      />
      <h6 className={`${textSize} leading-6 tracking-widest my-1 ${!selected ? `text-light-blue-400 ${!switchable ? `lg:text-${textColor}` : ""}` : `text-${textColor}`}`}>
        { shortFormName }
      </h6>
      <div className={`h-2px w-full ${!selected ? `bg-light-blue-400 ${!switchable ? `lg:bg-${backgroundColor}` : "" }` : `bg-${backgroundColor}`}`} />
    </button>
  );
};

interface TableSwitchPlanButtonProps {
  iconSrc?: string
  unselectedIconSrc?: string
  selected?: boolean
  shortFormName?: string
  desktopCursor?: boolean
  textColor?: string
  backgroundColor?: string
  className?: string
  onClickFn?: any
  textSize?: string
  switchable?: boolean
}

export default React.memo(TableSwitchPlanButton);
