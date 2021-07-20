import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryMain from '../Components/Country/CountryMain';

const renderResults = (data, country) => {
  // console.log('renderResults');
  // console.log(data);
  if (data !== '') {
    // console.log('insiderenderResults');
    return data.map(v => {
      // console.log(v.name);
      // console.log(country);
      if (v.name === country.country) {
        return (
          <div key={v.name}>
            <CountryMain
              Country={v.name}
              match={country}
              confirmed={v.latest_data.confirmed}
              death={v.latest_data.deaths}
              recovered={v.latest_data.recovered}
              td={v.today.deaths}
              tc={v.today.confirmed}
              updatedAt={v.updated_at}
              population={v.population}
              critical={v.latest_data.critical}
              deathrate={v.latest_data.calculated.death_rate}
              recoveryrate={v.latest_data.calculated.recovery_rate}
              casespermillion={v.latest_data.calculated.cases_per_million_population}
            />
          </div>
        );
      } else {
        return undefined;
      }
    });
  }
};

const Country = () => {
  const [data, setData] = useState('');
  
  // const onshow = () => {
  //   // fetch('https://api.covid19api.com/summary')
  //   fetch('https://corona-api.com/countries')
  //     .then(resp => {
  //       return resp.json();
  //     })
  //     .then(r => {
  //       setData(r.data);
  //       console.log(r.data);
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
        setData(r.data);
        // console.log(r.data);
      })
      .catch(err => {
        console.error(err);
      });
    return () => {};
  }, []);

  const country = useParams();
  //   console.log(data[0].Country);
  //   console.log(country);
  return (
    <div>
      {/* <button onClick={onshow}>show</button> */}
      {renderResults(data, country)}
      {/* {
      data &&
        data.map(v => {
          if (v.Country === country) {
            return (
              <div>
                {v.Country}
                {v.TotalRecovered}
              </div>
            );
          } else {
            return undefined;
          }
        })} */}
    </div>
  );
};

export default Country;
