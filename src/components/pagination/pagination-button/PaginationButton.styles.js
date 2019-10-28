import styled from 'styled-components';

export const PagintationButtonLi = styled.li`
  height: 100%;
  padding: 2.3rem;
  text-align: center;
  cursor: pointer;
  color: white;
  background: ${props => (props.active ? '#2176ff' : '#2b2b2b')}
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
