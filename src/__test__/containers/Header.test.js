import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Header from '../../containers/Header'

afterEach(cleanup)

describe('<Header />', () => {
  it("should render the Header container", () => {
    const { getByText } = render(<Header />)
    expect(getByText("PokeNES")).toBeInTheDocument()
  })
})
