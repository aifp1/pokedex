import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [numberOfPokemons, setNumberOfPokemons] = useState(12)
  const [hiddenButton, setHiddenButton] = useState(false)


  useEffect(() => {
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${numberOfPokemons}`)
      .then((response) => response.json())
      .then((data) => { 
        for (const pokemon of data.results) {
          fetch(pokemon.url)
          .then((response) => response.json())
          .then((dataPokemon) => {
            setPokemons((prevState) => prevState.some(p => p.name === dataPokemon.name) ? prevState : [...prevState, dataPokemon])
          })
        }
        
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  function chargeMorePokemons(){
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${numberOfPokemons+12}`)
      .then((response) => response.json())
      .then((data) => { 
        for (const pokemon of data.results) {
          fetch(pokemon.url)
          .then((response) => response.json())
          .then((dataPokemon) => {
            setPokemons((prevState) => prevState.some(p => p.name === dataPokemon.name) ? prevState : [...prevState, dataPokemon])
          })
        }
        setNumberOfPokemons(numberOfPokemons + 12)
      })
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <div className="bg-gradient-to-b from-red-500 to-red-800">
        <Header />
        <Nav setPokemon={setPokemon} pokemon={pokemon} setHiddenButton={setHiddenButton} />
      </div>
      <Main pokemon={pokemon} pokemons={pokemons} chargeMorePokemons={chargeMorePokemons} hiddenButton={hiddenButton}  />
      <Footer />
    </>
  )
}

export default App
