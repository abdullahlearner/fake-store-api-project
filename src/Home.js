import React, { useState } from 'react'
import Card from './Card'
import Array from './Array'
import Nav from './Nav'


function Home() {
  const number = 100;
  const [count, setCount] = useState(500);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  

  return (
    <div>
       <Nav />
      My CV Website 
      <br />
      {number}
      <br />

      <h1>  COUNTER : {count}</h1>
      <button onClick={increment}>Increment</button> 
      <button onClick={decrement}>Decrement</button> 
      <button onClick={reset}>Rest</button> 
        {/* <Array /> */}
        {/* <Card name="Abdullah" title="Web Developer"/>
        <Card name="waseem" title="Grapich desinger"/>
        <Card name="hassan"title="FrontEnd Web desinger"/> */}
    </div>
  )
}

export default Home