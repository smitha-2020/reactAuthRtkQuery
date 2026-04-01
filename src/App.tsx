import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import NavigationBar from "./components/NavigationBar";
import "./scss/custom.scss";
import "./customBootstrapStyles.css";
import Footer from "./components/Footer";

import { useAuthentication } from "./hooks/useAuthentication";

function App() {
  //const [modalShow, setModalShow] = useState(true);
  useAuthentication();

  //const authData = useAppSelector((state) => state.authSlice);
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
      <Skills />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
