import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  list-style-type: none;
  display: inline-block;
  width: 89%;
  text-align: right;
  padding-bottom: 20px;
  padding-top: 100px;
  display: ${props => (isNaN(props.pageNumber) ? 'none' : 'block')};

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    padding-bottom: 0;
    padding-top: 50px;
  }
`;

export const PagintationButton = styled.li`
  height: 100%;
  padding: 2.3rem;
  text-align: center;
  cursor: pointer;
  color: ${props => (props.disabled ? '#888888' : 'white')};
  background: ${props => (props.active ? '#2176ff' : '#1d1d1d')}
  display: ${props => (props.hidden ? 'none' : 'inline-block')}
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')}

  :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  :last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  :hover {
    background: #2176ff;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
