import React from 'react';
import TableSwitchPlanButton from '../elements/TableSwitchPlanButton';

const MDTSwitchPlanBlock = ({
  tabs,
  buttons = [],
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: MDTSwitchPlanBlockProps): React.ReactElement => {
  const className = `${classValue}`;
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <div
      className={`w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-row justify-evenly mt-sm-card mb-sm-subtopic border-b border-solid border-black w-full">
        {
          tabs && (
            tabs.map((tab, index) => (
              <TableSwitchPlanButton
                key={`tab-${index}`}
                iconSrc={tab.iconSrc}
                unselectedIconSrc={tab.unselectedIconSrc}
                textColor="deep-blue-600"
                desktopCursor={true}
                textSize="text-sm-h5 lg:text-lg-h3-card lg:leading-9 text-center"
                shortFormName={tab.title[locale]}
                backgroundColor="deep-blue-600"
                selected={currentTab === index ? true : false}
                onClickFn={() => setCurrentTab(index)}
                classValue={`w-1/${tabs} lg:w-fit-content`}
              />
            ))
          )
        }
      </div>
      <div className="flex flex-col items-center mt-sm-card lg:mt-lg-card mb-sm-subtopic lg:mb-lg-subtopic switch-plan-content">
        {
          tabs && (
            <div dangerouslySetInnerHTML={{ __html: tabs[currentTab]['content'][locale] }}></div>
          )
        }
        {
          buttons[currentTab] && (
            buttons[currentTab]['haveButton'] && (
              <a
                href={`${buttons[currentTab]['link'][locale]}`}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="h-12 lg:h-14 font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none bg-deep-blue-600 text-white mt-sm-content lg:mt-lg-subtopic"
                >
                  <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
                    <img
                      alt="icon"
                      src={`https://cdn.chiron.care/${buttons[currentTab]['iconSrc']}`}
                      className="lg:w-7" />
                    <h2 className="text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9 ml-sm-card">
                      { buttons[currentTab]['title'][locale] }
                    </h2>
                  </div>
                </button>
              </a>
            )
          )
        }
      </div>
    </div>
  )
};

export interface MDTSwitchPlanBlockProps {
  tabs: any
  buttons: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(MDTSwitchPlanBlock);
