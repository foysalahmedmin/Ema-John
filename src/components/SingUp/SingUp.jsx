import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Result } from 'postcss';

const SingUp = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const handleSingUp = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value
        const pass = form.pass.value
        const con_pass = form.con_pass.value
        setError('')
        if(pass !== con_pass){
            setError('Your Password did not match!')
        }else if(pass.length < 6){
            setError('Password must be 6 disits')
        }else{
            console.log(email, pass, con_pass)
            createUser(email, pass)
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
        }
    }
    return (
        <section className='py-16'>
            <div className='container mx-auto'>
                <div className='max-w-lg mx-auto p-12 border shadow'>
                    <h3 className='mb-12 text-center text-3xl'>singUp</h3>
                    <form onSubmit={handleSingUp} className='w-full' action="">
                        <label htmlFor="email-singUp">Email</label>
                        <input className='mb-5 w-full border' type="email" name='email' id='email-singUp' />
                        <label htmlFor="pass-singUp">Password</label>
                        <input className='mb-5 w-full border' type="password" name="pass" id="pass-singUp" />
                        <label htmlFor="con-pass-singUp">Confirm Password</label>
                        <input className='mb-5 w-full border' type="password" name="con_pass" id="con-pass-singUp" />
                        <div className='text-center'>
                            <input className='bg-[#FFE0B3] hover:bg-orange-500 w-full' type="submit" value="singUp" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to="/singUp"> Login </Link></p>
                    <p className='text-red-700 text-center'>{error}</p>
                </div>
            </div>

        </section>
    );
};

export default SingUp;