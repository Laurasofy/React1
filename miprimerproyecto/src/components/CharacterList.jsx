import { useEffect, useState } from "react";
import Character from "./Character";

function PrevPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setpage(Math.max(1, props.page - 1))}
      >
        Prev Page
      </button>
    </header>
  );
}

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setpage(props.page + 1)}
      >
        Next Page
      </button>
    </header>
  );
}



function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacter(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setpage={setPage} />
      <PrevPage page={page} setpage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {character.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}

      <NavPage page={page} setpage={setPage} />
    </div>
  );
}

export default CharacterList;