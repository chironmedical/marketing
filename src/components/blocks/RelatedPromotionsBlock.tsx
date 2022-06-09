import React from 'react';
import Carousel from '../elements/Carousel';
import PassageCard from '../cards/PassageCard';
import localeMapping from '../../libs/localeMapping';

const RelatedPromotionsBlock = ({
  promotions,
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: RelatedPromotionsBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  const allPromotions = promotions.sort((a, b) => Date.parse(a.postedAt) > Date.parse(b.postedAt) ? -1 : 1).map((promotion, promotionIndex) => (
    <a
      href={locale !== "" ? (locale === "zh-HK" ? `/${localeMapping(locale)}/最新資訊/${promotion.id}` : (locale === "cn" ? `/${localeMapping(locale)}/最新资讯/${promotion.id}` : `/${localeMapping(locale)}/news/${promotion.id}`)) : `/最新資訊/${promotion.id}`}
      key={`promotion-${promotionIndex}`}
    >
      <PassageCard
        locale={locale}
        imageSrc={promotion.thumbnail}
        postedAt={promotion.postedAt}
        title={promotion.title}
        abstract={promotion.abstract}
      />
    </a>
  ));

  return (
    <div
      className={`bg-white w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        promotions.length > 0 && (
          <Carousel
            title={locale === "" || locale === "zh-HK" ? "相關資訊" : locale === "en-US" ? "Related News" : "相关资讯"}
            classValue="my-sm-subject xl:my-lg-content w-full mx-auto px-sm-subtopic lg:px-lg-subtopic max-w-carousel"
            slidesToShow={promotions.reduce((acc, v) => acc + v.length) < 3 ? promotions.reduce((acc, v) => acc + v.length) : 3}
            elements={allPromotions}
          />
        )
      }
    </div>
  );
};

export interface RelatedPromotionsBlockProps {
  promotions: Record<string, any>
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default RelatedPromotionsBlock;
