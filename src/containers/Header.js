import React from 'react'

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="ash">
          <i className="nes-ash"></i>
        </div>
        <div className="app-name">
          <h1>PokeNES</h1>
        </div>
      </div>
      <a href="https://github.com/AM-77/poke-nes" className="github-icon">
        <i className="nes-icon github"></i>
      </a>
    </header>
  )
}
