
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import CountContainer from './components/ItemListContainer/CountContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <CountContainer initial={1} stock={5} />
    </div>
  );
}

export default App;
