import React from 'react';

import { PagintationButtonLi } from './PaginationButton.styles';

const PaginationButtton = ({text}) => {
  return <PagintationButtonLi>{text}<PagintationButtonLi/>;
};

export default PaginationButtton;
