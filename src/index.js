import React from 'react'
import { render } from 'react-dom'

import Playground from './components/Playground'
/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
  const { cohortPrefix, cohort, someObj } = props
  return (
    <div className='container'>
      <h1>Welcome to React, {cohortPrefix} {cohort}</h1>
      <p>Number of Students: {someObj.studentsInZoom}</p>
      <Playground cohort={cohort} />
    </div>
  )
}

render(
 <App cohortPrefix='Web' cohort='45' someObj={{ studentsInZoom: 78 }} />,
  document.querySelector('#root')
)
