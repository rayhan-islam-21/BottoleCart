import React, { use, useState } from 'react';
import Product from '../Product/Product';
import './Product.css'
import { addLocalCart } from '../../utils/localStorage';


const Products = ({productDataPromise}) => {
    const productData = use(productDataPromise)
    const [productCart,setProductCart]=useState([]);
    const handleProduct = (cartProduct)=>{
       const numberOfProducts = [...productCart,cartProduct];
       setProductCart(numberOfProducts)
       console.log(numberOfProducts)
       addLocalCart(cartProduct.id)
    }
    
    return (
        <>  
        <div>
            <h1 className='text-3xl m-12 font-bold ' >Cart : {productCart.length}</h1>
        </div>
            <div className='products'>
                {productData.map((product,index) =><Product key={index} handleProduct={handleProduct} product={product}></Product>)}
            </div>
        </>
    );
};

export default Products;