import './App.css';
import { Secondary } from './colors';
import Footer from './components/shared/Footer';
import NavBar from './components/shared/NavBar';
import { Routes } from './routes';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <div style={{background: `${Secondary}`}}> 
        <Routes />
      </div>
      <Footer/>
    </>
  );
}

export default App;
