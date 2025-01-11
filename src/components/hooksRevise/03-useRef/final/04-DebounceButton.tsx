import { useRef } from "react"

const DebounceButton = ({onClick, children}:{onClick:()=>void, children:React.ReactNode})=>{
    const refContainer = useRef<number |null>();
    
    return <button className="bg-black w-full text-white rounded-lg p-1 " onClick={()=>{
        
        if(refContainer.current){
            clearTimeout(refContainer.current);
        }
        refContainer.current = setTimeout(()=>{
            onClick();
        },2000)}
    }
    >
        {children}
    </button>
}

export default function ButtonContainer(){
    return <div className="flex justify-center flex-col items-center border border-black p-4 rounded-lg gap-4">
        <DebounceButton onClick={()=>alert("You clicked chat room enter button")}>Enter Chat</DebounceButton>
        <DebounceButton onClick={()=>alert("You clicked chat message button")}>Enter chat message</DebounceButton>
        <DebounceButton onClick={()=>alert("You clicked leave chat room button")}>Leave Chat</DebounceButton>
    </div>
}

