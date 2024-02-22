import React from 'react'

export const Product = (props) => {
  const {id, name, price, img} = props.data;
  return (
    <div>
      {name}
    </div>
  )
};
