import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import BowlersList from "./Bowlers/BowlersList";

// function GoButton(props: any) {
//   return (
//     <div>
//       <button onClick={props.buttonFunction}>GO</button>
//     </div>
//   );
// }

// function GoLevel(props: any) {
//   return <label>Amount of Go: {props.numToShow}</label>;
// }

// function App() {
//   const [levelOfGo, updateLevel] = useState(1);
//   const incrementGo = () => updateLevel(levelOfGo * 2);
//   return (
//     <div className="App">
//       <Heading />
//       <GoButton buttonFunction={incrementGo} />
//       <br />
//       <br />
//       <GoLevel numToShow={levelOfGo} />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Header />
      <BowlersList />
    </div>
  );
}

export default App;
