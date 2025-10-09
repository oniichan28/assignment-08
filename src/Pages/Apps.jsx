import React, { useState, useEffect } from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';
import AppErrorImg from '../assets/Images/App-Error.png';

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState('');
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const term = search.trim().toLowerCase();
  const searchedApps = term 
    ? apps.filter(app => app.title.toLowerCase().includes(term))
    : apps;

  if (loading || pageLoading) {
    return <LoadingSpinner mode="fast" />;
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center text-center py-16 fade-in">
        <img
          src={AppErrorImg}
          alt="App Error"
          className="w-64 h-auto mb-4 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/256?text=App+Error';
          }}
        />
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Error Loading Apps</h2>
        <p className="text-gray-500 mb-6 max-w-md">
          There was a problem loading the app data. Please check your connection and try again.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl font-semibold shadow hover:opacity-90 transition cursor-pointer"
          >
            Retry
          </button>
          <a
            href="/"
            className="px-6 py-3 bg-gray-100 text-gray-800 rounded-xl font-semibold shadow hover:bg-gray-200 transition cursor-pointer"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 py-5'>
        <h1 className='text-3xl font-bold'>
          ({searchedApps.length}) Apps Found
        </h1>
        <div className="relative w-full sm:w-64">
          <svg 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
            className="pl-10 pr-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>
      {searchedApps.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-5">
          <h1 className="text-5xl font-bold text-gray-500 mb-6">No Apps Found</h1>
          <button
            onClick={() => setSearch('')}
            className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl font-semibold shadow hover:opacity-90 transition cursor-pointer"
          >
            Show All Apps
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center py-8">
          {searchedApps.map(app => (
            <AppCard key={app.id} apps={app} />
          ))}
        </div>
      )}

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

export default Apps;
