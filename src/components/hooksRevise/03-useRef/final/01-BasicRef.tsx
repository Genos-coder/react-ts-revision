import { useRef } from "react"

function BasicRef() {
    const refContainer = useRef(0);
    const handleClick = ()=>{
        refContainer.current = refContainer.current+1;
        alert(`You clicked button for ${refContainer.current} times`)
    }
  return (
    <div>
        <h2>{refContainer.current}</h2>
        <button onClick={handleClick} className="border p-2 border-black rounded-lg">Click for alert</button>
    </div>
  )
}
export default BasicRef