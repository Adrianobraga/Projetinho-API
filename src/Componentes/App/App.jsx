import { useState } from "react";
import Api from "../API/Api";
import Header from "../Header/Header";
import Content from "../Content/Content";
function App() {
  let [nome, setNome] = useState("");
  let [corpo, setCorpo] = useState([]);
  let [escolha, setEscolha] = useState("");
  let [botao, setBotao] = useState("");
  let [pessoa, setPessoa] = useState({});
  function adicionarElemento(novoElemento) {
    const id = Math.floor(Math.random() * 1000);
    setCorpo((prevState) => {
      const id = Math.floor(Math.random() * 1000);
      return [...prevState, { ...pessoa, created: id, edited: escolha }];
    });
  }
  const removeLista = (id) => {
    const newLista = [...corpo];
    const filteredLista = newLista.filter((corpo) =>
      corpo.created !== id ? corpo : null
    );
    setCorpo(filteredLista);
  };
  return (
    <>
      <Header
        name={setNome}
        pessoa={pessoa}
        setCorpo={setCorpo}
        adicionarElemento={adicionarElemento}
        setEscolha={setEscolha}
        setBotao={setBotao}
        nome={nome}
      />
      <Api
        name={nome}
        setPessoa={setPessoa}
        escolha={escolha}
        setNome={setNome}
        botao={botao}
      />
      <Content
        corpo={corpo}
        removeLista={removeLista}
        setNome={setNome}
      />
    </>
  );
}

export default App;
