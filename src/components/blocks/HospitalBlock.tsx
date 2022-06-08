import React from 'react';

const HospitalBlock = ({
  affiliatedHospitals = [],
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: HospitalBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    affiliatedHospitals.length !== 0 ? (
      <div
        className={`flex flex-col lg:flex-row items-center lg:mx-auto w-full lg:justify-center mb-sm-subject lg:mb-lg-content xl:mb-lg-subject ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
        onClick={selectBlockFun}
      >
        <img
          src="https://cdn.chiron.care/console/people/icons/hospital-new.svg"
          className="w-full mb-sm-subtopic lg:hidden"
          alt={`${locale === "" || locale === "zh-HK" ? "使用醫院" : locale === "zh-CN" ? "使用医院" : "Hospitals" }`}
        />
        <div className="flex flex-col">
          <h1 className="text-sm-h2 lg:text-lg-h3-article leading-10 lg:leading-15 text-deep-blue-600 w-full text-center lg:text-left tracking-widest mb-sm-subtopic">
            {`${locale === "" || locale === "zh-HK" ? "使用醫院" : locale === "zh-CN" ? "使用医院" : "Hospitals" }`}
          </h1>
          <ul className="w-fit-content lg:pl-lg-h3-card">
          {
            Array.isArray(affiliatedHospitals) ? (
              affiliatedHospitals.map((hospital, index) => (
                <li
                  className="text-sm-h4-card lg:text-lg-h3-card leading-8 lg:leading-10 text-deep-blue-600 tracking-widest list-circle"
                  key={`hospital-${index}`}
                >
                  {hospital}
                </li>
              ))
            ) : (
              <h2>affiliatedHospitals</h2>
            )
          }
          </ul>
        </div>
        <img
          src="https://cdn.chiron.care/console/people/icons/hospital-new.svg"
          className="w-auto hidden lg:block lg:ml-20"
          alt={`${locale === "" || locale === "zh-HK" ? "使用醫院" : locale === "zh-CN" ? "使用医院" : "Hospitals" }`}
        />
      </div>
    ) : (
      <div
        className={`w-full p-1 ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
        onClick={selectBlockFun}
      ></div>
    )
  );
};

interface HospitalBlockProps {
  affiliatedHospitals: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default HospitalBlock;
