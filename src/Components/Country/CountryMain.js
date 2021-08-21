import React from 'react';
import { StyledCountryMain } from './countrymain.styled';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from 'react-customizable-progressbar';

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
  updatedAt = updatedAt.substring(11, 19);
  Country = Country.toUpperCase();
  deathrate = deathrate.toFixed(2);
  recoveryrate = recoveryrate.toFixed(2);

  var formatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
  });

  return (
    <>
      <StyledCountryMain>
        <h1>{Country}
        <div style={{display:"flex",alignContent:"center",justifyContent:"center",fontSize:"15px"}}>
          <h5>Updated: {updatedAt}</h5>
          <h5 style={{paddingLeft:"30px"}}>Population: {formatter.format(population)}</h5>
        </div>
        </h1>
        

        <br></br>
        <div style={{ height: '75px', paddingTop: '60px' }}>
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
        <div className="d-flex justify-content-between align-item-center" style={{color:"gray",borderColor:"green"}}>
          <span style={{borderRight:"1px solid #b0b0b0"}} >Cases today: {formatter.format(tc)}</span>
          <span style={{borderRight:"1px solid #b0b0b0"}}>Deaths today: {formatter.format(td)}</span>
          <span style={{borderRight:"1px solid #b0b0b0"}}>Critical: {formatter.format(critical)}</span>
          <span>Cases per Million: {formatter.format(casespermillion)}</span>
        </div>
      </StyledCountryMain>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '50px',
          fontSize: '15px',
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
              {deathrate}%
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
              {recoveryrate}%
            </div>
          </div>
        </ProgressBar>
      </div>
    </>
  );
};

export default CountryMain;
