import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import "./scss/custom.scss";

// or less ideally

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header /> <Header /> <Header />
    </div>
  );
}

export default App;
