export const Pokemons = ({ pokemons }) => {

  const selectedPokemon = (event) => {
    console.log("Pokemon selected: ", event.target.id);
  }

  return (
    <>
      <div className="grid grid-cols-6 xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 gap-4 text-center content-center p-4 ">
        {pokemons.map(pokemon => (           
            <div className="border-2 border-gray-900 bg-gray-200 rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={selectedPokemon} id={pokemon.id}>
            <img id={pokemon.id} src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            <h2 id={pokemon.id}>{ pokemon.name.toUpperCase() }</h2>
            <p id={pokemon.id}>{pokemon.types.map(type => type.type.name).join(', ').toUpperCase()}</p>
            </div>
        ))}
      </div>
    </>
  )
}
