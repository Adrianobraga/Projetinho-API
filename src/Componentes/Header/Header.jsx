function Header({ name,pessoa,adicionarElemento,setEscolha }) {
  const handleSubmit = (e) => {
    adicionarElemento(pessoa)
    e.preventDefault();
    e.target.reset();
  };

  return (
    
    <>
    <div className="flex justify-center bg-slate-200 h-40 py-16">
      <form onSubmit={handleSubmit}>
       <input type="text" className="border border-current " onChange={(e) => name(e.target.value)} required/>
       <select className="border-solid  mx-3" onClick={(e) => {setEscolha(e.target.value)}}>
       <option hidden>Escolha algum</option>
       <option>Personagem</option>
       <option>Planeta</option>
       <option>naves estelares</option>
       </select>
       <button type="submit" className="border-solid bg-gray-300 hover:bg-slate-400">Enviar</button>
       </form>
       </div>
    </>
  );
}

export default Header;