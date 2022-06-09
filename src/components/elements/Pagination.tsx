import React from "react";

const Pagination = ({
  totalPages,
  currentPage,
  range,
  classValue = "",
  onNextPage,
  onPreviousPage,
  onPageChange,
}: PaginationProps): React.ReactElement => {
  const className = `${classValue}`;

  const generateRequiredPagination = () => {
    let pageNumbers: number[] = [];
    const halfRange = Math.trunc(range / 2);
    const lastPivot = range === 1 ? totalPages : totalPages - Math.trunc(range / 2);

    if (totalPages < range) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }

      return pageNumbers;
    }

    if (range === 1) {
      return [currentPage];
    }

    if (currentPage > lastPivot) {
      for (let i = lastPivot - halfRange; i < lastPivot + halfRange; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = currentPage - halfRange; i < currentPage + halfRange; i++) {
        pageNumbers.push(i);
      }
    }

    pageNumbers = pageNumbers.filter((num) => num > 0);

    if (pageNumbers.length < range) {
      for (let i = pageNumbers.length; i < range; i++) {
        pageNumbers.push(pageNumbers[pageNumbers.length - 1] + 1);
      }
    }

    pageNumbers = pageNumbers.filter((num) => num <= totalPages);

    return pageNumbers;
  }

  return (
    <div className={`flex flex-row justify-center items-center ${className}`}>
      {
        (currentPage > 1) && (
          <img
            alt="arrow-left"
            src="https://cdn.chiron.care/cms/general/icons/thin-arrow-left.svg"
            className="mr-lg-card cursor-pointer"
            onClick={() => onPreviousPage()}
          />
        )
      }
      {
        generateRequiredPagination().map((pageNumber, index) => (
          <h1
            className={`cursor-pointer text-lg-h5 px-3 py-1 ${index !== 0 ? "ml-sm-card" : ""}
              ${currentPage === pageNumber ? "border border-solid border-black rounded-md" : ""}
            `}
            key={`pageNumber-${index}`}
            onClick={() => onPageChange(pageNumber)}
          >
            { pageNumber }
          </h1>
        ))
      }
      {
        (totalPages > currentPage) && (
          <img
            alt="arrow-right"
            src="https://cdn.chiron.care/cms/general/icons/thin-arrow-right.svg"
            className="ml-lg-card cursor-pointer"
            onClick={() => onNextPage()}
          />
        )
      }
    </div>
  );
};

export interface PaginationProps {
  totalPages: number
  currentPage: number
  range: number
  classValue?: string
  onNextPage: any
  onPreviousPage: any
  onPageChange: any
}

export default React.memo(Pagination);
