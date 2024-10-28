function Api({name}) {
  const busca = (name) => {
fetch(`https://swapi.dev/api/people/?search=${name}`)
.then((resposta) => {
let contentType = resposta.headers.get("content-type");
if (contentType && contentType.indexOf("application/json") !== -1) {
return resposta.json().then((json) => {
  if(json.results[0].name == name){      
      }
    })      
  }
})
      .catch((error) => {
        console.error("Erro na requisição" + error);
      });
  };

  return busca(name);
}

export default Api;
