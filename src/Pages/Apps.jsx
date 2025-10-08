import React from 'react';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';

const Apps = () => {
  const { apps, loading, error } = useApps(); 

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10">Error loading apps</p>;

  return (
   
    <div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center py-8">
        {apps.map(apps => (
          <AppCard key={apps.id} apps={apps} />
        ))}
      </div>
    </div>
    
  );
};

export default Apps;
