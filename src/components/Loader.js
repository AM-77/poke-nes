import React from "react"

export default function Loader({ hasMore }) {
  return (
    <div className="loading">
      {
        hasMore ?
        <>
          <i className="nes-icon has-more is-medium heart"></i>
          <p className="text">Now Loading ...</p>
        </>
        :         
        <p className="text">Made With <i className="nes-icon is-medium heart"></i></p>
      }
    </div>
  )
}
