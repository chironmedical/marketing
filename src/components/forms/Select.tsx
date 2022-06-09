import React from 'react';

const Select = ({
  label,
  required = false,
  selected,
  options,
  size="small"
}: SelectProps): React.ReactElement => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row ml-4 mb-1">
        <p className="m-0 text-base leading-normal" style={{ color: '#0B2545' }}>{label}</p>
        {
          required && <p className="m-0 text-base leading-normal text-red-700">*</p>
        }
      </div>
      <select
        className={`border border-solid ${size === "small" ? "h-10" : size === "medium" ? "h-12" : "h-16"} w-1/2 px-4`}
        style={{
          borderColor: "#8da9c4",
          borderRadius: "22px",
          background: "url(data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiA5LjI5TDEyIDEzLjE3bDMuODgtMy44OGMuMzktLjM5IDEuMDItLjM5IDEuNDEgMCAuMzkuMzkuMzkgMS4wMiAwIDEuNDFsLTQuNTkgNC41OWMtLjM5LjM5LTEuMDIuMzktMS40MSAwTDYuNyAxMC43Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzggMS4wMy0uMzkgMS40MiAweiIvPjwvc3ZnPg==) no-repeat",
          backgroundPosition: "right 1rem center",
          appearance: "none",
        }}
        value={selected}
      >
        {
          options.map((option, key) => (
            <option key={key}>{option}</option>
          ))
        }
      </select>
    </div>
  );
};

export interface SelectProps {
  label: string
  required?: boolean
  options: Record<string, any>
  selected: string | number | string[]
  size: string
}

export default Select;
