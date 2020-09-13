import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import App from '../App'

afterEach(cleanup)

describe('<App />', () => {

  it("should render the Header", () => {
    const { getByText } = render(<App />)
    expect(getByText("PokeNES")).toBeInTheDocument()
  })

  it("should render the 'Now Loading...'", () => {
    const { getByText } = render(<App />)
    expect(getByText("Now Loading ...")).toBeInTheDocument()
  })

})