import { useRef, useState } from "react"

function StopWatch() {
    const [startTime, setStartTime] = useState<number|null>(null);
    const [now, setNow] = useState<number|null>(null);
    const refContainer = useRef<null|number>(null)
    const timer = ()=>{
        if(startTime !==null && startTime >0){
            return
        }
        
        setStartTime(Date.now());
        setNow(Date.now());
        refContainer.current = setInterval(() => {
            setNow(Date.now()); 
        }, 10);
    }
    let secondsPassed = 0;
    if(startTime !=null && now !=null){
        secondsPassed = (now - startTime)/1000
    }
    const stopTimer = ()=>{
        if(refContainer.current){
            clearInterval(refContainer.current);
        }
       
    }
    
    return (
        <div className="bg-black p-4 flex w-[250px] flex-col gap-4 rounded-lg">
        <h2 className="text-white flex w-full justify-between">
            <span>

            Time Passed
            </span>
            <span className="px-4">

            {secondsPassed}
            </span>
        </h2>
        <div className="flex gap-2 w-full  justify-center">
        {startTime!==null ?
        
        
        <button onClick={()=>{
            
            setStartTime(null);
            setNow(null);
            if(refContainer.current){
                clearInterval(refContainer.current);
            }
            
            timer()
        
        }} className="bg-white rounded-lg p-1 text-black  text-sm">
        Restart
        </button>
        :

    <button onClick={timer} className="bg-white rounded-lg p-1 text-black  text-sm">
        Start
        </button>
        
        }
        
    <button onClick={()=>stopTimer()} className="bg-white rounded-lg p-1 text-black text-sm">Stop</button>
        </div>
    </div>
  )
}
export default StopWatch