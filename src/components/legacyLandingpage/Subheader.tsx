import React from 'react';

const Subheader = ({
  title,
  className
}: SubheaderProps): React.ReactElement => {
  return (
    <h2 className={`text-sm-h3-article lg:text-sm-h1 leading-8 lg:leading-10 text-deep-blue-600
      w-full text-center lg:text-left mt-sm-subtopic lg:mt-lg-content ${className}
    `}>
      {title}
    </h2>
  );
};

interface SubheaderProps {
  title: string
  className?: string
}

export default React.memo(Subheader);
