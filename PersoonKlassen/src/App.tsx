// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react/jsx-runtime";
import Persoon from "./components/persoon";

function App() {
  // Dit is de const dat ik mee gekregen heb voor mijn opdracht.
  const start = [
    { naam: "karel kleintjes", klassen: ["1A", "2A", "3STW"] },
    { naam: "Els Dotjes", klassen: ["1A", "2B", "3H"] },
    { naam: "Jonas Kaas", klassen: ["1C", "5B", "2H"] },
  ];

  return (
    <Fragment>
      {/* Dit is een lijst die aangemaakt word voor al je personen in te steken */}
      <ul className="list-group list-group-horizontal">
        {/* Hier map je je start dat je mee gekregen hebt zoo dat het per persoon wordt gemaakt mijn app persoon. */}
        {start.map((data) => (
          <Persoon data={data} />
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
