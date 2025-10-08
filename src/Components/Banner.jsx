import React from 'react';
import { FaGooglePlay, FaApple, FaDownload, FaStar } from 'react-icons/fa';
import { SiGoogleplay } from "react-icons/si";
import HeroImg from '../assets/Images/hero.png';

const Banner = () => {
  return (
    <div className="flex flex-col justify-center text-center">
 
      <div>
        <h1 className="font-bold text-[60px]">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{' '}
          Apps
        </h1>
        <p className="text-[#627382] text-[20px]">
          <i>
            At <span className="font-black">HERO.IO</span>, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.
            <br />
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </i>
        </p>
      </div>
      <div className="flex gap-4 justify-center items-center py-6">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border px-5 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg hover:brightness-110 transition-transform duration-300 bg-white hover:bg-grey">
          <FaGooglePlay className="w-6 h-6" />
          <span className="text-lg font-semibold">Play Store</span>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border px-5 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg hover:brightness-110 transition-transform duration-300">
          <FaApple className="w-6 h-6" />
          <span className="text-lg font-semibold">App Store</span>
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img src={HeroImg} alt="HeroImg" />
      </div>

<div className="relative left-1/2 -translate-x-1/2 w-screen bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-6 ">
  <div className="text-white max-w-6xl mx-auto py-5 mt-2">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
      Trusted by Millions, Built for You
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-x divide-white/40
mx-5 my-10 ">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font">Total Downloads</h3>
        <div className='flex gap-3'>
            <h3 className="text-4xl font-bold">29.6M</h3>   <FaDownload size={40} className="mb-4" />
        </div>
        <p className="text-sm">21% more than last month</p>
      </div>
      <div className="flex flex-col items-center ">
        
        <h3 className="text-2xl font">Total Reviews</h3>
         <div className='flex gap-3'>
            <h3 className="text-4xl font-bold">29.6M</h3> <FaStar size={40} className="mb-4" />
        </div>
         <p className="text-sm">46% more than last month</p>
      </div>
      <div className="flex flex-col items-center ">
        <h3 className="text-2xl font">Active Apps</h3>
         <div className='flex gap-3'>
            <h3 className="text-4xl font-bold">132+</h3> <SiGoogleplay size={40} className="mb-4" />
        </div>
        <p className="text-sm">31 more will Launch</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Banner;
