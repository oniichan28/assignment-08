import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 max-w-screen-2xl w-full px-4 md:px-8 lg:px-12 px-4 md:py-8 lg:py-12 mx-auto   '>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;