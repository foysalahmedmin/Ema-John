import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <main className='mt-[85px]'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Home;