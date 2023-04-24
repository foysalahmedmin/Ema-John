import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const logOutHandler = () => {
        logOut()
    }
    return (
        <header className='fixed w-full z-10 top-0 bg-black'>
            <div className="container px-[1.5%] mx-auto">
                <nav className='flex items-center justify-between py-5'>
                    <img className='w-36' src={logo} alt="" />
                    <ul className='flex items-center gap-8 list-none'>
                        <li className='text-white'><ActiveLink to="/">Shop</ActiveLink></li>
                        <li className='text-white'><ActiveLink to="/orders">Orders</ActiveLink></li>
                        <li className='text-white'><ActiveLink to="/inventory">Inventory</ActiveLink></li>
                        <li className='text-white'><ActiveLink to="/login">Login</ActiveLink></li>
                        <li className='text-white'><ActiveLink to="/singUp">Sing Up</ActiveLink></li>
                        {
                            user && <button onClick={logOutHandler} className='bg-white'>LogOut</button>
                        }
                    </ul>

                </nav>
            </div>
        </header>
    );
};

export default Header;