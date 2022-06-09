import React from 'react';

const IssuesBlock = ({
  issues = [],
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: IssuesBlockProp ): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`w-full flex flex-col lg:flex-row items-center lg:items-baseline lg:justify-between my-sm-content lg:my-lg-content ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}>
      {
        issues.map((issue, issueIndex) => (
          <div
            key={`issue-${issueIndex}`}
            className={`flex flex-col items-center lg:px-lg-card w-full lg:w-1/${issues.length} ${issueIndex !== 0 ? "mt-sm-content lg:mt-0" : ""}
          `}>
            <img
              alt="issue"
              src={issue.icon}
              className="h-32" />
            <h3 className="text-sm-h3-card lg:text-lg-h3-card leading-7 lg:leading-9 text-deep-blue-600 text-center
              mt-sm-card lg:mt-lg-card whitespace-pre-line"
            >
              { issue.title.replace(/\\n/g, "\n") }
            </h3>
          </div>
        ))
      }
    </div>
  );
}

export interface IssuesBlockProp {
  issues: any
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(IssuesBlock);
