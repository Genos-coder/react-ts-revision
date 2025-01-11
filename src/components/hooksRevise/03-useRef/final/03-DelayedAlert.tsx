import { useRef, useState } from "react"

function DelayedAlert() {
    const  [sending, setSending]=useState(false);
    const refContainer = useRef<null | number>(null);
    const handleSend = ()=>{
        setSending(true);
        refContainer.current = setTimeout(()=>{
            alert("sent!")
        },5000)
    }
    const undoHandler = ()=>{ 
      if(refContainer.current){
        clearTimeout(refContainer.current)
        setSending(false)
      }
    }


  return (
    <div className="flex gap-2">
      <input type="text" className="border border-black rounded-lg" />
      {
        !sending ? 
        <button onClick={()=>handleSend()} className="bg-black text-white p-1 rounded-lg">Send</button>
        : 
        <button disabled className="bg-black disabled:bg-slate-700 animate-pulse text-white p-1 rounded-lg">...sending</button>
      }
      {sending && <button onClick={undoHandler} className="bg-black text-white p-1 rounded-lg">Undo</button>}
    </div>
  )
}
export default DelayedAlert