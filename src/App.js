import Home from './screens/Home'
import {GeneralContextProvider} from './context/GeneralContext'
function App() {
  return (
    <GeneralContextProvider>
      <Home />
    </GeneralContextProvider>
  );
}

export default App;
