import React from 'react';

const ContactCard = ({
  icon,
  title,
  locale = 'zh-HK',
  details,
  location,
  isLocationCard,
  contactCardType,
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ContactCardProps): React.ReactElement => {
  const className = `${classValue}`;
  console.log(location);

  const cardLink = (type, detail) => {
    switch (type) {
      case 'tel': {
        return `tel:${Number(detail.replace(/\s/g, ""))}`;
      }
      case 'fax': {
        return `fax:${Number(detail.replace(/\s/g, ""))}`;
      }
      case 'mail': {
        return `mailto:${detail}`;
      }
      default: {
        return '';
        break;
      }
    }
  }

  return (
    <div
      className={`border border-solid border-light-blue-200 rounded-square-card shadow-contact-card lg:my-6 lg:mx-sm-card w-sm-contact-card h-sm-contact-card ${locale === "en-US" && isLocationCard ? "flex flex-col justify-center" : "py-sm-content"} lg:w-lg-contact-card lg:h-lg-contact-card ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="flex flex-col lg:mx-lg-card items-center text-center">
        <img
          alt="icon"
          src={`https://cdn.chiron.care/${icon}`}
          className="w-8 h-8 lg:w-12 lg:h-12" />
        <h1 className="my-lg-card text-deep-blue-600 leading-7 tracking-widest
          text-sm-h3-card lg:text-lg-h3-card lg:leading-10"
        >
          { title[locale] }
        </h1>
        {
          Array.isArray(details) ? (
            details.map((detail, index) => (
              contactCardType === "default" ? (
                <h2
                  className={`${details.length > 1 ? `text-sm-p lg:text-lg-h5 ${locale !== "en-US" ? "leading-5 lg:leading-9 tracking-widest" : "leading-6"}` : `text-sm-h3-card lg:text-lg-h4-card leading-5 lg:leading-9 tracking-widest`}
                  text-light-blue-500 mx-sm-subtopic lg:mx-0 whitespace-pre-line
                `}
                  key={`detail-${index}`}
                >
                  { detail }
                </h2>
              ) : (
                <a
                  href={cardLink(contactCardType, detail)}
                  key={`detail-${index}`}
                >
                  <h2 className={`${details.length > 1 ? `text-sm-p lg:text-lg-h5 ${locale !== "en-US" ? "leading-5 lg:leading-9 tracking-widest" : "leading-6"}` : `text-sm-h3-card lg:text-lg-h3-card leading-5 lg:leading-9 tracking-widest`}
                    text-light-blue-500 mx-sm-subtopic lg:mx-0 whitespace-pre-line
                  `}>
                    { detail }
                  </h2>
                </a>
              )
            ))
          ) : (
            <h2>{ details }</h2>
          )
        }
        {
          isLocationCard && (
            <a href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`} target="_blank" rel="noreferrer">
              <p
                style={{ borderBottom: '1px solid black'}}
                className={`text-sm-p lg:text-lg-h5 leading-5 lg:leading-6 text-deep-blue-600 tracking-widest
                  ${locale !== "en-US" ? "mt-sm-subtopic" : "mt-1" }
                `}
              >
                { locale === "zh-HK" && '查看地圖' }
                { locale === "zh-CN" && '查看地图' }
                { locale === "en-US" && 'View on Map' }
              </p>
            </a>
          )
        }
      </div>
    </div>
  );
};

interface ContactCardProps {
  icon: string
  title: string
  locale: string
  details: string[]
  location: Record<string, number>
  isLocationCard: boolean
  contactCardType: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(ContactCard);
