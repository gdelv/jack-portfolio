import './App.css';
import NavBar from './components/shared/NavBar';
import { Routes } from './routes';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <div> 
        <Routes />
      </div>
    </>
  );
}

export default App;
