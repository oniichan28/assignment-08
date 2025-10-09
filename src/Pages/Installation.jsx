import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import { FaDownload, FaStar } from "react-icons/fa";
import { SlSocialDropbox } from "react-icons/sl";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const { apps, setApps, loading } = useApps();
  const [sortOrder, setSortOrder] = useState("none");
  const [pageLoading, setPageLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installed")) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (appId) => {
    const updatedInstalled = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedInstalled);
    localStorage.setItem("installed", JSON.stringify(updatedInstalled));

    const appToRestore = installedApps.find((app) => app.id === appId);
    if (appToRestore) {
      setApps((prev) => [...prev, appToRestore]);
    }
  };

  const parseSize = (size) => {
    if (!size) return 0;
    return parseFloat(size.toString().replace(/[^\d.]/g, "")) || 0;
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    const sizeA = parseSize(a.size);
    const sizeB = parseSize(b.size);

    if (sortOrder === "size-asc") return sizeA - sizeB;
    if (sortOrder === "size-dsc") return sizeB - sizeA;
    return 0;
  });

  if (loading || pageLoading) {
    return <LoadingSpinner mode="fast" />;
  }

  return (
    <div className="flex flex-col min-h-screen fade-in">
      <main className="flex-1 overflow-auto px-3 sm:px-6 pt-6 sm:pt-10">
        <div className="flex flex-col justify-center items-center mb-6 text-center">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <h1 className="font-bold text-3xl sm:text-4xl">Your Installed Apps</h1>
            <SlSocialDropbox className="w-8 h-8 sm:w-10 sm:h-10 text-purple-700 font-bold" />
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex justify-between items-center mb-2 border-b pb-2">
          <h1 className="text-purple-500 font-semibold border-b-2 border-purple-400 pb-1 text-sm sm:text-base">
            {sortedApps.length} Apps Found
          </h1>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-2 py-1 text-sm sm:text-base"
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low → High</option>
            <option value="size-dsc">High → Low</option>
          </select>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          {sortedApps.length === 0 ? (
            <p className="text-center py-10">No apps installed</p>
          ) : (
            <div className="flex flex-col gap-4">
              {sortedApps.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between rounded-lg p-4 shadow hover:shadow-md transition bg-white gap-4"
                >
                  <Link to={`/Apps/${app.id}`} className="w-16 h-16 flex-shrink-0">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/Apps/${app.id}`}>
                      <h2 className="text-base sm:text-lg font-bold hover:text-purple-600 truncate">
                        {app.title}
                      </h2>
                    </Link>
                    <p className="text-gray-500 text-xs sm:text-sm truncate">
                      {app.companyName}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <FaDownload className="text-blue-600" /> <span>{app.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" /> <span>{app.ratingAvg}</span>
                      </div>
                      <div>
                        <span className="text-gray-700">Size: {app.size}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-xs sm:text-sm"
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

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

export default Installation;
