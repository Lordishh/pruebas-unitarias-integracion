import React, { useState } from "react";

import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  //Hook Counter
  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleIncrement = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
