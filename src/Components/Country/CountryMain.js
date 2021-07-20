import React from 'react';
import { StyledCountryMain,Today } from './countrymain.styled';

const CountryMain = ({
  Country,
  confirmed,
  death,
  recovered,
  td,
  tc,
  updatedAt,
  population,
  critical,
  deathrate,
  recoveryrate,
  casespermillion,
}) => {
  //   console.log(Country + ' ' + match);
  updatedAt=updatedAt.substring(11,19);
  Country=Country.toUpperCase();
  deathrate=deathrate.toFixed(2);
  recoveryrate=recoveryrate.toFixed(2);

  var formatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3
  });
  return (
    <StyledCountryMain>
      <h1>{Country}</h1>
      <h5>Updated: {updatedAt}</h5>
      <h5>Population: {formatter.format(population)}</h5> 
      <br></br>
      <div>
        <span
          style={{
            color: '#b30000',
            background: '#ff9999',
            fontWeight: 'bold',
          }}
        >
          Total Cases: {formatter.format(confirmed)}
        </span>
        <span
          style={{
            color: '#006600',
            background: '#99ff99',
            fontWeight: 'bold',
          }}
        >
          Total Recovered: {formatter.format(recovered)}
        </span>
        <span
          style={{
            color: '#333333',
            background: '#cccccc',
            fontWeight: 'bold',
          }}
        >
          Total Death: {formatter.format(death)}
        </span>
      </div>
      <br></br>
      <Today
        style={{
          color: '#0000b3',
          background: '#8080ff',
          fontWeight: 'bold',
        }}
      >
        Cases today: {formatter.format(tc)}
        <br></br>
        Deaths today: {formatter.format(td)}
        <br></br>
        Critical: {formatter.format(critical)}
        <br></br>
        Death Rate: {deathrate}
        <br></br>
        Recovery Rate: {recoveryrate}
        <br></br>
        Cases per Million: {formatter.format(casespermillion)}
      </Today>
    </StyledCountryMain>
  );
};

export default CountryMain;
