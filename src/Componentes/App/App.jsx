import { useState, useRef } from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import alertify from "alertifyjs";

function App() {
  const input = useRef(""); 
  const [corpo, setCorpo] = useState([]); 
  const [escolha, setEscolha] = useState("");
  const [pessoa, setPessoa] = useState(null); 

  const busca = async (name) => {
    const resposta = await fetch(
      `https://swapi.dev/api/${
        escolha === "Personagem"
          ? "people"
          : escolha === "Planeta"
          ? "planets"
          : escolha === "naves estelares"
          ? "starships"
          : "falhou"
      }/?search=${name}`
    );

    const json = await resposta.json();

    if (json.results && json.results[0]?.name === name) {
      return json.results[0]; 
    }

    return null; 
  };

  
  function adicionarElemento(novoElemento) {
    const id = Math.floor(Math.random() * 1000);
    setCorpo((prevState) => [
      ...prevState,
      { ...novoElemento, created: id, edited: escolha },
    ]);
  }

  
  const removeLista = (id) => {
    setCorpo((prevState) => prevState.filter((item) => item.created !== id));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const fixo = input.current.value; 

    
    const resultado = await busca(fixo);

    if (resultado) {
      setPessoa(resultado);
      adicionarElemento(resultado);
      alertify.success("Item adicionado com sucesso!");
    } else {
      alertify.error("404 Error: Item não encontrado");
    }

    e.target.reset();
  };

  return (
    <>
      <Header
        input={input}
        setEscolha={setEscolha}
        handleSubmit={handleSubmit}
      />
      <Content corpo={corpo} removeLista={removeLista} />
    </>
  );
}

export default App;
