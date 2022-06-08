import React from 'react';
import FeaturesCarousel from '../elements/FeaturesCarousel';
import FeaturesCard from '../elements/FeaturesCard';

const FeaturesCarouselBlock = ({
  aims = [],
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: FeaturesCarouselBlockPrpos): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`relative w-full overflow-hidden tracking-widest2 ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <img
        alt="features-carousel-background"
        src="https://cdn.chiron.care/cms/individualPages/vision/features-carousel-background-lg.png"
        className="w-full hidden md:block"
      />
      <img
        alt="features-carousel-background"
        src="https://cdn.chiron.care/cms/individualPages/vision/features-carousel-background.png"
        className="w-full md:hidden"
      />
      <div className="absolute top-0 w-full h-full">
        <FeaturesCarousel
          elements={aims.map((aim, aimIndex) => (
            <FeaturesCard
              key={`aimIndex-${aimIndex}`}
              iconSrc={`https://cdn.chiron.care/${aim.icon}`}
              title={aim.title[locale]}
              subtitle={aim.description[locale]}
            />
          ))}
          classValue="h-full mx-auto"
        />
      </div>
    </div>
  );
};

interface FeaturesCarouselBlockPrpos {
  aims: any
  classValue?: string
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(FeaturesCarouselBlock);
