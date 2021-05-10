import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../actions/data";
import Chart from "../Chart/Chart";

const Weather = ({API_KEY}) => {
  const dispatch = useDispatch();
  const dataWeather = useSelector(state => state.data.temps);
  const isError = useSelector(state => state.data.isError);
  const isFetching = useSelector(state => state.data.isFetching);
  const city = useSelector(state => state.data.city);
  const [cityValue, setCityValue] = useState('');

  const handleChange = (event) => {
    setCityValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getData(API_KEY, cityValue));
    setCityValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city-input">
          <input type="text" id="city-input" value={cityValue} onChange={handleChange} placeholder="Enter city"/>
        </label>
        {!isError && !isFetching && <Chart data={dataWeather} city={city} />}
        {isError && <div>Oooops... incorrect value</div>}
      </form>
    </div>
  );
};

export default Weather;