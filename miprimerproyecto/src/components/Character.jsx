

 function Character({character}) {
  return (
  <div className="text-center p-5 ">
    <h3>{character.name}</h3>
    <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />

    <div style={{ marginTop: '15px' }}>
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
    <p>Gender: {character.gender}</p>
    </div>

  </div>
  );
}

export default Character