import axios from "axios";
import {setCity, setError, setTemps} from "../reducers/dataReducer";

export const getData = (API_KEY, cityName = 'London') => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`);
      console.log('response from getData', response.data)
      dispatch(setTemps(response.data.list.map( item => (item.main.temp - 273.15).toFixed(1))));
      dispatch(setCity(response.data.city.name));
    } catch (e) {
      dispatch(setError(true));
    }
  }
}