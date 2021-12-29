import React, { useEffect, useState } from 'react';
import CountryGrid from '../Components/Country/CountryGrid';
import { Main, SearchInput, TitleWrapper, HomeWrapper } from './Home.styled';

var formatter = new Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
});
const renderResults = (response, response2, input) => {
  // console.log('renderResults');
  // console.log(response2);
  if (response.data !== undefined && response2.ID !== undefined) {
    // console.log('insiderenderResults');
    return (
      <div>
        <Main>
          <span
            style={{
              color: '#b30000',
              background: '#ff9999',
            }}
          >
            TotalConfirmed: {formatter.format(response2.Global.TotalConfirmed)}
          </span>
          <span
            style={{
              color: '#006600',
              background: '#99ff99',
            }}
          >
            TotalDeath: {formatter.format(response2.Global.TotalDeaths)}
          </span>
          <span
            style={{
              color: '#333333',
              background: '#cccccc',
            }}
          >
            TotalRecovered: {formatter.format(response2.Global.TotalRecovered)}
          </span>
        </Main>
        <CountryGrid response={response} input={input} />
      </div>
    );
  }
};

const Home = () => {
  const [input, setInput] = useState('');

  const [response, setResponse] = useState('');
  const [response2, setResponse2] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  useEffect(() => {
    fetch('https://corona-api.com/countries')
      .then(resp => {
        return resp.json();
      })
      .then(r => {
        setResponse(r);
        // console.log(r);
      })
      .catch(err => {
        console.error(err);
      });
    return () => {};
  }, []);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(resp => {
        return resp.json();
      })
      .then(r => {
        setResponse2(r);
        console.log(r.Global.TotalConfirmed);
      })
      .catch(err => {
        console.error(err);
      });
    return () => {};
  }, []);
  //console.log(input);

  return (
    <HomeWrapper>
      <TitleWrapper>
        <h1>COVID-19 PANDEMIC TRACKER</h1>
      </TitleWrapper>
      <SearchInput
        type="text"
        placeholder="Type a Country"
        value={input}
        // onKeyDown={onKeyDown}
        onChange={onInputChange}
      />
      {/* <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper> */}
      {renderResults(response, response2, input)}
    </HomeWrapper>
  );
};

export default Home;
