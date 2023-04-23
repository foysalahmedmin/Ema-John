import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/localStorageManage';
import OrderCart from '../OrderCart/OrderCart';
const Orders = () => {
    const cartProductsLoad = useLoaderData();
    const [cartProducts, setCurtProducts] = useState(cartProductsLoad)
    const cartClearHandler = () => {
        setCurtProducts([]);
        deleteShoppingCart();
    }
    const singleCartDeleteHandler = (id) => {
        removeFromDb(id);
        const update = cartProducts.filter((data)=> data.id !==id)
        setCurtProducts(update);
    }
    return (
        <section className='pt-[85px] md:p-0'>
            <div className="container px-[1.5%] md:h-screen mx-auto flex justify-between items-center">
                <div>
                    <h1 className='text-center text-3xl font-bold pt-7 mb-4'>Products</h1>
                    <div className='w-[50rem]'>
                        {
                            cartProducts[0]? 
                            cartProducts.map(product => <OrderCart data = {product} singleCartDeleteHandler= {singleCartDeleteHandler}></OrderCart>) 
                            :
                            <div className='text-secondary text-center py-10 font-bold text-2xl'>You Have No Shopping Cart, Go and Shopping First</div>
                        }
                    </div>
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