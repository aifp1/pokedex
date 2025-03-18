import { useEffect, useState } from "react"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [numberOfPokemons, setNumberOfPokemons] = useState(12)

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

  function handleSubmit(event) {
    console.log(event)
    event.preventDefault()
    const searchPokemon = event.target.elements[0].value
    if(searchPokemon === "") {
      return
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
    .then((response) => {
      if(response.status === 404) return
      return response.json()
    })
    .then((data) => {
      console.log("Dato de un pokemon: ", data)
      setPokemon(data)
    })
  }

  function comeBack(){
    setPokemon(null)
  }

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
        <header className="text-white flex justify-between items-center py-4 px-6 pt-6 gap-6">
          <img src="/pokemon-23.svg" alt="Pokemon Logo" className="w-32 h-16 object-contain" />
          <h1 className="text-4xl font-bold content-center">Pokedex</h1>
        </header>
        <nav className="text-white">
          <form onSubmit={handleSubmit} className="justify-center flex items-center py-2 px-6 gap-3" action="" method="get">
            <label className="text-xl font-bold mr-2">Number or Name</label>
            <input type="text" className="border-2 w-64 h-8 border-gray-50 text-gray-900 rounded-md px-2 bg-gray-200 mr-2" placeholder="Search Pokemon" />
            <button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button type="button" className="bg-green-500 py-2 px-4 rounded-lg" onClick={comeBack} disabled={pokemon === null}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
            </button>
          </form>
        </nav>
      </div>
      <main>
        <section className="grid grid-cols-6 xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 gap-4 text-center content-center p-4">
          {pokemon ? <h1>{pokemon.name}</h1> : pokemons.map(pokemon => (           
            <div className="border-2 border-gray-900 bg-gray-200 rounded-lg">
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            <h2>{ pokemon.name.toUpperCase() }</h2>
            <p>{pokemon.types.map(type => type.type.name).join(', ').toUpperCase()}</p>
          </div>
          ))}        
        </section>
        <section className="text-white flex items-center justify-center py-4">
          <button className="bg-blue-500 py-2 px-4 rounded-lg" onClick={chargeMorePokemons}>Charge more pokemons</button>
        </section>
      </main>
      <footer className="bg-gradient-to-b from-red-500 to-red-800 text-white flex items-center py-2 px-6 gap-6">
      <img src="/pokemon-23.svg" alt="Pokemon Logo" className="w-32 h-16 object-contain" />
      </footer>
    </>
  )
}

export default App
