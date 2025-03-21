import { useState } from "react"

export const Nav = ({ setPokemon, pokemon, setHiddenButton }) => {
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
        setHiddenButton(true)
      }

      function comeBack(){
        setPokemon(null)
        setHiddenButton(false)
      }
  return (
    <>
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
    </>
  )
}

