/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from 'react'

function Playground(props) {
  const [healthPoints, setHealthPoints] = useState(101)
  const [spinnerOn, setSpinnerOn] = useState(false)

  if (spinnerOn) {
    return (
      <div className='container'>
        <h3>The spinner is {spinnerOn ? 'ON' : 'OFF'}</h3>
        <button onClick={() => setSpinnerOn(false)}>Close</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Hello from the Playground component</h1>
      <span>Current Health: {healthPoints}</span>
      <span>{healthPoints > 50 ? 'You are in good health.' : 'Your hurt.'}</span>
      <button onClick={() => setHealthPoints(healthPoints - 10)}>Decrease health</button>
      <div>
        <button onClick={() => setSpinnerOn(true)}>Open</button>
      </div>
    </div>
  )
}

export default Playground