import { useState } from "react";
import Api from "../API/Api";
import Header from "../Header/Header";
import Content from "../Content/Content";
function App() {
  let [nome, setNome] = useState("");
  let [corpo, setCorpo] = useState([]);
  let [escolha, setEscolha] = useState("");
  const [pessoa, setPessoa] = useState({});
  function adicionarElemento(novoElemento) {
    const id = Math.floor(Math.random() * 1000);
    setCorpo((prevState) => {
      const id = Math.floor(Math.random() * 1000);
      return [...prevState, { ...pessoa, created: id ,edited: escolha}];
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
      />
      <Api name={nome} setPessoa={setPessoa} escolha={escolha} />
      <Content corpo={corpo} removeLista={removeLista} setNome={setNome} escolha={escolha}/>
    </>
  );
}

export default App;
