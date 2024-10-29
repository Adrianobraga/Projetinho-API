function Header({ name,pessoa,adicionarElemento }) {
  const handleSubmit = (e) => {
    adicionarElemento(pessoa)
    e.preventDefault();
    e.target.reset();
  };
  return (
    
    <>
      <form onSubmit={handleSubmit}>
       <input type="text" className="border border-current rounded-2xl" onKeyUp={(e) => name(e.target.value)} required/>
       <button type="submit" className="border-solid border-2 bg-gray-300">Enviar</button>
       </form>
    </>
  );
}

export default Header;