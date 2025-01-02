import { useRef, useState } from "react"

function DelayedAlert() {
    const  [sending, setSending]=useState(false);
     const [text, setText] = useState("");
    const refContainer = useRef<null | number>(null);
    const handleSend = ()=>{
        setSending(true);
        refContainer.current = setTimeout(()=>{
            alert()
        },5000)
    }
  return (
    <div>
        <button></button>
    </div>
  )
}
export default DelayedAlert