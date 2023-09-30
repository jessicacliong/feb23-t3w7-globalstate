import { createContext, useState } from "react"


let defaultUserData = {
	userData: {
		jwt: ''
	},
	setUserData: () => {}
}

export const UserContext = createContext(defaultUserData);

export default function UserGlobalData(props){

  let [userData, setUserData] = useState(defaultUserData);

	return (
    // Passing UserData using setState to any child elements theyre available using user context provider
		<UserContext.Provider value={			
      {
      userData: userData, 
      setUserData: setUserData
      }
    }>
			{props.children}
		</UserContext.Provider>
	)
}