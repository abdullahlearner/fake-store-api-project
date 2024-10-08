import React from 'react'
import Content from './Content'
import Button from './Button'

function Card(props) {
    // const name = "waseem"

  return (
    <div className="card border-primary">
      <div className="card-body">
        <h4 className="card-title" style={{color:'blue',backgroundColor:'black',fontSize:'20px'}}>{props.name}</h4>
        <p className="card-text">{props.title}</p>
        <Content />
        <Button />
      </div>
    </div>
  )
}

export default Card