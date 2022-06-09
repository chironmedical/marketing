import React, { useEffect } from 'react';
import TableSwitchPlanButton from '../elements/TableSwitchPlanButton';
import ProcedureTimelineCard from '../elements/ProcedureTimelineCard';
import sortByKey from '../../libs/sortByKey';

const SwitchTimelineBlock = ({
  tabs,
  locale = "zh-HK",
  ellipseIcon = "cms/general/ellipse-blue.svg",
  stages,
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: SwitchTimelineBlockProps): React.ReactElement => {
  const refToComponent = React.useRef(null);

  const className = `${classValue}`;
  const [currentTab, setCurrentTab] = React.useState(0);
  const _stages = sortByKey(stages, 'tab');

  useEffect(() => {
    (async () => {
      if (refToComponent.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(".timeline-step", {
          duration: 1800,
          distance: "40px",
          easing: "cubic-bezier(0.165, 0.84, 0.44, 1)",
          origin: "bottom",
          interval: 150,
        });
      }
    })();
  }, []);

  return (
    <div
      className={`w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
      ref={refToComponent}
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
      {tabs && (
        <div className="w-full flex flex-col my-8">
            {
              _stages[currentTab]['stages'].map((stage, stageIndex) => (
                <ProcedureTimelineCard
                  key={`stageIndex-${stageIndex}`}
                  number={stageIndex + 1}
                  title={stage.title[locale]}
                  content={stage.content[locale]}
                  ellipseIcon={ellipseIcon}
                  classValue={`mx-auto mb-16 timeline-step`}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
};

export interface SwitchTimelineBlockProps {
  tabs: any
  ellipseIcon: string
  stages: any
  locale: string
  classValue?: string
  showContent: boolean
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(SwitchTimelineBlock);
