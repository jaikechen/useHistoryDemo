import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import { fetchMiddleware } from "../fetch/fetchMiddleware";
import {globalStateReducer} from '../globalState/globalStateReducer'
import {fetchReducer} from '../fetch/fetchReducer'
export const reducers = combineReducers({globalStateReducer,fetchReducer});
export const rootStore = createStore(
  reducers,
  compose(
    applyMiddleware(fetchMiddleware ),
  )
);