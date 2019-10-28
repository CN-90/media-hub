import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  list-style-type: none;
  display: inline-block;
  width: 25%;
  margin-left: 200px;
  text-align: center;
`;

export const PagintationButton = styled.li`
  height: 100%;
  padding: 2.3rem;
  text-align: center;
  cursor: pointer;
  color: ${props => (props.disabled ? '#b3b2b2' : 'white')};
  background: ${props => (props.active ? '#2176ff' : '#232323')}
  margin-top: 200px;
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
`;
