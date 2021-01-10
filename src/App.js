import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primer Entregable de Coder House
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Primera Clase de React
        </a>
      </header>
    </div>
  );
}

export default App;
