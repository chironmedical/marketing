import React from 'react';

const Input = ({
  label,
  type,
  value,
  setValue,
  required = false,
  alertMessage = "",
  classValue = "",
}: InputPrpos): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row justify-center lg:justify-start lg:ml-4 mb-1">
        <label htmlFor={label.toLowerCase()} className="text-sm-h6 lg:text-lg-h5 leading-6 text-deep-blue-600">
          {label}
        </label>
        {
          required && <p className="text-sm-h6 lg:text-lg-h5 leading-6 text-red-700">*</p>
        }
        {
          alertMessage && <p className="text-sm-h6 lg:text-lg-h5 leading-6 text-red-700 ml-sm-card">{alertMessage}</p>
        }
      </div>
      <input
        type={type}
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-solid border-light-blue-500 rounded-custom h-10 w-full px-4 outline-none appearance-none"
      />
    </div>
  );
};

export interface InputPrpos {
  label: string
  type: string
  value?: any
  setValue?: any
  required?: boolean
  alertMessage?: string
  classValue?: string
}

export default React.memo(Input);
