import React from 'react';
import createSubgroup from "../../libs/createSubgroup";
import Pagination from '../elements/Pagination';
import PassageCard from "../cards/PassageCard";

const PromotionCardBlock = ({
  promotions = [],
  locale = "zh-HK",
  classValue = "",
  builderMode = true,
  isSelected,
  selectBlockFun,
}: PromotionCardBlockProps): React.ReactElement => {
  const [search, setSearch] = React.useState("");
  const searchPromotions = promotions.filter((promotion) => promotion.name.includes(search));
  const className = `${classValue}`;

  const perPage = 18;
  const numOfPagesForPromotions = Math.ceil(promotions.length / perPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div
      className={`flex flex-col items-center w-inline lg:w-lg-inline xl:w-xl-inline ${className} ${builderMode ? (isSelected ? 'component-outline outline-selected' : 'component-outline') : ''}`}
      onClick={selectBlockFun}>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-1/3 lg:mr-auto">
        <div
          style={{ borderBottom: '1px solid' }}
          className="flex flex-row mt-sm-subtopic lg:mt-0 h-8 w-sm-passage-card md:w-md-passage-card lg:w-lg-passage-card xl:w-xl-passage-card border-black justify-between"
        >
          <input
            type="text"
            placeholder="搜尋"
            className="text-lg-h6 leading-7 outline-none w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img alt="search" src="https://cdn.chiron.care/cms/general/icons/search.svg" className="ml-1 lg:ml-0 w-4 h-full" />
        </div>
      </div>
      <div className="flex flex-col w-full my-sm-content lg:my-lg-content">
        {
          createSubgroup(searchPromotions.slice((currentPage-1) * perPage, currentPage * perPage), 3).map((row, rowIndex) => (
            <div
              className={`flex flex-col lg:flex-row w-full ${rowIndex !== 0 ? "mt-sm-content lg:mt-sm-subject" : ""}`}
              key={`row-${rowIndex}`}>
              {
                row.map((promotion, promotionIndex) => (
                  <div
                    className={`flex flex-row w-full lg:w-1/3 justify-center ${promotionIndex !== 0 ? "mt-sm-content lg:mt-0" : ""}`}
                    key={`promotion-${promotionIndex}`}>
                    <a href={promotion.page ? "/" + promotion.page.pathname : '#'}>
                      <PassageCard
                        locale={locale}
                        imageSrc={promotion.thumbnail}
                        postedAt={promotion.postedAt}
                        title={promotion.name}
                        abstract={promotion.abstract}
                      />
                    </a>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      <Pagination
        totalPages={numOfPagesForPromotions}
        currentPage={currentPage}
        range={5}
        classValue="mb-sm-content lg:mb-lg-content"
        onNextPage={() => setCurrentPage(currentPage+1)}
        onPreviousPage={() => setCurrentPage(currentPage-1)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export interface PromotionCardBlockProps {
  promotions: any
  locale: string
  classValue?: string
  builderMode: boolean
  isSelected: boolean
  selectBlockFun: any
}

export default React.memo(PromotionCardBlock);
