
import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Laskurii</h1>
      <p> {count}</p>
      <button onClick={increaseCounter}>Lisää</button>
      <button onClick={decreaseCounter}>Vähennä</button>
    </div>
  );
};

export default CounterApp;
