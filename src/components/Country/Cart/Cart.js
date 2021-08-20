import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    
    console.log(cart);
   
  
   const totalPopulation = cart.reduce((a, b)=> a+b.population,  0)
   const totalArea = cart.reduce((a, b)=> a+b.area,  0)
    return (
        <div>
            <h1>This cart : {cart.length} </h1>
            <p>TotalPopulation : {totalPopulation}</p>
            <p>TotalArea : {totalArea}</p>
            {
                cart.map(name =><h2>{name.name}</h2>)
            }
            

        </div>
    );
};

export default Cart;