import React from 'react';
import ClinicCard from '../cards/ClinicCard';
import localeMapping from '../../libs/localeMapping';
import createSubgroup from "../../libs/createSubgroup";

const ClinicCardBlock = ({
  locale = '',
  clinics = [],
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ClinicCardBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col mx-auto items-center w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="mb-sm-content lg:mb-lg-content w-full">
        {
          Array.isArray(clinics) ? (
            createSubgroup(clinics, 3).map((row, rowIndex) => (
              <div
                className={`flex flex-col lg:flex-row lg:justify-evenly items-center lg:items-baseline ${rowIndex !== 0 && "mt-sm-content lg:mt-lg-content"}`}
                key={`clinic-row-${rowIndex}`}
              >
                {
                  row.map((clinic, index) => (
                    <div
                      className={`flex flex-row w-full lg:w-1/3 justify-center mt-sm-content lg:mt-0`}
                      key={`clinic-${index}`}
                    >
                      <a
                        href={clinic.page ? (locale !== "" ? `/${localeMapping(locale)}/${clinic.page.pathname}` : `/${clinic.page.pathname}`) : '#'}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ClinicCard
                          locale={locale}
                          thumbnail={clinic.thumbnail}
                          name={clinic.name}
                          phones={clinic.phones}
                          address={clinic.address}
                          faxs={clinic.faxs}
                        />
                      </a>
                    </div>
                  ))
                }
              </div>
            ))
          ) : (
            <h2>Clinics</h2>
          )
        }
      </div>
    </div>
  );
};

interface ClinicCardBlockProps {
  locale: string
  clinics: any
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(ClinicCardBlock);
