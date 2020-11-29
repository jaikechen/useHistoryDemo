import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { FetchMethods, FetchRequest, FetchActionTypes } from "./fetchActions"
import { selectFetchState } from "./fetchSelector"
import { fetchState } from "./fetchReducer"

export function useFetchRequest<T> (effect:boolean  ,method:FetchMethods,url:string, postDate:any=undefined) {
  const key = url + method
  const dispatch = useDispatch()
  useEffect(()=>{
    if (effect){
      const request = new FetchRequest(
        FetchActionTypes.FetchSucceed, 
        FetchActionTypes.FetchFailed, 
        FetchActionTypes.FetchLoading,
        method, url, {key},postDate )
        dispatch(Object.assign({},request))
    }
  },[url,method,postDate,effect])
  
  return [
    useSelector((state:any) => selectFetchState(state,key)),
    (postDate1:any) =>{
      const request = new FetchRequest(
        FetchActionTypes.FetchSucceed, 
        FetchActionTypes.FetchFailed, 
        FetchActionTypes.FetchLoading,
        method, url, {key},postDate1 )
        dispatch(Object.assign({},request))
    }
  ] as [fetchState<T>, (postDate:any)=>{} ]
}
