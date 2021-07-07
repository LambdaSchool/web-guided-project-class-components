import React, { useState } from "react";

const Person = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h3>This is the bio of {props.name}</h3>    
    </div>
  )
}

const App = () => {
  const [name, setName] = useState('Tony')
  const handleClick = ()  => {
    setName('Ironman')
  }

  return (
    <div>
      <Person name={name} />
      <button onClick={handleClick}>Change to Ironman</button>
    </div>
  );
};

export default App;