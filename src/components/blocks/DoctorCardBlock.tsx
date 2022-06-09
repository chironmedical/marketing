import React from 'react';
import DoctorCard from '../cards/DoctorCard';
import createSubgroup from "../../libs/createSubgroup";

const DoctorCardBlock = ({
  doctors = [],
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: DoctorCardBlockProps): React.ReactElement => {
  const className = `${classValue}`;
  const [activeTab, setActiveTab] = React.useState(0);

  const categoryTitle = (locale) => {
    const categoryMap = {
      'zh-HK': ['全部', '專科', '普通科', '其他'],
      'zh-CN': ['全部', '专科', '普通科', '其他'],
      'en-US': ['All', 'Specialist', 'General', 'Other']
    };
    return categoryMap[locale];
  };

  const groupTitle = (groupKey, locale) => {
    const titleMap = {
      'sp': {
        'zh-HK': '專科',
        'zh-CN': '专科',
        'en-US': 'Specialist'
      },
      'gp': {
        'zh-HK': '普通科',
        'zh-CN': '普通科',
        'en-US': 'General'
      },
      'other': {
        'zh-HK': '其他',
        'zh-CN': '其他',
        'en-US': 'Other'
      },
      'founder': {
        'zh-HK': '創辨人',
        'zh-CN': '创辨人',
        'en-US': 'Founder'
      },
    }
    return titleMap[groupKey][locale];
  };

  const groupByProperty = (array, key) => array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
    return result;
  }, {});

  const groupedData = groupByProperty(
    doctors.map((person) => {
      const newPerson = Object.assign({}, person);
      if (newPerson.department === 'surgical' || newPerson.department === 'medical') {
        newPerson.department = 'sp';
      }
      return newPerson;
    }),
    'department'
  );

  ['sp', 'gp', 'other', 'founder'].map((groupKey) => {
    if (!groupedData[groupKey]) {
      groupedData[groupKey] = [];
    }
  });

  return (
    <div
      className={`${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div
        style={{ borderRadius: "34px" }}
        className="flex flex-row items-center h-12 bg-light-blue-300 w-full mx-sm-card lg:w-lg-doctor-page xl:w-xl-doctor-page">
        {
          categoryTitle(locale).map((category, index) => (
            index === activeTab ? (
              <button
                className={`font-bold leading-loose rounded-custom outline-none w-1/4 h-10 bg-white ${index === 0 ? "mx-2" : "mr-2" }`}
              >
                <h3>{ category }</h3>
              </button>
            ) : (
              <button
                className={`font-bold leading-loose rounded-custom outline-none w-1/4 h-10 text-deep-blue-100 ${index === 0 ? "mx-2" : "mr-2" }`}
                onClick={() => setActiveTab(index)}
              >
                <h3>{ category }</h3>
              </button>
            )
          ))
        }
      </div>
      <div className={`flex flex-col lg:w-lg-doctor-page xl:w-xl-doctor-page`}>
        {
          ['sp', 'gp', 'other', 'founder'].map((groupKey) => (
            <div className={`flex-col my-lg-subtopic w-full
              ${activeTab === 0 || (groupKey === "other" && activeTab === 0) || (groupKey === "sp" && activeTab === 1) || (groupKey === "gp" && activeTab === 2) || (groupKey === "other" && activeTab === 3) ? "flex" : "hidden"}`}
              key={`group-${groupKey}`}
            >
              <div className="flex flex-col lg:flex-row items-center mb-lg-subtopic">
                <img
                  alt="subcategory-icon"
                  src={`https://cdn.chiron.care/cms/individualPages/ourprofessionals/${groupKey}.svg`}
                  className="h-10 mb-sm-card lg:mb-0" />
                <h1 className="text-sm-h1 text-center text-deep-blue-600 leading-10 lg:ml-sm-card">
                  { groupTitle(groupKey, locale) }
                </h1>
              </div>
              {
                doctors.length !== 0 && (
                  createSubgroup(groupedData[groupKey].sort((a, b) => a.rank > b.rank ? 1 : -1), 3).map((row, rowIndex) => (
                    <div
                      className={`flex flex-col lg:flex-row items-center ${rowIndex !== 0 ? "mt-sm-content" : ""}`}
                      key={`rowIndex-${rowIndex}`}
                    >
                      {
                        row.map((person, personIndex) => (
                          <div
                            className={`flex flex-row justify-center w-inline lg:w-1/3 ${personIndex !== 0 ? "mt-sm-content lg:mt-0" : ""}`}
                            key={`person-${personIndex}`}
                          >
                            <DoctorCard
                              doctor={person}
                              locale={locale}
                            />
                          </div>
                        ))
                      }
                    </div>
                  ))
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export interface DoctorCardBlockProps {
  doctors: any
  locale: string
  classValue: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(DoctorCardBlock);
