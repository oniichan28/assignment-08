import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApps from '../Hooks/useApps';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';
import RatingChart from './RatingChart';
import LoadingSpinner from '../Components/LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [localLoading, setLocalLoading] = useState(true);
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('installed')) || [];
    setInstalledApps(existing.map(a => a.id));
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setLocalLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading || localLoading) return <LoadingSpinner mode="fast" />;

  const app = Array.isArray(apps) ? apps.find(a => String(a.id) === String(id)) : null;

  if (!app) return <p className="text-center py-10 text-gray-500">App not found</p>;

  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;
  const isInstalled = installedApps.includes(app.id);

  const handleInstall = () => {
    if (isInstalled) return;

    const existing = JSON.parse(localStorage.getItem('installed')) || [];
    const updated = [...existing, app];
    localStorage.setItem('installed', JSON.stringify(updated));
    setInstalledApps(prev => [...prev, app.id]);

    toast.success(`${title} Installed Successfully!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex flex-col md:flex-row gap-20">
        <img
          src={image}
          alt={title}
          className="w-60 h-60 md:w-60 md:h-60 object-cover rounded-lg shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <hr className="my-3 border-gray-300" />
          <p className="text-gray-500 flex gap-2 mt-3">
            <span>Developed by</span>
            <span className="text-purple-500 font-semibold">{companyName}</span>
          </p>

          <div className="flex flex-wrap gap-10 mt-6">
            <div>
              <h3 className="text-[10px]">Downloads</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">{downloads}</span>
                <FaDownload className="text-blue-700" size={20} />
              </div>
            </div>

            <div>
              <h3 className="text-[10px]">Average Ratings</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">{ratingAvg}</span>
                <FaStar className="text-blue-700" size={20} />
              </div>
            </div>

            <div>
              <h3 className="text-[10px]">Total Reviews</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">{reviews}</span>
                <MdOutlineReviews size={20} className="text-blue-700" />
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleInstall}
              className="mt-6 btn btn-primary flex items-center gap-2"
              disabled={isInstalled}
            >
              {isInstalled ? 'Installed' : 'Install Now'}
              {!isInstalled && <span className="ml-2">{size}MB</span>}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <RatingChart ratings={ratings || {}} />
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
