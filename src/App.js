import './App.css';
import ApiTester from './ApiTester';
import UserGlobalData from './context/UserContext';
import UserDisplay from './UserDisplay';
import ConnectionProvider from './context/ConnectionContext';


function App() {

  return (
    <div className="App">

      <UserGlobalData>
        <ConnectionProvider>
          <ApiTester />
          <UserDisplay />
        </ConnectionProvider>
      </UserGlobalData>

     {/* long way to write the above block of components */}
      {/* 
      <UserGlobalData>
        // Returning the context data from  utilising a provider
        <ConnectionContext.Provider value={defaultConnectionData}>
        // Context is nested as a child component within the provider
          <ApiTester />
          <UserDisplay />
        </ConnectionContext.Provider>
      </UserGlobalData>
      */}

    </div>
  );
}

export default App;
