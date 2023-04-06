import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cartProducts = props.cartProduct
    console.log();
    let cartQuantity = 0;
    let totalPrice = 0;
    let shipping = 0;
    let tax = 0;
    for (let cartProduct of cartProducts) {
        // cartProduct.quantity = cartProduct.quantity || 1 ;
        cartQuantity += cartProduct.quantity;
        totalPrice += cartProduct.price * cartProduct.quantity;
        shipping += cartProduct.shipping * cartProduct.quantity;
    }
    return (
        <div className='bg-[#FFE0B3] w-96 p-2'>
            <h3 className='text-center font-bold text-3xl my-5'>
                Order Summary
            </h3>
            <div className='my-12 px-4'>
                <p className='text-xl mb-3'>
                    <strong className = 'font-semibold'>Select Cart Item:</strong> {cartQuantity}
                </p>
                <p className='text-xl mb-3'> <strong className = 'font-semibold'>Total Price:</strong> ${totalPrice.toLocaleString()}</p>
                <p className='text-xl mb-3'> <strong className = 'font-semibold'>Total Shipping Charge:</strong> ${shipping.toLocaleString()}</p>
                <p className='text-xl'> <strong className = 'font-semibold'>Tax:</strong> ${tax.toLocaleString()} </p>
                <h3 className=' text-2xl my-5 font-bold'>
                    Grand Total: : ${(totalPrice + shipping + shipping + tax).toLocaleString()}
                </h3>
            </div>
            <div className='text-center'>
                <button onClick={props.cartClearHandler} className='btn btn-secondary w-full text-xl font-semibold border-0 text-white mb-4 flex justify-between'><span className='mr-3'>Clear Cart</span>  <FontAwesomeIcon icon={faTrashCan} /></button>
                {props.children}
            </div>
        </div>
    );
};

export default Cart;