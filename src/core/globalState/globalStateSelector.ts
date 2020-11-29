import { createSelector } from 'reselect'
import { globalState, getGlobalState } from './globalStateReducer'
const getState = (state:any) => state.globalStateReducer


export const selectGlobalState = createSelector(
  getState,
  (s:any, key:string) => key,
  (states: globalState[], key:string) => {
    return getGlobalState(states, key)?.val
  }
)