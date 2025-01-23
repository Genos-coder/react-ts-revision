import { useState } from "react"

function UserLoginToggle() {
    const [isLogin, setIsLogin]= useState(false);

  return (
    <div className="flex flex-col p-4 border border-black rounded-lg gap-4">
        {
            isLogin? <h2>Hello user</h2>:<h2>Please login to continue</h2>
        }
        <button className="bg-purple-600 text-white p-1  rounded-lg" onClick={()=>setIsLogin(!isLogin)}>
            {isLogin? "logout":"login"}
        </button>
    </div>
  )
}
export default UserLoginToggle