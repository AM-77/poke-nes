import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Pokemon from '../../components/Pokemon'

afterEach(cleanup)

describe('<Pokemon />', () => {
  const pokemon = { id: 1, name: "pikachu", img: "pikatchu.png" }

  it("should display the pokemon name", () => {
    const { getByText } = render(<Pokemon pokemon={pokemon} />)
    expect(getByText(pokemon.name)).toBeInTheDocument()
  })

  it("should load && display the pokemon image", () => {
    const { getByAltText, getByTestId } = render(<Pokemon pokemon={pokemon} />)
    const pokeImage = getByAltText(pokemon.name) 
    const pokeballImage = getByTestId("pokeball-icon")
    
    expect(pokeImage.style._values.display).toBe("none")
    expect(pokeballImage).toBeInTheDocument()
  
    fireEvent(pokeImage, new Event('load'))

    expect(pokeImage.style._values.display).toBe("block")
    expect(pokeballImage).not.toBeInTheDocument()
  })

})
