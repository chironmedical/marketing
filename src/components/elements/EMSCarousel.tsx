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
        className={`absolute z-40 top-half left-0 ${className}`}
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
        className={`absolute z-40 top-half right-0 ${className}`}
      />
    </button>
  )
}

const EMSCarousel = ({
  elements = [],
  classValue = "",
}: EMSCarouselProps): React.ReactElement => {
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
    dotsClass: "slick-dots slick-dots-modified mt-lg-card",
  };

  return (
    <div className={`flex flex-col items-center w-full px-sm-card sm:px-sm-subtopic lg:px-0 lg:w-4/5 ${className}`}>
      <Slider {...settings} className="w-full h-full flex flex-col justify-center">
        {
          elements.map((e, index) => (
            <div className="slick-slide-center" key={index}>
              {e}
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

interface EMSCarouselProps {
  elements: any
  classValue?: string
}

export default React.memo(EMSCarousel);
