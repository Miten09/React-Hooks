import "./App.css";
import { Route, Routes } from "react-router-dom";
import UseRef from "./component/UseRef";
import UseRef1 from "./component/UseRef1";
import Memo from "./component/Memo";
import UseMemo from "./component/UseMemo";
import Useeffect from "./component/Useeffect";

function App() {
  return (
    <>
      {/* <UseRef /> */}
      {/* <UseRef1/> */}
      {/* <Memo/> */}
      {/* <UseMemo/> */}
      <Useeffect/>
    </>
  );
}

export default App;
