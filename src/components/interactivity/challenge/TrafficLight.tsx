import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    //here if we use substitution method we know that after setWalk(!walk) we still have the walk  value true which is get by alert 
      setWalk(!walk);
      console.log(walk)
      alert(walk?"Stop is next":"walk is next")
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

