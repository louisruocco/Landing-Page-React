import './App.css';
import Greeting from "./components/greeting";
import Time from "./components/time";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App">
      <div className = "overlay"></div>
      <Time />
      <Greeting />
      <Weather />
    </div>
  );
}

export default App;