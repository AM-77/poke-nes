import React from 'react'

export default function Error() {
  const reload = () => window.location.reload()
  return (
    <div className="error">
      <h2>An error occured</h2>
      <p>Please report this error by opening an issue in the github repo >> <a href="https://www.github.com/AM-77/poke-nes/issues" alt="github repo">HERE</a>.<br />
      We are sorry for this unconvineint and thank you for your understanding.</p>

      <button className="nes-btn" onClick={reload} type="button">reload</button>
    </div>
  )
}
