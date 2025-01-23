import { useEffect, useState } from "react"

function UseEffectBasics() {
    const [count, setCount]=useState(0);
    //the function which can changes the state if you called it outside the handler and useEffect then it let the component render multiple times
    let handler = ()=>setCount(count=>count+1)
    useEffect(()=>{
    console.log("Effect triggered")
    },[])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handler}>Increment</button>
        {/* <CounterSkeleton value={count} setFunc={setCount}/> */}
        </div>
  )
}
export default UseEffectBasics