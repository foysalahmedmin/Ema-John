import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const OrderCart = ({ data , singleCartDeleteHandler}) => {
    console.log(data)
    const { img, name, quantity, price, id } = data
    return (
        <div className='flex gap-5 p-3 items-center w-full border rounded-xl my-5'>
            <img className='w-20 h-20' src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>Price: <span className='text-orange-500'>${price}</span></p>
                <p>Quantity: <span className='text-orange-500'>{quantity}</span></p>
            </div>
            <button onClick={()=>singleCartDeleteHandler(id)} className='justify-end ml-auto btn btn-ghost text-2xl bg-red-100 text-red-500 rounded-full'><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    );
};

export default OrderCart;