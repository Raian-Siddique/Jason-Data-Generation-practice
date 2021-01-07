import logo from "./logo.svg";
import "./App.css";
// import data from "./data/data.json";
import { useEffect, useState } from "react";
import { fakeData } from "./data/fakeData";

function App() {
  console.log(fakeData);
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    setClubs(fakeData);
  }, []);
  return (
    <div className="App">
      <ul>
        {clubs.map((club) => (
          <li>{club.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
