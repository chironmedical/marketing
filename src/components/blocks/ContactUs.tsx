import React from 'react';
import GoogleMapReact from 'google-map-react';

import Input from '../forms/Input';
import Button from '../forms/Button';
import Textarea from '../forms/Textarea';

const ContactUs = ({
  locale,
  latitude,
  longitude,
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ContactUsProps): React.ReactElement => {  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [emailContent, setEmailContent] = React.useState("");
  const [nameAlertMessage, setNameAlertMessage] = React.useState("");
  const [emailAlertMessage, setEmailAlertMessage] = React.useState("");

  const sendInquiry = async () => {
    if (!name.length) {
      setNameAlertMessage("名稱不能為空");
    } else {
      setNameAlertMessage("");
    }
    if (!email.length) {
      setEmailAlertMessage("電郵不能為空");
    } else {
      setEmailAlertMessage("");
    }

    fetch('https://api.marketing.chiron.care/v1/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        content: emailContent,
      }),
    })
    .then((res) => {
      return res.json();
    })
    .then(() => {
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setEmailContent("");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const renderMarkers = (map, maps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
    });
  }

  return (
    <div
      className={`flex flex-col w-full lg:flex-row lg:items-center justify-center items-center mx-auto mb-sm-subject lg:mb-lg-subject ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <h1 className="text-sm-h2 leading-9 lg:hidden text-deep-blue-600 w-full text-center tracking-widest2 mb-sm-content">
        { locale === "zh-HK" && "聯絡我們" }
        { locale === "zh-CN" && "联络我们" }
        { locale === "en-US" && "Contact Us" }
      </h1>

      <div
        className="w-inline h-inline lg:w-lg-google-map lg:h-lg-google-map"
        style={{borderRadius: '22px', overflow: 'hidden'}}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDPqG-Gs_IAqHfFCp8dxQP9setzk4UExt4'}}
          // bootstrapURLKeys={{ key: 'AIzaSyA-TAZwU3p63kr7BayGKiS9LPLoNAqA0To'}}
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultZoom={16}
          onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
      <form className="flex flex-col lg:ml-lg-subtopic justify-center lg:justify-between lg:items-start items-center h-fit-content">
        <h2 className="text-sm-h2 lg:text-lg-h3-article leading-9 lg:leading-12 mt-sm-subtopic hidden lg:block lg:mt-0 lg:mb-5 text-deep-blue-600 w-full text-center lg:text-left tracking-widest2"
        >
          { locale === "zh-HK" && "聯絡我們" }
          { locale === "zh-CN" && "联络我们" }
          { locale === "en-US" && "Contact Us" }
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          <Input
            classValue="mt-sm-subtopic lg:mt-0"
            label={locale === "zh-CN" ? "名称" : locale === "en-US" ? "Name" : "名稱"}
            type="text"
            value={name}
            setValue={setName}
            alertMessage={nameAlertMessage}
            required
          />
          <Input
            classValue="mt-sm-subtopic lg:mt-0"
            label={locale === "zh-CN" ? "电邮" : locale === "en-US" ? "Email Address" : "電郵"}
            type="email"
            setValue={setEmail}
            alertMessage={emailAlertMessage}
            required
          />
          <Input
            classValue="mt-sm-subtopic lg:mt-0"
            label={locale === "zh-CN" ? "电话" : locale === "en-US" ? "Phone No." : "電話"}
            type="text"
            value={phone}
            setValue={setPhone}
          />
          <Input
            classValue="mt-sm-subtopic lg:mt-0"
            label={locale === "zh-CN" ? "主题" : locale === "en-US" ? "Subject" : "主題"}
            type="text"
            value={subject}
            setValue={setSubject}
          />
          <Textarea
            classValue="lg:col-span-2 mt-sm-subtopic lg:mt-0"
            label={locale === "zh-CN" ? "内容" : locale === "en-US" ? "Message" : "內容"}
            value={emailContent}
            setValue={setEmailContent}
            resizable
          />
        </div>
        <Button
          classValue="w-full h-10 mt-8 bg-light-blue-400 text-deep-blue-600 hover:bg-deep-blue-600 hover:text-white transition-colors ease-in-out duration-150"
          title={locale === "zh-CN" ? "提交" : locale === "en-US" ? "Send Message" : "提交"}
          onClickFn={() => sendInquiry()}
        />
      </form>
    </div>
  )
}

interface ContactUsProps {
  locale: string
  latitude: number
  longitude: number
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(ContactUs);
