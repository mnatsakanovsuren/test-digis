export const SET_CITY = "SET_CITY";
export const SET_ERROR = "SET_ERROR";
export const SET_TEMPS = "SET_TEMPS";

const defaultState = {
  temps: [],
  city: '',
  isError: false,
  isFetching: true,
}

export default function dataReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TEMPS:
      return {
        ...state,
        temps: [...action.payload],
        isFetching: false,
        isError: false,
      }
    case SET_CITY:
      return {
        ...state,
        city: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        isError: action.payload,
      }
    default:
      return state;
  }
}

export const setError = (isError) => ({type: SET_ERROR, payload: isError})
export const setTemps = (temps) => ({type: SET_TEMPS, payload: temps})
export const setCity = (city) => ({type: SET_CITY, payload: city})