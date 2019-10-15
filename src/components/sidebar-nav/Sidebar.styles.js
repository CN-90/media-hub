import styled from 'styled-components';

export const Navbar = styled.div`
  background-color: #232323;
  height: 100vh;
  text-align: center;
  color: #959595;
  p {
    margin-top: 50px;
    text-align: left;
  }
`;

export const Brand = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  color: white;
  margin-top: 5%;
`;

export const TextContainer = styled.div`
  width: 59%;
  margin: 0 auto;
  li {
    list-style-type: none;
    font-size: 1.5rem;
    margin: 10px;
  }

  p {
    margin-bottom: 25px;
  }

  .active {
    color: white;
    text-decoration: none;
  }

  a {
    color: #959595;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }
`;
