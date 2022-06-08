import React from 'react';
import Carousel from '../elements/Carousel';
import SimpleDoctorCard from '../cards/SimpleDoctorCard';

const DoctorCarouselBlock = ({
  title = { "zh-HK": "", "zh-CN": "", "en-US": "" },
  subtitle = { "zh-HK": "", "zh-CN": "", "en-US": "" },
  people,
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: DoctorCarouselBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col lg:flex-row w-full lg:w-lg-inline xl:w-xl-inline lg:justify-between lg:px-lg-card mx-auto ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}>
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start my-sm-content lg:my-lg-content">
        <img
          alt="index-services"
          src="https://cdn.chiron.care/cms/general/professionals.svg"
          className="w-inline mb-sm-content lg:hidden"
          loading="lazy" />
        <h1 className="text-deep-blue-600 tracking-wider text-sm-h2 lg:text-lg-h3-article leading-9 lg:leading-14
          w-inline lg:w-full"
        >
          { title[locale] }
        </h1>
        <h4 className="text-deep-blue-600 text-sm-h4-article leading-6 lg:text-lg-h4-article lg:leading-10 tracking-wider
          my-lg-card lg:my-40px w-inline lg:w-full"
        >
          { subtitle[locale] }
        </h4>
        <div className="flex flex-row w-full">
          <Carousel
            classValue="mx-auto w-full px-sm-subtopic lg:px-0 lg:mx-0 lg:w-lg-index-page-professionals-section max-w-carousel"
            rows={2}
            slidesToShow={2}
            autoplay={true}
            elements={people.map((person, personIndex) => (
              <a
                key={`person-${personIndex}`}
                href={person.page ? person.page.path : '#' }>
                <SimpleDoctorCard
                  image={person.thumbnail}
                  name={person.name}
                  role={person.role}
                  allMobileSize={true}
                />
              </a>
            ))}
          />
          <div className="flex flex-row items-center">
            <img
              alt="index-services"
              src="https://cdn.chiron.care/cms/general/professionals.svg"
              className="pl-lg-card hidden lg:block"
              loading="lazy" />
          </div>
        </div>
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
    </div>
  );
};


interface DoctorCarouselBlockProps {
  title: any
  subtitle: any
  people: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(DoctorCarouselBlock);
