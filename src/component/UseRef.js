import React, { useRef } from "react";

function UseRef() {
  const luckyName = useRef(null);
  const counter = useRef(0);

  function handleSubmit() {
    console.log(luckyName.current.value);
  }

  function IncreaseCounter() {
    counter.current = counter.current + 1;
    console.log(counter.current);
  }
  return (
    <>
      {/* <label>Name : </label>
      <input type="text" placeholder="Your Name" ref={luckyName} />
      <button onClick={handleSubmit}>Submit</button> */}
      <h2>{counter.current}</h2>

      <button onClick={IncreaseCounter}>Increase</button>
    </>
  );
}

export default UseRef;
