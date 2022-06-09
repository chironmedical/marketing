import React from 'react';

const Subtopic = ({
  title,
  className
}: SubtopicProps): React.ReactElement => {
  return (
    <h1 className={`text-sm-h2 lg:text-lg-h3-article leading-9 lg:leading-15 text-deep-blue-600
      w-full text-center lg:text-left mt-sm-subtopic lg:mt-lg-content ${className}
    `}>
      {title}
    </h1>
  );
};

export interface SubtopicProps {
  title: string
  className?: string
}

export default React.memo(Subtopic);
