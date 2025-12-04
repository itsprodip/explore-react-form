import React, { useState } from "react";

const ControlledFilled = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErros] = useState("");
  const handleSubmit = (event) => {
    console.log("submitted");
    event.preventDefault();
    console.log(email,password);
  };
  const handleChangeEmail = event =>{
    setEmail(event.target.value);
  }
  const handleChangePassword = (event) => {
    event.preventDefault();

    setPassword(event.target.value);
    console.log(password);
    password.length < 5
      ? setErros("Password required 6 character or more")
      : setErros("password ok");
  };
  return (
    <div className="flex justify-center w-11/12 mx-auto mt-10">
      <div className="text-center">
        <h2>Controlled filled form</h2>
        <form className="text-center" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id=""
            placeholder="email"
            className="input"
            onChange={handleChangeEmail}
            defaultValue={email}
            
            required
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input"
            onChange={handleChangePassword}
            defaultValue={password}
            required
          />
          <br />
          <input
            className="bg-gray-400 mt-3 p-3 rounded-lg"
            type="submit"
            value="Submit"
          />
        </form>
        <p
          className={`${
            password.length < 6 ? "text-red-500" : "text-green-500"
          }`}
        >
          <small>{errors}</small>
        </p>
      </div>
    </div>
  );
};

export default ControlledFilled;
