import { useState } from "react"

function AsyncCounter() {
    const [count, setCount] = useState(0);

    function handleClick(){
        // console.log("triggered")
        // setTimeout(()=>{
        //     setCount(count+1)
        // },3000)
        // above shit doesn't work we need to pass updater function to get the work done
        setTimeout(()=>{
            setCount(count=>{
                return count+1
            })
        },3000)
    }
  return (
    <div className="border border-black rounded-lg   p-4 flex justify-center items-center rounded-lgs flex-col gap-4"> 
        <h2>{count}</h2>
        <button className="bg-black rounded-lg text-white p-1" onClick={handleClick}>Increment</button>
    </div>
  )
}
export default AsyncCounter