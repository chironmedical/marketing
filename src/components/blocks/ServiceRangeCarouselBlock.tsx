import React from 'react';
import Carousel from '../elements/Carousel';
import ServiceCategoryCard from '../cards/ServiceCategoryCard';
import localeMapping from '../../libs/localeMapping';

const ServiceRangeCarouselBlock = ({
  title = { "zh-HK": "", "zh-CN": "", "en-US": "" },
  subtitle = { "zh-HK": "", "zh-CN": "", "en-US": "" },
  branches,
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ServiceRangeCarouselBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col lg:flex-row w-full lg:w-lg-inline xl:w-xl-inline lg:justify-between lg:px-lg-card mx-auto ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-lg-index-page-section my-sm-content lg:my-lg-content">
        <h1 className="text-deep-blue-600 tracking-wider text-sm-h2 lg:text-lg-h3-article leading-9 lg:leading-14">
          { title[locale] }
        </h1>
        <h4 className="text-light-blue-500 text-sm-h4-article leading-6 lg:text-lg-h4-article lg:leading-10 tracking-wider
          my-lg-card lg:my-40px w-inline lg:w-full
        ">
          { subtitle[locale] }
        </h4>
        <Carousel
          classValue="mx-auto w-full max-w-carousel px-sm-subtopic lg:px-0 lg:mx-0"
          elements={branches.map((branch, branchIndex) => (
            <a
              key={`branch-${branchIndex}`}
              href={branch.page ? (locale !== "" ? `/${localeMapping(locale)}/${branch.page.pathname}` : `/${branch.page.pathname}`) : '#' }>
              <ServiceCategoryCard
                locale={locale}
                abstract={branch.abstract}
                icon={branch.cardIcon}
                name={branch.name}
                image={branch.cover}
                classValue="text-left w-inline md:w-md-card lg:w-lg-card xl:w-xl-card"
              />
            </a>
          ))}
          slidesToShow={1}
          autoplay={true}
          allSingleSlideResponsive={true}
        />
        <button
          className={`font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none bg-deep-blue-600 text-white mt-sm-content lg:mt-lg-subtopic h-14 lg:h-16 w-inline-image`}
        >
          <a
            href={locale === "zh-HK" ? "/hk/專科中心" : (locale === "en-US" ? "/en/specialistcentre" : (locale === "zh-CN" ? "/cn/专科中心" : "/專科中心"))}
            target="_blank"
            rel="noreferrer">
            <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
              <h2 className="text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9">
                { locale === "zh-HK" && "了解更多" }
                { locale === "zh-CN" && "了解更多" }
                { locale === "en-US" && "More" }
              </h2>
            </div>
          </a>
        </button>
      </div>
      <img
        alt="index-services"
        src="https://cdn.chiron.care/cms/general/chiron-medical.svg"
        className="lg:w-lg-inline-image xl:w-xl-inline-image object-scale-down hidden lg:block"
        loading="lazy" />
    </div>
  );
};


interface ServiceRangeCarouselBlockProps {
  title: any
  subtitle: any
  branches: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(ServiceRangeCarouselBlock);
