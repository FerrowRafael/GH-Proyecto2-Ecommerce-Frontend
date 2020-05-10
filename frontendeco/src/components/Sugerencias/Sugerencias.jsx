import React from 'react'

const Suggestions = (props) => {
    console.log(props)
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions