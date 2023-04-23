import React from 'react';
import RatingStar from '../RatingStar/RatingStar';

const Product = (props) => {
    const { id, name, price, img, seller, ratings, stock } = props.products;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='w-80 rounded border grow relative card shadow-xl'>
            <img className='p-2 rounded' src={img} alt="" />
            <div className="px-4">
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p className='mb-4'>Price: ${price}</p>
            </div>
            <div className="p-4 pb-4 mt-auto">
                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings || "0"} star</p>
                {
                    <RatingStar rating = {ratings}></RatingStar>
                }
            </div>
            <button onClick={() => handleAddToCart(props.products)} className='text-black btn border-0 rounded-none w-full text-center bg-[#FFE0B3] bottom-0 p-2 hover:bg-orange-500'>Add to Card</button>
        </div>
    );
};

export default Product;