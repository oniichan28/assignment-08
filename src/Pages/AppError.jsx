import React, { useEffect, useState } from "react";
import { useRouteError, Link } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppErrorImg from "../assets/Images/app-error.png";

const AppError = () => {
  const error = useRouteError();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner mode="fast" />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 fade-in">
      <img
        src={AppErrorImg}
        alt="App Error"
        className="w-64 h-auto mb-6 object-contain"
      />

      <h1 className="text-4xl font-bold text-purple-600 mb-2">
        App Is Not Found
      </h1>

      <p className="text-gray-500 mb-6 max-w-md">
        The app you are looking for does not exist or has been removed.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl font-semibold shadow hover:opacity-90 transition">
        Back to Home
      </Link>

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

export default AppError;
