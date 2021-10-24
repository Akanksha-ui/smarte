import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
