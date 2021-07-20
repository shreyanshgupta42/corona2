import styled from 'styled-components'

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
`;


export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  
  button {
    color: #fff;
    width: 125px;
    height: 40px;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 30px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
    }
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
`;

export const Main=styled.div`
  text-align: center;
  margin: 0 0 40px;
  h5 {
    color: ${({ theme }) => theme.mainColors.blue};
    margin: 0 0 5px;
  }

`