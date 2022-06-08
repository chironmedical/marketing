const componentTemplate = {
  "Banner": {
    "componentName": "Banner",
    "contents": [
      {
        "name": "isImageBackground",
        "type": "bool",
        "value": true
      },
      {
        "name": "imageSrc",
        "type": "gcsMedia",
        "value": "cms/general/1920_1080.png"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "1920"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "auto"
      },
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "zh-HK": "主標題 HK",
          "zh-CN": "主標題 CN",
          "en-US": "主標題 US"
        }
      },
      {
        "name": "subtitle",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "副標題 HK",
          "zh-CN": "副標題 CN",
          "en-US": "副標題 US"
        }
      },
      {
        "name": "needMargin",
        "type": "bool",
        "value": true
      },
      {
        "name": "video",
        "type": "gcsMedia",
        "value": ""
      },
      {
        "name": "isVisionPage",
        "type": "bool",
        "value": false
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "BannerSelector": {
    "componentName": "BannerSelector",
    "contents": [
      {
        "name": "isImageBackground",
        "type": "bool",
        "value": true
      },
      {
        "name": "imageSrc",
        "type": "selector",
        "value": "branch.cover"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "1920"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "auto"
      },
      {
        "name": "title",
        "type": "selector",
        "value": "branch.title"
      },
      {
        "name": "subtitle",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "副標題 HK",
          "zh-CN": "副標題 CN",
          "en-US": "副標題 US"
        }
      },
      {
        "name": "needMargin",
        "type": "bool",
        "value": true
      },
      {
        "name": "video",
        "type": "gcsMedia",
        "value": ""
      },
      {
        "name": "isVisionPage",
        "type": "bool",
        "value": false
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "Container": {
    "componentName": "Container",
    "contents": [
      {
        "name": "classValue",
        "type": "value",
        "value": "w-full"
      },
      {
        "name": "flexDirection",
        "type": "value",
        "value": "flex-col"
      },
      {
        "name": "flexWrap",
        "type": "value",
        "value": "flex-wrap"
      },
      {
        "name": "justifyContent",
        "type": "value",
        "value": "justify-start"
      },
      {
        "name": "width",
        "type": "value",
        "value": "100%"
      },
      {
        "name": "height",
        "type": "value",
        "value": "auto"
      },
      {
        "name": "isFull",
        "type": "bool",
        "value": true
      },
      {
        "name": "fullContainer",
        "type": "bool",
        "value": true
      },
      {
        "name": "paddingContent",
        "type": "value",
        "value": {"top": 4, "left": 4, "right": 4, "bottom": 4}
      },
      {
        "name": "marginContent",
        "type": "value",
        "value": {"top": 0, "left": "auto", "right": "auto", "bottom": 0}
      }
    ],
    "children": [],
  },
  "Header": {
    "componentName": "Header",
    "contents": [
      {
        "name": "text",
        "type": "value",
        "value": "TEXT"
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-gray-800"
      },
      {
        "name": "fontSize",
        "type": "value",
        "value": "default"
      },
      {
        "name": "textAlign",
        "type": "value",
        "value": "text-left"
      },
      {
        "name": "headingType",
        "type": "value",
        "value": "h1"
      },
      {
        "name": "paddingContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 0}
      },
      {
        "name": "marginContent",
        "type": "value",
        "value": {"top": 16, "left": 0, "right": 0, "bottom": 16}
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "HeaderI18n": {
    "componentName": "HeaderI18n",
    "contents": [
      {
        "name": "text",
        "type": "i18nText",
        "value": {
          "zh-HK": "Text HK",
          "zh-CN": "Text CN",
          "en-US": "Text US"
        }
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-gray-800"
      },
      {
        "name": "fontSize",
        "type": "value",
        "value": "default"
      },
      {
        "name": "textAlign",
        "type": "value",
        "value": "text-left"
      },
      {
        "name": "headingType",
        "type": "value",
        "value": "h1"
      },
      {
        "name": "paddingContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 0}
      },
      {
        "name": "marginContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 16}
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "Header(Selector)": {
    "componentName": "Header",
    "contents": [
      {
        "name": "text",
        "type": "selector",
        "value": "clinic.name"
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-gray-800"
      },
      {
        "name": "fontSize",
        "type": "value",
        "value": "default"
      },
      {
        "name": "textAlign",
        "type": "value",
        "value": "text-left"
      },
      {
        "name": "headingType",
        "type": "value",
        "value": "h1"
      },
      {
        "name": "paddingContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 0}
      },
      {
        "name": "marginContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 16}
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "Paragraph": {
    "componentName": "Paragraph",
    "contents": [
      {
        "name": "text",
        "type": "textarea",
        "value": "TEXT"
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-gray-800"
      },
      {
        "name": "fontSize",
        "type": "value",
        "value": "default"
      },
      {
        "name": "textAlign",
        "type": "value",
        "value": "text-left"
      },
      {
        "name": "paddingContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 0}
      },
      {
        "name": "marginContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 16}
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "ParagraphI18n": {
    "componentName": "ParagraphI18n",
    "contents": [
      {
        "name": "text",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "Text HK",
          "zh-CN": "Text CN",
          "en-US": "Text US"
        }
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-gray-800"
      },
      {
        "name": "fontSize",
        "type": "value",
        "value": "default"
      },
      {
        "name": "textAlign",
        "type": "value",
        "value": "text-left"
      },
      {
        "name": "paddingContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 0}
      },
      {
        "name": "marginContent",
        "type": "value",
        "value": {"top": 0, "left": 0, "right": 0, "bottom": 16}
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "PostInfo": {
    "componentName": "PostInfo",
    "contents": [
      {
        "name": "date",
        "type": "selector",
        "value": "article.postedAt"
      },
      {
        "name": "keywords",
        "type": "selector",
        "value": "article.keywords"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-6"
      }
    ],
    "children": [],
  },
  "ImageBlock": {
    "componentName": "ImageBlock",
    "contents": [
      {
        "name": "imageSrc",
        "type": "gcsMedia",
        "value": "cms/example/image.png"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "300"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "300"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "shadow-custom-dimmer"
      }
    ],
    "children": [],
  },
  "ImageBlock(Selector)": {
    "componentName": "ImageBlock",
    "contents": [
      {
        "name": "imageSrc",
        "type": "selector",
        "value": ""
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "300"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "300"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "shadow-custom-dimmer"
      }
    ],
    "children": [],
  },
  "ImageIcon": {
    "componentName": "ImageIcon",
    "contents": [
      {
        "name": "imageSrc",
        "type": "gcsMedia",
        "value": "cms/example/image.png"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "300"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "300"
      },
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "en-US": "title en",
          "zh-CN": "title cn",
          "zh-HK": "title hk"
        }
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "lg:px-lg-card w-full lg:w-1/4"
      }
    ],
    "children": [],
  },
  "HorizontalRule": {
    "componentName": "HorizontalRule",
    "contents": [
      {
        "name": "classValue",
        "type": "value",
        "value": "w-full h-px bg-light-blue-500 border-0 mt-sm-subject mb-sm-content lg:my-lg-content",
      }
    ],
    "children": [],
  },
  "HTMLRender": {
    "componentName": "HTMLRender",
    "contents": [
      {
        "name": "classValue",
        "type": "value",
        "value": "whitespace-pre-line mb-sm-content lg:mb-lg-subtopic"
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-deep-blue-600"
      },
      {
        "name": "content",
        "type": "selector",
        "value": "article.content"
      }
    ],
    "children": [],
  },
  "Table": {
    "componentName": "Table",
    "contents": [
      {
        "name": "tableHeader",
        "type": "tableHeader",
        "value": [
          {
            "title": {
              "en-US": "項目 1 US",
              "zh-CN": "項目 1 CN",
              "zh-HK": "項目 1 HK"
            },
            "width": "1/3",
            "textAlign": "text-center"
          },
          {
            "title": {
              "en-US": "項目 2 US",
              "zh-CN": "項目 2 CN",
              "zh-HK": "項目 2 HK"
            },
            "width": "1/3",
            "textAlign": "text-center"
          },
          {
            "title": {
              "en-US": "項目 3 US",
              "zh-CN": "項目 3 CN",
              "zh-HK": "項目 3 HK"
            },
            "width": "1/3",
            "textAlign": "text-center"
          }
        ]
      },
      {
        "name": "tableContent",
        "type": "tableContent",
        "value": [{
          "data": [
            {
              "title": {
                "en-US": "Item 1 US",
                "zh-CN": "Item 1 CN",
                "zh-HK": "Item 1 HK"
              },
              "width": "1/3",
              "textAlign": "text-center"
            },
            {
              "title": {
                "en-US": "Item 2 US",
                "zh-CN": "Item 2 CN",
                "zh-HK": "Item 2 HK"
              },
              "width": "1/3",
              "textAlign": "text-center"
            },
            {
              "title": {
                "en-US": "Item 3 US",
                "zh-CN": "Item 3 CN",
                "zh-HK": "Item 3 HK"
              },
              "width": "1/3",
              "textAlign": "text-center"
            }
          ],
          "row": 1
        }]
      },
      {
        "id": "02b0a85b-cd98-49f0-b410-d57c7ecd6735",
        "name": "tableFooter",
        "type": "tableFooter",
        "value": [
          {
            "title": {
              "en-US": "項目 1 US",
              "zh-CN": "項目 1 CN",
              "zh-HK": "項目 1 HK"
            },
            "width": "1/3",
            "textAlign": "text-center"
          },
          {
            "title": {
              "en-US": "項目 2 US",
              "zh-CN": "項目 2 CN",
              "zh-HK": "項目 2 HK"
            },
            "width": "1/3",
            "textAlign": "text-center"
          },
          {
            "title": {
              "en-US": "項目 3 US",
              "zh-CN": "項目 3 CN",
              "zh-HK": "項目 3 HK"
            },
            "width": "1/3",
            "textAlign": "text-center"
          }
        ]
      },
      {
        "name": "hasMidline",
        "type": "bool",
        "value": true
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "",
      }
    ],
    "children": [],
  },
  "SlideBanner": {
    "componentName": "SlideBanner",
    "contents": [
      {
        "name": "slides",
        "type": "bannerSlides",
        "value": [
          {
            "image": "cms/example/image.png",
            "content": {
              "zh-HK": "hk content",
              "zh-CN": "cn content",
              "en-US": "us content"
            }
          }
        ]
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "",
      }
    ],
    "children": [],
  },
  "BannerLeftText": {
    "componentName": "BannerLeftText",
    "contents": [
      {
        "name": "cover",
        "type": "gcsMedia",
        "value": "cms/general/1920_1080.png"
      },
      {
        "name": "mobileCover",
        "type": "gcsMedia",
        "value": "cms/general/1920_1080.png"
      },
      {
        "name": "title",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "Title HK",
          "zh-CN": "Title CN",
          "en-US": "Title US"
        },
      },
      {
        "name": "needMargin",
        "type": "bool",
        "value": true
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "",
      }
    ],
    "children": [],
  },

  "ContactCard": {
    "componentName": "ContactCard",
    "contents": [
      {
        "name": "icon",
        "type": "gcsMedia",
        "value": "console/clinics/icons/location.svg"
      },
      {
        "name": "title",
        "type": "value",
        "value": "標題"
      },
      {
        "name": "details",
        "type": "selector",
        "value": "clinic.address"
      },
      {
        "name": "location",
        "type": "selector",
        "value": "clinic.location"
      },
      {
        "name": "isLocationCard",
        "type": "bool",
        "value": false
      },
      {
        "name": "contactCardType",
        "type": "value",
        "value": "default"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": [],
  },
  "ServiceDetailsCard": {
    "componentName": "ServiceDetailsCard",
    "contents": [
      {
        "name": "title",
        "type": "textarea",
        "value": "楷和醫療心臟科專科中心\n提供的檢查:"
      },
      {
        "name": "haveServiceDetails",
        "type": "bool",
        "value": false
      },
      {
        "name": "serviceDetails",
        "type": "selector",
        "value": "branch.services"
      },
      {
        "name": "backgroundIcon",
        "type": "gcsMedia",
        "value": "console/branches/service-details/checking.svg"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "300"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "300"
      },
      {
        "name": "haveOfficeHour",
        "type": "bool",
        "value": false
      },
      {
        "name": "officeHours",
        "type": "selector",
        "value": "clinic.officeHour"
      },
      {
        "name": "haveAddress",
        "type": "bool",
        "value": false
      },
      {
        "name": "address",
        "type": "selector",
        "value": "clinic.address"
      },
      {
        "name": "havePhone",
        "type": "bool",
        "value": false
      },
      {
        "name": "phones",
        "type": "selector",
        "value": "clinic.phones"
      },
      {
        "name": "district",
        "type": "selector",
        "value": "clinic.district"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "WhyChironCard": {
    "componentName": "WhyChironCard",
    "contents": [
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "zh-HK": "為何選擇楷和?",
          "zh-CN": "为何选择楷和?",
          "en-US": "WHY CHIRON?"
        }
      },
      {
        "name": "whyChironList",
        "type": "value",
        "value": [
          {
            "description": {
              "en-US": "All cases are handled by experienced neurosurgery professionals",
              "zh-CN": "每个个案均由有经验的神经外科医生主理",
              "zh-HK": "每個個案均由有經驗的專科醫生主理"
            },
            "icon": "cms/general/whyChironCard/specialist.svg",
            "title": {
              "en-US": "Handled by specialists",
              "zh-CN": "专科医生主理",
              "zh-HK": "專科醫生主理"
            }
          },
          {
            "description": {
              "zh-HK": "即日預約，一般24小時內有期",
              "zh-CN": "即日预约，一般24小时内有期",
              "en-US": "Make an appointment now, consultation is usually available within 24-hour"
            },
            "icon": "cms/general/whyChironCard/no-waiting.svg",
            "title": {
              "zh-HK": "等候時間短",
              "zh-CN": "等候时间短",
              "en-US": "Short waiting time"
            }
          },
          {
            "description": {
              "zh-HK": "没有隱藏收費，清楚了解收費項目",
              "zh-CN": "没有隐藏收费，清楚了解收费项目",
              "en-US": "No hidden charges, and will ensure you clearly understand the medical fee before you pay"
            },
            "icon": "cms/general/whyChironCard/reasonable-price.svg",
            "title": {
              "zh-HK": "收費合理透明度高",
              "zh-CN": "收费合理透明度高",
              "en-US": "High transparency and reasonable pricing"
            }
          },
          {
            "description": {
              "zh-HK": "由臨床諮詢、檢查到住院安排均有團隊提供適切跟進",
              "zh-CN": "由检查、入院到手术均有团队提供适切跟进",
              "en-US": "Managed by our medical team, from checking, hospitalization to post-surgery treatment"
            },
            "icon": "cms/general/whyChironCard/full-coverage.svg",
            "title": {
              "zh-HK": "全面跟進專中之專",
              "zh-CN": "全面跟进专中之专",
              "en-US": "All-rounded follow up"
            }
          },
          {
            "description": {
              "zh-HK": "視乎病人情況，建議最合適的治療方案",
              "zh-CN": "視乎病人情況，建議最合適的治療方案",
              "en-US": "Suggest the most appropriate minimally invasive surgery plan depending on each case"
            },
            "icon": "cms/general/whyChironCard/micro-surgery.svg",
            "title": {
              "zh-HK": "各類微創手術",
              "zh-CN": "各类微创手术",
              "en-US": "Variety of surgeries"
            }
          },
          {
            "description": {
              "zh-HK": "客戶私隱全面保障",
              "zh-CN": "客户私隐全面保障",
              "en-US": "Comprehensive protection will be made for patients’ privacy"
            },
            "icon": "cms/general/whyChironCard/privacy.svg",
            "title": {
              "zh-HK": "保護客人私隱",
              "zh-CN": "保护客人私隐",
              "en-US": "Protect personal privacy"
            }
          }
        ]
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "BookingCard": {
    "componentName": "BookingCard",
    "contents": [
      {
        "name": "title",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "想預約我們的專科中心? 預約及查詢:",
          "zh-CN": "想预约我们的专科中心? 预约及查询:",
          "en-US": "Would like to find our medical professionals? Reservation and enquiry:"
        }
      },
      {
        "name": "clinics",
        "type": "edges",
        "value": "clinics"
      },
      {
        "name": "whatsapp",
        "type": "value",
        "value": "6175 0273"
      },
      {
        "name": "whatsappUrl",
        "type": "value",
        "value": "https://wa.me/85261750273"
      }
    ],
    "children": [],
  },
  "PractitionerCards": {
    "componentName": "PractitionerCards",
    "contents": [
      {
        "name": "people",
        "type": "edges",
        "value": "people"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "DownloadCard": {
    "componentName": "DownloadCard",
    "contents": [
      {
        "name": "image",
        "type": "gcsMedia",
        "value": "cms/example/image.png"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "300"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "300"
      },
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "zh-HK": "主標題 HK",
          "zh-CN": "主標題 CN",
          "en-US": "主標題 US"
        }
      },
      {
        "name": "href",
        "type": "value",
        "value": "#"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": [],
  },
  "IconCard": {
    "componentName": "IconCard",
    "contents": [
      {
        "name": "iconSrc",
        "type": "gcsMedia",
        "value": "cms/example/image.png"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "300"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "300"
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-deep-blue-600"
      },
      {
        "name": "title",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "主標題 HK",
          "zh-CN": "主標題 CN",
          "en-US": "主標題 US"
        }
      },
      {
        "name": "content",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "副標題 HK",
          "zh-CN": "副標題 CN",
          "en-US": "副標題 US"
        }
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": [],
  },
  "BodyCheckCard": {
    "componentName": "BodyCheckCard",
    "contents": [
      {
        "name": "title",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "標題 HK",
          "zh-CN": "標題 CN",
          "en-US": "標題 US",
        }
      },
      {
        "name": "price",
        "type": "value",
        "value": "$9,800"
      },
      {
        "name": "imageSrc",
        "type": "gcsMedia",
        "value": "cms/example/image.png"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "300"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "300"
      },
      {
        "name": "leaflet",
        "type": "gcsMedia",
        "value": "cms/example/image.png"
      },
      {
        "name": "fontSize",
        "type": "value",
        "value": "default"
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-light-blue-500"
      },
      {
        "name": "btnBackgroundColor",
        "type": "value",
        "value": "bg-deep-blue-100"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
      {
        "name": "marginContent",
        "type": "value",
        "value": {"top": 0, "left": "auto", "right": "auto", "bottom": 0}
      }
    ],
    "children": [],
  },
  "AdmissionProcedureCard": {
    "componentName": "AdmissionProcedureCard",
    "contents": [
      {
        "name": "title",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "標題 HK",
          "zh-CN": "標題 CN",
          "en-US": "標題 EN",
        }
      },
      {
        "name": "subtitle",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "標題 HK",
          "zh-CN": "標題 CN",
          "en-US": "標題 EN",
        }
      },
      {
        "name": "imageSrc",
        "type": "gcsMedia",
        "value": "cms/individualPages/body-check/gastrointestinal-screening/stomach.svg"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
      {
        "name": "marginContent",
        "type": "value",
        "value": {"top": 0, "left": "auto", "right": "auto", "bottom": 16}
      }
    ],
    "children": [],
  },
  "InsuranceCard": {
    "componentName": "InsuranceCard",
    "contents": [
      {
        "name": "companyName",
        "type": "i18nText",
        "value": {
          "zh-CN": "公司名",
          "zh-HK": "公司名",
          "en-US": "公司名"
        }
      },
      {
        "name": "href",
        "type": "value",
        "value": {
          "en-US": "#",
          "zh-CN": "#",
          "zh-HK": "#"
        }
      },
      {
        "name": "imageSrc",
        "type": "gcsMedia",
        "value": "cms/example/image.png"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": [],
  },
  "EmergencyContactCard": {
    "componentName": "EmergencyContactCard",
    "contents": [
      {
        "name": "iconSrc",
        "type": "gcsMedia",
        "value": "cms/general/icons/whatsapp-white.svg"
      },
      {
        "name": "href",
        "type": "value",
        "value": "#"
      },
      {
        "name": "content",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "",
          "zh-CN": "",
          "en-US": ""
        }
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": [],
  },

  "ContactUs": {
    "componentName": "ContactUs",
    "contents": [
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "zh-CN": "Contact Us",
          "zh-HK": "联络我们",
          "en-US": "聯絡我們"
        }
      },
      {
        "name": "longitude",
        "type": "selector",
        "value": "clinic.location.longitude"
      },
      {
        "name": "latitude",
        "type": "selector",
        "value": "clinic.location.latitude"
      }
    ],
    "children": [],
  },
  "DoctorDetailBlock": {
    "componentName": "DoctorDetailBlock",
    "contents": [
      {
        "name": "person",
        "type": "edges",
        "value": "person"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "ServiceRangeBlock": {
    "componentName": "ServiceRangeBlock",
    "contents": [
      {
        "name": "branches",
        "type": "edges",
        "value": "branches"
      },
      {
        "name": "serviceRangeImg",
        "type": "gcsMedia",
        "value": "console/people/clinics/ent.svg"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "IssuesBlock": {
    "componentName": "IssuesBlock",
    "contents": [
      {
        "name": "issues",
        "type": "selector",
        "value": "branch.issues"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "HospitalBlock": {
    "componentName": "HospitalBlock",
    "contents": [
      {
        "name": "affiliatedHospitals",
        "type": "selector",
        "value": "person.affiliatedHospitals"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "RelatedArticlesBlock": {
    "componentName": "RelatedArticlesBlock",
    "contents": [
      {
        "name": "articles",
        "type": "edges",
        "value": "articles"
      },
      {
        "name": "branchName",
        "type": "selector",
        "value": "branch.name"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "RelatedPromotionsBlock": {
    "componentName": "RelatedPromotionsBlock",
    "contents": [
      {
        "name": "promotions",
        "type": "edges",
        "value": "promotions"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "ServiceCategoryBlock": {
    "componentName": "ServiceCategoryBlock",
    "contents": [
      {
        "name": "landingpages",
        "type": "edges",
        "value": "landingpages"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "BranchesCategoryBlock": {
    "componentName": "BranchesCategoryBlock",
    "contents": [
      {
        "name": "branches",
        "type": "edges",
        "value": "branches"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "ArticleCardBlock": {
    "componentName": "ArticleCardBlock",
    "contents": [
      {
        "name": "articles",
        "type": "edges",
        "value": "articles"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mx-auto"
      }
    ],
    "children": []
  },
  "ArticleCardBlockByTag": {
    "componentName": "ArticleCardBlockByTag",
    "contents": [
      {
        "name": "classValue",
        "type": "value",
        "value": "mx-auto"
      }
    ],
    "children": []
  },
  "ClinicCardBlock": {
    "componentName": "ClinicCardBlock",
    "contents": [
      {
        "name": "clinics",
        "type": "edges",
        "value": "clinics"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "DoctorCardBlock": {
    "componentName": "DoctorCardBlock",
    "contents": [
      {
        "name": "doctors",
        "type": "edges",
        "value": "people"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mx-auto"
      }
    ],
    "children": []
  },
  "LandingPageCardBlock": {
    "componentName": "LandingPageCardBlock",
    "contents": [
      {
        "name": "branches",
        "type": "edges",
        "value": "branches"
      },
      {
        "name": "landingpages",
        "type": "edges",
        "value": "landingpages"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      },
    ],
    "children": []
  },
  "EventCardBlock": {
    "componentName": "EventCardBlock",
    "contents": [
      {
        "name": "events",
        "type": "edges",
        "value": "events"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mx-auto"
      }
    ],
    "children": []
  },
  "SocialResponsibilityCardBlock": {
    "componentName": "SocialResponsibilityCardBlock",
    "contents": [
      {
        "name": "socialResponsibilities",
        "type": "edges",
        "value": "socialResponsibilities"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mx-auto"
      }
    ],
    "children": []
  },
  "PromotionCardBlock": {
    "componentName": "PromotionCardBlock",
    "contents": [
      {
        "name": "promotions",
        "type": "edges",
        "value": "promotions"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mx-auto"
      }
    ],
    "children": []
  },
  "AlignmentBlock": {
    "componentName": "AlignmentBlock",
    "contents": [
      {
        "name": "imageSrc",
        "type": "gcsMedia",
        "value": "cms/example/image.png"
      },
      {
        "name": "imageWidth",
        "type": "value",
        "value": "300"
      },
      {
        "name": "imageHeight",
        "type": "value",
        "value": "300"
      },
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "zh-HK": "主標題 HK",
          "zh-CN": "主標題 CN",
          "en-US": "主標題 US"
        }
      },
      {
        "name": "content",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "主標題 HK",
          "zh-CN": "主標題 CN",
          "en-US": "主標題 US"
        }
      },
      {
        "name": "titleBeforeImage",
        "type": "bool",
        "value": false
      },
      {
        "name": "alignment",
        "type": "value",
        "value": "right"
      },
      {
        "name": "haveBtn",
        "type": "bool",
        "value": false
      },
      {
        "name": "btnLink",
        "type": "i18nText",
        "value": {
          "zh-HK": "#",
          "zh-CN": "#",
          "en-US": "#"
        }
      },
      {
        "name": "btnImg",
        "type": "gcsMedia",
        "value": ""
      },
      {
        "name": "btnText",
        "type": "i18nText",
        "value": {
          "zh-HK": "",
          "zh-CN": "",
          "en-US": ""
        }
      },
      {
        "name": "fontColor",
        "type": "value",
        "value": "text-light-blue-500"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "PromotionsImageCarouselBlock": {
    "componentName": "PromotionsImageCarouselBlock",
    "contents": [
      {
        "name": "promotions",
        "type": "edges",
        "value": "promotions"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": []
  },
  "PromotionCarouselBlock": {
    "componentName": "PromotionCarouselBlock",
    "contents": [
      {
        "name": "promotions",
        "type": "edges",
        "value": "promotions"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": []
  },
  "ArticleTwoColCardBlock": {
    "componentName": "ArticleTwoColCardBlock",
    "contents": [
      {
        "name": "articles",
        "type": "edges",
        "value": "articles"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": []
  },
  "ServiceRangeCarouselBlock": {
    "componentName": "ServiceRangeCarouselBlock",
    "contents": [
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "en-US": "One-stop Professional Medical Service",
          "zh-CN": "服务范畴",
          "zh-HK": "服務範疇"
        }
      },
      {
        "name": "subtitle",
        "type": "i18nTextArea",
        "value": {
          "en-US": "The scope of medical service provided by Chiron covers around 20 specialties, strives to provide a one-stop platform for multidisciplinary service.",
          "zh-CN": "楷和医疗的服务范畴覆盖接近二十个专科领域，为病人提供一站全科的医疗平台。",
          "zh-HK": "楷和醫療的服務範疇覆蓋接近二十個專科領域，為病人提供一站全科的醫療平台。"
        }
      },
      {
        "name": "branches",
        "type": "edges",
        "value": "branches"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": []
  },
  "DoctorCarouselBlock": {
    "componentName": "DoctorCarouselBlock",
    "contents": [
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "en-US": "Our Specialists",
          "zh-CN": "医疗团队",
          "zh-HK": "醫療團隊"
        }
      },
      {
        "name": "subtitle",
        "type": "i18nTextArea",
        "value": {
          "en-US": "Our specialists have years of experience in various medical field, with the goals of striving for excellence and provide quality service when handling every cases.",
          "zh-CN": "楷和的专科医生均在各医疗领域有多年的经验，为病人提供高质素的医疗服务。",
          "zh-HK": "楷和的專科醫生均在各醫療領域有多年的經驗，為病人提供高質素的醫療服務。"
        }
      },
      {
        "name": "people",
        "type": "edges",
        "value": "people"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": []
  },
  "LandingpageCarouselBlock": {
    "componentName": "LandingpageCarouselBlock",
    "contents": [
      {
        "name": "title",
        "type": "i18nText",
        "value": {
          "en-US": "Articles",
          "zh-CN": "健康专栏",
          "zh-HK": "健康專欄"
        }
      },
      {
        "name": "landingpages",
        "type": "edges",
        "value": "landingpages"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": []
  },
  "SwitchPlanBlock": {
    "componentName": "SwitchPlanBlock",
    "contents": [
      {
        "name": "tabs",
        "type": "tabs",
        "value": [
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            "showContent": true,
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            "showContent": true,
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/large-intestine-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            "showContent": true,
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-large-intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-intestine-unselected.svg",
          }
        ]
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "MDTSwitchPlanBlock": {
    "componentName": "MDTSwitchPlanBlock",
    "contents": [
      {
        "name": "tabs",
        "type": "tabs",
        "value": [
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/large-intestine-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-large-intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-intestine-unselected.svg",
          }
        ]
      },
      {
        "name": "buttons",
        "type": "tabButtons",
        "value": [
          {
            "haveButton": true,
            "iconSrc": "cms/example/image.png",
            "link": {
              "en-US": "#",
              "zh-CN": "#",
              "zh-HK": "#"
            },
            "title": {
              "en-US": "Link US",
              "zh-CN": "Link CN",
              "zh-HK": "Link HK"
            }
          },
          {
            "haveButton": true,
            "iconSrc": "cms/example/image.png",
            "link": {
              "en-US": "#",
              "zh-CN": "#",
              "zh-HK": "#"
            },
            "title": {
              "en-US": "Link US",
              "zh-CN": "Link CN",
              "zh-HK": "Link HK"
            }
          },
          {
            "haveButton": true,
            "iconSrc": "cms/example/image.png",
            "link": {
              "en-US": "#",
              "zh-CN": "#",
              "zh-HK": "#"
            },
            "title": {
              "en-US": "Link US",
              "zh-CN": "Link CN",
              "zh-HK": "Link HK"
            }
          }
        ]
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "SwitchTablePlanBlock": {
    "componentName": "SwitchTablePlanBlock",
    "contents": [
      {
        "name": "tabs",
        "type": "tabs",
        "value": [
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/large-intestine-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-large-intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-intestine-unselected.svg",
          }
        ]
      },
      {
        "name": "tableHeaders",
        "type": "tabTableHeaders",
        "value": [
          {
            "data": [
              {
                "title": {
                  "en-US": "項目 1 US",
                  "zh-CN": "項目 1 CN",
                  "zh-HK": "項目 1 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 2 US",
                  "zh-CN": "項目 2 CN",
                  "zh-HK": "項目 2 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 3 US",
                  "zh-CN": "項目 3 CN",
                  "zh-HK": "項目 3 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              }
            ],
            "tab": 1
          },
          {
            "data": [
              {
                "title": {
                  "en-US": "項目 1 US",
                  "zh-CN": "項目 1 CN",
                  "zh-HK": "項目 1 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 2 US",
                  "zh-CN": "項目 2 CN",
                  "zh-HK": "項目 2 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 3 US",
                  "zh-CN": "項目 3 CN",
                  "zh-HK": "項目 3 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              }
            ],
            "tab": 2
          },
          {
            "data": [
              {
                "title": {
                  "en-US": "項目 1 US",
                  "zh-CN": "項目 1 CN",
                  "zh-HK": "項目 1 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 2 US",
                  "zh-CN": "項目 2 CN",
                  "zh-HK": "項目 2 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 3 US",
                  "zh-CN": "項目 3 CN",
                  "zh-HK": "項目 3 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              }
            ],
            "tab": 3
          }
        ]
      },
      {
        "name": "tableContents",
        "type": "tabTableContents",
        "value": [
          {
            "data": [
              {
                "data": [
                  {
                    "title": {
                      "en-US": "Item 1 US",
                      "zh-CN": "Item 1 CN",
                      "zh-HK": "Item 1 HK"
                    },
                    "width": "1/3",
                    "textAlign": "text-center"
                  },
                  {
                    "title": {
                      "en-US": "Item 2 US",
                      "zh-CN": "Item 2 CN",
                      "zh-HK": "Item 2 HK"
                    },
                    "width": "1/3",
                    "textAlign": "text-center"
                  },
                  {
                    "title": {
                      "en-US": "Item 3 US",
                      "zh-CN": "Item 3 CN",
                      "zh-HK": "Item 3 HK"
                    },
                    "width": "1/3",
                    "textAlign": "text-center"
                  }
                ],
                "row": 1
              }
            ],
            "tab": 1
          },
          {
            "data": [
              {
                "data": [
                  {
                    "title": {
                      "en-US": "Item 1 US",
                      "zh-CN": "Item 1 CN",
                      "zh-HK": "Item 1 HK"
                    },
                    "width": "1/3",
                    "textAlign": "text-center"
                  },
                  {
                    "title": {
                      "en-US": "Item 2 US",
                      "zh-CN": "Item 2 CN",
                      "zh-HK": "Item 2 HK"
                    },
                    "width": "1/3",
                    "textAlign": "text-center"
                  },
                  {
                    "title": {
                      "en-US": "Item 3 US",
                      "zh-CN": "Item 3 CN",
                      "zh-HK": "Item 3 HK"
                    },
                    "width": "1/3",
                    "textAlign": "text-center"
                  }
                ],
                "row": 1
              }
            ],
            "tab": 2
          },
          {
            "data": [
              {
                "data": [
                  {
                    "title": {
                      "en-US": "Item 1 US",
                      "zh-CN": "Item 1 CN",
                      "zh-HK": "Item 1 HK"
                    },
                    "width": "1/3"
                  },
                  {
                    "title": {
                      "en-US": "Item 2 US",
                      "zh-CN": "Item 2 CN",
                      "zh-HK": "Item 2 HK"
                    },
                    "width": "1/3"
                  },
                  {
                    "title": {
                      "en-US": "Item 3 US",
                      "zh-CN": "Item 3 CN",
                      "zh-HK": "Item 3 HK"
                    },
                    "width": "1/3"
                  }
                ],
                "row": 1
              }
            ],
            "tab": 3
          }
        ]
      },
      {
        "id": "02b0a85b-cd98-49f0-b410-d57c7ecd6735",
        "name": "tableFooters",
        "type": "tabTableFooters",
        "value": [
          {
            "data": [
              {
                "title": {
                  "en-US": "項目 1 US",
                  "zh-CN": "項目 1 CN",
                  "zh-HK": "項目 1 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 2 US",
                  "zh-CN": "項目 2 CN",
                  "zh-HK": "項目 2 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 3 US",
                  "zh-CN": "項目 3 CN",
                  "zh-HK": "項目 3 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              }
            ],
            "tab": 1
          },
          {
            "data": [
              {
                "title": {
                  "en-US": "項目 1 US",
                  "zh-CN": "項目 1 CN",
                  "zh-HK": "項目 1 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 2 US",
                  "zh-CN": "項目 2 CN",
                  "zh-HK": "項目 2 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 3 US",
                  "zh-CN": "項目 3 CN",
                  "zh-HK": "項目 3 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              }
            ],
            "tab": 2
          },
          {
            "data": [
              {
                "title": {
                  "en-US": "項目 1 US",
                  "zh-CN": "項目 1 CN",
                  "zh-HK": "項目 1 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 2 US",
                  "zh-CN": "項目 2 CN",
                  "zh-HK": "項目 2 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              },
              {
                "title": {
                  "en-US": "項目 3 US",
                  "zh-CN": "項目 3 CN",
                  "zh-HK": "項目 3 HK"
                },
                "width": "1/3",
                "textAlign": "text-center"
              }
            ],
            "tab": 3
          }
        ]
      },
      {
        "name": "hasMidline",
        "type": "bool",
        "value": true
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "SwitchTimelineBlock": {
    "componentName": "SwitchTimelineBlock",
    "contents": [
      {
        "name": "tabs",
        "type": "tabs",
        "value": [
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/large-intestine-unselected.svg",
          }
        ]
      },
      {
        "name": "stages",
        "type": "timelineLists",
        "value": [
          {
            "tab": 1,
            "stages": [{
              "title": {
                "zh-HK": "title HK",
                "zh-CN": "title CN",
                "en-US": "title US"
              },
              "content": {
                "zh-HK": "content HK",
                "zh-CN": "content CN",
                "en-US": "content US"
              }
            }]
          },
          {
            "tab": 2,
            "stages": [{
              "title": {
                "zh-HK": "title HK",
                "zh-CN": "title CN",
                "en-US": "title US"
              },
              "content": {
                "zh-HK": "content HK",
                "zh-CN": "content CN",
                "en-US": "content US"
              }
            }]
          }
        ]
      },
      {
        "name": "ellipseIcon",
        "type": "gcsMedia",
        "value": "cms/general/ellipse-blue.svg"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "BodyCheckPlanBlock": {
    "componentName": "BodyCheckPlanBlock",
    "contents": [
      {
        "name": "tabs",
        "type": "tabs",
        "value": [
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/large-intestine-unselected.svg",
          },
          {
            title: {
              "zh-HK": "title zh-HK",
              "zh-CN": "title zh-CN",
              "en-US": "title en-US"
            },
            content: {
              "zh-HK": "content zh-HK",
              "zh-CN": "content zh-CN",
              "en-US": "content en-US"
            },
            iconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-large-intestine-checking-button.svg",
            unselectedIconSrc: "cms/individualPages/body-check/colonoscopy-and-gastroscopy/stomach-intestine-unselected.svg",
          }
        ]
      },
      {
        "name": "table",
        "type": "collapseTable",
        "value": []
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "PlanCheckTable": {
    "componentName": "PlanCheckTable",
    "contents": [
      {
        "value": [
          {
            "title": {
              "en-US": "en-US",
              "zh-HK": "zh-HK",
              "zh-CN": "zh-CN"
            },
            "haveItem": true
          },
          {
            "haveItem": true,
            "title": {
              "en-US": "en-US",
              "zh-CN": "zh-CN",
              "zh-HK": "zh-HK"
            }
          }
        ],
        "name": "planLists",
        "type": "value"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "LegacyLandingpageContent": {
    "componentName": "LegacyLandingpageContent",
    "contents": [
      {
        "name": "innerContent",
        "type": "i18nTextArea",
        "value": {
          "zh-HK": "",
          "zh-CN": "",
          "en-US": ""
        }
      }
    ],
    "children": []
  },

  "TimelineBlock": {
    "componentName": "TimelineBlock",
    "contents": [
      {
        "name": "stages",
        "type": "timelineList",
        "value": [
          {
            "title": {
              "zh-HK": "title HK",
              "zh-CN": "title CN",
              "en-US": "title US"
            },
            "content": {
              "zh-HK": "content HK",
              "zh-CN": "content CN",
              "en-US": "content US"
            }
          }
        ]
      },
      {
        "name": "ellipseIcon",
        "type": "gcsMedia",
        "value": "cms/general/ellipse-blue.svg"
      },
      {
        "name": "classValue",
        "type": "value",
        "value": ""
      }
    ],
    "children": []
  },
  "VideoBlock": {
    "componentName": "VideoBlock",
    "contents": [
      {
        "name": "videoUrl",
        "type": "value",
        "value": "https://www.youtube.com/watch?v=rOpz6aYVVAY"
      },
      {
        "name": "videoCover",
        "type": "gcsMedia",
        "value": ""
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "FeaturesCarouselBlock": {
    "componentName": "FeaturesCarouselBlock",
    "contents": [
      {
        "name": "aims",
        "type": "featuresCarousel",
        "value": [
          {
            "icon": "",
            "title": {
              "zh-HK": "Titel zh-HK",
              "zh-CN": "Title zh-CN",
              "en-US": "Title en-US"
            },
            "description": {
              "zh-HK": "Description zh-HK",
              "zh-CN": "Description zh-CN",
              "en-US": "Description en-US"
            },
          }
        ]
      },
      {
        "name": "classValue",
        "type": "value",
        "value": "mb-16"
      },
    ],
    "children": []
  },
  "ContactUsImageSlide": {
    "componentName": "ContactUsImageSlide",
    "contents": [
    ],
    "children": []
  }
};

export default componentTemplate;
