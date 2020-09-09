import React, { useState } from "react"

export default function Pokemon({ openAside, pokemon: { id, name, img } }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <button onClick={() => isLoaded ? openAside(id) : null } className="pokemon-item">
      <h2 className="nes-text poke-name">{name}</h2>
      <div className="poke-image">
        <img src={img} style={{ display: isLoaded ? "block" : "none" }} alt={name} onLoad={() => setIsLoaded(true)} />
        { !isLoaded && <i className="pokeball nes-pokeball"></i> }
      </div>
    </button>
  )
}

