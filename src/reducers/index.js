import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );