import React, { useState } from 'react'
import './App.css'

import Header from './Header'

function App() {
  const [counter, setCounter] = useState(0)

  function handleButtonClick(){
    setCounter(counter + 1)
  }

  return (
      <div>
        <Header title={ `Counter: ${ counter }` } />
        <h1>{ counter } * 2 = { counter * 2 }</h1>
        <h1>{ counter } / 2 = { counter / 2 }</h1>
        <button type='submit' onClick={ handleButtonClick }>Increment</button>
      </div>
  )
}

export default App
