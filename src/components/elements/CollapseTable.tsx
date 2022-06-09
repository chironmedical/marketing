import React from 'react';

const CollapseTable = ({
  table,
  currentTab = 0,
  locale = "zh-HK",
  classValue = "",
}: CollapseTableProps): React.ReactElement => {
  const [expanded, setExpanded] = React.useState(true);

  const className = `${classValue}`;
  const [categoryExpanded, setCategoryExpanded] = React.useState(new Array(table.length).fill(true));

  const changeAllExpanded = () => {
    if (expanded) {
      setCategoryExpanded(new Array(table.length).fill(false));
      setExpanded(false);
    } else {
      setCategoryExpanded(new Array(table.length).fill(true));
      setExpanded(true);
    }
  }

  const changeCategoryExpanded = (i) => {
    const newCategoryExpanded = [...categoryExpanded];
    newCategoryExpanded[i] = !newCategoryExpanded[i];

    if (newCategoryExpanded.filter((e) => e).length !== table.length) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
    setCategoryExpanded(newCategoryExpanded);
  }

  return (
    <div className={`w-full ${className}`}>
      <button 
        className={`flex flex-row items-center justify-center h-sm-table-row w-full cursor-pointer rounded-t-custom lg:h-lg-table-row bg-deep-blue-100 focus:outline-none`}
        onClick={() => changeAllExpanded()}
      >
        <img
          alt="double-arrow-up"
          src="https://cdn.chiron.care/cms/general/icons/double-arrow-up.svg"
          className={!expanded ? "hidden" : "block"} />
        <img
          alt="double-arrow-down"
          src="https://cdn.chiron.care/cms/general/icons/double-arrow-down.svg"
          className={expanded ? "hidden" : "block"} />
      </button>
      <div className="flex flex-col w-full border border-solid border-deep-blue-100 rounded-br-custom rounded-bl-custom">
        {
          table.map((category, categoryIndex) => (
            <div
              className="flex flex-col w-full"
              key={`category-${categoryIndex}`}
            >
              <button 
                className={`flex flex-row justify-between items-center h-sm-table-category-row lg:h-16 cursor-pointer lg:border border-b border-solid focus:outline-none border-deep-blue-100 px-sm-subtopic bg-avatar-purple ${!categoryExpanded[categoryIndex] && !(categoryIndex === table.length-1) ? "lg:border-b-0" : ""}`}
                onClick={() => changeCategoryExpanded(categoryIndex)}>
                  <h3 className="text-sm-h3-card lg:text-lg-h3-card text-deep-blue-600">
                    { category.title[locale] }
                  </h3>
                  {
                    categoryExpanded[categoryIndex] ? (
                      <img
                        alt="checked"
                        src="https://cdn.chiron.care/cms/general/icons/arrow-up.svg"
                      />
                    ) : (
                      <img
                        alt="checked"
                        src="https://cdn.chiron.care/cms/general/icons/arrow-down.svg"
                      />
                    )
                  }
              </button>
              {/* rows */}
              {/* < lg cols */}
              <div className="hidden lg:block">
                {
                  categoryExpanded[categoryIndex] && category.rows.map((row, rowIndex) => (
                    <div
                      className={`flex flex-row h-fit-content ${(categoryIndex === table.length - 1) && (rowIndex === category.rows.length - 1) ? "border-b-0" : "border-b"}`}
                      key={`row-${rowIndex}`}>
                      <div className={`w-3/10 px-sm-subtopic h-full flex flex-col justify-center border-r border-solid border-deep-blue-100 py-sm-card`}>
                        <h6 className="text-sm-h6 lg:text-lg-h4-article text-deep-blue-600">
                          { row.title[locale].replace(/\\n/g, "\n") }
                        </h6>
                      </div>

                      <div className={`w-7/10 flex flex-row`}>
                        {
                          row.cols.map((col, colIndex) => (
                            <div
                              className={`h-full flex flex-col items-center justify-center flex-1 border-solid border-deep-blue-100 ${colIndex !== row.cols.length -1 ? "border-r" : ""}`}
                              key={`col-${colIndex}`}
                            >
                              {
                                col && (
                                  <img
                                    alt="checked"
                                    src="https://cdn.chiron.care/cms/general/icons/checked.svg"
                                    className="mx-auto w-4 h-4" />
                                )
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
              {/* < lg cols */}
              <div className="lg:hidden">
                {
                  categoryExpanded[categoryIndex] && category.rows.map((row, rowIndex) => (
                    <div
                      className={`flex flex-row h-fit-content border-b ${(categoryIndex === table.length - 1) && (rowIndex === category.rows.length - 1) ? "border-b-0" : "border-b"}`}
                      key={`row-${rowIndex}`}
                    >
                      <div className="w-3/5 px-sm-subtopic h-full flex flex-col justify-center border-r border-solid border-deep-blue-100">
                        <h6 className="text-sm-h6 text-deep-blue-600 my-sm-card">
                          { row.title[locale].replace(/\\n/g, "\n") }
                        </h6>
                      </div>
                      <div className="w-2/5 h-full flex flex-col items-center justify-center my-auto">
                        {
                          row.cols.map((col, colIndex) => (
                            (colIndex === currentTab && col) && (
                              <img
                                alt="checked"
                                src="https://cdn.chiron.care/cms/general/icons/checked.svg"
                                className="mx-auto w-4 h-4" />
                            )
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export interface CollapseTableProps {
  table: any
  currentTab: number
  locale: string
  classValue?: string
}

export default React.memo(CollapseTable);
