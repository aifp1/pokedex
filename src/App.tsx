function App() {
  return (
    <>
      <header className="bg-blue-500 text-white flex items-center py-2 px-6 gap-6">
        <img src="/pokemon-logo.webp" alt="Pokemon Logo" className="w-32 h-16 object-contain" />
        <h1 className="text-4xl font-bold content-center">Pokedex</h1>
      </header>
      <nav className="bg-green-500 text-white">
        <form className="justify-center flex items-center py-2 px-6 gap-6" action="" method="get">
          <label className="text-xl">Número o Nombre</label>
          <input type="text" className="border-2 border-blue-500 rounded-lg" placeholder="Buscar Pokemon" />
          <button type="submit" className="bg-blue-500 py-2 px-4 rounded-lg">Buscar</button>
        </form>
      </nav>
      <main>
        <section className="grid grid-cols-3 gap-4">
          <div className="border-2 border-black-500 bg-red-500 rounded-lg">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
            <h2>Bulbasaur</h2>
            <p>Grass, Poison</p>
          </div>
          <div className="border-2 border-black-500 bg-red-500 rounded-lg">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
            <h2>Bulbasaur</h2>
            <p>Grass, Poison</p>
          </div>
          <div className="border-2 border-black-500 bg-red-500 rounded-lg">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
            <h2>Bulbasaur</h2>
            <p>Grass, Poison</p>
          </div>
          <div className="border-2 border-black-500 bg-red-500 rounded-lg">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
            <h2>Bulbasaur</h2>
            <p>Grass, Poison</p>
          </div>
          <div className="border-2 border-black-500 bg-red-500 rounded-lg">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
            <h2>Bulbasaur</h2>
            <p>Grass, Poison</p>
          </div>
          <div className="border-2 border-black-500 bg-red-500 rounded-lg">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
            <h2>Bulbasaur</h2>
            <p>Grass, Poison</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
