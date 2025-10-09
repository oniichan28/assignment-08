import React, { useEffect, useState } from "react";
import { useRouteError, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorImg from "../assets/Images/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner mode="fast" />;
  }

  const is404 = error?.status === 404;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 fade-in">
        <img
          src={ErrorImg}
          alt={is404 ? "404 Error" : "Error"}
          className="w-64 h-auto mb-6 object-contain"
        />

        { !is404 && (
          <h1 className="text-5xl font-bold text-purple-600 mb-2">
            {error?.status || "Error"}
          </h1>
        )}

        <h2 className="text-2xl font-semibold mb-2">
          {error?.statusText || (is404 ? "Page Not Found" : "Something went wrong")}
        </h2>

        <p className="text-gray-500 mb-6 max-w-md">
          {is404
            ? "Sorry, the page you are looking for might be removed, renamed, or is temporarily unavailable."
            : "An unexpected error occurred. Please try again later."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Go Back Home
          </Link>

          <Link
            to="/apps"
            className="px-6 py-3 bg-gray-100 text-gray-800 rounded-xl font-semibold shadow hover:bg-gray-200 transition"
          >
            Browse Apps
          </Link>
        </div>
      </div>

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

export default ErrorPage;
