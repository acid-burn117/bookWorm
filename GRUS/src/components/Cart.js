import React from 'react';

function Cart(props) {
    return (
        <div className='Cart'>
           <header>
               <button>Go to Cart ({Cart.length})</button>
            </header> 
        </div>
    );
}

export default Cart;