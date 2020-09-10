import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Loader from '../../components/Loader'

afterEach(cleanup)

describe('<Loader />', () => {

  it("should render loading...", () => {
    const { getByText } = render(<Loader hasMore={true} />)
    expect(getByText("Now Loading ...")).toBeInTheDocument()
  })

  it("should render made with <3", () => {
    const { getByText } = render(<Loader hasMore={false} />)
    expect(getByText("Made With")).toBeInTheDocument()
  })

})
