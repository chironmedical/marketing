import React from 'react';

import Input from '../forms/Input';
import Textarea from '../forms/Textarea';
import Button from '../forms/Button';

const ContactUsImageSlide = ({
  locale,
  builderMode = true,
  isSelected,
  selectBlockFun,
}: ContactUsImageSlideProps): React.ReactElement => {
  const [name, setName] = React.useState("");
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

  return (
    <div
      className={`flex flex-col lg:flex-row w-full ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}>
      <img
        alt="contact-us-index-mobile"
        src="https://cdn.chiron.care/cms/individualPages/index/index-contact-us-lg.jpg"
        className="lg:hidden"
        loading="lazy"/>
      <div className="hidden lg:block lg:w-2/5">
        <img
        alt="contact-us-index"
        src="https://cdn.chiron.care/cms/individualPages/index/index-contact-us-lg.jpg"
        className="object-none h-full"
        loading="lazy"/>
      </div>
      <div className="flex flex-row items-center justify-center w-full lg:w-3/5">
        <div className="flex flex-col justify-center lg:justify-between lg:items-start items-center h-fit-content my-sm-content lg:my-lg-subtopic">
          <h1 className="text-sm-h2 lg:text-lg-h3-article leading-9 lg:leading-12 lg:mt-0 lg:mb-5 text-deep-blue-600 w-full text-center lg:text-left">
            { locale === "zh-HK" && "聯絡我們" }
            { locale === "zh-CN" && "联络我们" }
            { locale === "en-US" && "Contact Us" }
          </h1>
          <div className="flex flex-col lg:flex-row lg:mb-4">
            <Input
              classValue="mt-sm-subtopic lg:mr-6 lg:mt-0"
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
              value={email}
              setValue={setEmail}
              alertMessage={emailAlertMessage}
              required
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:mb-4">
            <Input
              classValue="mt-sm-subtopic lg:mt-0 lg:mr-6"
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
          </div>
          <Textarea
            classValue="w-full mt-sm-subtopic lg:mt-0"
            label={locale === "zh-CN" ? "内容" : locale === "en-US" ? "Message" : "內容"}
            value={emailContent}
            setValue={setEmailContent}
            resizable
          />
          <Button
            classValue="w-full h-10 mt-8 bg-light-blue-400 text-deep-blue-600"
            title={locale === "zh-CN" ? "提交" : locale === "en-US" ? "Send Message" : "提交"}
            onClickFn={() => sendInquiry()}
          />
        </div>
      </div>
    </div>
  )
}

export interface ContactUsImageSlideProps {
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(ContactUsImageSlide);
