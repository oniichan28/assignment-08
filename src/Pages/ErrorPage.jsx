import React, { useEffect, useState } from "react";
import { useRouteError, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 fade-in">
        <h1 className="text-6xl font-bold text-purple-600 mb-4">
          {error?.status || 404}
        </h1>
        <h2 className="text-3xl font-semibold mb-2">
          {error?.statusText || "Page Not Found"}
        </h2>
        <p className="text-gray-500 mb-6 max-w-md">
          {error?.data ||
            "Sorry, the page you’re looking for doesn’t exist or has been moved."}
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl font-semibold shadow hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>

      <Footer />

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
