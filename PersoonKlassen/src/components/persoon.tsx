import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// dit is de interface voor de data dat je mee krijgt uit je app.tsx
interface typeGData {
  naam: string;
  klassen: string[];
}
// dit is d einterface voor de typeData in een props te steken dit maakt het makelijker en moet je in je functie niet veel extra schrijven.
interface props {
  data: typeGData;
}
// dit is de functie Persoon dat ook gerund wordt in je App.tsx met daarin je props met data.
function Persoon({ data }: props) {
  // hier useState gebruikt om je data uit je props te halen naar naam en klassen zoo dat je die kan gebruiken in je functie.
  const [naam] = useState(data.naam);
  const [klassen] = useState(data.klassen);
  // dit is je return van je functie
  return (
    <>
      {/* hier maak ik een div aan waar al je data in komt vna je naam en klassen */}
      <div className="list-group-item ">
        {/* hier steek ik de naam er in door het te laten renderen */}
        <h1>Naam : {naam}</h1>
        {/* hier maak ik een list waar al je klassen in gaan komen door gebruik te maken van map die alle klassen in klassen zal appart paken en er zal insteken. */}
        <ul className="list-group list-group-horizontal">
          {klassen.map((klas) => (
            <li className="list-group-item list-group-item-action list-group-item-dark text-center">
              {/* Hier wordt je klas er ingestoken */}
              {klas}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Persoon;
