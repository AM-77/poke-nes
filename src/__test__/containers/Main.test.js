import React from 'react'
import {
  render,
  cleanup
} from '@testing-library/react'
import Main from '../../containers/Main'

afterEach(cleanup)

const generateProps = (isOpenAside, isLoading, hasMore, selectedPokemon = { "id": 1,"name": "bulbasaur","height": 7,"weight": 69,"types": [{ "slot": 1, "type": { "name": "grass" } }], "abilities": [{ "ability": { "name": "overgrow", }, "is_hidden": false, "slot": 1 }], "species": { "name": "bulbasaur", }, "stats": [{ "base_stat": 45, "effort": 0, "stat": { "name": "hp", } }, ], "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" }, pokemons = [{ "id": 1, "name": "bulbasaur", "height": 7, "weight": 69, "types": [{ "slot": 1, "type": { "name": "grass", } }], "abilities": [{ "ability": { "name": "overgrow", }, "is_hidden": false, "slot": 1 }], "species": { "name": "bulbasaur" }, "stats": [{ "base_stat": 45, "effort": 0, "stat": { "name": "hp" } }], "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" }, { "id": 2, "name": "ivysaur", "height": 10, "weight": 130, "types": [{ "slot": 1, "type": { "name": "grass", } }], "abilities": [{ "ability": { "name": "overgrow", }, "is_hidden": false, "slot": 1 }], "species": { "name": "ivysaur", }, "stats": [{ "base_stat": 60, "effort": 0, "stat": { "name": "hp", } }], "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" }] ) => ({ isOpenAside, selectedPokemon, pokemons, isLoading, hasMore, listRef: React.createRef(), openAside: () => null, closeAside: () => null })

describe('<Main />', () => {
  
  it("should render the Loader components", () => {
    const props = generateProps(false, true, true, {}, [])
    const { getByText } = render( < Main { ...props } />)
    expect(getByText("Now Loading ...")).toBeInTheDocument()
  })

  it("should render the PokemonList components", () => {
    const props = generateProps(false, false, true, {})
    const { getByText } = render( < Main { ...props } />)
    props.pokemons.forEach(poke => expect(getByText(poke.name)).toBeInTheDocument())
  })

  it("should render the PokemonDetails components", () => {
    const props = generateProps(true, false, true)
    const { getByText, getByTestId } = render( < Main { ...props } />)

    expect(getByTestId("id").textContent).toBe(props.selectedPokemon.id.toString())
    expect(getByTestId("name").textContent).toBe(props.selectedPokemon.name)
    props.selectedPokemon.types.forEach(({ type: { name } }) => expect(getByText(name)).toBeInTheDocument())
    expect(getByText(props.selectedPokemon.height / 10 + "m")).toBeInTheDocument()
    expect(getByText(props.selectedPokemon.weight / 10 + "KG")).toBeInTheDocument()
    expect(getByTestId("species").textContent).toBe(props.selectedPokemon.species.name)
  })

})