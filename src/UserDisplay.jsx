import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export default function UserDisplay(){

  // Same code structure, finds UserContext. No need to use both at the same time, just use one of them
  // let globaluserData = useContext(UserContext);

  // Destructured syntax
  let{userData, setUserData} = useContext(UserContext);

  return (
    <div>
			<h1>User JWT: {userData.jwt}</h1>
			<input 
			type="text" 
			name="" 
			id="" 
			value={userData.jwt} 
			onChange={(event) => setUserData({jwt: event.target.value})} 
			/>


    </div>
  )
}