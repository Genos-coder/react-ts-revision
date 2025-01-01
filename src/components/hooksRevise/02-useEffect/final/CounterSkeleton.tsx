import { Dispatch, SetStateAction } from "react"

type PropsType = {
    value:number
    setFunc:Dispatch<SetStateAction<number>>
}
function CounterSkeleton({value, setFunc}:PropsType) {
  return (
    <div className="flex flex-col border border-black rounded-lg p-4">
        <h2>{value}</h2>
        <button onClick={()=>setFunc(value+1)}>Increment</button>
    </div>
  )
}
export default CounterSkeleton