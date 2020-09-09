import React, { useState } from "react"

export default function PokemonDetails({ pokemon: { abilities, height, id, img, name, species, stats, types, weight }, closeAside }) {
  const [activeTab, setActiveTab] = useState(1)
  const [isLoadedImage, setIsLoadedImage] = useState(false)

  return (
    <div className="pokemon-details">
      <div className="header">
        <div className="poke-name">
          <h3># {id}: {name}</h3>
        </div>
        <div className="close-btn">
          <button onClick={closeAside} className="nes-btn is-error">
            <i className="nes-icon close is-small"></i>
          </button>
        </div>
      </div>
      <div className="main">
        <div className="titles">
          <div onClick={() => setActiveTab(1)} className={`title ${activeTab === 1 ? "active" : ""}`}><span>Infos</span></div>
          <div onClick={() => setActiveTab(2)} className={`title ${activeTab === 2 ? "active" : ""}`}><span>Abilities</span></div>
          <div onClick={() => setActiveTab(3)} className={`title ${activeTab === 3 ? "active" : ""}`}><span>Stats</span></div>
        </div>
        <div className="tabs">
          <div className={`tab infos ${activeTab === 1 ? "active" : ""}`}>
            <div className="info">
              <div className="types">
                {
                  types.map(({ type }, index) => <b key={index} style={{ backgroundColor: `var(--${type.name})` }}>{type.name}</b>)
                }
              </div>
              <p>height: <span>{height / 10}m</span></p>
              <p>weight: <span>{weight / 10}KG</span></p>
              <p>species: <span>{species.name}</span></p>
            </div>
            <div className="image">
              <img src={img} style={{ display: isLoadedImage ? "block" : "none" }} alt={name} onLoad={() => setIsLoadedImage(true)} />
              { !isLoadedImage && <i className="pokeball nes-pokeball"></i> }
            </div>
          </div>
          <div className={`tab ability ${activeTab === 2 ? "active" : ""}`}>
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Slot</th>
                  <th>Hidden</th>
                </tr>
              </thead>
              <tbody>
                {
                  abilities.map(({ability, is_hidden, slot}, index) => <tr key={index}>
                    <td>{ability.name}</td>
                    <td>{slot}</td>
                    <td>{is_hidden ? "Yes" : "No"}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
          <div className={`tab stats ${activeTab === 3 ? "active" : ""}`}>
            <table className="nes-table is-bordered is-centered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Base Stat</th>
                  <th>Effort</th>
                </tr>
              </thead>
              <tbody>
                {
                  stats.map(({ stat, base_stat, effort }, index) => <tr key={index}>
                    <td>{stat.name}</td>
                    <td>{base_stat}</td>
                    <td>{effort}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}