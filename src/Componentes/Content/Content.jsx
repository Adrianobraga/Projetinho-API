function Content({ corpo, removeLista }) {
  return (
    <>
      {corpo.map((Personagens) => {
        return (
          <div
            key={Personagens.created}
            className="my-4 border-solid border-2 p-6 mx-auto w-96 grid gap-2 text-left shadow-lg black"
          >
            <div className="flex justify-end">
              <button className="border-solid border-2 bg-gray-300 px-3 py-2 text-lg rounded-2xl" onClick={(e) => removeLista(Personagens.created)}>X</button>
            </div>
            <p className="font-bold">Name: {Personagens.name}</p>
            <p>Birth Year: {Personagens.birth_year}</p>
            <p>Skin Color: {Personagens.skin_color}</p>
            <p>Eye Color: {Personagens.eye_color}</p>
            <p>Gender: {Personagens.gender}</p>
            <p>Hair Color: {Personagens.hair_color}</p>
            <p>Height: {Personagens.height}</p>
            <p>Mass: {Personagens.mass}</p>
          </div>
        );
      })}
    </>
  );
}

export default Content;
