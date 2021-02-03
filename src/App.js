
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import CountContainer from './components/CountContainer/CountContainer'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';
import Context, { CartContext } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/contact">
      <Contact />
      </Route>
      <Route path="/category/:id">
      <ItemListContainer />
      <CountContainer initial={1} stock={5} />
      <Route path="/item/:id">
      <ItemDetailContainer />
      </Route>
      <Route path="/item/:id">
      <CartContext />
      </Route>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
