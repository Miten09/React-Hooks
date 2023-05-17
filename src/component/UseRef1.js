import React, { useRef, useState } from "react";

function UseRef1() {
  const [isSubmit, setIsSubmit] = useState(0);

  const name = useRef(null);
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const nameData = name.current.value;
    const passwordData = password.current.value;
    // setname1(nameData);
    setIsSubmit(isSubmit + 1)
    // console.log(nameData);
  }
  
  return (
    <>
      <form>
        <label>Name : </label>
        <input type="text" ref={name} />
        <label>password : </label>

        <input type="password" ref={password} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
     {isSubmit && <p>{name.current && name.current.value}</p>}
     {isSubmit && <p>{password.current && password.current.value}</p>}
    </>
  );
}

export default UseRef1;
