import React from 'react';
import { StyledCountryCard } from './Countrycard.styled';

const CountryCard = ({
  Country,
  TotalConfirmed,
  TotalDeath,
  TotalRecovered,
}) => {
  var formatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
  });
  return (
    <StyledCountryCard to={`/${Country}`}>
      <div>
        <h1>{Country}</h1>
        <p>
          Total Confirmed:{' '}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <span style={{ color: '#b30000' }}>
            {formatter.format(TotalConfirmed)}
          </span>
          <br></br>Total Death: {'    '}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <span style={{ color: '#333333' }}>
            {formatter.format(TotalDeath)}
          </span>
          <br></br>Total Recovered:{' '}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <span style={{ color: '#006600' }}>
            {formatter.format(TotalRecovered)}
          </span>{' '}
        </p>
        <br></br>
      </div>
    </StyledCountryCard>
  );
};

export default CountryCard;
