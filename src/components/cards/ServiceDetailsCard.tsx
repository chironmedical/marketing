import React from 'react';

const ServiceDetailsCard = ({
  title = {'zh-HK': '', 'zh-CN': '', 'en-US': ''},
  locale = 'zh-HK',
  haveServiceDetails = true,
  serviceDetails = [],
  backgroundIcon,
  haveOfficeHour = true,
  officeHours = [],
  haveAddress = true,
  address = [],
  district,
  havePhone = true,
  phones = [],
  classValue = "",
  imageWidth = "auto",
  imageHeight = "auto",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ServiceDetailsCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div
      className={`flex flex-col px-sm-subtopic py-sm-subtopic overflow-hidden tracking-widest lg:flex-1 w-sm-service-details-card min-h-sm-service-details-card xl:w-xl-service-details-card xl:min-h-xl-service-details-card max-w-sm-service-details-card xl:max-w-xl-service-details-card border border-light-blue-200 rounded-square-card shadow-xl relative mx-auto mb-sm-content lg:m-0 ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <h1 className="text-sm-h3-card xl:text-lg-h3-card leading-8 xl:leading-9 text-deep-blue-600 mb-lg-card whitespace-pre-line">
        { title[locale].replace(/\\n/g, "\n") }
      </h1>
      <ul>
      {
        haveServiceDetails && (
          Array.isArray(serviceDetails) ? (
            serviceDetails.map((detail, index) => (
              <p
                className="text-sm-h6 xl:text-lg-h5 leading-7 xl:leading-8 whitespace-pre-line text-light-blue-500"
                key={`detail-${index}`}
              >
                { detail }
              </p>
            ))
          ) : (
            <h2>serviceDetails</h2>
          )
        )
      }
      {
        haveOfficeHour && (
          Array.isArray(officeHours) ? (
            officeHours.map((officeHour, index) => (
              <p
                className="text-sm-h6 xl:text-lg-h5 leading-7 xl:leading-8 whitespace-pre-line text-light-blue-500"
                key={ `officeHour-${index}` }
              >
                { officeHour }
              </p>
            ))
          ) : (
            <h2>haveOfficeHour</h2>
          )
        )
      }
      {
        haveAddress && (
          <li className="flex">
            <img
              className={`w-4 h-4`}
              src={`https://cdn.chiron.care/console/branches/icons/location.svg`}
              alt={`https://cdn.chiron.care/console/branches/icons/location.svg`}
            />
            <div className={`flex flex-col ml-3`}>
              <h5 className="text-sm-h6 xl:text-lg-h5 leading-4 text-light-blue-500">
                { locale === "zh-HK" && "中心地址" }
                { locale === "zh-CN" && "中心地址" }
                { locale === "en-US" && "Address" }
              </h5>
              {
                Array.isArray(address) ? (
                  address.map((addr, index) => (
                    <p
                      className="text-sm-h6 xl:text-lg-h5 leading-4 xl:leading-6 text-deep-blue-600 whitespace-pre-line"
                      key={ `address-${index}` }
                    >
                      { addr }
                    </p>
                  ))
                ) : (
                  <h2>address</h2>
                )
              }
            </div>
          </li>
        )
      }
      {
        havePhone && (
          <li className={`flex ${haveAddress ? 'mt-sm-subtopic' : ''}`}>
            <img
              className={`w-4 h-4`}
              src={`https://cdn.chiron.care/console/branches/icons/phone-message.svg`}
              alt={`https://cdn.chiron.care/console/branches/icons/phone-message.svg`}
            />
            <div className={`flex flex-col ml-3`}>
              <h5 className="text-sm-h6 xl:text-lg-h5 leading-4 text-light-blue-500">
                { locale === "zh-HK" && "中心熱線" }
                { locale === "zh-CN" && "中心热线" }
                { locale === "en-US" && "Enquiry Hotline" }
              </h5>
              {
                Array.isArray(phones) ? (
                  phones.map((phone, index) => (
                    <p
                      className="text-sm-h6 xl:text-lg-h5 leading-4 xl:leading-6 text-deep-blue-600 whitespace-pre-line"
                      key={ `phone-${index}` }
                    >
                      { phone } ({ district })
                    </p>
                  ))
                ) : (
                  <h2>phones</h2>
                )
              }
            </div>
          </li>
        )
      }
      </ul>
      <img
        alt="service-background"
        src={`https://cdn.chiron.care/${backgroundIcon}?width=${imageWidth}&height=${imageHeight}`}
        className="absolute w-right-bottom-image-white h-right-bottom-image-white right-bottom-image-inset xl:w-right-bottom-image-white-lg xl:h-right-bottom-image-white-lg z-10"
      />
    </div>
  );
};

export interface ServiceDetailsCardProps {
  title: any
  locale: string
  haveServiceDetails: boolean
  serviceDetails: any
  backgroundIcon: string
  haveOfficeHour: boolean
  officeHours: string[]
  haveAddress: boolean
  address: string[]
  district: string
  havePhone: boolean
  phones: string[]
  classValue?: string
  imageWidth: string
  imageHeight: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(ServiceDetailsCard);
