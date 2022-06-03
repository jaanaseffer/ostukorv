import React from 'react'

export default function Product(props) {
    const {product} = props;
  return (
    <div>
        <img className="smallImage" src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>€{product.price}</div>
        <div>
            <button>Add to cart</button>
        </div>
    </div>
  )
}
