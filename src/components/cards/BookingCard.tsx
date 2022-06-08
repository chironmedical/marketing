import React from 'react';

const BookingCard = ({
  title = "",
  clinics = [],
  whatsapp = "",
  whatsappUrl = "",
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: BookingCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-row justify-center relative w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <img
        alt="booking"
        src="https://cdn.chiron.care/console/branches/booging/booking.png"
        className="w-full opacity-50 md:hidden"
      />
      <img
        alt="booking"
        src="https://cdn.chiron.care/console/branches/booging/booking-lg.png"
        className="w-full opacity-50 hidden md:block h-lg-booking-card-background"
      />
      <div
        className="absolute flex flex-col top-0 h-full w-full lg:px-sm-subtopic lg:w-lg-inline xl:w-xl-inline items-center justify-evenly"
      >
        <h1
          className={`lg:text-sm-h1 tracking-widest whitespace-pre-line lg:leading-10 mx-sm-subtopic text-center text-deep-blue-600 h-fit-content ${locale === "en-US" ? "leading-4 text-sm-h4-card" : "leading-8 text-sm-h3-card"}
        `}>
          { title[locale] ? title[locale].replace(/\\n/g, "\n") : title.replace(/\\n/g, "\n") }
        </h1>
        <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-evenly">
          {
            clinics.map((clinic, clinicIndex) => (
              clinic.phones.map((phone, phonesIndex) => (
                <button
                  className={`h-12 lg:h-14 font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none bg-deep-blue-600 text-white md:m-0 ${clinicIndex !== 0 && 'mt-lg-card sm:mt-sm-subtopic md:m-0'}`}
                  key={`clinic-${clinicIndex}-${phonesIndex}`}
                >
                  <a href="tel:25300006" target="">
                    <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
                      <img
                        alt="icon"
                        src="https://cdn.chiron.care/console/branches/booging/phone-booking.svg"
                        className="lg:w-7 mr-sm-card"
                      />
                      <h2 className="font-normal text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9">
                        { phone } ({clinic.district})
                      </h2>
                    </div>
                  </a>
                </button>
              ))
            ))
          }
          {
            <button className="h-12 lg:h-14 font-bold leading-loose cursor-pointer rounded-custom outline-none focus:outline-none bg-whatsapp-green text-white mt-lg-card sm:mt-sm-subtopic md:m-0 ">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-row justify-center mx-sm-subtopic h-full items-center">
                  <img
                    alt="icon"
                    src="https://cdn.chiron.care/console/branches/booging/whatsapp.svg"
                    className="lg:w-7 mr-sm-card"
                  />
                  <h2 className="font-normal text-sm-h3-card lg:text-lg-h3-card tracking-widest leading-7 lg:leading-9">
                    { whatsapp }
                  </h2>
                </div>
              </a>
            </button>
          }
        </div>
      </div>
    </div>
  );
};

interface BookingCardProps {
  title: string
  clinics: any
  whatsapp: string
  whatsappUrl: string
  classValue?: string
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(BookingCard);
