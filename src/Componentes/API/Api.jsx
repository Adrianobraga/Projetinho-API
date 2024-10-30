function Api({ name,setPessoa,escolha,setNome }) {
  const busca = (name) => {
    fetch(`https://swapi.dev/api/${(escolha == "Personagem")?"people":(escolha == "Planeta")?"planets":(escolha == "naves estelares")?"starships":"falhou"}/?search=${name}`)
      .then((resposta) => {
        let contentType = resposta.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return resposta.json().then((json) => {
            if (json.results[0].name == name) {
              setPessoa(json.results[0]);
              setTimeout(() =>{
                setNome("")
                setPessoa({})
              },2000)
            
            }
          });
        }
      })
      .catch((error) => {
        console.error("Erro na requisição" + error);
      });
  };
 return (busca(name));
}

export default Api;
