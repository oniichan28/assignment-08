import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop'; 

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <ScrollToTop /> 
      <Navbar />
      <main className='flex-1 w-full mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
