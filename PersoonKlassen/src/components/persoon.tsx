import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

interface typeGData {
  naam: string;
  klassen: string[];
}

interface props {
  data: typeGData;
}

function Persoon({ data }: props) {
  const [namen] = useState(data.naam);
  const [klassen] = useState(data.klassen);

  return (
    <>
      <li className="list-group-item">
        <h1>Naam: {namen}</h1>
        <ul className="list-group list-group-horizontal">
          {klassen.map((klas) => (
            <li className="list-group-item list-group-item-action list-group-item-dark">
              {klas}
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}
export default Persoon;
