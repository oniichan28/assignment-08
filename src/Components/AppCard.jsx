import React from 'react';
import downloadIcon from '../assets/Images/icon-downloads.png';
import reviewIcon from '../assets/Images/icon-ratings.png'
import { Link } from 'react-router-dom';



const AppCard = ({apps}) => {
    const {title, companyName, downloads,ratingAvg, image, id } = apps
    return (
        <Link to ={`/Apps/${id}`}>
        <div className="card bg-base-100 w-full max-w-sm shadow-sm hover:scale-105 transition ease-in-out">

  <figure className="px-10 pt-10 h-48 overflow-hidden">
    <img
      src={image}
      alt={companyName}
      className="rounded-xl w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold">{title}</h2>
    
  <div className="card-actions flex justify-between w-full px-2">
  <button className="btn">
    <img src={downloadIcon} alt="Downloads" className="w-[16px] h-[16px]" /> 
<h1 className='text-[#00D390]'> {downloads}</h1>
  </button>
  <button className="btn">
    <img src={reviewIcon} alt="Reviews" className="w-[16px] h-[16px]" />
    
    <h1 className='text-[#FF8811]'> {ratingAvg}</h1>
  </button>
</div>

  </div>
</div>
        </Link>
    );
};

export default AppCard;