import React from 'react';
import { StyledCountryMain } from './countrymain.styled';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-customizable-progressbar';
import Barchartmain from '../barchart/Barchartmain';

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

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

  var da = new Date(updatedAt);
  console.log(da);
  updatedAt = String(da).substring(4, 15);
  var county = Country;
  Country = Country.toUpperCase();
  deathrate = deathrate ? deathrate.toFixed(2) : 0;
  recoveryrate = recoveryrate ? recoveryrate.toFixed(2) : 0;

  var formatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      alignContent: 'center',
      justifyContent: 'center',
    }}>
      <StyledCountryMain>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>
            {Country}
            <div
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                fontSize: '15px',
              }}
            >
              <h5>Updated: {updatedAt}</h5>
              <h5 style={{ paddingLeft: '30px' }}>
                Population: {numFormatter(population)}
              </h5>
            </div>
          </h1>
        </div>

        <div style={{ height: '75px', paddingTop: '20px' }}>
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
        <div
          className="d-flex justify-content-between align-item-center"
          style={{ color: 'gray', borderColor: 'green' }}
        >
          <span style={{ borderRight: '1px solid #b0b0b0' }}>
            Cases today: {formatter.format(tc)}
          </span>
          <span style={{ borderRight: '1px solid #b0b0b0' }}>
            Deaths today: {formatter.format(td)}
          </span>
          <span style={{ borderRight: '1px solid #b0b0b0' }}>
            Critical: {formatter.format(critical)}
          </span>
          <span>Cases per Million: {formatter.format(casespermillion)}</span>
        </div>
      </StyledCountryMain>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
          fontSize: '15px',
          marginBottom: '60px',
        }}
      >
        <ProgressBar
          radius={70}
          progress={deathrate}
          strokeWidth={4}
          strokeColor="#b30000"
          strokeLinecap="square"
          trackStrokeWidth={10}
        >
          <div
            className="indicator"
            style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              margin: 'auto',
              position: 'absolute',
              textAlign: 'center',
              top: '0',
              width: '100%',
              paddingTop: '70px',
            }}
          >
            <div>
              Death Rate:<br></br>
              {deathrate !== 0 && <div>{deathrate}%</div>}
              {deathrate === 0 && <div>NA</div>}
            </div>
          </div>
        </ProgressBar>

        <ProgressBar
          radius={70}
          progress={recoveryrate}
          strokeWidth={4}
          strokeColor="#006600"
          strokeLinecap="square"
          trackStrokeWidth={10}
        >
          <div
            className="indicator"
            style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              margin: 'auto',
              position: 'absolute',
              textAlign: 'center',
              top: '0',
              width: '100%',
              paddingTop: '70px',
            }}
          >
            <div>
              Recovery Rate:<br></br>
              {recoveryrate !== 0 && <div>{recoveryrate}%</div>}
              {recoveryrate === 0 && <div>NA</div>}
            </div>
          </div>
        </ProgressBar>
      </div>
      <Barchartmain Country={county} />
    </div>
  );
};

export default CountryMain;
