import React from 'react';

const WhyChironCard = ({
  title = {'zh-HK': '', 'zh-CN': '', 'en-US': ''},
  locale = 'zh-HK',
  whyChironList = [],
  classValue = '',
  builderMode = true,
  isSelected,
  selectBlockFun,
}: WhyChironCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center w-inline mx-auto sm:w-full my-sm-subject ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <img
        alt="why-chiron-sm"
        src="https://cdn.chiron.care/console/branches/why-chiron/why-chiron-sm.svg"
        className="w-inline-image lg:w-xl-inline-image"
      />
      <div className={`flex flex-col lg:flex-1 lg:items-center`}>
        <h1 className="text-sm-h1 lg:text-lg-h3-article leading-9 lg:leading-15 text-deep-blue-600 my-sm-content lg:mt-0 text-center lg:text-left">
          { title[locale] }
        </h1>
        <div className="flex flex-col w-fit-content">
        {
          whyChironList.map((list, index) => (
            <div
              key={index}
              className={`flex flex-row items-center ${index !== 0 && "mt-sm-content"}`}>
              <img
                alt="category-icon"
                src={`https://cdn.chiron.care/${list.icon}`}
                className="h-12 lg:h-16 w-10 min-w-10 lg:w-12 lg:min-w-12"
              />
              <div className="flex flex-col ml-sm-subtopic">
                <h1 className="text-sm-h3-card lg:text-lg-h3-card text-deep-blue-600 leading-7 lg:leading-9 tracking-widest">
                  { list.title[locale] }
                </h1>
                <p className="text-sm-h6 lg:text-lg-h5 leading-5 lg:leading-7 tracking-widest text-custom-grey-400">
                  { list.description[locale] }
                </p>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

interface WhyChironCardProps {
  title: any
  locale: string
  whyChironList: Record<string, any>
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(WhyChironCard);
