import React from 'react';
import Carousel from '../elements/Carousel';
import ServiceCategoryCard from '../cards/ServiceCategoryCard';
import localeMapping from '../../libs/localeMapping';

const ServiceCategoryBlock = ({
  landingpages,
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected = false,
  selectBlockFun,
}: ServiceCategoryBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        landingpages.length ? (
          <Carousel
            title={locale === "" || locale === "zh-HK" ? "相關服務" : locale === "en-US" ? "Related Services" : "相关服务"}
            classValue="my-sm-subject xl:my-lg-content w-full mx-auto px-sm-subtopic lg:px-lg-subtopic max-w-carousel"
            slidesToShow={landingpages.length < 3 ? landingpages.length : 3}
            elements={landingpages.map((landingpage, index) => (
              <a
                href={locale !== "" ? `/${localeMapping(locale)}/${landingpage.page?.pathname}` : `/${landingpage.page?.pathname}`}
                key={`page-${index}`}
              >
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
        ) : ""
      }
    </div>
  );
};

export interface ServiceCategoryBlockProps {
  landingpages: any
  classValue?: string
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default ServiceCategoryBlock;
