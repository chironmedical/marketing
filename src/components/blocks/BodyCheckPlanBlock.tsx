import React from 'react';
import TableSwitchPlanButton from '../elements/TableSwitchPlanButton';
import CollapseTable from '../elements/CollapseTable';

const BodyCheckPlanBlock = ({
  tabs,
  table = [],
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: BodyCheckPlanBlockProps): React.ReactElement => {
  const className = `${classValue}`;
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <div
      className={`w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-row justify-evenly mt-sm-card border-solid border-black w-full mb-0 lg:w-7/10 lg:ml-auto">
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
                classValue="w-1/3 lg:w-fit-content"
              />
            ))
          )
        }
      </div>
      <CollapseTable
        table={table}
        currentTab={currentTab}
        locale={locale}
      />
    </div>
  )
};

export interface BodyCheckPlanBlockProps {
  tabs: any
  table: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(BodyCheckPlanBlock);
