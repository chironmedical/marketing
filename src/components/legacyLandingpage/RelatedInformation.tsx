import React from 'react';
import createSubgroup from '../../libs/createSubgroup';

const RelatedInformation = ({
  navigations,
  expandRelatedInformation,
  changeExpandRelatedInformation,
  className
}: RelatedInformationProps): React.ReactElement => {
  return (
    <div className={`flex flex-col w-full bg-avatar-purple lg:bg-transparent ${className}`}>
      <h1 className="text-sm-h1 text-center lg:text-left lg:text-lg-h3-article text-deep-blue-600 mb-sm-subtopic lg:mb-lg-subtopic">
        相關資訊
      </h1>
      {
        Object.keys(navigations).map((key, keyIndex) => (
          <div
            className={`flex-col hidden lg:flex ${keyIndex !== 0 ? "mt-sm-subtopic lg:mt-lg-subtopic" : ""}`}
            key={`key-${keyIndex}`}
          >
            <div className="flex flex-row items-center">
              <h3 className="text-sm-h3-card lg:text-lg-h3-card text-deep-blue-600">{key}</h3>
              <img
                alt="arrow"
                src="/icons/general/arrow-down.svg"
                onClick={() => changeExpandRelatedInformation(keyIndex)}
                className={`ml-3 cursor-pointer ${!expandRelatedInformation[keyIndex] ? "block" : "hidden"}`}
              />
              <img
                alt="arrow"
                src="/icons/general/arrow-up.svg"
                onClick={() => changeExpandRelatedInformation(keyIndex)}
                className={`ml-3 cursor-pointer ${expandRelatedInformation[keyIndex] ? "block" : "hidden"}`}
              />
            </div>
            <div className="flex flex-col">
              {
                expandRelatedInformation[keyIndex] && navigations[key].map((subItem) => (
                  <a href={subItem.link} key={subItem.link}>
                    <h4 className="text-sm-h4-card lg:text-lg-h4-card text-deep-blue-600 mt-sm-card lg:mt-lg-card text-justify">
                      { subItem.title }
                    </h4>
                  </a>
                ))
              }
            </div>
          </div>
        ))
      }
      {
        createSubgroup(Object.keys(navigations), 2).map((row, rowIndex) => (
          <div
            className={`flex flex-row w-inline mx-auto lg:hidden ${rowIndex !== 0 ? "mt-sm-subtopic" : ""}`}
            key={`row-${rowIndex}`}
          >
            {
              row.map((key, navigationIndex) => (
                <div className="flex flex-row justify-center w-1/2" key={key}>
                  <div className={`flex flex-col w-4/5`}>
                    <div className="flex flex-row items-center justify-between">
                      <h3 className="text-sm-h3-card lg:text-lg-h3-card text-deep-blue-600">{key}</h3>
                      <img
                        alt="arrow"
                        src="/icons/general/arrow-down.svg"
                        onClick={() => changeExpandRelatedInformation(rowIndex * 2 + navigationIndex)}
                        className={`cursor-pointer ${!expandRelatedInformation[rowIndex * 2 + navigationIndex] ? "block" : "hidden"}`}
                      />
                      <img
                        alt="arrow"
                        src="/icons/general/arrow-up.svg"
                        onClick={() => changeExpandRelatedInformation(rowIndex * 2 + navigationIndex)}
                        className={`cursor-pointer ${expandRelatedInformation[rowIndex * 2 + navigationIndex] ? "block" : "hidden"}`}
                      />
                    </div>
                    <div className="flex flex-col">
                      {
                        expandRelatedInformation[rowIndex * 2 + navigationIndex] && navigations[key].map((subItem) => (
                          <a href={ subItem.link } key={key}>
                            <h4 className="text-sm-h4-card lg:text-lg-h4-card text-deep-blue-600 mt-sm-card lg:mt-lg-card text-justify">
                              { subItem.title }
                            </h4>
                          </a>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

interface RelatedInformationProps {
  navigations: any
  expandRelatedInformation: any
  changeExpandRelatedInformation: any
  className: string
}

export default React.memo(RelatedInformation);
