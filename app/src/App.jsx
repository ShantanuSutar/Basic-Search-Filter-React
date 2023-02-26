import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";
function App() {
  const [searchName, setSearchName] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />
      {console.log(searchName)}
      {JSONDATA.filter((val, key) => {
        if (searchName === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchName.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
