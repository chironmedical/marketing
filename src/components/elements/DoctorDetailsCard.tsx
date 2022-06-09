import React from 'react';
import downloadVCard from "../../libs/downloadVCard";

const DoctorDetailsCard = ({
  doctor,
  locale = "zh-HK",
  classValue = ""
}: DoctorDetailsCardProps): React.ReactElement => {
  const className = `${classValue}`;

  const vCardName = (doctor, locale) => {
    const cardName = {
      'zh-HK': '電子名片',
      'zh-CN': '电子名片',
      'en-US': 'Vcard'
    };
    return `${doctor.name}${doctor.title}_${cardName[locale]}`
  }

  return (
    <div className={`flex flex-col items-center w-auto mx-sm-subtopic tracking-widest lg:items-start ${className}`}>
      <h1 className="text-sm-h1 xl:text-lg-h1 leading-10 xl:leading-22 text-deep-blue-600 text-center lg:text-left">
        { doctor.titledName }
      </h1>
      <h3
        className="text-sm-h3-card xl:text-lg-h3-card leading-7 xl:leading-12 my-sm-subtopic lg:my-lg-card text-center lg:text-left"
        style={{ color: '#616160' }}>
        {doctor.role}
      </h3>
      <div className="h-px w-full bg-light-blue-300" />
      <div className="flex flex-col lg:flex-row items-center">
        <img
          alt="specialist-qualification"
          src="https://cdn.chiron.care/console/people/icons/qualification.svg"
          className="my-sm-subtopic lg:m-0" />
        <div className="flex flex-col items-center lg:items-start mb-sm-subtopic lg:m-0 lg:ml-lg-subtopic lg:my-lg-card">
          {
            doctor.qualifications ? (
              doctor.qualifications.map((title, index) => (
                <h4
                  key={`title-${index}`}
                  className="text-sm-h4-card leading-6 xl:text-lg-h4-article xl:leading-9 text-deep-blue-600 my-1">
                  { title }
                </h4>
              ))
            ) : (
              doctor.qualifications
            )
          }
        </div>
      </div>
      <div className="h-px w-full bg-light-blue-300" />
      <div className="flex flex-col lg:flex-row items-center">
        <img
          alt="phone"
          src="https://cdn.chiron.care/console/people/icons/phone.svg"
          className="my-sm-subtopic lg:m-0" />
        <div className="flex flex-col items-center lg:items-start mb-sm-subtopic lg:my-lg-card lg:ml-lg-subtopic">
          {
            doctor.clinics.map((clinic) => (
              clinic.phones.map((clinicPhone, index) => (
                <a
                  key={`clinic-${index}`}
                  href={`tel:${clinicPhone.replace(" ", "")}`}>
                  <h4 className="text-sm-h4-card leading6 text-deep-blue-100 my-1 xl:text-lg-h4-article xl:leading-9 ">
                    {`+852 ${clinicPhone} (${clinic.district})`}
                  </h4>
                </a>
              ))
            ))
          }
        </div>
      </div>
      <div className="h-px w-full bg-light-blue-300" />
      <div className="flex flex-col lg:flex-row items-center lg:my-lg-card">
        <img
          alt="email"
          src="https://cdn.chiron.care/console/people/icons/email.svg"
          className="my-sm-subtopic lg:m-0" />
        <a href={`mailto:${doctor.email}`}>
          <h4 className="text-sm-h4-card leading6 xl:text-lg-h4-article xl:leading-9 mb-sm-subtopic lg:m-0 text-deep-blue-100 lg:ml-lg-subtopic">
            { doctor.email }
          </h4>
        </a>
      </div>
      <div className="h-px w-full bg-light-blue-300" />
      <div className="flex flex-col lg:flex-row items-center lg:my-lg-card">
        <object type="image/svg+xml" data="https://cdn.chiron.care/console/people/icons/languages.svg" className="my-sm-subtopic lg:m-0" aria-label="Spoken languages" />
        <h4 className="text-sm-h4-card leading6 xl:text-lg-h4-article xl:leading-9 mb-sm-subtopic lg:m-0 text-deep-blue-100 lg:ml-lg-subtopic">
          { locale === "zh-HK" && "廣東話，英語，普通話" }
          { locale === "zh-CN" && "广东话，英语，普通话" }
          { locale === "en-US" && "Cantonese, English, Mandarin"}
        </h4>
      </div>
      <div className="h-px w-full bg-light-blue-300" />
      <div className="flex flex-col lg:flex-row w-full lg:justify-evenly">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <button
            onClick={() => downloadVCard(doctor.vcard, vCardName(doctor, locale))}
            className="flex flex-col lg:flex-row items-center mt-sm-subtopic lg:mt-lg-card cursor-pointer focus:outline-none"
          >
            <img
              alt="e-namecard"
              src="https://cdn.chiron.care/console/people/icons/e-namecard.svg"
              className="mb-sm-card lg:m-0" />
            <h4 className="text-sm-h4-card leading6 xl:text-lg-h4-article xl:leading-9 text-center text-deep-blue-600 lg:ml-3 border-b border-solid border-deep-blue-600">
              { locale === "zh-HK" && "電子名片" }
              { locale === "zh-CN" && "电子名片" }
              { locale === "en-US" && "Vcard"}
            </h4> 
          </button>
          {
            doctor.medicalCard ? (
              <a
                href={`https://cdn.chiron.care/${doctor.medicalCard}`}
                target="_blank"
                rel="noreferrer">
                <div className="flex flex-col lg:flex-row items-center mt-sm-subtopic lg:mt-lg-card">
                  <img
                    alt="e-namecard"
                    src="https://cdn.chiron.care/console/people/icons/medical-card.svg"
                    className="mb-sm-card lg:m-0" />
                  <h4 className={`text-sm-h4-card leading6 xl:text-lg-h4-article xl:leading-9 text-center text-deep-blue-600 lg:ml-3 border-b border-solid border-deep-blue-600`}>
                    { locale === "zh-HK" && "醫療卡" }
                    { locale === "zh-CN" && "医疗卡" }
                    { locale === "en-US" && "Medical Card"}
                  </h4> 
                </div>
              </a>
            ) : (
              <div className="flex flex-col lg:flex-row items-center mt-sm-subtopic lg:mt-lg-card">
                <img
                  alt="e-namecard"
                  src="https://cdn.chiron.care/console/people/icons/medical-card.svg"
                  className="mb-sm-card lg:m-0" />
                <h4 className={`text-sm-h4-card leading6 xl:text-lg-h4-article xl:leading-9 text-center text-deep-blue-600 lg:ml-3`}>
                    { locale === "zh-HK" && "醫療卡" }
                    { locale === "zh-CN" && "医疗卡" }
                    { locale === "en-US" && "Medical Card"}
                </h4> 
              </div>
            )
          }
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start">
          <a
            href={`https://cdn.chiron.care/${doctor.namecard}`}
            target="_blank"
            rel="noreferrer">
            <div className="flex flex-col lg:flex-row items-center mt-sm-subtopic lg:mt-lg-card lg:ml-lg-card">
              <img
                alt="namecard"
                src="https://cdn.chiron.care/console/people/icons/namecard.svg"
                className="mb-sm-card lg:m-0" />
              <h4 className="text-sm-h4-card leading6 xl:text-lg-h4-article xl:leading-9 text-center text-deep-blue-600 lg:ml-3 border-b border-solid border-deep-blue-600">
                  { locale === "zh-HK" && "名片" }
                  { locale === "zh-CN" && "名片" }
                  { locale === "en-US" && "Name Card"}
              </h4> 
            </div>
          </a>
          {
            doctor.voucher ? (
              <a
                href={`https://cdn.chiron.care/${doctor.voucher}`}
                target="_blank"
                rel="noreferrer">
                <div className="flex flex-col lg:flex-row items-center mt-sm-subtopic lg:mt-lg-card lg:ml-lg-card">
                  <img
                    alt="namecard"
                    src="https://cdn.chiron.care/console/people/icons/medical-coupon.svg"
                    className="mb-sm-card lg:m-0" />
                  <h4 className="text-sm-h4-card leading6 xl:text-lg-h4-article xl:leading-9 text-center text-deep-blue-600 lg:ml-3 border-b border-solid border-deep-blue-600">
                    { locale === "zh-HK" && "醫療券/疫苗資助計劃" }
                    { locale === "zh-CN" && "医疗券/疫苗资助计划" }
                    { locale === "en-US" && "Healthcare Voucher/ Vaccination Subsidy Scheme"}
                  </h4> 
                </div>
              </a>
            ) : (
              <div className="flex flex-col lg:flex-row items-center mt-sm-subtopic lg:mt-lg-card lg:ml-lg-card">
                <img
                  alt="namecard"
                  src="https://cdn.chiron.care/console/people/icons/medical-coupon.svg"
                  className="mb-sm-card lg:m-0" />
                <h4 className="text-sm-h4-card leading6 xl:text-lg-h4-article xl:leading-9 text-center text-deep-blue-600 lg:ml-3">
                  { locale === "zh-HK" && "醫療券/疫苗資助計劃" }
                  { locale === "zh-CN" && "医疗券/疫苗资助计划" }
                  { locale === "en-US" && "Healthcare Voucher/ Vaccination Subsidy Scheme"}
                </h4> 
              </div>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export interface DoctorDetailsCardProps {
  doctor: any
  locale: string
  classValue?: string
}

export default DoctorDetailsCard;
