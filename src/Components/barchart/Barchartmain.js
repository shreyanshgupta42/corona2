/* eslint-disable no-loop-func */
import React, { useEffect, useState } from 'react';
import { ButtonStyle } from './barchartmaim.styled';
import { isoname } from '../data/iso';
import Barchart from './Barchart';

console.log(1);
var data = [
  {
    date: '1',
    val: 0,
  },
  {
    date: '2',
    val: 0,
  },
  {
    date: '3',
    val: 0,
  },
  {
    date: '4',
    val: 0,
  },
  {
    date: '5',
    val: 0,
  },
  {
    date: '6',
    val: 0,
  },
  {
    date: '7',
    val: 0,
  },
  {
    date: '8',
    val: 0,
  },
  {
    date: '9',
    val: 0,
  },
  {
    date: '9',
    val: 0,
  },
  {
    date: '9',
    val: 0,
  },
  {
    date: '9',
    val: 0,
  },
  {
    date: '9',
    val: 0,
  },
  {
    date: '9',
    val: 0,
  },
];
// console.log(2);

// console.log(3);

const Barchartmain = ({ Country }) => {
  console.log(4);
  const [render, setRender] = useState(0);
  const [loading, setLoading] = useState(true);

  console.log(Country);
  console.log(isoname[`${Country}`]);
  const iso = isoname[`${Country}`];

  console.log(5);

  useEffect(() => {
    setLoading(true);
    var count = 0;
    var date = new Date();
    for (let i = 1; i <= 14; i++) {
      var days = 15 - i;
      var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
      data[i - 1].date = String(last).substring(4, 10);
      var day = last.getDate();
      var month = last.getMonth() + 1;
      var year = last.getFullYear();
      day = ('0' + day).slice(-2);
      month = ('0' + month).slice(-2);
      console.log('7' + i);
      console.log(day + ' ' + month + ' ' + year + ' ' + last);
      fetch(
        `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${iso}`
      )
        .then(r => {
          console.log('8' + i);
          return r.json();
        })
        .then(b => {
          console.log('9' + i);

          if (render === 1) {
            count++;
            data[i - 1].val = b.data.confirmed_diff;
            console.log(b.data.confirmed_diff + ' ' + i);
            if (count === 14) setLoading(false);
          } else if (render === 2) {
            count++;
            data[i - 1].val = b.data.recovered_diff;
            console.log(b.data.recovered_diff + ' ' + i);
            if (count === 14) setLoading(false);
          } else if (render === 3) {
            count++;
            data[i - 1].val = b.data.deaths_diff;
            console.log(b.data.deaths_diff + ' ' + i);
            if (count === 14) setLoading(false);
          }
        });
    }
  }, [iso, render]);

  useEffect(() => {
    console.log('render ' + render);
    console.log('loading ' + loading);
  }, [render, loading]);
  useEffect(() => {
    console.log('loading ' + loading);
  }, [loading]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      {console.log(10)}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignContent: 'center',
        }}
      >
        {console.log(11)}
        <ButtonStyle
          style={{ color: 'red' }}
          onClick={() => {
            setRender(1);
            console.log('confirmed clicked');
            setLoading(true);
          }}
          type="button"
        >
          Confirmed
        </ButtonStyle>
        <ButtonStyle
          style={{ color: 'green' }}
          onClick={() => {
            setRender(2);
            console.log('recovered clicked');
            setLoading(true);
          }}
          type="button"
        >
          Recovered
        </ButtonStyle>
        <ButtonStyle
          style={{ color: 'grey' }}
          onClick={() => {
            setRender(3);
            console.log('death button clicked');
            setLoading(true);
          }}
          type="button"
        >
          Death
        </ButtonStyle>
      </div>
      {console.log(12)}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: '30px',
          width: '100%',
        }}
      >
        {console.log(13)}
        {loading && <div>loading</div>}
        {render === 1 && loading === false && (
          <Barchart data={data} render={render} />
        )}
        {render === 2 && loading === false && (
          <Barchart data={data} render={render} />
        )}
        {render === 3 && loading === false && (
          <Barchart data={data} render={render} />
        )}
      </div>
    </div>
  );
};

export default Barchartmain;
