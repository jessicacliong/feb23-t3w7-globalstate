import { createContext, useReducer, useState } from "react"
import { userReducer } from "./UserReducer";


let defaultUserData = {
	userData: {
		jwt: ''
	},
	setUserData: () => {}
}

export const UserContext = createContext(defaultUserData);

export default function UserGlobalData(props){

	// let [userData, setUserData] = useState(defaultUserData);, changing from state to a reducer
	let [userData, userDataDispatch] = useReducer(userReducer, defaultUserData);

	return (
    // Passing UserData using setState to any child elements theyre available using user context provider
		<UserContext.Provider value={			
      {
        userData: userData, 
        // setUserData: setUserData
        userDataDispatch: userDataDispatch
      }
    }>
			{props.children}
		</UserContext.Provider>
	)
}