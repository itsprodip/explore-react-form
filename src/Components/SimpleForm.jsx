import React from "react";

const SimpleForm = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Name: ",event.target.name.value);
        console.log("Email: ",event.target.email.value);

    }
  return (
    <div className="flex justify-center w-11/12 mx-auto mt-10">
      <form className="text-center" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Type here" className="input" />
        <input type="email" name="email" id="" placeholder="email" className="input" />
        <br />
        <input className="bg-gray-400 mt-3 p-3 rounded-lg" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
