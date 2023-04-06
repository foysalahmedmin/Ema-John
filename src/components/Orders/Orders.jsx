import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { deleteShoppingCart } from '../../utilities/localStorageManage';
const Orders = () => {
    const cartProductsLoad = useLoaderData();
    const [cartProducts, setCurtProducts] = useState(cartProductsLoad)
    const cartClearHandler = () => {
        setCurtProducts([]);
        deleteShoppingCart();
    }
    return (
        <section className='mt-[85px]'>
            <div className="container px-[1.5%] mx-auto flex justify-between">
                <div>
                    <h1 className='text-center text-3xl font-bold pt-7'>Products</h1>
                </div>
                <div className='bg-[#FFE0B3]'>
                    <Cart cartProduct={cartProducts} cartClearHandler= {cartClearHandler}>
                        <Link to='/checkout'>
                            <button className='btn btn-warning w-full text-xl font-semibold border-0 text-white flex justify-between'><span className='mr-3'>Proceed Checkout</span> <FontAwesomeIcon icon={faCreditCard} /></button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </section>
    );
};

export default Orders;