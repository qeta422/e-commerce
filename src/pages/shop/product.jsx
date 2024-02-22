import React from 'react'

export const Product = (props) => {
  const {id, name, price, img} = props.data;
  return (
    <div className='product'>
      <img  src= {img} />
      <div className='description'>
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn'>Add To Cart</button>
    </div>
  )
};
