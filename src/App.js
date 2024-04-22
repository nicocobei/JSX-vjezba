import logo from "./logo.svg";
import "./App.css";

function App() {
  const phrase1 = "Never gonna give you up";
  const phrase2 = "Never gonna let you down";

  return (
    <div className="App">
      <p>Song lyrics</p>
      <p>start: {phrase1}</p>
      <p>
        {phrase1} {","} {phrase2}
      </p>
    </div>
  );
}

export default App;
