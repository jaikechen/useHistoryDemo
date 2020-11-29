import { FetchActionTypes, FetchRequest } from "./fetchActions"
import axios from 'axios'
const baseUrl = '/api/'
const buildOption = (action: FetchRequest) => {
  const headers: any = {}
  return { 
    'Content-Type': 'application/json',
    headers 
  }
}
export const fetchMiddleware = ({ dispatch }: any) => (next: any) => async (action: any) => {
  if (action.type === FetchActionTypes.FetchRequest) {
    const option = buildOption(action)
    const { method, url, onSuccess, onError, postData } = action as FetchRequest
    const fullUrl = baseUrl + url
    try {
      let result: any
      switch (method) {
        case 'GET': {
          result = await axios.get(fullUrl, option)
          break
        }
        case 'POST': {
          result = await axios.post(fullUrl, postData, option)
          break
        }
        case 'DELETE': {
          result = await axios.delete(fullUrl, option)
          break
        }
        case 'PUT': {
          result = await axios.put(fullUrl, postData, option)
          break
        }
      }
      dispatch({ type: onSuccess, payload: { ...action.payload, result:result.data} })
    } catch (error) {
      console.log(error)
      let msg = error.response?.data?.message ?? error.response?.data 
      try{
        msg = JSON.parse(msg).message
      }catch{}
      dispatch({ type: onError, payload: { ...action.payload, error:msg} })
    }
  }
  return next(action)
};
