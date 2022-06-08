import React from 'react';
import EMSCarousel from './EMSCarousel';
import QuoteCard from './QuoteCard';

const SlideBanner = ({
  slides = [],
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun
}: SlideBannerProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`relative w-full bg-deep-blue-600 overflow-hidden mb-sm-subtopic ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <img
        alt="features-carousel-background"
        src={`https://cdn.chiron.care/cms/individualPages/admission-procedure/background.png`}
        // src={`https://cdn.chiron.care/${backgroundSrc}`}
        className="w-full hidden md:block"
      />
      <img
        alt="features-carousel-background"
        src={`https://cdn.chiron.care/cms/individualPages/admission-procedure/background-mobile.png`}
        // src={`https://cdn.chiron.care/${backgroundMobile}`}
        className="w-full md:hidden"
      />
      <div className="absolute top-0 w-full h-full">
        <EMSCarousel
          elements={
            slides.map((slide, slideIndex) => (
              <QuoteCard
                key={`slideIndex-${slideIndex}`}
                imageSrc={slide.image}
                content={slide.content[locale]}
              />
            ))
          }
          classValue="h-full mx-auto"
        />
      </div>
    </div>
  );
};

interface SlideBannerProps {
  slides: any
  details: any
  imageSrc: string
  classValue?: string

  locale: string

  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(SlideBanner);
