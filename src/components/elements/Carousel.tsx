import React from 'react';
import Slider from 'react-slick';

const PrevArrow = (props): React.ReactElement => {
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;
  
  return (
    <button
      onClick={onClick}
      className="focus:outline-none"
    >
      <img
        alt="left-arrow"
        src="https://cdn.chiron.care/cms/general/icons/carousel-arrow-left.svg"
        className={`absolute z-40 top-half w-fit-content h-fit-content lg:w-20 lg:h-20 ${className}`}
      />
    </button>
  )
}

const NextArrow = (props): React.ReactElement => {
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;
  
  return (
    <button
      onClick={onClick}
      className="focus:outline-none"
    >
      <img
        alt="right-arrow"
        src="https://cdn.chiron.care/cms/general/icons/carousel-arrow-right.svg"
        className={`absolute top-half w-fit-content h-fit-content lg:w-20 lg:h-20 ${className}`}
      />
    </button>
  )
}

const Carousel = ({
  title,
  rows = 1,
  slidesToShow = 3,
  allSingleSlideResponsive = false,
  autoplay = false,
  hasMore,
  classValue = "",
  elements = [],
}: CarouselProps): React.ReactElement => {
  const settings = {
    rows: rows,
    infinite: elements.length >= slidesToShow,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: allSingleSlideResponsive ? 1 : 2,
          slidesToScroll: 1,
        }
      },
    ]
  };
  const className = `${classValue}`;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {
        title && (
          <h1 className="text-sm-h1 lg:text-lg-h3-article leading-9 lg:leading-15 w-full text-center mb-sm-subtopic lg:mb-lg-subtopic tracking-wideset text-deep-blue-600">
            { title }
          </h1>
        )
      }
      <Slider {...settings} className="w-full">
        {
          elements.map((e, i) => (
            <div
              className="slick-slide-center"
              key={`carousel-item-${i}`}
            >
              { e }
            </div>
          ))
        }
      </Slider>
      {
        hasMore && (
          <a
            href={hasMore.link}
            target="_blank"
            rel="noreferrer"
            >
            <button
              className={`font-bold leading-loose rounded-custom outline-none w-inline-image h-12 lg:h-16 text-white bg-deep-blue-600 mt-sm-content`}
            >
              <h3 className="text-sm-h3-card lg:text-lg-h3-card font-normal">{hasMore.title}</h3>
            </button>
          </a>
        )
      }
    </div>
  );
};

interface CarouselProps {
  title?: string
  rows?: number
  slidesToShow?: number
  allSingleSlideResponsive?: boolean
  autoplay?: boolean
  hasMore?: any
  classValue?: string
  elements: Record<string, any>
}

export default React.memo(Carousel);
