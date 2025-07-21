import "../App.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeSwitcher from "./components/ThemeSwitcher";

// or less ideally

function App() {
  return (
    <>
      <p>Hello World!</p>
      <ThemeSwitcher />
    </>
  );
}

export default App;
