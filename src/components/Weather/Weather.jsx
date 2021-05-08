import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../actions/data";

const Weather = ({API_KEY}) => {
  const dispatch = useDispatch();
  const dataWeather = useSelector(state => state.data.weather);
  const isFetching = useSelector(state => state.data.isFetching)

  useEffect(() => {
    dispatch(getData(API_KEY))
  }, [])

  return (
    <div>
      <h2>Weather content</h2>
      <p>{!isFetching && dataWeather.title}</p>
    </div>
  );
};

export default Weather;