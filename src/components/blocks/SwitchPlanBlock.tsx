import React from 'react';
import TableSwitchPlanButton from '../elements/TableSwitchPlanButton';

const SwitchPlanBlock = ({
  tabs,
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: SwitchPlanBlockProps): React.ReactElement => {
  const className = `${classValue}`;
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <div
      className={`w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-row justify-evenly mt-sm-card border-b border-solid border-black w-full">
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
                classValue={`w-1/${tabs.length} lg:w-fit-content`}
              />
            ))
          )
        }
      </div>
      {
        tabs && (
          tabs[currentTab]['showContent'] && (
            <div className="flex flex-col items-center mt-sm-card lg:mt-lg-card mb-sm-subtopic lg:mb-lg-subtopic switch-plan-content">
              <div dangerouslySetInnerHTML={{ __html: tabs[currentTab]['content'][locale] }}></div>
            </div>
          )
        )
      }
    </div>
  )
};

interface SwitchPlanBlockProps {
  tabs: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(SwitchPlanBlock);
