import React from 'react';

import Subtopic from './Subtopic';
import Subheader from './Subheader';
import H3 from './H3';
import H4 from './H4';
import H5 from './H5';
import Paragraph from './Paragraph';
import QNASection from './QNASection';
import ImageSection from './ImageSection';
import BookingButton from './BookingButton';
import LandingPageSubGroup from './LandingPageSubGroup';
import TableSwitchPlanButton from './TableSwitchPlanButton';

const Content = ({ contents = "" }: ContentProps):  React.ReactElement => {
  const innerContent = JSON.parse(contents);

  return (
    <div className="w-full lg:w-3/4 lg:mb-lg-content max-w-landing-page mx-auto">
      {
        innerContent.sort((a, b) => a.index > b.index ? 1 : -1).map((sector) => (() => {
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
                    highlightLastItem={ true }
                  />
                </div>
              )
            case "qna":
              return (
                <div className="flex flex-col w-full lg:w-4/5 items-center mx-auto mt-sm-subtopic lg:mt-lg-subtopic">
                  <QNASection
                    title={'contents.page.header.title'}
                    content={ sector.question_set }
                  />
                </div>
              )
            case "booking":
              return (
                <div className="flex flex-col w-full lg:w-4/5 items-center mx-auto mt-sm-subtopic lg:mt-lg-subtopic">
                  {
                    sector.contacts.map((contact, contactIndex) => (
                      <BookingButton
                        title={ contact.title }
                        href={ contact.link }
                        hrefType="external"
                        navigation={ true }
                        key={`contact-${contactIndex}`}
                        icon={ contact.type === "phone" ? "phone-booking" : "whatsapp" }
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
    </div>
  );
}

export interface ContentProps {
  contents: string
}

export default React.memo(Content);
