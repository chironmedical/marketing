import React from 'react';

const FlexibleSubGroup = ({
  tableContent,
  highlightLastItem = false,
  alignment = "center",
  columnCategoryAlignment = "default",
  needVerticalBorder = true,
  className = "",
}: FlexibleSubGroupProps): React.ReactElement => {
  const checkLastTwoItems = (index) => {
    const contentLength = tableContent.content.length;
    return index === contentLength - 1 || index === contentLength - 2;
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-col tracking-widest">
        <div className="inline-flex flex-row items-center min-h-sm-table-category-row lg:min-h-lg-table-header-row bg-deep-blue-600 w-full">
          {
            tableContent.header.map((headerItem, index) => (
              <h3
                key={`header-${index}`}
                className={
                  `text-sm-h4-card lg:text-lg-h3-card text-white py-lg-card break-words
                  ${tableContent.headerWidth[index]} ${alignment === "center" ? "text-center" : "px-sm-card lg:px-sm-subtopic"} 
              `}>
                { headerItem }
              </h3>
            ))
          }
        </div>
        {
          tableContent.content.map((row, rowIndex) => (
            <div
              key={`content-${rowIndex}`}
              className={`flex flex-row items-center text-center border-b border-solid bg-avatar-purple h-fit-content
              ${highlightLastItem && checkLastTwoItems(rowIndex) ? "border-deep-blue-600" : "border-light-blue-500"}
            `}>
              <div className={`flex flex-col self-stretch items-center ${tableContent.contentWidth[0]} ${needVerticalBorder ? "border-r border-deep-blue-600" : ""}`}>
                {
                  row.title.map((item, itemIndex) => (
                    <div
                      key={`title-${itemIndex}`}
                      className={`${itemIndex !== 0 ? "border-t border-deep-blue-600" : ""} flex flex-row self-stretch h-full
                      ${columnCategoryAlignment === "center" && itemIndex === 0 ? "items-center" : ""}
                    `}>
                      {
                        <h3 className={`text-sm-h4-card lg:text-lg-h3-card py-sm-subtopic text-deep-blue-600 break-words whitespace-pre-line
                          flex flex-row items-center justify-center px-sm-card lg:px-sm-subtopic w-full ${alignment === "center" ? "text-center" : "text-left"}`}>
                          { item.replace(/\\n/g, "\n") }
                        </h3>
                      }
                    </div>
                  ))
                }
              </div>
              {
                row.columns.map((item, itemIndex) => (
                  <div
                    key={`columns-${itemIndex}`}
                    className={`${tableContent.contentWidth[itemIndex + 1]} ${itemIndex !== 0 && needVerticalBorder ? "border-l border-deep-blue-600" : ""}
                    self-stretch flex flex-row ${columnCategoryAlignment === "center" && itemIndex === 0 ? "items-center" : ""}
                  `}>
                    {
                      typeof(item) === "string" ? (
                        <h3 className={`text-sm-h4-card lg:text-lg-h3-card py-sm-subtopic text-deep-blue-600 break-words whitespace-pre-line
                          flex flex-row items-center justify-center px-sm-card lg:px-sm-subtopic w-full ${alignment === "center" ? "text-center" : "text-left"}`}>
                          { item.replace(/\\n/g, "\n") }
                        </h3>
                      ) : (
                        <img
                          alt="checked"
                          src="/icons/general/checked.svg"
                          className={`mx-auto w-3 lg:w-5 ${item ? "block" : "hidden"}`}
                        />
                      )
                    }
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

interface FlexibleSubGroupProps {
  tableContent?: any
  highlightLastItem?: boolean
  alignment?: string
  columnCategoryAlignment?: string
  needVerticalBorder?: boolean
  className?: string
}

export default React.memo(FlexibleSubGroup);
