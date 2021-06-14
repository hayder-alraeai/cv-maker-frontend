import Footer from './components/Footer'
import {GeneralContextProvider} from './context/GeneralContext'
import Router from "./Router"
function App() {
  return (
    <GeneralContextProvider>
            <Router />
            <Footer />
    </GeneralContextProvider>
  );
}

export default App;
