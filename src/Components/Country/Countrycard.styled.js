import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCountryCard = styled(Link)`
  color: black;
  text-decoration: none;
  div {
    width: 300px;
    height: 100%;
    margin: 0 15px 40px;
    box-shadow: 0px 0px 50px 0px rgba(219, 219, 219, 5);
    margin-top: 10px;
    border-radius: 15px;
    padding: 5px 20px;
    &:hover {
      cursor: pointer;
      text-decoration-color: blue;
      color: white;
      background-color: #8c8c8c;
    }
    h1 {
      text-align: center;
      margin: 10px 0;
      font-size: 21px;
    }

    p {
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      position: relative;
      span {
        box-sizing: border-box;
        width: 100px;
        text-align: right;
      }
    }
  }
  @media (max-width: 768px) {
    font-size: 10px;
    div{
      width: 200px;
    }
    h1{
      font-size: 12px;
    }
  }
  @media (max-width: 400px) {
    font-size: 8px;
    div{
      width: 150px;
      padding:2px 2px;
      margin: 0 7px 14px;
      h1{
        font-size: 12px;
      }
    }
    h1{
      font-size: 12px;
    }
  }
`;
