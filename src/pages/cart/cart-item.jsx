import React from 'react'

export const CartItem = (props) => {
    const {id, name, price, img} = props.data;

  return (
    <div className='cartItem'>
      <img src = {img}/>
      <div className='description'>
        <p><b>{name}</b></p>
        <p>{price}</p>
      </div>
    </div>
  )
}


