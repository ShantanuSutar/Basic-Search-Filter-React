import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search" />

      {JSONDATA.map((val, key) => {
        return (
          <div>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
