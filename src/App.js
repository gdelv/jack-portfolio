import './App.css';
import NavBar from './components/shared/NavBar';
import { Routes } from './routes';

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <Routes />
      </body>
    </>
  );
}

export default App;
