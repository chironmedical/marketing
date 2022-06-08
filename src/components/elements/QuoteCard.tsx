import React from 'react';

const QuoteCard = ({
  imageSrc,
  content,
  classValue = ""
}: QuoteCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div className={`w-full h-full items-center justify-center flex flex-col px-sm-subtopic xl:px-lg-subtopic ${className}`}>
      <img
        alt="avatar"
        src={`https://cdn.chiron.care/${imageSrc}?width=48&height=48`}
        className="h-12 w-12 xl:w-fit-content xl:h-fit-content mb-lg-card"
        style={{ borderRadius: "50%" }}
      />
      <img
        alt="left-quote"
        src="https://cdn.chiron.care/cms/general/icons/left-quote-white.svg"
        className="mr-auto"
      />
      <p className="text-sm-p lg:text-lg-h5 text-justify tracking-widest2 leading-5 lg:leading-6 text-white my-sm-card lg:my-lg-card
        restricted-line-number-quote-card
      ">
        { content }
      </p>
      <img
        alt="right-quote"
        src="https://cdn.chiron.care/cms/general/icons/right-quote-white.svg"
        className="ml-auto"
      />
    </div>
  );
};

interface QuoteCardProps {
  imageSrc: string
  content: string
  classValue?: string
}

export default React.memo(QuoteCard);
