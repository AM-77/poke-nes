import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import PokemonList from '../../components/PokemonList'

afterEach(cleanup)

describe('<PokemonList />', () => {
  const pokemons = [
    { id: 1, name: "poke-01", img: "poke-01.png" },
    { id: 2, name: "poke-02", img: "poke-02.png" },
    { id: 3, name: "poke-03", img: "poke-03.png" }
  ]

  it("should display all the pokemons", () => {
    const { getByTestId, getByText, getByAltText } = render(<PokemonList pokemons={pokemons} />)
    const pokemonList = getByTestId("pokemon-list")
    expect(pokemonList.querySelectorAll(".pokemon-item").length).toEqual(pokemons.length)
    pokemons.forEach(p => {
      expect(getByText(p.name)).toBeInTheDocument()
      expect(getByAltText(p.name)).toBeInTheDocument()
    })    
  })

})
