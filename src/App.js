import './App.css';
import { Primary, Secondary } from './colors';
import Footer from './components/shared/Footer';
import NavBar from './components/shared/NavBar';
import { Routes } from './routes';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <div style={{background: `linear-gradient( 
0deg, ${Primary} 12%, ${Secondary} 78% )`}}> 
        <Routes />
      </div>
      <Footer/>
    </>
  );
}

export default App;
