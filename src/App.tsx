import About from "./components/About";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import "./scss/custom.scss";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
    </div>
  );
}

export default App;
