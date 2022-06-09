import React from 'react';
import ImageCarousel from '../elements/ImageCarousel';

const PromotionsImageCarouselBlock = ({
  promotions = [],
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: PromotionsImageCarouselBlockProps): React.ReactElement => {
  const className = `${classValue}`;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div
      className={`flex flex-col mx-auto items-center w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <ImageCarousel
        classValue="flex flex-col mb-sm-subtopic lg:mb-lg-content mx-auto"
        elements={promotions.slice(0, 4).map((promotion, index) => (
          <img
            key={`promotion-${index}`}
            alt="promotion"
            src={promotion.thumbnail}
            className="object-contain"
          />
        ))}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        description={promotions[currentSlide].abstract}
        title={promotions[currentSlide].name}
        postedAt={promotions[currentSlide].postedAt}
      />
    </div>
  );
};

export interface PromotionsImageCarouselBlockProps {
  promotions: any
  classValue?: string

  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(PromotionsImageCarouselBlock);
