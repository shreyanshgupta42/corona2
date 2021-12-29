import styled from 'styled-components';

export const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 500px;
  height: 18px;
  margin: auto;
  margin-bottom: 50px;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 20px;
  color: #8d8d8d;

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    width: 350px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
    width: 250px;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Main = styled.div`
  /* margin-left: 380px; */
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  span {
    font-weight: bold;
    margin-left: 20px;
    padding: 10px;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const HomeWrapper = styled.div`
  margin: auto;
  width: 1400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
