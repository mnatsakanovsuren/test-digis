export const SET_DATA = "SET_DATA";

const defaultState = {
  weather: null,
  isFetching: true,
}

export default function dataReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        weather: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}

export const setData = (weather) => ({type: SET_DATA, payload: weather})