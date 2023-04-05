import React from 'react';

const Cart = (props) => {
    const cartProducts = props.cartProduct
    console.log(cartProducts);
    let cartQuantity = 0 ;
    let totalPrice = 0 ;
    let shipping = 0 ;
    let tax = 0 ;
    for(let cartProduct of cartProducts){
        // cartProduct.quantity = cartProduct.quantity || 1 ;
        cartQuantity += cartProduct.quantity ;
        totalPrice += cartProduct.price * cartProduct.quantity ;
        shipping += cartProduct.shipping * cartProduct.quantity ;
    }
    return (
        <div className='bg-[#FFE0B3] w-96 p-2'>
            <h3 className='text-center text-2xl my-5'>
                Order Summary
            </h3>
            <p>
                Select Cart Item: {cartQuantity}
            </p>
            <p>Total Price: ${totalPrice.toLocaleString()}</p>
            <p>Total Shipping Charge: ${shipping.toLocaleString()}</p>
            <p>Tax: ${tax.toLocaleString()} </p>
            <h3 className=' text-2xl my-5'>
                Grand Total: : ${(totalPrice + shipping + shipping + tax).toLocaleString()}
            </h3>
        </div>
    );
};

export default Cart;