export const Pokemon = ({ pokemon }) => {
  return (
    <>
        <div className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 text-center content-center justify-items-center p-4">
              <img className="max-w-md md:max-w-none w-full border-2 border-gray-900 bg-cyan-100 rounded-lg object-contain size-90" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
              <div className="w-full justify-center items-center text-dark border-2 border-gray-900 bg-lime-600 rounded-lg">
                  <div className="flex justify-center items-center">
                    <label><strong>Name:</strong></label>
                    <h2 className="mx-2">{pokemon.name.toUpperCase()}</h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <label><strong>Weigth: </strong></label>
                    <h2 className="mx-2">{pokemon.weight}</h2>
                  </div>
              </div>
        </div>
    </>
  )
}
