import { useContext} from "react";
import { Context } from "../Context/Context";

function Header() {
  const {input,setEscolha,handleSubmit,setNome} = useContext(Context)
  return (
    <>
      <div className="flex justify-center bg-slate-200 h-40 py-16">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border border-current "
            ref={input}
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
