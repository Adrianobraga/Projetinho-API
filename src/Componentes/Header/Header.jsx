import alertify from "alertifyjs";
function Header({ name, pessoa, adicionarElemento, setEscolha,}) {
  const handleSubmit = (e) => {
    if (pessoa.name) {
      e.preventDefault();
      e.target.reset();
      adicionarElemento(pessoa);
    } else {
      e.preventDefault();
      e.target.reset();
      alertify.error("404 Error");
    }
  };

  return (
    <>
      <div className="flex justify-center bg-slate-200 h-40 py-16">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border border-current "
            onKeyUp={(e) => name(e.target.value)}
            required
          />
          <select
            className="border-solid  mx-3"
            onClick={(e) => setEscolha(e.target.value)}
            required
          >
            <option hidden value="">
              Escolha algum
            </option>
            <option value="Personagem">Personagem</option>
            <option value="Planeta">Planeta</option>
            <option value="naves estelares">naves estelares</option>
          </select>
          <button
            type="submit"
            className="border-solid bg-gray-300 hover:bg-slate-400"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
