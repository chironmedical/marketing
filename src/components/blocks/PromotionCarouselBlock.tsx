import React from 'react';
import Carousel from '../elements/Carousel';
import PassageCard from '../cards/PassageCard';

const PromotionCarouselBlock = ({
  promotions,
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: PromotionCarouselBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        promotions.length > 0 && (
          <Carousel
            autoplay={true}
            title={locale === "" || locale === "zh-HK" ? "最新資訊" : locale === "en-US" ? "News" : "最新资讯"}
            classValue="my-sm-subject xl:my-lg-content mx-auto w-full px-sm-subtopic lg:px-lg-subtopic max-w-carousel"
            elements={
              promotions.slice(0, 5).map((promotion, index) => (
                <a
                  href={promotion.page ? promotion.page.pathname : '#'}
                  key={`promotion-${index}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PassageCard
                    locale={locale}
                    imageSrc={promotion.thumbnail}
                    postedAt={promotion.postedAt}
                    title={promotion.name}
                    abstract={promotion.abstract}
                  />
                </a>
              ))
            }
            hasMore={{
              title: locale === "zh-HK" || locale === "" ? "更多資訊" : locale === "en-US" ? "More" : "更多资讯",
              link: locale === "zh-HK" ? "/hk/最新資訊" : locale === "en-US" ? "/en/news" : locale === "zh-CN" ? "/cn/最新资讯" : "/最新資訊"
            }}
          />
        )
      }
    </div>
  );
};

interface PromotionCarouselBlockProps {
  promotions: Record<string, any>
  branchName: string
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(PromotionCarouselBlock);
