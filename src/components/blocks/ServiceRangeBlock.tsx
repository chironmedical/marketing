import React from 'react';
import localeMapping from '../../libs/localeMapping';

const ServiceRangeBlock = ({
  branches = [],
  serviceRangeImg,
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ServiceRangeBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col w-full lg:flex-row items-center lg:mx-auto ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        branches.length ? (
          // items-center justify-center
          <div className="flex flex-col lg:flex-row items-center lg:mx-auto mb-sm-subject lg:mb-lg-subject w-full lg:justify-center mt-sm-subject lg:mt-lg-content xl:mt-lg-subject">
            <img
              className="w-inline-image lg:mr-20 lg:w-lg-inline-image xl:w-xl-inline-branch-image h-fit-content mb-sm-subtopic lg:mb-0 lg:h-unset"
              src={`https://cdn.chiron.care/${serviceRangeImg}`}
              alt={`${locale === "" || locale === "zh-HK" ? "服務範疇" : locale === "zh-CN" ? "服务范畴" : "Scope of Services" }`}
            />
            <div className="flex flex-col items-center lg:items-start  lg:min-w-service-range-card">
              <h1 className={`text-sm-h2 lg:text-lg-h3-article leading-9 lg:leading-15 text-deep-blue-600
                w-full text-center lg:text-left tracking-widest mb-sm-subtopic
              `}>
                { locale === "" || locale === "zh-HK" && "服務範疇" }
                { locale === "zh-CN" && "服务范畴" }
                { locale === "en-US" && "Scope of Services" }
              </h1>
              <ul className="mb-sm-subtopic w-fit-content lg:pl-lg-h3-card">
                {
                  branches.map((branch, branchIndex) => (
                    branch.issues.map((issue, issueIndex) => (
                      <li
                        className="text-sm-h4-card lg:text-lg-h3-card leading-8 lg:leading-10 text-deep-blue-600 list-circle tracking-widest whitespace-pre-line"
                        key={`branch-${branchIndex}-issue-${issueIndex}`}
                      >
                        { issue.title.replace(/\\n/g, " ") }
                      </li>
                    ))
                  ))
                }
              </ul>
              {
                branches.map((branch, index) => (
                  <a
                    href={locale !== "" ? `/${localeMapping(locale)}/${branch.page?.pathname}` : `/${branch.page?.pathname}`}
                    key={`branch-${index}`}>
                    <button
                      className={`w-64 h-fit-content border border-solid border-light-blue-500 text-deep-blue-600 font-bold leading-loose outline-none rounded-custom mb-4`}
                    >
                      <div className="flex flex-row mx-sm-subtopic items-center justify-between">
                        <div className="flex flex-row items-center">
                          <img
                            alt="icon"
                            src={branch.buttonIcon}
                            className="w-8 h-8"
                          />
                          <h3 className="text-sm-h3-card ml-lg-card my-sm-card">{branch.name}</h3>
                        </div>
                        <img
                          alt="arrow-right"
                          src="https://cdn.chiron.care/console/people/icons/thin-arrow-right.svg"
                          className="ml-sm-card"
                        />
                      </div>
                    </button>
                  </a>
                ))
              }
            </div>
          </div>
        ) : ""
      }
    </div>
  );
};

interface ServiceRangeBlockProps {
  branches: Record<string, any>
  serviceRangeImg: string
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default ServiceRangeBlock;
