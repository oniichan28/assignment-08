import React from 'react';
import { Outlet, useRouteError } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
      const Error = useRouteError();
  
    return <div>
        <Navbar />
            <Outlet/>
            <Footer/>
            </div>;
}


export default ErrorPage;