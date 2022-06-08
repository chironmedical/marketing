import React from 'react';
import EventCard from '../cards/EventCard';
import localeMapping from '../../libs/localeMapping';
import createSubgroup from '../../libs/createSubgroup';

const EventCardBlock = ({
  locale = '',
  events = [],
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: EventCardBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col mx-auto items-center w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="mb-sm-content lg:mb-lg-content w-full">
        {
          Array.isArray(events) ? (
            createSubgroup(events, 3).map((row, rowIndex) => (
              <div
                className={`flex flex-col lg:flex-row w-full ${rowIndex !== 0 && "mt-sm-content lg:mt-lg-content"}`}
                key={`event-row-${rowIndex}`}
              >
                {
                  row.map((event, index) => (
                    <div
                      className={`flex flex-row w-full lg:w-1/3 justify-center mt-sm-content lg:mt-0`}
                      key={`event-${index}`}
                    >
                      <a
                        href={event.page ? (locale !== "" ? `/${localeMapping(locale)}/${event.page.pathname}` : `/${event.page.pathname}`) : '#'}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <EventCard
                          locale={locale}
                          event={event}
                        />
                      </a>
                    </div>
                  ))
                }
              </div>
            ))
          ) : (
            <h2>Events</h2>
          )
        }
      </div>
    </div>
  );
};

interface EventCardBlockProps {
  locale: string
  events: any
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(EventCardBlock);
