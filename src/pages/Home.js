import React, { useEffect, useState } from 'react';
import CountryGrid from '../Components/Country/CountryGrid';
import {
  Main,
  SearchButtonWrapper,
  SearchInput,
  TitleWrapper,
} from './Home.styled';

const renderResults = (response,input) => {
  // console.log('renderResults');
  // console.log(response);
  if (response.data !== undefined) {
    // console.log('insiderenderResults');
    return (
      <div>
        {/* <Main>
          <h5 className="text-center">TotalConfirmed: {response.Global.TotalConfirmed}</h5>
          <h5 className="text-center">TotalDeath: {response.Global.TotalDeaths}</h5>
          <h5 className="text-center">TotalRecovered: {response.Global.TotalRecovered}</h5>
        </Main> */}
        <CountryGrid response={response} input={input}/>
      </div>
    );
  }
};

const Home = () => {
  const [input, setInput] = useState('');

  const [response, setResponse] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  // const onSearch = () => {
  //   // fetch('https://api.covid19api.com/summary')
  //   fetch('https://corona-api.com/countries')
  //     .then(resp => {
  //       return resp.json();
  //     })
  //     .then(r => {
  //       setResponse(r);
  //       console.log(r);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };
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
    return () => {
      
    }
  }, [])
  

  // const onKeyDown = ev => {
  //   if (ev.keyCode === 13) {
  //     onSearch();
  //   }
  // };

  //console.log(input);
  return (
    <div style={{margin:'auto', width:'1400px'}}>
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
      {renderResults(response,input)}
    </div>
  );
};

export default Home;
