import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Logo from "../assets/Images/logo.png";

const Footer = () => {
  return (
    <footer className="footer flex flex-wrap sm:footer-horizontal bg-black text-gray-300 p-10">
      
      <aside className="flex flex-col flex-1 min-w-[250px]">
        <div className="flex items-center gap-4 mb-4">
          <img src={Logo} alt="Logo" className="w-[50px] h-[50px]" />
          <h1 className="font-bold text-2xl text-white tracking-wide">HERO.IO</h1>
        </div>
        <p className="text-sm leading-relaxed text-gray-400 max-w-md">
          Hero.io is an all-in-one web platform designed to host and showcase powerful apps and tools — all in one place. Discover, explore, and use smart web apps that make your digital experience easier, faster, and better.
          <br /><br />
          <span className="text-gray-300 font-semibold">
            Hero.io — One Web. Endless Apps.
          </span>
        </p>
      </aside>

    
      <nav className='flex flex-col flex-1 ml-15'>
        <h6 className="footer-title text-white mb-3">Solutions</h6>
        <a className="link link-hover text-gray-400">Web App Development</a>
        <a className="link link-hover text-gray-400">UI/UX Design</a>
        <a className="link link-hover text-gray-400">SEO & Marketing</a>
        <a className="link link-hover text-gray-400">Brand Strategy</a>
      </nav>

     
      <nav className='flex flex-col flex-1'>
        <h6 className="footer-title text-white mb-3">Company</h6>
        <a className="link link-hover text-gray-400">About Hero.io</a>
        <a className="link link-hover text-gray-400">Contact & Support</a>
        <a className="link link-hover text-gray-400">Our Team</a>
        <a className="link link-hover text-gray-400">Partnerships</a>
      </nav>

      
      <nav className='flex flex-col flex-1'>
        <h6 className="footer-title text-white mb-3">Resources</h6>
        <a className="link link-hover text-gray-400">Documentation</a>
        <a className="link link-hover text-gray-400">Blog & Updates</a>
        <a className="link link-hover text-gray-400">API Access</a>
        <a className="link link-hover text-gray-400">Community Forum</a>
      </nav>

      
      <nav className='flex flex-col flex-1'>
        <h6 className="footer-title text-white mb-3">Legal</h6>
        <a className="link link-hover text-gray-400">Terms of Service</a>
        <a className="link link-hover text-gray-400">Privacy Policy</a>
        <a className="link link-hover text-gray-400">Cookie Policy</a>
      </nav>

      
      <div className="w-full border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Hero.io — All rights reserved.
        </p>
        <div className="flex gap-5 text-gray-400 text-lg">
          <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white transition-colors"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
