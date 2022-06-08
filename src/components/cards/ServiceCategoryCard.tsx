import React from 'react';

const ServiceCategoryCard = ({
  name,
  icon = "",
  image,
  abstract,
  locale,
  classValue = "",
}: ServiceCategoryCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div className={`flex flex-col rounded-custom my-sm-subtopic zoom shadow-custom mb-sm-content w-inline md:w-md-card lg:w-lg-card xl:w-xl-card ${className}`}>
      <div className="relative max-h-service-category-card-image lg:max-h-lg-service-category-card-image h-service-category-card-image lg:h-lg-service-category-card-image overflow-hidden">
        <img
          alt="service-category"
          src={ image }
          className="object-contain rounded-t-custom"
          loading="lazy"
        />
        <div className="absolute top-0 h-full w-full shaded-overlay rounded-t-custom" />
        <div className="absolute flex flex-row justify-between items-center px-lg-card lg:px-sm-subtopic top-0 h-full w-full">
          {
            icon && (
              <img
                alt="category-icon"
                src={icon}
                className="h-12 w-12 lg:h-16 lg:w-16"
              />
            )
          }
          <h1 className="text-sm-h2 lg:text-sm-h1 text-white leading-7 pl-sm-card lg:pl-lg-card text-right">
            { name }
          </h1>
        </div>
      </div>
      <div className="flex flex-col bg-white px-sm-subtopic py-lg-card h-fit-content rounded-b-custom">
        <p className={`text-sm-h6 lg:text-lg-h5 ${locale === "en-US" ? "tracking-wider" : "tracking-widest"} text-light-blue-500 leading-24px lg:leading-28px
          h-sm-category-card-description lg:h-category-card-description max-h-sm-category-card-description lg:max-h-category-card-description restricted-line-number`}
        >
          { abstract }
        </p>
        <div className="flex flex-row items-center justify-end mt-sm-subtopic">
          <p className="text-sm-p lg:text-lg-h5 text-deep-blue-600 tracking-widest leading-5 lg:leading-7 mr-3">
            { locale === "zh-HK" || locale === "" ? "了解更多" : locale === "en-US" ? "More" : "了解更多" }
          </p>
          <img
            alt="arrow-right"
            src="https://cdn.chiron.care/console/people/icons/thin-arrow-right.svg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceCategoryCardProps {
  name: string
  icon?: string
  image: string
  abstract: string
  locale: string
  classValue?: string
}

export default React.memo(ServiceCategoryCard);
