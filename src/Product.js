import React from 'react';
import './Product.css';
import { useStatevalue } from './stateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStatevalue();
  const addToBasket = () => {
    const savedBasket = [...basket, { id, title, image, price, rating }];
    localStorage.setItem('basket', JSON.stringify(savedBasket));

    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <h5>{title}</h5>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
