import React from 'react';
// import { FAQJsonLd } from 'gatsby-plugin-next-seo';
import Subtopic from './Subtopic';

const QNASection = ({
  title,
  content,
  className
}: QNASectionProps): React.ReactElement => {
  const [expanded, setExpanded] = React.useState(new Array(content.length).fill(true));

  const changeExpanded = (index) => {
    const newExpanded = expanded;
    newExpanded[index] = !newExpanded[index];
    setExpanded([...newExpanded]);
  }

  return (
    <div className={`flex flex-col w-full items-center lg:items-start ${className}`}>
      {/* <FAQJsonLd questions={content}/> */}
      <Subtopic
        title={title}
        className="mb-sm-subtopic lg:mb-lg-subtopic" />
      <ul className="w-full whitespace-normal">
      {
        content.map((set, setIndex) => (
          <li key={set.question} className="w-full">
            <button
              className={`flex flex-row justify-between items-center px-sm-subtopic min-h-sm-table-row lg:min-h-lg-table-row
              bg-custom-grey-100 w-full tracking-widest cursor-pointer focus:outline-none ${setIndex !== 0 ? "mt-sm-card" : ""}`}
              onClick={() => changeExpanded(setIndex)}
            >
              <h6 className="text-sm-p lg:text-lg-h3-card leading-5 lg:leading-9 my-sm-card">
                { set.question }
              </h6>
              <img
                alt="arrow-up"
                src="https://cdn.chiron.care/cms/general/icons/arrow-up.svg"
                className={expanded[setIndex] ? "block" : "hidden"} />
              <img
                alt="arrow-down"
                src="https://cdn.chiron.care/cms/general/icons/arrow-down.svg"
                className={!expanded[setIndex] ? "block" : "hidden"} />
            </button>
            <p className={`w-full text-sm-p lg:text-lg-h5 leading-5 lg:leading-6 my-sm-subtopic px-sm-subtopic tracking-widest w-full text-justify
              lg:text-left ${expanded[setIndex] ? "block" : "hidden"}
            `}>
              { set.answer }
            </p>
          </li>
        ))  
      }
      </ul>
    </div>
  );
};

export interface QNASectionProps {
  title: string
  content: any
  className?: string
}

export default React.memo(QNASection);
