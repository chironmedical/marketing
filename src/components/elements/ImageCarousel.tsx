import React from 'react';
import Slider from 'react-slick';

const PrevArrow = (props): React.ReactElement => {
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;

  return (
    <button
      className="focus:outline-none"
      onClick={onClick}
    >
      <img
        alt="left-arrow"
        src="https://cdn.chiron.care/cms/general/icons/carousel-arrow-left.svg"
        className={`absolute z-40 top-4/10 md:top-half w-fit-content h-fit-content lg:w-20 lg:h-20 left-image-carousel-arrow lg:left-lg-image-carousel-arrow ${className}`}
      />
    </button>
  )
}

const NextArrow = (props): React.ReactElement => {
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;

  return (
    <button
      className="focus:outline-none"
      onClick={onClick}
    >
      <img
        alt="right-arrow"
        src="https://cdn.chiron.care/cms/general/icons/carousel-arrow-right.svg"
        className={`absolute z-40 top-4/10 md:top-half w-fit-content h-fit-content lg:w-20 lg:h-20 right-image-carousel-arrow lg:right-lg-image-carousel-arrow ${className}`}
      />
    </button>
  )
}

const ImageCarousel = ({
  currentSlide,
  setCurrentSlide,
  postedAt = "",
  title,
  description,
  classValue = "",
  elements = []
}: ImageCarouselProps): React.ReactElement => {
  const settings = {
    rows: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
    },
    customPaging: (index) => (
      <img
        src={`https://cdn.chiron.care/cms/general/icons/carousel/${currentSlide === index ? "selected-hollow" : "unselected-solid"}-dot.svg`}
        alt="dot"/>
    ),
    dotsClass: "slick-dots slick-dots-modified mt-sm-content",
  };
  const className = `${classValue}`;

  return (
    <div className={`flex flex-col items-center w-sm-fit-carousel md:w-md-carousel lg:w-lg-carousel xl:w-xl-carousel ${className}`}>
      <Slider {...settings} className="w-full h-fit-content show-flip-card">
        {
          elements.map((e, index) => (
            <div
              className="max-h-news-image-carousel md:max-h-md-news-image-carousel lg:max-h-lg-news-image-carousel xl:max-h-xl-news-image-carousel h-news-image-carousel md:h-md-news-image-carousel lg:h-lg-news-image-carousel xl:h-xl-news-image-carousel slick-slide-center -z-10 relative"
              key={`element-${index}`}
            >
              {e}
              <div className="absolute w-full h-full bg-deep-blue-600 opacity-0 z-40 px-sm-subtopic lg:px-lg-subtopic py-sm-card lg:py-lg-subtopic flip-card">
                <div className="flex flex-col">
                  {
                    postedAt && (
                      <div className="flex flex-row items-center">
                        <img
                          src="https://cdn.chiron.care/cms/general/icons/clock-white.svg"
                          className="lg:h-4 lg:w-4"
                          alt="postedAt" />
                        <h5 className="ml-2 text-sm-p lg:text-lg-h5 text-white tracking-widest leading-5 lg:leading-7">
                          { postedAt.replace('T', ' ') }
                        </h5>
                      </div>
                    )
                  }
                  <h3 className={`text-sm-h4-card lg:text-lg-h3-article text-white tracking-widest lg:leading-14 mb-sm-card restricted-line-number-single lg:restricted-line-number`}>
                    {title}
                  </h3>
                  <h4 className="text-sm-p lg:text-lg-h4-card text-white tracking-widest lg:leading-7 restricted-line-number-image-carousel lg:restricted-line-number">
                    {description}
                  </h4>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export interface ImageCarouselProps {
  currentSlide: any
  setCurrentSlide: any
  postedAt: string
  title: string
  description: string
  classValue?: string
  elements: any
}

export default React.memo(ImageCarousel);
