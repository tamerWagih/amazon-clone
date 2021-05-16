import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { getBasketTotal } from './reducer';
import { useStatevalue } from './stateProvider';
import './Subtotal.css';

function Subtotal() {
  const [{ basket }] = useStatevalue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScal={2}
        value={getBasketTotal(basket).toFixed(2)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
