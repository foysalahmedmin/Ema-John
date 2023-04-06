import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='fixed w-full z-10 top-0 bg-black'>
            <div className="container px-[1.5%] mx-auto">
                <nav className='flex items-center justify-between py-5'>
                    <img className='w-36' src={logo} alt="" />
                    <ul className='flex items-center gap-8 list-none'>
                        <li><Link className='text-white' to="/">Shop</Link></li>
                        <li><Link className='text-white' to="/orders">Orders</Link></li>
                        <li><Link className='text-white' to="/inventory">Inventory</Link></li>
                        <li><Link className='text-white' to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;