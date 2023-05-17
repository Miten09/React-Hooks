import React, { useCallback, useMemo, useState } from "react";
import HomeMemo from "./HomeMemo";

function Memo() {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(100);

  const learning = useMemo(() => {}, [data]);

  return (
    <>
      <div>Memo with React {count}</div>
      <HomeMemo data={learning} data1={data} />
      <br />
      <button onClick={() => setcount(count + 1)}>Increment</button>&nbsp;
      <button onClick={() => setdata(data * 10)}>Data Increment</button>
    </>
  );
}

export default Memo;
