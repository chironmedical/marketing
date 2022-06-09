import React from 'react';
import TableSwitchPlanButton from '../elements/TableSwitchPlanButton';
import PlanTable from '../elements/PlanTable';
import sortByKey from '../../libs/sortByKey';

const SwitchTablePlanBlock = ({
  tabs = [],
  tableHeaders = [],
  tableContents = [],
  tableFooters = [],
  hasMidline = false,
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: SwitchTablePlanBlockProps): React.ReactElement => {
  const className = `${classValue}`;
  const [currentTab, setCurrentTab] = React.useState(0);

  const _tableHeaders = sortByKey(tableHeaders, 'tab');
  const _tableContents = sortByKey(tableContents, 'tab');
  const _tableFooters = sortByKey(tableFooters, 'tab');

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
      <div className="flex flex-col items-center">
        {
          tabs && (
            <PlanTable
              tableHeaders={_tableHeaders[currentTab]}
              tableContents={_tableContents[currentTab]}
              tableFooters={_tableFooters[currentTab]}
              locale={locale}
              hasMidline={hasMidline}
            />
          )
        }
      </div>
    </div>
  )
};

export interface SwitchTablePlanBlockProps {
  tabs: any

  tableHeaders: any
  tableContents: any
  tableFooters: any

  hasMidline: boolean
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(SwitchTablePlanBlock);
