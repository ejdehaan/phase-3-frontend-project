import React from 'react'

function Consoles( {consoles} ) {
    console.log(consoles)
    return (
    <div>
        <select>
            {consoles.map((console) => <option>{console.name}</option>)}
        </select>
    </div>
  )
}

export default Consoles