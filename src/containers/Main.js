import React from 'react'
import PokemonDetails from '../components/PokemonDetails'
import PokemonList from '../components/PokemonList'
import Loader from '../components/Loader'

export default function Main({ isOpenAside, selectedPokemon, pokemons, isLoading, hasMore, listRef, openAside, closeAside }) {
  return (
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
  )
}
