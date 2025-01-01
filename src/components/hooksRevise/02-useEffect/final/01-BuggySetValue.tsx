import { useState } from "react"
import CounterSkeleton from "./CounterSkeleton";

function BuggySetValue() {
    const [value, setValue] =useState(0);
    const sayHello = ()=>{
        // console.log("hello!")
        // setValue(value+1) //this will create infinite loop
    }
    sayHello();
  return (
    <div>
        <CounterSkeleton value={value} setFunc={setValue}/>
    </div>
  )
}
export default BuggySetValue