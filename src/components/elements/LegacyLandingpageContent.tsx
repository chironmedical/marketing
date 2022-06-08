import React from 'react';

import Subtopic from '../legacyLandingpage/Subtopic';
import Subheader from '../legacyLandingpage/Subheader';
import H3 from '../legacyLandingpage/H3';
import H4 from '../legacyLandingpage/H4';
import H5 from '../legacyLandingpage/H5';
import Paragraph from '../legacyLandingpage/Paragraph';
import QNASection from '../legacyLandingpage/QNASection';
import ImageSection from '../legacyLandingpage/ImageSection';
import BookingButton from '../legacyLandingpage/BookingButton';
import LandingPageSubGroup from '../legacyLandingpage/LandingPageSubGroup';
import TableSwitchPlanButton from '../legacyLandingpage/TableSwitchPlanButton';

const LegacyLandingpageContent = ({
  innerContent = [],
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: LegacyLandingpageContentProps): React.ReactElement => {
  const className = `${classValue}`;
  let _innerConetnt: any[] = [];
  try {
    _innerConetnt = JSON.parse(innerContent[locale]);
  } catch (error) {
    console.error(error);
  }

  return (
    <h3
      className={`py-2 text-sm-h3-card lg:text-lg-h4-article leading-7 lg:leading-8 text-deep-blue-600 w-full text-center whitespace-pre lg:text-left mt-sm-subtopic lg:mt-lg-subtopic ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}>
      {
        _innerConetnt.sort((a, b) => a.index > b.index ? 1 : -1).map((sector: any) => (() => {
          switch(sector.type) {
            case "paragraph":
              return (
                <div className="flex flex-col tracking-widest items-center w-inline lg:w-4/5 mx-auto">
                  <Paragraph content={sector.content.replace(/\\n/g, '\n')} />
                </div>
              );
            case "subtopic":
              return (
                <div className="flex flex-col tracking-widest items-center w-inline lg:w-4/5 mx-auto">
                  <Subtopic title={sector.title} />
                </div>
              );
            case "subheader":
              return (
                <div className="flex flex-col tracking-widest items-center w-inline lg:w-4/5 mx-auto">
                  <Subheader title={sector.title} />
                </div>
              );
            case "H3":
              return (
                <div className="flex flex-col tracking-widest items-center w-inline lg:w-4/5 mx-auto">
                  <H3 title={sector.title} />
                </div>
              );
            case "H4":
              return (
                <div className="flex flex-col tracking-widest items-center w-inline lg:w-4/5 mx-auto">
                  <H4 title={sector.title} />
                </div>
              );
            case "H5":
              return (
                <div className="flex flex-col tracking-widest items-center w-inline lg:w-4/5 mx-auto">
                  <H5 title={sector.title} />
                </div>
              );
            case "image":
              return (
                <div className="flex flex-col tracking-widest items-center w-inline lg:w-4/5 mt-sm-content lg:mt-lg-content mx-auto">
                  <img
                    alt={sector.alt}
                    src={sector.image}
                    className="lg:w-xl-inline-image"
                  />
                </div>
              );
            case "image-section":
              return (
                <div className="flex flex-col tracking-widest items-center w-inline lg:w-4/5 mx-auto">
                  <ImageSection
                    title={sector.title}
                    content={sector.content}
                    itemsPerRow={sector.items_per_row}
                  />
                </div>
              );
            case "table":
              return (
                <div className="flex flex-col w-full lg:w-4/5 items-center mx-auto my-sm-subtopic lg:mt-lg-subtopic">
                  {
                    sector.header_buttons.length > 0 && (
                      <TableSwitchPlanButton
                        iconSrc={sector.header_buttons[0].icon}
                        shortFormName={sector.header_buttons[0].name}
                        textColor="deep-blue-600"
                        backgroundColor="deep-blue-600"
                        className="w-fit-content"
                        textSize="text-sm-h5 lg:text-lg-h3-card lg:leading-9"
                      />
                    )
                  }
                  <LandingPageSubGroup
                    className="w-full"
                    tableContent={{
                      headerWidth: sector.headerWidth,
                      contentWidth: sector.contentWidth,
                      header: sector.header,
                      content: sector.content,
                    }}
                    highlightLastItem={true}
                  />
                </div>
              )
            case "qna":
              return (
                <div className="flex flex-col w-full lg:w-4/5 items-center mx-auto mt-sm-subtopic lg:mt-lg-subtopic">
                  <QNASection
                    title={{"en-US": "Frequently Asked Questions", "zh-HK": "常見問題", "zh-CN": "常見問題"}[locale]??"常見問題"}
                    content={sector.question_set}
                  />
                </div>
              )
            case "booking":
              return (
                <div className="flex flex-col w-full lg:w-4/5 items-center mx-auto mt-sm-subtopic lg:mt-lg-subtopic">
                  {
                    sector.contacts.map((contact, contactIndex) => (
                      <BookingButton
                        key={`bookingBtn-${contactIndex}`}
                        title={contact.title}
                        href={contact.link}
                        hrefType="external"
                        navigation={true}
                        icon={contact.type === "phone" ? "phone-booking" : "whatsapp"}
                        className={`${contact.type === "phone" ? "bg-deep-blue-600" : "bg-whatsapp-green"} text-white ${contactIndex !== 0 ? "mt-lg-card sm:mt-sm-subtopic" : ""}`}
                      />
                    ))
                  }
                </div>
              )
            default:
              return null;
          }
        })())
      }
    </h3>
  );
};

interface LegacyLandingpageContentProps {
  innerContent: any
  locale: string
  classValue: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(LegacyLandingpageContent);
