import React from 'react';
import { PagintationButton, PaginationContainer } from './Pagination.styles';
import { withRouter } from 'react-router-dom';

const Pagination = ({ history, pageNumber, category }) => {
  const parsedNum = parseInt(pageNumber);
  const pageMinusOne = parsedNum - 1;
  const pagePlusOne = parsedNum + 1;

  const nextPage = () => {
    history.push({
      pathname: `/movies/${category}/${parsedNum + 1}`
    });
  };

  const previousPage = () => {
    if (parsedNum === 1) return;
    history.push({
      pathname: `/movies/${category}/${parsedNum - 1}`
    });
  };

  const setPage = pageNum => {
    history.push({
      pathname: `/movies/${category}/${pageNum}`
    });
  };

  return (
    <PaginationContainer pageNumber={pageNumber}>
      <PagintationButton disabled={parsedNum === 1} onClick={previousPage}>
        Previous
      </PagintationButton>
      <PagintationButton
        onClick={() => setPage(pageMinusOne)}
        hidden={parsedNum <= 1}
      >
        {pageMinusOne}
      </PagintationButton>
      <PagintationButton active onClick={previousPage}>
        {parsedNum}
      </PagintationButton>
      <PagintationButton onClick={() => setPage(pagePlusOne)}>
        {pagePlusOne}
      </PagintationButton>
      <PagintationButton onClick={() => nextPage(parsedNum)}>
        Next
      </PagintationButton>
    </PaginationContainer>
  );
};

export default withRouter(Pagination);
