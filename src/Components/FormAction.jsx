import React from 'react';

const FormAction = () => {
    const handleForm=(formData)=>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (
      <div className="flex justify-center w-11/12 mx-auto mt-10">
        <div className="text-center">
          <h2>Form Action</h2>
          <form className="text-center" action={handleForm}>
            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="email"
              className="input"
            />
            <br />
            <input
              className="bg-gray-400 mt-3 p-3 rounded-lg"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
};

export default FormAction;