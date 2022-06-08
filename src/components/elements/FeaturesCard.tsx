import React from 'react';

const FeaturesCard = ({
  iconSrc,
  title,
  subtitle,
  classValue = ""
}: FeaturesCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div className={`w-full h-full items-center justify-center flex flex-col px-sm-subtopic ${className}`}>
      <img
        alt="features-icon"
        src={iconSrc}
        className="h-20 w-20 xl:w-fit-content xl:h-fit-content"
      />
      <h2 className="text-sm-h3-card lg:text-sm-h1 leading-7 lg:leading-11 text-white mt-sm-subtopic lg:mt-lg-card xl:mt-lg-subtopic">
        {title}
      </h2>
      <p className="text-sm-p lg:text-lg-h5 text-center leading-5 lg:leading-6 text-white mt-sm-card lg:mt-lg-card">
        {subtitle}
      </p>
    </div>
  );
};

interface FeaturesCardProps {
  iconSrc: string
  title: string
  subtitle: string
  classValue?: string
}

export default React.memo(FeaturesCard);
