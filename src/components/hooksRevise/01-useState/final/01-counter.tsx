import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div className="border border-black p-4 rounded-lg flex flex-col justify-center items-center gap-4">
        <h1>{count}</h1>
        <button className="bg-black text-white rounded-lg p-1" onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
export default Counter