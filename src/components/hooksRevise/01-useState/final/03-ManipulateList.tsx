import { useState } from "react";
import { peopleData } from "../../../../data/data";

function ManipulateList() {
    const [peopleList, setPeopleList]= useState(peopleData);
    const removePerson = (id:number)=>{
        const newList = peopleList.filter(person=>person.id!==id);
        setPeopleList(newList);
    }

  return (
    <div className="flex justify-center items-center flex-col gap-4">
        <button onClick={()=>setPeopleList([])} className="bg-black p-2 rounded-lg gap-4 text-white ">Clear list</button>
        <ul className=" w-[200px] border border-black rounded-lg p-2">

        {peopleList.map(person=>{
            return <li key={person.id} className="flex gap-3 w-full justify-between">
                <p>

                {person.name}
                </p>
                <button onClick={()=>removePerson(person.id)} className="text-red-500 font-bold">X</button>
            </li>
        })}
        </ul>
    </div>
  )
}
export default ManipulateList