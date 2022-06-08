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
        src="https://cdn.chiron.care/cms/general/icons/thin-arrow-left-white.svg"
        className={`absolute z-40 top-half lg:w-fit-content lg:h-fit-content left-0 ${className}`}
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
        src="https://cdn.chiron.care/cms/general/icons/thin-arrow-right-white.svg"
        className={`absolute z-40 top-half lg:w-fit-content lg:h-fit-content right-0 ${className}`}
      />
    </button>
  )
}

const FeaturesCarousel = ({
  classValue = "",
  elements = []
}: FeaturesCarouselPrpos): React.ReactElement => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const className = `${classValue}`;
  
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
      <img src={`https://cdn.chiron.care/cms/general/icons/${currentSlide === index ? "selected-hollow" : "unselected-solid"}-dot-white.svg`} alt="" />
    ),
    dotsClass: "slick-dots slick-dots-modified mt-sm-content md:mt-lg-card lg:mt-lg-subtopic xl:mt-lg-content",
  };

  return (
    <div className={`flex flex-col items-center w-inline sm:w-full sm:px-sm-subtopic lg:px-0 lg:w-lg-vision xl:w-xl-vision ${className}`}>
      <Slider {...settings} className="w-full h-full flex flex-col justify-center">
        {
          elements.map((e, index) => (
            <div className="slick-slide-center" key={`e-${index}`}>
              {e}
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

interface FeaturesCarouselPrpos {
  classValue?: string
  elements: any
}

export default React.memo(FeaturesCarousel);
