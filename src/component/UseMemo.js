import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setcount] = useState(0);
  const [items, setitems] = useState(100);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <>
      <h2>Count : {count}</h2>
      <h2>Items : {items}</h2>
      <button onClick={() => setcount(count + 1)}>
        Count Update - {count}{" "}
      </button>
      <span>{isEven ? "Even" : "odd"}</span>
      &nbsp;&nbsp;
      <button onClick={() => setitems(items * 10)}>Items Update</button>
    </>
  );
}

export default UseMemo;
