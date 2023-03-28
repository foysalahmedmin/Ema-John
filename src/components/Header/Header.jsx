import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <header className='bg-[#1C2B35]'>
            <div className="container mx-auto">
                <nav className='flex items-center justify-between py-5'>
                    <img className='w-36' src={logo} alt="" />
                    <ul className='flex items-center gap-4 list-none'>
                        <li><a className='text-white' href="/shop">Shop</a></li>
                        <li><a className='text-white' href="/order">Orders</a></li>
                        <li><a className='text-white' href="/inventory">Inventory</a></li>
                        <li><a className='text-white' href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;