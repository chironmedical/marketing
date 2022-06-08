import React from 'react';

const H5 = ({ title, className }: H5Props):  React.ReactElement => {
  return (
    <h5 className={`text-sm-h6 lg:text-lg-h4-card leading-6 lg:leading-8 text-light-blue-500
      w-full text-center whitespace-pre lg:text-left mt-sm-subtopic lg:mt-lg-subtopic ${className}
    `}>
      {title}
    </h5>
  );
};

interface H5Props {
  title: string,
  className?: string,
}

export default React.memo(H5);
