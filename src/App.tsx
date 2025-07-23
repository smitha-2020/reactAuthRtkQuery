import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import NavigationBar from "./components/NavigationBar";
import "./scss/custom.scss";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
      <MyProjects />
      <Contact />
    </div>
  );
}

export default App;
