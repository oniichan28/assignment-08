import React, { useState, useEffect } from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';

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
    return <p className="text-center py-10 text-red-500">Error loading apps.</p>;
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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center py-8">
        {searchedApps.map(app => (
          <AppCard key={app.id} apps={app} />
        ))}
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

export default Apps;
