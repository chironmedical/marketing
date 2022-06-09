import React from 'react';
import sortByKey from '../../libs/sortByKey';

const Table = ({
  tableHeader = [],
  tableContent = [],
  tableFooter = [],
  hasMidline = true,
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: TableProps): React.ReactElement => {
  const _tableHeader = tableHeader;
  const _tableContent = sortByKey(tableContent, 'row');
  const _tableFooter = tableFooter;

  return (
    <div
      className={`flex flex-col w-full ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-col tracking-widest border-b border-solid border-light-blue-500">
        <div className="inline-flex flex-row items-center min-h-sm-table-category-row lg:min-h-lg-table-header-row bg-deep-blue-600 w-full">
          {
            _tableHeader && (
              _tableHeader.map((header, headerIndex) => (
                <h3
                  className={`text-sm-h4-card lg:text-lg-h3-card text-white py-lg-card break-words w-${header.width} ${header.textAlign}`}
                  key={`header-${headerIndex}`}
                >
                  { header.title[locale] }
                </h3>
              ))
            )
          }
        </div>
        {
          _tableContent && (
            _tableContent.map((row, rowIndex) => (
              <div
                className={`flex flex-row items-center text-center border-b border-solid bg-avatar-purple h-fit-content`}
                key={`row-${rowIndex}`}
              >
                {
                  row.data.map((col, colIndex) => (
                    <div
                      className={`flex flex-row self-stretch ${hasMidline && (colIndex !== (row.length - 1)) ? "border-solid border-light-blue-500 border-r" : "" } w-${col.width}`}
                      key={`col-${colIndex}`}
                    >
                      <h3 className={`flex w-full items-center text-sm-h4-card lg:text-lg-h3-card py-sm-subtopic text-deep-blue-600 break-words whitespace-pre-line px-sm-card lg:px-sm-subtopic ${col.textAlign} ${col.textAlign === "text-center" &&  "justify-center"} ${col.textAlign === "text-left" &&  "justify-start"} ${col.textAlign === "text-right" &&  "justify-end"}`}>
                        <div dangerouslySetInnerHTML={{ __html: col.title[locale] }}></div>
                      </h3>
                    </div>
                  ))
                }
              </div>
            ))
          )
        }
        {
          _tableFooter && (
            _tableFooter.length ? (
              <div className="inline-flex flex-row items-center min-h-sm-table-category-row lg:min-h-lg-table-header-row bg-deep-blue-600 w-full">
                {
                  _tableFooter.map((footer, footerIndex) => (
                    <h3
                      className={`text-sm-h4-card lg:text-lg-h3-card text-white py-lg-card break-words w-${footer.width}  ${footer.textAlign}`}
                      key={`footerIndex-${footerIndex}`}
                    >
                      { footer.title[locale] }
                    </h3>
                  ))
                }
              </div>
            ) : ""
          )
        }
      </div>
    </div>
  )
};

export interface TableProps {
  tableHeader: any
  tableContent: any
  tableFooter: any
  hasMidline: boolean
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(Table);
