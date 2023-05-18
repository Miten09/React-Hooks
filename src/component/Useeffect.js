import React, { useEffect, useState } from "react";

function Useeffect() {
  const [count, setcount] = useState(0);
  const [items, setitems] = useState(1);

  //   let a = 0;

  useEffect(() => {
    console.log("Hello UseEffects!");
  }, [items]);
  console.log("outside useeffects");

  function handleClick() {
    // a++
    // console.log((a = a + 1));
    setcount(count + 1);
  }
  
  
  return (
    <>
      <p>{count}</p>
      <p>{items}</p>
      <button onClick={handleClick}>Click Me</button>&nbsp;&nbsp;
      <button onClick={() => setitems(items * 10)}>Items Increase</button>
    </>
  );
}

export default Useeffect;
