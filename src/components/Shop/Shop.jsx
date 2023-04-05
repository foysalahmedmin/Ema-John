import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart } from '../../utilities/localStorageManage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [showProduct, setShowCount] = useState(12);
    const [products, setProducts] = useState([])
    const [cartProducts, setCurtProduct] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const showCountUpdate = () => {
    const updateCount = showProduct + 6 ;
    setShowCount(updateCount);
  }
  
    const show = () => {
            const storedCart = getShoppingCart()
            const saveCart = [];
            for(let id in storedCart){
            const cartProduct = products.find(product => product.id === id)
            if(cartProduct){
                const cartQuantity = storedCart[id];
                cartProduct.quantity = cartQuantity;
                saveCart.push(cartProduct);
            }
        }
        setCurtProduct(saveCart);
    }

    useEffect(() =>{
        show()
    }, [products]);
    
    const handleAddToCart = (data) =>{
        let newData = []
        // const updateCart = [...cartProducts, data];
        const exist = cartProducts.find((pd)=> pd.id === data.id);
        if(!exist){
            data.quantity = 1 ;
            newData = [...cartProducts, data]
        }else{
            data.quantity += 1 ;
            const restCartProducts = cartProducts.filter((pd)=> pd.id !== data.id);
            newData = [...restCartProducts, data]
        }
        // setCurtProduct(updateCart);
        setCurtProduct(newData);
        addToDb(data.id)
        // show()
    }

    return (
        <section className='mt-[85px]'>
            <div className="container mx-auto flex">
                <div>
                    <h1 className='text-center text-3xl font-bold pt-7'>Products</h1>
                    <div className='flex flex-wrap gap-12 justify-center my-12'>
                        {
                            products.map((product => <Product
                                products={product}
                                key = {product.id}
                                handleAddToCart = {handleAddToCart}
                                ></Product>)).slice(0, showProduct)
                        }
                    </div>
                    <div className='text-center'>
                        <button className='text-center bg-[#FFE0B3] bottom-0 p-2  
            mb-12 hover:bg-orange-500' onClick={showCountUpdate}>Show More</button>
                    </div>
                </div>
                <div className='bg-[#FFE0B3]'>
                    <Cart cartProduct = {cartProducts}></Cart>
                </div>
            </div>
        </section>
    );
};

export default Shop;