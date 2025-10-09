import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import Banner from '../Components/Banner';
import { FaArrowTrendUp } from "react-icons/fa6";
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
  const { apps, loading } = useApps();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || pageLoading) {
    return <LoadingSpinner mode="slow" />;
  }

  const featuredApps = apps.slice(0, 8);

  return (
    <div className="fade-in px-3 sm:px-6">
      <Banner />

      <div className='flex flex-col justify-center items-center gap-3 mt-5 relative'>
        <div className="flex items-center gap-3 mt-5">
          <h1 className="text-5xl font-semibold">Trending Apps</h1>
          <FaArrowTrendUp className="text-purple-600 w-12 h-12" />
        </div>
        <p className="text-gray-500 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center py-8">
        {featuredApps.map(app => (
          <AppCard key={app.id} apps={app} />
        ))}
      </div>

      <div className='py-5 flex justify-center my-5'>
        <Link 
          className='btn btn-outline w-[300px] h-[50px] rounded-xl bg-gradient-to-l from-[#632EE3] to-[#9F62F2] text-white flex items-center justify-center'
          to='/Apps'>
          <h1 className='text-2xl font-semibold'>Show All</h1>
        </Link>
      </div>

      <style>
        {`
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease forwards;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
