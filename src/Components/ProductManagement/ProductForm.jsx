import React from 'react';

const ProductForm = ({ handleAddProduct }) => {
  const handleProductSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    // console.log(name,price,quantity);
    const newProduct = {
      name,
      price,
      quantity,
    };
handleAddProduct(newProduct);
  };
  return (
    <div className="text-center mt-10">
      <div>
        <h2>Product Form</h2>
        <form onSubmit={handleProductSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            id=""
            className="input"
          />
          <br />
          <input
            type="text"
            name="price"
            placeholder="Product Price"
            id=""
            className="input"
          />
          <br />
          <input
            type="text"
            name="quantity"
            placeholder="Product Quantity"
            id=""
            className="input"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ProductForm;