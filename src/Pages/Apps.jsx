import React, { useState } from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';

const Apps = () => {
  const { apps, loading, error } = useApps(); 
  const [search, setSearch] = useState('');
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term 
    ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) 
    : apps;

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10">Error loading apps</p>;

  return (
    <div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-bold'>({searchedApps.length}) Apps Found</h1>
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center py-8">
        {searchedApps.map(app => (
          <AppCard key={app.id} apps={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
