import React, { useState } from "react";
import LogoImg from '../assets/Images/logo.png';
import { Home, AppWindow, Download, Menu, Github, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Apps', path: '/Apps', icon: <AppWindow className="w-5 h-5" /> },
    { name: 'Installation', path: '/Installation', icon: <Download className="w-5 h-5" /> },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 md:px-8 lg:px-10 mx-auto">

      <div className="navbar-start">
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <a href="/" 
           className="btn btn-ghost normal-case text-xl flex items-center gap-2">
          <img src={LogoImg} alt="Logo" className="w-10 h-10" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold text-2xl">
            HERO.IO
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navItems.map(item => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 ${isActive ? 'text-blue-700 font-semibold border-b-2 border-blue-700' : 'text-gray-700'}`
                }
              >
                {item.icon} {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-base-100 shadow-lg lg:hidden z-50">
          <ul className="menu menu-compact p-4">
            {navItems.map(item => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-2 ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700'}`
                  }>
                  {item.icon} {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="navbar-end flex items-center gap-2">
        <a
          href="https://github.com/oniichan28"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:opacity-90">
          <Github className="w-5 h-5" /> Contribute
        </a>
      </div>

    </div>
  );
};

export default Navbar;
