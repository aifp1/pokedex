import { Pokemons } from "./Pokemons"
import { Pokemon } from "./Pokemon"

export const Main = ({ pokemon, pokemons, chargeMorePokemons, hiddenButton}) => {
    return (
    <>
     <main>
        <section>
        {pokemon ? <Pokemon pokemon={pokemon} /> :  
            (<div className="grid grid-cols-6 xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 gap-4 text-center content-center p-4">
                <Pokemons pokemons={pokemons} />
            </div>)
        }
          
        </section>
        <section className="text-white flex items-center justify-center py-4">
          { hiddenButton ? '' : <button className="bg-blue-500 py-2 px-4 rounded-lg" onClick={chargeMorePokemons}>Charge more pokemons</button>}
        </section>
      </main>
    </>
  )
}
