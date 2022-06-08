import React from 'react';

const H3 = ({ title, className }: H3Props):  React.ReactElement => {
  return (
    <h3 className={`text-sm-h3-card lg:text-lg-h4-article leading-7 lg:leading-8 text-deep-blue-600
      w-full text-center whitespace-pre lg:text-left mt-sm-subtopic lg:mt-lg-subtopic ${className}
    `}>
      {title}
    </h3>
  );
};

interface H3Props {
  title: string
  className?: string
}

export default React.memo(H3);
