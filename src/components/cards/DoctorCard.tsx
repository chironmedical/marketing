import React from 'react';
import localeMapping from '../../libs/localeMapping';
import downloadVCard from "../../libs/downloadVCard";

const DoctorCard = ({
  doctor,
  locale = "zh-HK",
  classValue = ""
}: DoctorCardProps): React.ReactElement => {
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
    <div className={`relative flex flex-row justify-end ${className} w-sm-doctor-card xl:w-lg-doctor-card cursor-pointer zoom`}>
      <div className="flex flex-col absolute left-sm-doctor-card xl:left-xl-doctor-card">
        <button
          onClick={() => downloadVCard(doctor.vcard, vCardName(doctor, locale))}
          className="z-40 cursor-pointer focus:outline-none">
          <img
            alt="namecard"
            src="https://cdn.chiron.care/cms/individualPages/ourprofessionals/namecard.svg"
            className="w-10 h-10 xl:w-fit-content xl:h-fit-content mt-sm-subtopic xl:mt-lg-subtopic"
          />
        </button>
        {
          doctor.mobile && (
            <a href={`tel:${Number(doctor.mobile)}`} className="z-40">
              <img
                alt="phone-contact"
                src="https://cdn.chiron.care/cms/individualPages/ourprofessionals/phone-contact.svg"
                className="w-10 h-10 xl:w-fit-content xl:h-fit-content mt-sm-card xl:mt-lg-card"
              />
            </a>
          )
        }
      </div>
      <a
        href={doctor.page ? (locale !== "" ? `/${localeMapping(locale)}/${doctor.page.pathname}` : `/${doctor.page.pathname}`) : '#'}
        // href="#"
        className="w-full">
        <div className="w-full -z-10">
          <img
            alt="doctor-avatar"
            src={doctor.thumbnail}
            className="absolute top-0 w-full h-full rounded-custom object-cover"
          />
          <img
            alt="doctor-avatar-background"
            src="https://cdn.chiron.care/cms/individualPages/ourprofessionals/doctor-avatar-background-lg.png"
            className="w-full rounded-custom"
          />
        </div>
        <div className={`absolute right-0 bottom-0 ${locale === "en-US" ? "h-24 xl:h-32" : "h-20 xl:h-28"} w-sm-doctor-card xl:w-lg-doctor-card rounded-b-custom`}>
          <div className="absolute bg-deep-blue-600 opacity-75 mr-sm-card w-sm-doctor-card h-full xl:w-lg-doctor-card rounded-b-custom" />
          <div className="absolute mr-sm-card w-sm-doctor-card h-full xl:w-lg-doctor-card rounded-b-custom">
            <div className={`flex flex-row z-40 ${locale !=="een-US" ? "mx-sm-subtopic" : "mx-lg-card lg:mx-sm-subtopic"} items-center h-full`}>
              <img
                alt="role-icon"
                src={doctor.cardIcon}
                className="w-8 h-8 xl:w-10 xl:h-10 mr-lg-card"
              />
              <div className="flex flex-col">
                <h3 className={`tracking-widest text-white
                  ${locale !== "en-US" ? "text-sm-h3-card xl:text-lg-h3-card leading-7 xl:leading-9" : "text-sm-h4-card xl:text-lg-h4-card leading-5"}
                `}>
                  { doctor.name }{ doctor.title }
                </h3>
                <p className={`text-white tracking-widest mt-1
                  ${locale !== "en-US" ? "text-sm-p xl:text-sm-h4-card leading-5-1/2 xl:leading-6" : "text-sm-p xl:text-sm-h6 leading-4"}
                `}>
                  { doctor.role.indexOf(',') !== -1 ? doctor.role.substr(0, doctor.role.indexOf(',')) : doctor.role }
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export interface DoctorCardProps {
  doctor: any
  locale: string
  classValue?: string
}

export default React.memo(DoctorCard);
