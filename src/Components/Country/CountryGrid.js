import React from 'react';
import { FlexGrid } from '../Styled';
import CountryCard from './CountryCard';

const CountryGrid = ({ response, input }) => {
  const { data } = response;
  // console.log(data);
  return (
    <FlexGrid className="mt-2">
      {data.map(v => {
        if (v.name.toLowerCase().search(input) === 0) {
          return (
            <div key={v.name}>
              <CountryCard
                key={v.name}
                Country={v.name}
                TotalConfirmed={v.latest_data.confirmed}
                TotalDeath={v.latest_data.deaths}
                TotalRecovered={v.latest_data.recovered}
              />
            </div>
          );
        } else return undefined;
      })}
    </FlexGrid>
  );
};

export default CountryGrid;
