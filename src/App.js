import React, { useState, useEffect, useRef } from "react"
import useInfiniteScroll from "./utils/useInfiniteScroll"
import loadPokes from "./utils/loadPokes"
import Loader from "./components/Loader"
import PokemonList from "./components/PokemonList"
import PokemonDetails from "./components/PokemonDetails"

import "nes.css/css/nes.min.css"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const listRef = useRef(null)
  const [isLoading, setIsLoading] = useInfiniteScroll(listRef)
  const [hasMore, setHasMore] = useState(true)
  const [isOpenAside, setIsOpenAside] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  
  useEffect(() => {
    if(isLoading && hasMore) {
      loadPokes(page)
        .then(({ next, pokes }) => {
          setPokemons([...pokemons, ...pokes])
          next ? setPage(page + 1) : setHasMore(false)
        })
        .catch(err => { 
          console.error("Error: ", err)
          setHasMore(false) 
        })
        .finally(() => { setIsLoading(false) })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  const openAside = id => {
    setIsOpenAside(true)
    setSelectedPokemon(pokemons[id - 1])
  }

  const closeAside = () => {
    setIsOpenAside(false)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="brand">
          <div className="ash">
            <i className="nes-ash"></i>
          </div>
          <div className="app-name">
            <h1>PokeNES</h1>
          </div>
        </div>
        <a href="https://github.com/AM-77/poke-nes" className="github-icon">
          <i className="nes-icon github"></i>
        </a>
      </header>
      <div  className={`app-main ${isOpenAside ? "open-aside" : "" }`}>
        <div className="aside-container">
          { 
            isOpenAside && <PokemonDetails 
              pokemon={selectedPokemon}
              closeAside={closeAside}
            /> 
          }
        </div>
        <div ref={listRef} className="list-container">
          <div className="list-wrapper">
            <PokemonList 
              pokemons={pokemons} 
              openAside={openAside}
              /> 
            { isLoading && <Loader hasMore={hasMore} /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App