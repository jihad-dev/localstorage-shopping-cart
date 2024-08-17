import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Cart: {cart.length}</h1>
            <div className='flex gap-2 pb-2'>
                {
                cart.map((crt,i) => <img className='w-20' key={i} src={crt?.img} alt="" />)

                }
               
            </div>
        </div>
    );
};

export default Cart;