import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  const handleCheck = () => {
   

    const numericValue = Number(value)

    if (Number.isNaN(numericValue)) {
      setResult('Not a valid number!')
      return
    }

    setResult(
      numericValue % 2 === 0
        ? `The number ${numericValue} is even!`
        : `Oops, ${numericValue} is odd!`
    )
  }

  return (
    <div className="app-shell">
      <div className="checker-card">
        <h2>Even or Odd Checker</h2>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
          aria-label="Enter a number"
        />

        <button type="button" onClick={handleCheck}>Check</button>

        {result && <p className="result">{result}</p>}
      </div>
    </div>
  )
}

export default App