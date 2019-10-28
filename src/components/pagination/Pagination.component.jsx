import React, { useState } from 'react';
import { PagintationButton, PaginationContainer } from './Pagination.styles';

const Pagination = ({ lastPage }) => {
  let [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);

  const nextPage = () => {
    let newPage = pageNumber + 1;
    setPageNumber(newPage);
  };

  const previousPage = () => {
    let newPage = pageNumber - 1;
    setPageNumber(newPage);
  };

  const setPage = page => {
    setPageNumber(page);
  };

  return (
    <PaginationContainer>
      <PagintationButton disabled={pageNumber === 1} onClick={previousPage}>
        Previous
      </PagintationButton>
      <PagintationButton
        hidden={pageNumber <= 1}
        onClick={() => setPage(pageNumber - 1)}
      >
        {pageNumber - 1}
      </PagintationButton>
      <PagintationButton active onClick={previousPage}>
        {pageNumber}
      </PagintationButton>
      <PagintationButton onClick={() => setPage(pageNumber + 1)}>
        {pageNumber + 1}
      </PagintationButton>
      <PagintationButton onClick={nextPage}>Next</PagintationButton>
    </PaginationContainer>
  );
};

export default Pagination;
