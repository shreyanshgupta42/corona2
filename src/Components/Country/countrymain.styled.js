import styled from 'styled-components';

export const StyledCountryMain = styled.div`
  color: #636362;
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    width: 620px;
    color: black;
    border-bottom: 1px solid #b0b0b0;
  }
  h5 {
    color: gray;
  }
  div {
    span {
      width: 300px;
      height: 50px;
      margin: auto;
      margin-left: 10px;
      margin-top: 1px;
      padding: 20px 20px;
    }
  }
  @media (max-width: 768px) {
    font-size: 10px;
    h1 {
      width: 430px;
    }
  }
  @media (max-width: 400px) {
    font-size: 10px;
    h1 {
      width: 300px;
    }
    div {
      span {
        padding: 5px 5px;
      }
    }
  }
`;
