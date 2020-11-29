import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalState } from './core/globalState/useGlobalState'
export function Home() {
    const history = useHistory()
    const [count,setCount] = useGlobalState<number>('home')
    return <div>
        <div>home count={count}</div>
        <button onClick={()=>{
            setCount((count??0) + 1)
        }}>Count</button>
        <button onClick={()=>{ history.push('/About')}}>About</button>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
        <button onClick={()=>{ history.push('/About')}}>About</button>
    </div>
}
