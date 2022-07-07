import React, {useState} from 'react'


function Consoles( {consoles, handleChange} ) {
    
    const [selected, setSelected] = useState()
    
    
    return (
    <div>
        <select onChange={handleChange} value={selected}>
            {consoles.map((console) => <option 
            key={console.id} 
            name="console_id"
            value={console.id}>{console.name}
            </option>)}
        </select>
    </div>
  )
}

export default Consoles