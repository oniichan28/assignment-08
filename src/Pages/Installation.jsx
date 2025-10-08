import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import { FaDownload, FaStar } from 'react-icons/fa';
import { SlSocialDropbox } from 'react-icons/sl';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const { apps, setApps } = useApps(); 
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem('installed')) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (appId) => {
    const updatedInstalled = installedApps.filter(app => app.id !== appId);
    setInstalledApps(updatedInstalled);
    localStorage.setItem('installed', JSON.stringify(updatedInstalled));

    const appToRestore = installedApps.find(app => app.id === appId);
    if (appToRestore) {
      setApps(prev => [...prev, appToRestore]);
    }
  };
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === 'low-high') return a.size - b.size;
    if (sortOrder === 'high-low') return b.size - a.size;
    return 0; 
  });

  if (!apps.length) return <p className="text-center py-10">Loading...</p>;

  return (
    <div>
      <div className='flex flex-col justify-center items-center mb-6'>
        <div className='flex justify-center items-center gap-2'>
          <h1 className='font-bold text-4xl'>Your Installed Apps</h1> 
          <SlSocialDropbox className='w-10 h-10 text-purple-700 font-bold'/>
        </div>
        <p className='text-gray-500'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center mb-2 border-b pb-2'>
        <h1 className='text-purple-500 font-semibold mb-2 md:mb-0'>
          {installedApps.length} Apps Found
        </h1>
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="none">Sort By Size</option>
          <option value="low-high">Low-High</option>
          <option value="high-low">High-Low</option>
        </select>
      </div>

      <div className="max-w-6xl mx-auto p-5 grid gap-6">
        {sortedApps.map((app) => (
          <div key={app.id} className="flex items-center justify-between rounded-lg p-4 shadow hover:shadow-md transition bg-white">
            <div className="w-24 h-24 flex-shrink-0">
              <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1 ml-6">
              <h2 className="text-xl font-bold">{app.title}</h2>
              <p className="text-gray-500 text-sm">{app.companyName}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <FaDownload className="text-blue-600" /> <span>{app.downloads}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" /> <span>{app.ratingAvg}</span>
                </div>
                <div>
                  <span className="text-gray-700">Size: {app.size}MB</span>
                </div>
              </div>
            </div>
            <div>
              <button 
                className="btn btn-primary hover:bg-red-700 text-white"
                onClick={() => handleUninstall(app.id)}
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
