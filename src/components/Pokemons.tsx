export const Pokemons = ({ pokemons }) => {
  return (
    <>
     {pokemons.map(pokemon => (           
        <div className="border-2 border-gray-900 bg-gray-200 rounded-lg">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
        <h2>{ pokemon.name.toUpperCase() }</h2>
        <p>{pokemon.types.map(type => type.type.name).join(', ').toUpperCase()}</p>
        </div>
     ))}
    </>
  )
}
