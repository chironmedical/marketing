import React from 'react';

const ImageSection = ({
  title,
  content,
  itemsPerRow,
  className=''
}: ImageSectionProps):  React.ReactElement => {
  return (
    <div className={`flex flex-col w-full items-center my-sm-subtopic lg:my-lg-subtopic ${className}`}>
      {
        title && (
          <h3 className="text-sm-h3-article lg:text-sm-h1 leading-8 lg:leading-10 text-deep-blue-600 mb-sm-subtopic lg:mb-lg-subtopic">
            {title}
          </h3>
        )
      }
      <div className={`grid grid-cols-2 gap-6 lg:grid-cols-${itemsPerRow}`}>
        {
          content.map(item => (
            <div key={item.title} className={`flex flex-col items-center px-sm-card`}>
              <img
                alt={item.title}
                src={item.icon}
                className={`${itemsPerRow <= 1 ? "w-1/3 lg:w-1/3" : "lg:w-16 lg:h-16"}`}
              />
              <h3 className="text-sm-h3-card lg:text-lg-h3-card leading-7 lg:leading-9 text-deep-blue-600 lg:mt-lg-card text-center whitespace-pre-line">
                { item.title.replace(/\n/g, "\n") }
              </h3>
            </div>
          ))
        }
      </div>
    </div>
  );
};

interface ImageSectionProps {
  title: string
  content: any
  itemsPerRow: number
  className?: string
}

export default React.memo(ImageSection);
