import React from 'react';

const ProcedureTimelineCard = ({
  number = 1,
  title = "",
  content = "",
  ellipseIcon = "cms/general/ellipse-blue.svg",
  classValue = ""
}: ProcedureTimelineCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
      <div className={`flex flex-col w-procedure-timeline-card max-w-procedure-timeline-card
        lg:w-lg-procedure-timeline-card lg:max-w-lg-procedure-timeline-card tracking-widest px-sm-subtopic ${className}
      `}>
        <div className="relative w-12 h-12 -ml-6 mb-lg-card">
          <h3 className="absolute b-0 w-12 text-center leading-12 text-sm-h3-article text-white">
            {/* 1 -> 01, 5 -> 05, 10 -> 10 */}
            { String(number).padStart(2, '0') }
          </h3>
          <img
            alt="timeline-ellipse"
            src={`https://cdn.chiron.care/${ellipseIcon}`}
            className="absolute b-0 w-12 h-12 -z-10"
          />
        </div>
        <div className="flex flex-col border-l border-solid border-custom-grey-400 pl-sm-content pr-sm-card">
          <h1 className="text-sm-h3-article lg:text-lg-h3-card leading-9 text-deep-blue-600 mt-sm-subtopic">
            { title }
          </h1>
          <h6 className="text-sm-h6 lg:text-lg-h5 leading-6 text-light-blue-500 my-sm-subtopic whitespace-pre-line">
            { content.replace(/\\n/g, "\n") }
          </h6>
        </div>
      </div>
  );
};

export interface ProcedureTimelineCardProps {
  number: number
  title: string
  content: string
  ellipseIcon: string
  classValue?: string
}

export default React.memo(ProcedureTimelineCard);
