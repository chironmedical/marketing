import React from "react";
import { Blocks } from "../index";

export default {
  title: "Blocks",
  component: Blocks,
};

export const Default = () => (
  <Blocks
    _blocks={[
      {
        id: "b40b159b-2e1a-48e3-80d7-66a21e308a63",
        children: [
          {
            id: "925e98dd-aa39-4bc3-9aef-4f114dd9c6bc",
            children: [],
            contents: [
              {
                id: "e02ae93d-7d93-4192-962b-09df18b7824a",
                name: "isImageBackground",
                type: "bool",
                value: true,
              },
              {
                id: "9cb3bb90-d4fa-4268-9fa5-3f25d11baa8f",
                name: "imageSrc",
                type: "gcsMedia",
                value: "cms/individualPages/index/cover.jpg",
              },
              {
                id: "deba375c-7987-498a-bdda-7968f1ef5113",
                name: "imageWidth",
                type: "value",
                value: "1920",
              },
              {
                id: "f43f5e30-765a-49bf-b93e-f39a57dcb0fb",
                name: "imageHeight",
                type: "value",
                value: "auto",
              },
              {
                id: "122af665-c989-4aad-9efb-9b3102f60b3d",
                name: "title",
                type: "i18nText",
                value: {
                  "en-US": "Chiron Medical",
                  "zh-CN": "楷和医疗",
                  "zh-HK": " 楷和醫療",
                },
              },
              {
                id: "1215cabb-5fe6-4979-b75c-5e2e104cd42f",
                name: "subtitle",
                type: "i18nTextArea",
                value: {
                  "en-US": "Founded on faith, Practice with sincerity",
                  "zh-CN": "以信为本，以诚待人",
                  "zh-HK": "以信為本，以誠待人",
                },
              },
              {
                id: "3ae9534c-0e0c-4a79-9b42-0529f784c6cb",
                name: "needMargin",
                type: "bool",
                value: true,
              },
              {
                id: "7645498d-f59a-45fd-af09-84d9c30c18f4",
                name: "video",
                type: "gcsMedia",
                value: "cms/individualPages/index/video.mp4",
              },
              {
                id: "6562e63b-2110-4dc1-9b07-c2823d47e1ed",
                name: "isVisionPage",
                type: "bool",
                value: false,
              },
              {
                id: "66ea3062-2ee9-489f-a1fd-a1933abe7e44",
                name: "classValue",
                type: "value",
                value: "",
              },
            ],
            componentName: "Banner",
          },
          {
            id: "f01866e3-ebe8-4ded-9d15-be8003d1015a",
            children: [],
            contents: [
              {
                id: "2f9059ed-fb2f-4fd1-b84b-455af626ae33",
                name: "promotions",
                type: "edges",
                value: "promotions",
              },
              {
                id: "9db3bc44-3192-403e-9953-4e010da5f557",
                name: "classValue",
                type: "value",
                value: "",
              },
            ],
            componentName: "PromotionCarouselBlock",
          },
          {
            id: "2a38326a-45b6-414a-9802-0f5bf72a5754",
            children: [],
            contents: [
              {
                id: "fe358499-996d-427f-8f19-fc6a3edcd36a",
                name: "articles",
                type: "edges",
                value: "articles",
              },
              {
                id: "9f0af5f3-47f6-4c4c-bbb2-34d2a8264aa7",
                name: "classValue",
                type: "value",
                value: "",
              },
            ],
            componentName: "ArticleTwoColCardBlock",
          },
          {
            id: "dcff1d29-736b-41e4-810c-823f08d1cdbf",
            children: [],
            contents: [
              {
                id: "49df23e2-bd34-41a7-bba1-bdcb6cb78368",
                name: "title",
                type: "i18nText",
                value: {
                  "en-US": "One-stop Professional Medical Service",
                  "zh-CN": "服务范畴",
                  "zh-HK": "服務範疇",
                },
              },
              {
                id: "1b80e92f-9a39-49b0-a416-88f2ed9b0e9d",
                name: "subtitle",
                type: "i18nTextArea",
                value: {
                  "en-US":
                    "The scope of medical service provided by Chiron covers around 20 specialties, strives to provide a one-stop platform for multidisciplinary service.",
                  "zh-CN":
                    "楷和医疗的服务范畴覆盖接近二十个专科领域，为病人提供一站全科的医疗平台。",
                  "zh-HK":
                    "楷和醫療的服務範疇覆蓋接近二十個專科領域，為病人提供一站全科的醫療平台。",
                },
              },
              {
                id: "f8b64991-eae0-411d-bb02-5da189ddd4c8",
                name: "branches",
                type: "edges",
                value: "branches",
              },
              {
                id: "4b239213-a99e-407e-a106-b3557df06731",
                name: "classValue",
                type: "value",
                value: "",
              },
            ],
            componentName: "ServiceRangeCarouselBlock",
          },
          {
            id: "74d6cd4a-c080-4755-9806-025a9de991bf",
            children: [],
            contents: [
              {
                id: "d70914a4-319b-4281-aaf6-d4e82adacb49",
                name: "title",
                type: "i18nText",
                value: {
                  "en-US": "Our Specialists",
                  "zh-CN": "医疗团队",
                  "zh-HK": "醫療團隊",
                },
              },
              {
                id: "e913717c-7686-4bb3-bf4f-38bb5cf2f771",
                name: "subtitle",
                type: "i18nTextArea",
                value: {
                  "en-US":
                    "Our specialists have years of experience in various medical field, with the goals of striving for excellence and provide quality service when handling every cases.",
                  "zh-CN":
                    "楷和的专科医生均在各医疗领域有多年的经验，为病人提供高质素的医疗服务。",
                  "zh-HK":
                    "楷和的專科醫生均在各醫療領域有多年的經驗，為病人提供高質素的醫療服務。",
                },
              },
              {
                id: "8a5c712f-4c51-40d6-b7f2-eaf008d1f2d1",
                name: "people",
                type: "edges",
                value: "people",
              },
              {
                id: "4ae5fe42-ac33-485a-ad12-520ccf9fefc5",
                name: "classValue",
                type: "value",
                value: "",
              },
            ],
            componentName: "DoctorCarouselBlock",
          },
          {
            id: "ce1ed29f-4063-4eb7-b19f-822c523332e7",
            children: [],
            contents: [
              {
                id: "c5b3447d-860a-4fa0-a722-12cef95000c9",
                name: "title",
                type: "i18nText",
                value: {
                  "en-US": "Articles",
                  "zh-CN": "健康专栏",
                  "zh-HK": "健康專欄",
                },
              },
              {
                id: "ae97e5c7-4306-4623-bb35-b6261a495958",
                name: "landingpages",
                type: "edges",
                value: "landingpages",
              },
              {
                id: "d5863a61-2d1a-4963-9bff-9afd90e6e5a8",
                name: "classValue",
                type: "value",
                value: "",
              },
            ],
            componentName: "LandingpageCarouselBlock",
          },
          {
            id: "ec1f7c27-f83f-4f78-80b0-644b782d92fc",
            children: [],
            contents: [],
            componentName: "ContactUsImageSlide",
          },
        ],
        contents: [
          {
            id: "a6ef5d7a-be90-4025-9b8c-4f350a2a5d89",
            name: "classValue",
            type: "value",
            value: "",
          },
          {
            id: "a6bb1ea1-e4fd-4e19-b1f2-b527a3b6be2b",
            name: "flexDirection",
            type: "value",
            value: "flex-col",
          },
          {
            id: "36c4fe95-ea82-4ec7-95ba-e00f34fd2913",
            name: "flexWrap",
            type: "value",
            value: "flex-wrap",
          },
          {
            id: "bb7f8354-cab3-4101-b97a-289b937650f9",
            name: "justifyContent",
            type: "value",
            value: "justify-start",
          },
          {
            id: "900d29ff-afc3-4ab0-baad-50905c7ff9d3",
            name: "width",
            type: "value",
            value: "100%",
          },
          {
            id: "a6f05db8-8b93-4c2e-a0a7-7f2292bf48f4",
            name: "height",
            type: "value",
            value: "auto",
          },
          {
            id: "c111b74a-4199-4878-91a9-3e2fd0ad6c1d",
            name: "isFull",
            type: "bool",
            value: true,
          },
          {
            id: "1604b2c5-0dc8-44d7-8ead-68612a38724c",
            name: "fullContainer",
            type: "bool",
            value: true,
          },
          {
            id: "9dfe14fb-e823-41e7-b524-8c5328978c06",
            name: "paddingContent",
            type: "value",
            value: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
          },
          {
            id: "11a31c9b-5d3b-422c-86b3-d8bec685bfe1",
            name: "marginContent",
            type: "value",
            value: {
              top: 0,
              left: "auto",
              right: "auto",
              bottom: 0,
            },
          },
        ],
        componentName: "Container",
      },
    ]}
    builderMode={false}
  />
);
