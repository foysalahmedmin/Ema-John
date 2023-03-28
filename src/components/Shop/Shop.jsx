import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <section>
            <div className="container mx-auto flex">
                <div className='flex flex-wrap gap-12 justify-center my-12'>
                    {
                        products.map((product => <Product
                             products={product}
                             key = {product.id}
                             ></Product>)).slice(0, props.showProduct)
                    }
                </div>
                    <div className='bg-[#FFE0B3]'>
                    <div className='bg-[#FFE0B3] w-96 p-2'>
                        <h3 className='text-center text-2xl my-5'>
                            Order Summary
                        </h3>
                        <p>
                            Select Cart Item: {}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Shop;