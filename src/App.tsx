import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import NavigationBar from "./components/NavigationBar";
import "./scss/custom.scss";
import "./customBootstrapStyles.css";
import Footer from "./components/Footer";
import { useState } from "react";
import ModalScreen from "./components/ModalScreen";
import { useAppSelector } from "./app/hook";
import { useAuthentication } from "./hooks/useAuthentication";

function App() {
  const [modalShow, setModalShow] = useState(true);
  useAuthentication();

  const authData = useAppSelector((state) => state.authSlice);
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
      {!authData.isAuthenticated && (
        <ModalScreen show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </div>
  );
}

export default App;
