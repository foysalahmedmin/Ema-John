import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const LogIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const {singIn} = useContext(AuthContext);
    const logInHandler = (e) =>{
        const form = e.target
        const email = form.email.value;
        const pass = form.pass.value;
        singIn(email, pass)
        .then(result => {
            console.log(result.user)
            navigate(from, {replace: true})
        })
    }
    return (
        <section className='py-16'>
            <div className='container mx-auto'>
                <div className='max-w-lg mx-auto p-12 border shadow'>
                    <h3 className='mb-12 text-center text-3xl'>LogIn</h3>
                    <form onSubmit={logInHandler} className='w-full' action="">
                        <label htmlFor="email-login">Email</label>
                        <input className='mb-5 w-full border' type="email" name='email' id='email-login' />
                        <label htmlFor="pass-login">Password</label>
                        <input className='mb-5 w-full border' type="password" name="pass" id="pass-login" />
                        <div className='text-center'>
                            <input className='bg-[#FFE0B3] hover:bg-orange-500 w-full' type="submit" value="LogIn" />
                        </div>
                    </form>
                    <p className='text-center'>New to Ema-john? <Link to="/singUp">Create New Account</Link></p>
                </div>
            </div>

        </section>
    );
};

export default LogIn;