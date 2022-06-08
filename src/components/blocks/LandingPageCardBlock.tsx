import React from 'react';
import Select from 'react-select';
import ServiceCategoryCard from '../cards/ServiceCategoryCard';
import localeMapping from '../../libs/localeMapping';
import createSubgroup from "../../libs/createSubgroup";

const LandingPageCardBlock = ({
  locale = '',
  branches = [],
  landingpages = [],
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: LandingPageCardBlockProps): React.ReactElement => {
  const [selectBranch, setSelectBranch] = React.useState({ label: locale === "en-US" ? "ALL" : "所有", value: "all" });
  const [parseLandingpages, setParseLandingpages] = React.useState([]);
  const className = `${classValue}`;
  const options = [
    { label: locale === "en-US" ? "ALL" : "所有", value: "all" },
    ...branches.map((branch) => ({
      value: branch.id,
      label: branch.name,
    }))
  ];

  React.useEffect(() => {
    const newLandingpages = landingpages.map(landingpage => {
      const branches = landingpage.edges.filter(edge => {
        return edge.node.__typename === 'Branch';
      }).map(edge => edge.node);

      return {...landingpage, branches: branches}
    });

    setParseLandingpages(newLandingpages);
  }, [landingpages]);

  const changeOptions = ((optionSelected) => {
    setSelectBranch(optionSelected);
  });

  const landingpagesFilter = () => {
    let newLandingpage: any[] = [];

    if (selectBranch.value !== 'all') {
      parseLandingpages.map((landingpage: any) => {
        landingpage.branches.map(branch => {
          if (branch.id === selectBranch.value) {
            newLandingpage.push(landingpage);
          }
        });
      });
    } else {
      newLandingpage = parseLandingpages;
    }

    return newLandingpage;
  }

  return (
    <div
      className={`flex flex-col mx-auto items-center w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      <div className="w-full lg:w-1/3 sm:mr-auto flex flex-row justify-center">
        <Select
          defaultValue={selectBranch}
          className={`relative w-inline md:w-md-card lg:w-lg-card xl:w-xl-card`}
          name="branch-select"
          options={options}
          onChange={changeOptions}
        />
      </div>
      <div className="mb-sm-content lg:mb-lg-content w-full">
        {
          Array.isArray(landingpagesFilter()) ? (
            createSubgroup(landingpagesFilter(), 3).map((row, rowIndex) => (
              <div
                className={`flex flex-col lg:flex-row lg:justify-evenly items-center ${rowIndex !== 0 && "mt-sm-content lg:mt-lg-content"}`}
                key={`landingpage-row-${rowIndex}`}
              >
                {
                  row.map((landingpage, index) => (
                    <div
                      className={`flex flex-row w-full lg:w-1/3 justify-center ${index !== 0 ? "mt-sm-content lg:mt-0" : ""}`}
                      key={`landingpage-${index}`}
                    >
                      <a
                        href={landingpage.page ? (locale !== "" ? `/${localeMapping(locale)}/${landingpage.page.pathname}` : `/${landingpage.page.pathname}`) : '#'}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ServiceCategoryCard
                          locale={locale}
                          abstract={landingpage.abstract}
                          name={landingpage.name}
                          image={landingpage.cover}
                          classValue="w-inline md:w-md-card lg:w-lg-card xl:w-xl-card"
                        />
                      </a>
                    </div>
                  ))
                }
              </div>
            ))
          ) : (
            <h2>landingpages</h2>
          )
        }
      </div>
    </div>
  );
};

interface LandingPageCardBlockProps {
  locale: string
  branches: any
  landingpages: any
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(LandingPageCardBlock);
