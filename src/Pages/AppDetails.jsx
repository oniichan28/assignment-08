import React from 'react';
import { useParams } from 'react-router-dom';
import useApps from '../Hooks/useApps';
import { FaDownload, FaStar, } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();

  const app = apps.find(a => a.id === Number(id));

  if (!app) return <p className="text-center py-10">App not found</p>;

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads } = app;

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex flex-col md:flex-row gap-20">
        <img src={image} alt={title} className="w-60 h-60 md:w-60 md:h-60 object-cover rounded-lg shadow" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <hr className="my-3 border-gray-300" />
          <p className="text-gray-500 flex gap-2 mt-3">
            <span>Developed by</span>
            <span className="text-purple-500 font-semibold">{companyName}</span>
          </p>
          <div className="flex flex-wrap gap-10 mt-6">
            <div>
                <h3 className='text-[10px]'>Downloads</h3>
                <div className="flex items-center gap-2">
              <span className="font-bold text-xl">{downloads}</span>
              <FaDownload className="text-blue-700" size={20} />
            </div>
            </div>
            <div>
                
                <h3 className='text-[10px]'>Avarage Ratings</h3>
                <div className="flex items-center gap-2">
              <span className="font-bold text-xl">{ratingAvg}</span>
              <FaStar className="text-blue-700" size={20} />
            </div>
            </div>
            <div>
                 <h3 className='text-[10px]'>Total Reviews</h3>
                 <div className="flex items-center gap-2">
              <span className="font-bold text-xl">{reviews} </span>
              <MdOutlineReviews size={20} className=" text-blue-700" />
            </div>
            </div>
          </div>
          <button className="mt-6 btn btn-primary flex items-center gap-2">
            Install Now
            <span className="ml-2">{size}MB</span>
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
