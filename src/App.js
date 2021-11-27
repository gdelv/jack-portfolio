import './App.css';
import { Secondary } from './colors';
import NavBar from './components/shared/NavBar';
import { Routes } from './routes';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <div style={{background: `${Secondary}`, height: '90vh'}}> 
        <Routes />
      </div>
    </>
  );
}

export default App;
