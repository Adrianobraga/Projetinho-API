import { useState } from "react";

function Api({ name }) {
     //birth_year
    //eye_color
    //gender
    //hair_color
    //height
    //homeworld
    //mass
    //name
    //skin_color   
  const [people,setPeople] = useState({})
  const busca = (name) => {
    fetch(`https://swapi.dev/api/people/?search=${name}`)
      .then((resposta) => {
        let contentType = resposta.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return resposta.json().then((json) => {
            if (json.results[0].name == name) {
              setPeople(json.results[0])
            }
          });
        }
      })
      .catch((error) => {
        console.error("Erro na requisição" + error);
      });
  };
  return(
    <>
    {busca(name)}
    <div className="border">
      Nome:{people.name}  
    <p>{people.birth_year}  </p>
    <p>{people.skin_color}  </p>

    <p>{people.eye_color} </p> 
    <p>{people.gender}  </p>
    <p>{people.hair_color}  </p>
    <p>{people.height}  </p>
    <p>{people.mass}  </p>

    </div>

    </>
  )
}
 
export default Api;
