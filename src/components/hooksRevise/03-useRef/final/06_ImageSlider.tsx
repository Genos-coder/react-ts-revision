import { useRef } from "react"

function ImageSlider() {
    const ref1=useRef<HTMLLIElement|null>(null);
    const ref2=useRef<HTMLLIElement|null>(null);
    const ref3=useRef<HTMLLIElement|null>(null);
    const handleClick = (id:number)=>{
        switch(id){
            case 1:{
                ref1.current?.scrollIntoView({
                    "behavior":"smooth",
                    "block":"nearest",
                    "inline":"center"
                })
                break;
            }
            case 2:{
                ref2.current?.scrollIntoView({
                    "behavior":"smooth",
                    "block":"nearest",
                    "inline":"center"
                })
                break;
            }
            case 3:{
                ref3.current?.scrollIntoView({
                    "behavior":"smooth",
                    "block":"nearest",
                    "inline":"center"
                })
                break;
            }
            default:{
                //Can't do the stuff
                break;
            }
        }
    }
  return (
    <div>
        <div>
            <button onClick={()=>handleClick(1)}>Cat 1</button>
            <button onClick={()=>handleClick(2)}>Cat 2</button>
            <button onClick={()=>handleClick(3)}>Cat 3</button>
        </div>
        <ul className="w-[250px] h-[300px] overflow-hidden">
            <li ref={ref1} className="w-full h-full">
                <img className="w-full h-full object-cover" src="https://placecats.com/neo/300/200" alt="" />
            </li>
            <li ref={ref2} className="w-full h-full">
                <img className="w-full h-full object-cover" src="https://placecats.com/millie/200/200" alt="" />
            </li>
            <li ref={ref3} className="w-full h-full">
                <img className="w-full h-full object-cover" src="https://placecats.com/bella/199/200" alt="" />
            </li>
        </ul>
    </div>
  )
}
export default ImageSlider