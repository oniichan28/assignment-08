import React from 'react';
import downloadIcon from '../assets/Images/icon-downloads.png';
import reviewIcon from '../assets/Images/icon-ratings.png';
import { Link } from 'react-router-dom';

const AppCard = ({ apps }) => {
  const { title, companyName, downloads, ratingAvg, image, id } = apps;

  return (
    <Link to={`/Apps/${id}`}>
      <div className="card bg-base-100 w-full max-w-sm shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="px-6 pt-6 h-48 overflow-hidden flex justify-center">
          <img
            src={image}
            alt={companyName}
            className="rounded-xl w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center p-4">
          <h2 className="card-title text-xl sm:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-500 mb-3">{companyName}</p>
          <div className="flex flex-row justify-between items-center w-full gap-2">
            <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg w-1/2 justify-center hover:bg-gray-200 transition">
              <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
              <span className="text-[#00D390] text-sm font-medium">{downloads}</span>
            </button>

            <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg w-1/2 justify-center hover:bg-gray-200 transition">
              <img src={reviewIcon} alt="Reviews" className="w-4 h-4" />
              <span className="text-[#FF8811] text-sm font-medium">{ratingAvg}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
