
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import CountContainer from './components/CountContainer/CountContainer'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/contact">
      <Contact />
      </Route>
      <Route path="/">
      <ItemListContainer />
      <CountContainer initial={1} stock={5} />
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
