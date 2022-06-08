import React from 'react';

const H4 = ({ title, className }: H4Props):  React.ReactElement => {
  return (
    <h4 className={`text-sm-h5 lg:text-lg-h4-card leading-6 lg:leading-8 text-deep-blue-600
      w-full text-center whitespace-pre lg:text-left mt-sm-subtopic lg:mt-lg-subtopic ${className}
    `}>
      {title}
    </h4>
  );
};

interface H4Props {
  title: string,
  className?: string,
}

export default React.memo(H4);
