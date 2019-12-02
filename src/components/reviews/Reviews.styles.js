import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  height: 500px;
  width: 80%;
  margin: 0 auto;

  h1 {
    font-weight: normal;
    color: white;
  }

  button {
    width: 10%;
    float: right;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    button {
      width: 30%;
    }
  }
`;

export const ReviewContainer = styled.div`
  padding-top: 50px;
`;
