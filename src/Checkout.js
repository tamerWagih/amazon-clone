import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStatevalue } from './stateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket, user }] = useStatevalue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email.split('@')[0]}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={Math.random() * 10}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
