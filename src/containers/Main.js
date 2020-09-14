import React from 'react'
import PokemonDetails from '../components/PokemonDetails'
import PokemonList from '../components/PokemonList'
import Loader from '../components/Loader'
import Error from '../components/Error'

export default function Main({ isOpenAside, selectedPokemon, pokemons, isLoading, hasMore, listRef, openAside, closeAside, error }) {
  return (
    <div  className={`app-main ${isOpenAside ? "open-aside" : "" }`}>
      { 
        isOpenAside && <div className="aside-container">
          <PokemonDetails
            pokemon={selectedPokemon}
            closeAside={closeAside}
          /> 
        </div>
      }
      <div ref={listRef} className="list-container">
        <div className="list-wrapper">
          {
            error ?
              <Error />
            :
            <>
              { (pokemons.length > 0) && <PokemonList pokemons={pokemons} openAside={openAside} /> }
              { isLoading && <Loader hasMore={hasMore} /> }
            </>
          } 
        </div>
      </div>
    </div>
  )
}
