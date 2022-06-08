import React from 'react';
import createSubgroup from "../../libs/createSubgroup";

const PlanCheckTable = ({
  planLists = [],
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: PlanCheckTableProp ): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`w-full flex flex-col ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-col tracking-widest">
        <div className="inline-flex flex-row items-center min-h-sm-table-category-row lg:min-h-lg-table-header-row bg-deep-blue-600 w-full">
        </div>

        {
          createSubgroup(planLists, 2).map((cols, colsIndex) => (
            <div className="flex flex-row items-center text-center" key={`colsIndex-${colsIndex}`}>
            {
              cols.map((col, colIndex) => (
                <>
                  <div className={`self-stretch flex flex-row w-1/4 border-b border-r border-solid border-light-blue-500 ${(colIndex === 0) && "border-l" }`}>
                    <h3 className="flex justify-center items-center text-sm-h4-card lg:text-lg-h3-card py-sm-subtopic text-deep-blue-600 break-words whitespace-pre-line px-sm-card lg:px-sm-subtopic w-full text-center">
                      { col.title[locale].replace(/\\n/g, "\n") }
                    </h3>
                  </div>
                  <div className={`self-stretch flex flex-row w-1/4 border-b border-r border-solid border-light-blue-500`}>
                    {
                      col.haveItem && 
                      <img
                        alt="checked"
                        src="https://cdn.chiron.care/cms/general/icons/checked.svg"
                        className={`mx-auto w-3 lg:w-5`}
                      />
                    }
                  </div>
                </>
              ))
            }
            </div>
          ))
        }
      </div>
    </div>
  );
}

interface PlanCheckTableProp {
  planLists: any
  tableCentent: any
  classValue?: string
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(PlanCheckTable);
