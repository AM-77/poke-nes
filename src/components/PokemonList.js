import React from "react"
import Pokemon from "./Pokemon"

export default function PokemonList({ pokemons , openAside }) {
  return (
    <div data-testid="pokemon-list" className="pokemon-list">
      { pokemons.map((pokemon) => <Pokemon openAside={openAside} key={pokemon.id} pokemon={pokemon} />) }
    </div>
  )
}
