import React from 'react';

const ClinicCard = ({
  locale = 'zh-HK',
  thumbnail,
  name,
  phones,
  address,
  faxs,
  classValue = "",
}: ClinicCardProps): React.ReactElement => {
  const className = `${classValue}`;

  return (
    <div className={`shadow-lg rounded-custom overflow-hidden ${className} tracking-widest zoom w-sm-clinic-card max-sm-clinic-card xl:w-lg-clinic-card xl:max-w-lg-clinic-card`}>
      <div className="shadow-custom">
        <img
          alt={`${name}`}
          src={`${thumbnail}?width=390&height=220`}
          className="w-full max-h-clinic-card-image"
        />
      </div>
      <div className="flex flex-col w-full px-lg-card">
        <h1 className={`text-sm-h3-card lg:text-lg-h3-card leading-6 lg:leading-7 my-lg-card lg:my-sm-subtopic text-deep-blue-600
          ${["", "zh-HK", "zh-CN"].includes(locale) && "restricted-line-number-single"} ${locale === "en-US" ? "lg:h-clinic-card-title-en" : ""}
        `}>
          { name }
        </h1>
        <div className="flex flex-row">
          <img
            alt="location"
            src="https://cdn.chiron.care/console/clinics/icons/location.svg"
            className="w-4 h-4"
          />
          <div className="flex flex-col ml-3">
            <h5 className="text-sm-h5 lg:text-lg-h5 leading-4 text-light-blue-500 mb-2">
              { locale === "zh-HK" && "中心地址" }
              { locale === "zh-CN" && "中心地址" }
              { locale === "en-US" && "Address" }
            </h5>
            <p className={`text-sm-p lg:text-lg-p text-deep-blue-600 leading-clinic-card-address ${["zh-HK", "zh-CN"].includes(locale)
              ? "lg:h-clinic-card-address-zh restricted-line-number-double"
              : "lg:h-clinic-card-address-en restricted-line-number"}
            `}>
              {
                Array.isArray(address) ? (
                  address.map((addr, index) => (
                    <div key={`addr-${index}`}>
                      { addr }
                    </div>
                  ))
                ) : (
                  <h2>address</h2>
                )
              }
            </p>
          </div>
        </div>
        <hr className="w-full my-lg-card border-solid" style={{ borderTopWidth: "0.5px", color: "#8DA9C4" }} />
        <div className="flex flex-row">
          <img
            alt="phone-message"
            src="https://cdn.chiron.care/console/clinics/icons/phone-message.svg"
            className="w-4 h-4"
          />
          <div className="flex flex-col ml-3">
            <h5 className="text-sm-h5 lg:text-lg-h5 leading-4 text-light-blue-500 mb-2">
              { locale === "zh-HK" && "中心熱線" }
              { locale === "zh-CN" && "中心热线" }
              { locale === "en-US" && "Enquiry Hotline" }
            </h5>
            <p className="text-sm-p lg:text-lg-p leading-5 text-deep-blue-600">
              {
                Array.isArray(phones) ? (
                  phones.map((phone, index) => (
                    <div key={`phone-${index}`}>
                      { phone }
                    </div>
                  ))
                ) : (
                  <h2>phones</h2>
                )
              }
            </p>
          </div>
        </div>
        <div className="w-full my-lg-card border-solid" style={{ borderTopWidth: "0.5px", color: "#8DA9C4" }} />
        <div className="flex flex-row">
          <img
            alt="fax"
            src="https://cdn.chiron.care/console/clinics/icons/fax.svg"
            className="w-4 h-4"
          />
          <div className="flex flex-col ml-3">
            <h5 className="text-sm-h5 lg:text-lg-h5 leading-4 text-light-blue-500 mb-2">
              { locale === "zh-HK" && "中心傳真" }
              { locale === "zh-CN" && "中心传真" }
              { locale === "en-US" && "Fax" }
            </h5>
            <p className="text-sm-p lg:text-lg-p leading-5 text-deep-blue-600">
              {
                Array.isArray(faxs) ? (
                  faxs.map((fax, index) => (
                    <div key={`fax-${index}`}>
                      { fax }
                    </div>
                  ))
                ) : (
                  <h2>faxs</h2>
                )
              }
            </p>
          </div>
        </div>
        <img
          alt="arrow"
          src="https://cdn.chiron.care/console/clinics/icons/thin-arrow-right.svg"
          className="mt-sm-card mb-lg-card w-fit-content ml-auto"
        />
      </div>
    </div>
  );
};

export interface ClinicCardProps {
  locale: string
  thumbnail: string
  name: string
  phones: string[]
  address: string[]
  faxs: string[]
  classValue?: string
}

export default React.memo(ClinicCard);
