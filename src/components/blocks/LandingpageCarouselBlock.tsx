import React from 'react';
import Carousel from '../elements/Carousel';
import ServiceCategoryCard from '../cards/ServiceCategoryCard';
import localeMapping from '../../libs/localeMapping';

const LandingpageCarouselBlock = ({
  title = { "zh-HK": "", "zh-CN": "", "en-US": "" },
  landingpages,
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: LandingpageCarouselBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`relative w-full h-fit-content ladningpage-background ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}>
      <div className="w-full flex flex-row items-center my-lg-subtopic">
        <Carousel
          autoplay={true}
          hasMore={{
            title: locale === "zh-HK" || locale === "" ? "更多資訊" : locale === "en-US" ? "More" : "更多资讯",
            link: locale === "zh-HK" ? "/hk/健康專欄" : locale === "en-US" ? "/en/health-info" : locale === "cn" ? "/cn/健康专栏" : "/健康專欄"
          }}
          title={title[locale]}
          slidesToShow={landingpages.length < 3 ? landingpages.length : 3}
          classValue="mx-auto w-full px-sm-subtopic lg:px-lg-subtopic max-w-carousel"
          elements={landingpages.map((landingpage, landingpageIndex) => (
            <a
              href={landingpage.page ? (locale !== "" ? `/${localeMapping(locale)}/${landingpage.page.pathname}` : `/${landingpage.page.pathname}`) : '#' }
              key={`landingpage-${landingpageIndex}`}>
              <ServiceCategoryCard
                locale={locale}
                abstract={landingpage.abstract}
                name={landingpage.name}
                image={landingpage.cover}
                classValue="w-inline md:w-md-card lg:w-lg-card xl:w-xl-card"
              />
            </a>
          ))}
        />
      </div>
    </div>
  );
};


interface LandingpageCarouselBlockProps {
  title: any
  landingpages: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(LandingpageCarouselBlock);
