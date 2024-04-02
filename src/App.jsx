import "./App.css";

import Header from "./components/Header/Header";
import Container from "./ui/Container/Container";
import Cards from "./components/Cards/Cards";
import ActiveState from "./components/ActiveState/ActiveState";

import ProviderStates from "./context/Statescontext";
import ProviderData from "./context/dataContext";
function App() {
  return (
    <ProviderData>
      <ProviderStates>
        <div className="app">
          <Header />
          <Container>
            <ActiveState />
            <Cards />
          </Container>
        </div>
      </ProviderStates>
    </ProviderData>
  );
}

export default App;
