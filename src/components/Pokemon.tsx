export const Pokemon = ({ pokemon }) => {
  return (
    <>
        <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 text-center content-center p-4">
            <img className="max-w-md md:max-w-none md:w-full border-2 border-gray-900 bg-cyan-100 rounded-lg object-contain" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            <div id="infoPokemon" className="flex justify-center items-center text-dark">
                <h2>{ pokemon.name.toUpperCase() }</h2>
            </div>
        </div>
    </>
  )
}
