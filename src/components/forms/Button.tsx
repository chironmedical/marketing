import React from 'react';

const Button = ({
  title,
  classValue = "",
  textSize,
  onClickFn,
}: ButtonProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <button
      className={`font-bold leading-loose rounded-custom outline-none ${className}`}
      onClick={onClickFn}
    >
      <h3 className={textSize}>{title}</h3>
    </button>
  );
};

interface ButtonProps {
  title: string
  classValue: string
  textSize?: string
  onClickFn?: any,
}

export default Button;
