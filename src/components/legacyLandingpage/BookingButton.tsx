import React from 'react';

const BookingButton = ({
  title,
  icon = "",
  className = "",
  onClickFn,
  navigation = false,
  href = "",
  hrefType = "internal"
}: BookingButtonProps):  React.ReactElement => {
  return (
    navigation ? (
      <button
        className={`h-12 lg:h-14 font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none ${className} `}
        onClick={onClickFn}
      >
        {
          hrefType === "internal" ? (
            <a href={ href }>
              <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
                {
                  icon && (
                    <img
                      alt="icon"
                      src={`https://cdn.chiron.care/cms/general/icons/${icon}.svg`}
                      className="lg:w-7 mr-sm-card" />
                  )
                }
                <h2 className="text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9">
                  { title }
                </h2>
              </div>
            </a>
          ) : (
            <a href={ href } target={ icon === "whatsapp" ? "_blank" : "" } rel="noreferrer">
              <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
                {
                  icon && (
                    <img
                    alt="icon"
                    src={`https://cdn.chiron.care/cms/general/icons/${icon}.svg`}
                    className="lg:w-7 mr-sm-card" />
                  )
                }
                <h2 className="text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9">
                  { title }
                </h2>
              </div>
            </a>
          )
        }
      </button>
    ) : (
      <button
        className={`h-12 lg:h-14 font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none ${className} `}
        onClick={onClickFn}
      >
        <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
          <img alt="icon" src={`/icons/${icon}.svg`} className="lg:w-7" />
          <h2 className="text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9 ml-sm-card">
            {title}
          </h2>
        </div>
      </button>
    )
  );
};

interface BookingButtonProps {
  title: string
  icon: string
  className?: string
  onClickFn?: any
  navigation: boolean
  href: string
  hrefType: string
}

export default React.memo(BookingButton);
