import React from 'react';

const Paragraph = ({
  content,
  className
}: ParagraphProps): React.ReactElement => {
  return (
    <div className={`text-sm-h6 lg:text-lg-h4-card leading-6 lg:leading-8 text-custom-grey-400 text-justify
      whitespace-pre-line mt-sm-card lg:mt-lg-card w-full ${className}`} dangerouslySetInnerHTML={{__html: content}}
    >
    </div>
  );
};

interface ParagraphProps {
  content: any
  className?: string
}

export default React.memo(Paragraph);
