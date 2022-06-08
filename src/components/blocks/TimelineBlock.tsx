import React from 'react';
import ProcedureTimelineCard from '../elements/ProcedureTimelineCard';

const TimelineBlock = ({
  stages,
  ellipseIcon = "cms/general/ellipse-blue.svg",
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: TimelineBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`w-full flex flex-col my-8 ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        stages.map((stage, stageIndex) => (
          <ProcedureTimelineCard
            key={`stageIndex-${stageIndex}`}
            number={stageIndex+1}
            title={stage.title[locale]}
            content={stage.content[locale]}
            ellipseIcon={ellipseIcon}
            classValue={`mx-auto mb-16`}
          />
        ))
      }
    </div>
  );
};

interface TimelineBlockProps {
  stages: any
  ellipseIcon: string
  locale: string
  classValue: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(TimelineBlock);
