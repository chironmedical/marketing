import React from 'react';
import SocialResponsibilityCard from '../cards/SocialResponsibilityCard';
import localeMapping from '../../libs/localeMapping';
import createSubgroup from "../../libs/createSubgroup";

const SocialResponsibilityCardBlock = ({
  locale = '',
  socialResponsibilities = [],
  classValue = '',
  builderMode = true,
  isSelected,
  selectBlockFun,
}: SocialResponsibilityCardBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col mx-auto items-center w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="mb-sm-content lg:mb-lg-content w-full">
        {
          Array.isArray(socialResponsibilities) ? (
            createSubgroup(socialResponsibilities, 3).map((row, rowIndex) => (
              <div
                className={`flex flex-col lg:flex-row w-full ${rowIndex !== 0 && "mt-sm-content lg:mt-lg-content"}`}
                key={`socialResponsibility-row-${rowIndex}`}
              >
                {
                  row.map((socialResponsibility, index) => (
                    <div
                      className={`flex flex-row w-full lg:w-1/3 justify-center mt-sm-content lg:mt-0`}
                      key={`socialResponsibility-${index}`}
                    >
                      <a
                        href={socialResponsibility.page ? (locale !== "" ? `/${localeMapping(locale)}/${socialResponsibility.page.pathname}` : `/${socialResponsibility.page.pathname}`) : '#'}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SocialResponsibilityCard
                          locale={locale}
                          socialResponsibility={socialResponsibility}
                        />
                      </a>
                    </div>
                  ))
                }
              </div>
            ))
          ) : (
            <h2>Events</h2>
          )
        }
      </div>
    </div>
  );
};

interface SocialResponsibilityCardBlockProps {
  locale: string
  socialResponsibilities: any
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(SocialResponsibilityCardBlock);
