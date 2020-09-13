import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import PokemonDetails from '../../components/PokemonDetails'

afterEach(cleanup)

describe('<PokemonDetails />', () => {

  const pokemon = {
    "id": 1,
    "name": "bulbasaur",
    "height": 7,
    "weight": 69,
    "types": [{
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    }, {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }],
    "abilities": [{
      "ability": {
        "name": "overgrow",
        "url": "https://pokeapi.co/api/v2/ability/65/"
      },
      "is_hidden": false,
      "slot": 1
    }, {
      "ability": {
        "name": "chlorophyll",
        "url": "https://pokeapi.co/api/v2/ability/34/"
      },
      "is_hidden": true,
      "slot": 3
    }],
    "species": {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    "stats": [{
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    }, {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    }, {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    }, {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    }, {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    }, {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }],
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  }

  it("should render the pokemon's name & id", () => {
    const { getByTestId } = render(<PokemonDetails pokemon={pokemon} />)
    expect(getByTestId("id")).toHaveTextContent(pokemon.id.toString())
    expect(getByTestId("name")).toHaveTextContent(pokemon.name)
  })

  it("should render the infos tab", () => {
    const { getByText, getByTestId, getByAltText } = render(<PokemonDetails pokemon={pokemon} />)
    const pokeImage = getByAltText(pokemon.name) 
    const pokeballImage = getByTestId("pokeball-icon")
    
    expect(getByText("Infos")).toBeInTheDocument()
    pokemon.types.forEach(({ type : { name } }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
    expect(getByText(`${pokemon.height / 10}m`)).toBeInTheDocument()
    expect(getByText(`${pokemon.weight / 10}KG`)).toBeInTheDocument()
    expect(getByTestId("species")).toHaveTextContent(pokemon.species.name)
    expect(pokeImage.style._values.display).toBe("none")
    expect(pokeballImage).toBeInTheDocument()
    fireEvent(pokeImage, new Event('load'))
    expect(pokeImage.style._values.display).toBe("block")
    expect(pokeballImage).not.toBeInTheDocument()
  })

  it("should render the abilities tab", () => {
    const { getByText } = render(<PokemonDetails pokemon={pokemon} />)
    
    expect(getByText("Abilities")).toBeInTheDocument()
    pokemon.abilities.forEach(({ ability: { name } }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should render the stats tab", () => {
    const { getByText } = render(<PokemonDetails pokemon={pokemon} />)
    
    expect(getByText("Stats")).toBeInTheDocument()
    pokemon.stats.forEach(({ stat: { name } }) => {
      expect(getByText(name)).toBeInTheDocument()
    })
  })

  it("should update the active tab", () => {
    const { getByTestId } = render(<PokemonDetails pokemon={pokemon} />)
    const tab1 = getByTestId("tab-1")
    const tab2 = getByTestId("tab-2")
    const tab3 = getByTestId("tab-3")
  
    expect(tab1.classList.contains("active")).toBe(true)
    expect(tab2.classList.contains("active")).toBe(false)
    expect(tab3.classList.contains("active")).toBe(false)

    fireEvent.click(tab2)
    expect(tab1.classList.contains("active")).toBe(false)
    expect(tab2.classList.contains("active")).toBe(true)
    expect(tab3.classList.contains("active")).toBe(false)

    fireEvent.click(tab3)
    expect(tab1.classList.contains("active")).toBe(false)
    expect(tab2.classList.contains("active")).toBe(false)
    expect(tab3.classList.contains("active")).toBe(true)
  })

})
