import { ChangeEvent, useState } from "react";

export default function StuckInput() {
   const [user, setUser] = useState({
    firstName:"",
    lastName:""
   })
  
   function handleChange(e:ChangeEvent<HTMLInputElement>){
    let {value,name}= e.target
    setUser(prev=>({...prev,[name]:value}))
   }
  
     function handleReset() {
        setUser({
            firstName:"",
            lastName:""
        })
    }
    
  
    return (
      <form className="flex flex-col w-1/3 gap-2 bg-teal-500 text-white p-4 rounded-lg" onSubmit={e => e.preventDefault()}>
        <input
        className="border border-b border-black rounded-lg p-1 text-black"
        name="firstName"
          placeholder="First name"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
        className="border border-b border-black rounded-lg p-1 text-black"
        name="lastName"
          placeholder="Last name"
          value={user.lastName}
          onChange={handleChange}
        />
        <h1 className="w-full text-left">Hi, {user.firstName} {user.lastName}</h1>
        <button className="bg-white w-1/4 mx-auto rounded-lg py-1 text-black" onClick={handleReset}>Reset</button>
      </form>
    );
  }
  