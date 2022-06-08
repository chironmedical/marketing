import React from 'react';

const SimpleDoctorCard = ({
  image,
  name,
  role,
  locale = "zh-HK",
  allMobileSize = false,
  classValue = "",
}: SimpleDoctorCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-row items-center tracking-widest leading-loose rounded-custom shadow-xl zoom w-sm-simple-doctor-card ${className} ${!allMobileSize ? "sm:w-lg-simple-doctor-card sm:h-lg-simple-doctor-card" : ""}
        bg-white my-sm-subtopic xl:my-sm-subtopic ${locale !== "en-US" ? "h-sm-simple-doctor-card" : "h-sm-simple-doctor-card-en"}
      `}
    >
      <img
        alt="people-avatar"
        src={`${image}`}
        className={`w-2/5 mt-auto rounded-bl-custom max-h-full`}
      /> 
      <div className={`flex flex-col w-full px-lg-card ${!allMobileSize ? "sm:px-sm-subtopic" : "sm:px-sm-card"} my-auto`}>
        <h1 className={`${locale === "en-US" ? "text-sm-h5 leading-5" : "text-sm-h4-article leading-8 tracking-widest"}
          ${!allMobileSize ? locale === "en-US" ? "sm:text-sm-h3-article sm:leading-6" : "sm:text-sm-h1 sm:leading-8" : ""} text-deep-blue-600
        `}>
          { name }
        </h1>
        <h2 className={`text-sm-h6 ${!allMobileSize ? "sm:text-lg-h4-card" : ""} ${locale !== "en-US" ? "leading-6" : "leading-5 mt-1"}
          tracking-widest text-light-blue-500 whitespace-pre-line restricted-line-number-image-carousel
        `}>
          { role.indexOf(',') !== -1 ? role.substr(0, role.indexOf(',')) : role }
        </h2>
        <div className={`flex flex-row items-center mt-sm-card ${!allMobileSize ? "sm:mt-sm-subtopic" : ""} justify-end`}>
          <p className="text-sm-p text-deep-blue-600 leading-5 mr-2">
            { locale === "zh-HK" && "了解更多" }
            { locale === "zh-CN" && "了解更多" }
            { locale === "en-US" && "More" }
          </p>
          <img
            alt="arrow-right"
            src="https://cdn.chiron.care/console/branches/icons/thin-arrow-right.svg"
          />
        </div>
      </div>
    </div>
  );
};

interface SimpleDoctorCardProps {
  image: string
  name: string
  role: string
  locale?: string
  allMobileSize?: boolean
  classValue?: string
}

export default React.memo(SimpleDoctorCard);
