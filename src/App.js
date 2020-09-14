import React, { useState, useEffect, useRef } from "react"
import useInfiniteScroll from "./utils/useInfiniteScroll"
import loadPokes from "./utils/loadPokes"
import Header from "./containers/Header"
import Main from "./containers/Main"
import "nes.css/css/nes.min.css"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const listRef = useRef(null)
  const [isLoading, setIsLoading] = useInfiniteScroll(listRef)
  const [hasMore, setHasMore] = useState(true)
  const [isOpenAside, setIsOpenAside] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    if(isLoading && hasMore) {
      loadPokes(page)
        .then(({ next, pokes }) => {
          setPokemons([...pokemons, ...pokes])
          next ? setPage(page + 1) : setHasMore(false)
        })
        .catch(err => { 
          setError(err)
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
      <Header />
      <Main 
        isOpenAside={isOpenAside}
        selectedPokemon={selectedPokemon}
        pokemons={pokemons}
        isLoading={isLoading}
        hasMore={hasMore}
        listRef={listRef}
        openAside={openAside}
        closeAside={closeAside}
        error={error}
      />
    </div>
  )
}

export default App