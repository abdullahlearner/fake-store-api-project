import React from 'react'

function Array() {
    const items = ['Aplle','Banana','Cherry','Mango'];
  return (
    <div>
        <ul>  {items.map(item => <li key={item}>{item}</li>)}
        
        </ul>
      

    </div>
  )
}

export default Array