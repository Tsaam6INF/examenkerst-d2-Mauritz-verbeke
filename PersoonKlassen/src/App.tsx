// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react/jsx-runtime";
import Persoon from "./components/persoon";

function App() {
  const start = [
    { naam: "karel kleintjes", klassen: ["1A", "2A", "3STW"] },
    { naam: "Els Dotjes", klassen: ["1A", "2B", "3H"] },
  ];

  return (
    <Fragment>
      <ul className="list-group list-group-horizontal">
        {start.map((data) => (
          <Persoon data={data} />
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
