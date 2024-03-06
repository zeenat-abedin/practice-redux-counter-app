import React from 'react'
import './Counter.css'

function Counter() {
  let counter = 0
  return (
    <div className="counter-app">
      <h1>Counter Application</h1>
      <div className="counter">
        <button className="increment">Increment</button>
        <span>{ counter }</span>
        <button className="decrement">Decrement</button>
      </div>
    </div>
  )
}

export default Counter
