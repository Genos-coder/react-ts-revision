import { useState } from "react"

function ManipulateObject() {
    const [person, setPeron]= useState({
        name:"pete",
        hobby:"comedy"
    })
    const togglePerson = ()=>{
        if(person.name=="pete"){
            setPeron({...person, name:"laurie"})
        }else{
            setPeron({...person, name:"pete"})
        }
    }
  return (
    <div className=" flex bg-black flex-col items-start p-4 text-white border rounded-lg">
        <div className="mb-4 w-full flex items-start flex-col">

        <p>Name: {person.name}</p>
        <p>Hobby: {person.hobby}</p>
        </div>
        <button className="rounded-lg p-2 bg-white text-black " onClick={togglePerson}>Toggle person</button>
    </div>
  )
}
export default ManipulateObject