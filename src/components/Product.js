import React from 'react'

export default function Product(props) {
    let {product, onAdd, onRemove} = props;
  return (
    <div className="product">
      <div onClick={onRemove} className="remove">x</div>
      <div className="productImgWrapper">
        <img className="smallImage" src={product.image} alt={product.name}></img>
      </div>
      <h3>{product.name}</h3>
      <div>€{product.price}</div>
      <div>
          <button onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  )
}
