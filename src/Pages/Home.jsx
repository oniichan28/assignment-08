import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../Components/AppCard';
import useApps from '../Hooks/useApps';

const Home = () => {

  const { apps, loading, error } = useApps()
  
  const featuredApps = apps.slice(0, 8)
   
    return (
        <div>
            
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center py-8">
          {featuredApps.map(app => (
           <AppCard key={app.id} apps={app} />
  ))}
  
</div>
<div className='py-5 justify-center my-5 mx-auto flex items-center t'>
    <Link className='btn btn-outline w-[300px] h-[50px] p-5 rounded-xl bg-gradient-to-l  from-[#632EE3] to-[#9F62F2]
text-white' to='/Apps'><h1 className='text-2xl font-semibold'>Show All</h1></Link>
  </div>
        </div>
    );
};


export default Home;