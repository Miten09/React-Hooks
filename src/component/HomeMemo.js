import { React, memo } from "react";

function HomeMemo({ data,data1}) {
  console.log("Inner Component");
  return <div> items : {data1}</div>;
}

export default memo(HomeMemo);
