import "./App.css";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import { ProjectConsumer } from "./context";
import { Routes } from "./routes";

function App() {
  return (
    <ProjectConsumer>
      {(value) => {
        let lightColor = value.lightColor()
        let darkColor = value.darkColor()
        return (
          <>
            <header className="App-header">
              <NavBar />
            </header>
            <div
              style={{
                background: `linear-gradient( 
0deg, ${lightColor} 12%, ${darkColor} 78% )`,
              }}
            >
              <Routes />
            </div>
            <Footer />
          </>
        );
      }}
    </ProjectConsumer>
  );
}

export default App;
