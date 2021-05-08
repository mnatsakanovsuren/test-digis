import axios from "axios";
import {setData} from "../reducers/dataReducer";

export const getData = (API_KEY, cityName = 'London') => {
  return async dispatch => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
    console.log('response from getData', response)
    dispatch(setData(response.data));
  }
}