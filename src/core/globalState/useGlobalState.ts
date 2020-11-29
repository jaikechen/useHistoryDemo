import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { SetGlobalStateAction } from "./globalStateActions"
import { selectGlobalState } from "./globalStateSelector"

export function useGlobalState<T> (key:string,initVal:T|undefined = undefined) {
  const dispatch = useDispatch()
  useEffect(()=>{
    if (initVal !== undefined){
      const request = new SetGlobalStateAction({key,val:initVal})
      dispatch(Object.assign({},request))
    }
  },[key])
  
  return [
    useSelector(state => selectGlobalState(state, key))??initVal,
    (val:T)=> {
      const request = new SetGlobalStateAction({key,val})
      dispatch(Object.assign({},request))
    }
  ] as [T, (val:T)=>{}]
}
