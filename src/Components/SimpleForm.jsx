import React from "react";

const SimpleForm = () => {
  return (
    <div className="flex justify-center w-11/12 mx-auto mt-10">
      <form className="text-center">
        <input type="text" placeholder="Type here" className="input" />
        <br />
        <input className="" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
