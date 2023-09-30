import './App.css';
import ApiTester from './ApiTester';
import ConnectionContext, { defaultConnectionData } from './context/ConnectionContext';

function App() {

  return (
    <div className="App">

{/* Returning the context data from  utilising a provider */}
    <ConnectionContext.Provider value={defaultConnectionData}>
{/* Context is nested as a child component within the provider */}
      <ApiTester/>

    </ConnectionContext.Provider>



    </div>
  );
}

export default App;
