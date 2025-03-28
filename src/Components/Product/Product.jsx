import React, { useState } from "react";

const Product = ({product,handleProduct}) => {
  return (
    <>
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={product.img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-black">{product.name}</h2>
          <p className="text-black">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div class="card-actions justify-end">
            <button onClick={()=> handleProduct(product)}  class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
