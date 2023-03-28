import React from 'react';
import { addToDb } from '../../utilities/localStorageManage';

const Product = (props) => {
    const {id, name, price, img, seller, ratings, stock} = props.products;
    return (
        <div className='w-80 rounded border grow relative'>
             <img className='p-2 rounded' src= {img} alt="" />
             <div className="cont p-4 pb-11">
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p className='mb-12'>Price: {price}</p>
                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings || "0"} star</p>
             </div>
             <button onClick={()=> addToDb(id)} className='w-full text-center bg-[#FFE0B3] absolute bottom-0 p-2 hover:bg-orange-500'>Add to Card</button>
        </div>
    );
};

export default Product;