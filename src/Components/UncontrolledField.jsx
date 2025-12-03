import React, { useRef } from "react";

const UncontrolledField = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');

    const handleSubmit=(event)=>{
        event.preventDefault();
      
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password);
    }
  return (
    <div className="flex justify-center w-11/12 mx-auto mt-10">
      <div className="text-center">
        <h2>UnControlled filled form</h2>
        <form className="text-center" onSubmit={handleSubmit}>
          <input type="email" ref={emailRef} name="" className="input" /> <br />
          <input type="password" ref={passwordRef} name="" className="input" /> <br />
          <input type="submit" value="Submit" className="input" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default UncontrolledField;
