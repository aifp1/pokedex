import { Pokemons } from "./Pokemons"
import { Pokemon } from "./Pokemon"

export const Main = ({ pokemon, pokemons, chargeMorePokemons, hiddenButton}) => {
    return (
    <>
     <main>
        <section>
        {pokemon ? <Pokemon pokemon={pokemon} /> :  <Pokemons pokemons={pokemons} />}
          
        </section>
        <section className="text-white flex items-center justify-center py-4">
          { hiddenButton ? '' : <button className="bg-blue-500 py-2 px-4 rounded-lg" onClick={chargeMorePokemons}>Charge more pokemons</button>}
        </section>
      </main>
    </>
  )
}