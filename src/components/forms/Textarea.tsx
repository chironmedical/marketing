import React from 'react';

const Textarea = ({
  label,
  value,
  setValue,
  required = false,
  resizable,
  classValue,
}: TextareaProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex flex-row justify-center w-full lg:justify-start lg:pl-4 mb-1">
        <label htmlFor={label.toLowerCase()} className="text-sm-h6 lg:text-lg-h5 leading-6 m-0 text-deep-blue-600">
          {label}
        </label>
        {
          required && <p className="m-0 text-base leading-normal text-red-700">*</p>
        }
      </div>
      <textarea
        id={label.toLowerCase()}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-solid h-32 w-full px-4 py-1 outline-none appearance-none"
        style={{ borderColor: "#8da9c4", borderRadius: '22px', resize: resizable ? "vertical" : "none" }}
      />
    </div>
  );
};

export interface TextareaProps {
  label: string
  value?: any
  setValue?: any
  required?: boolean
  resizable: boolean
  classValue?: string
}

export default React.memo(Textarea);
