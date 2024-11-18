import { useContext } from "react";
import { Context } from "../Context/Context";

function Content() {
  const {corpo,removeLista} =useContext(Context)
  return (
    <>
      {corpo.map((sobre) => {
        if (sobre.name) {
          if (sobre.edited == "Personagem") {
            return (
              <div
                key={sobre.created}
                className=" border-solid border-2 p-6 mx-auto w-96 grid gap-2 text-left shadow-lg black m-10"
              >
                <div className="flex justify-end">
                  <button
                    className="border-solid border-2 bg-gray-300 px-3 py-2 text-lg rounded-2xl"
                    onClick={(e) => removeLista(sobre.created)}
                  >
                    X
                  </button>
                </div>
                <p className="font-bold">Name: {sobre.name}</p>
                <p>Birth Year: {sobre.birth_year}</p>
                <p>Skin Color: {sobre.skin_color}</p>
                <p>Eye Color: {sobre.eye_color}</p>
                <p>Gender: {sobre.gender}</p>
                <p>Hair Color: {sobre.hair_color}</p>
                <p>Height: {sobre.height}</p>
                <p>Mass: {sobre.mass}</p>
              </div>
            );
          }
          if (sobre.edited == "Planeta") {
            return (
              <div
                key={sobre.created}
                className="my-4 border-solid border-2 p-6 mx-auto w-96 grid gap-2 text-left shadow-lg black m-10"
              >
                <div className="flex justify-end">
                  <button
                    className="border-solid border-2 bg-gray-300 px-3 py-2 text-lg rounded-2xl"
                    onClick={(e) => removeLista(sobre.created)}
                  >
                    X
                  </button>
                </div>
                <p className="font-bold">Name: {sobre.name}</p>
                <p>Climate: {sobre.climate}</p>
                <p>Diameter: {sobre.diameter}</p>
                <p>Gravity: {sobre.gravity}</p>
                <p>Orbital Period: {sobre.orbital_period}</p>
                <p>Population: {sobre.population}</p>
                <p>Rotation Period: {sobre.rotation_period}</p>
                <p>Surface Water: {sobre.surface_water}</p>
                <p>terrain: {sobre.terrain}</p>
              </div>
            );
          }
          if (sobre.edited == "naves estelares") {
            return (
              <div
                key={sobre.created}
                className="my-4 border-solid border-2 p-6 mx-auto w-96 grid gap-2 text-left shadow-lg black m-10"
              >
                <div className="flex justify-end">
                  <button
                    className="border-solid border-2 bg-gray-300 px-3 py-2 text-lg rounded-2xl"
                    onClick={(e) => removeLista(sobre.created)}
                  >
                    X
                  </button>
                </div>
                <p className="font-bold">Name: {sobre.name}</p>
                <p>MGLT: {sobre.MGLT}</p>
                <p>Cargo Capacity: {sobre.cargo_capacity}</p>
                <p>Consumables: {sobre.consumables}</p>
                <p>Cost in Credits: {sobre.cost_in_credits}</p>
                <p>Crew: {sobre.crew}</p>
                <p>Hyperdrive Rating: {sobre.hyperdrive_rating}</p>
                <p>Length: {sobre.length}</p>
                <p>Manufacturer: {sobre.manufacturer}</p>
                <p>Max Atmosphering Speed: {sobre.max_atmosphering_speed}</p>
                <p>Model: {sobre.model}</p>
                <p>Passengers: {sobre.passengers}</p>
                <p>Starship Class: {sobre.starship_class}</p>
              </div>
            );
          }
        }
      })}
    </>
  );
}

export default Content;
