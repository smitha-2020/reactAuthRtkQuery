import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import NavigationBar from "./components/NavigationBar";
import "./scss/custom.scss";
import "./customBootstrapStyles.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
