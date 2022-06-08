import React from 'react';
import ServiceCategoryCard from '../cards/ServiceCategoryCard';
import createSubgroup from "../../libs/createSubgroup";
import localeMapping from '../../libs/localeMapping';
import sortByKey from '../../libs/sortByKey';

const BranchesCategoryBlock = ({
  branches,
  classValue = "",
  locale = "zh-HK",
  builderMode = true,
  isSelected = false,
  selectBlockFun,
}: BranchesCategoryBlockProps): React.ReactElement => {
  const className = `${classValue}`;

  const _branches = sortByKey(branches, 'rank');

  return (
    <div
      className={`flex flex-col mx-auto items-center w-full ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}
    >
      {
        createSubgroup(_branches, 3).map((row, rowIndex) => (
          <div
            className={`flex flex-col items-center md:flex-row w-full md:w-md-inline lg:w-lg-inline xl:w-xl-inline mt-sm-content lg:mt-lg-content`}
            key={`branches-row-${rowIndex}`}
          >
            {
              row.map((branch, index) => (
                <div
                  className="w-full md:w-1/3 flex flex-row justify-center"
                  key={`branch-${index}`}
                >
                  <a
                    href={locale !== "" ? `/${localeMapping(locale)}/${branch.page?.pathname}` : `/${branch.page?.pathname}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ServiceCategoryCard
                      locale={locale}
                      abstract={branch.abstract}
                      icon={branch.cardIcon}
                      name={branch.name}
                      image={branch.cover}
                      classValue="justify-center"
                    />
                  </a>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

interface BranchesCategoryBlockProps {
  branches: any
  classValue?: string
  locale: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(BranchesCategoryBlock);
