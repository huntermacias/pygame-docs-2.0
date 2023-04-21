"use client"
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const NoDataAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <FaExclamationCircle className="text-6xl text-gray-300" />
      <h2 className="text-2xl font-medium text-gray-500">
        Oops! No data available.
      </h2>
      <p className="text-lg text-gray-400">
        We could not find any data matching your search.
      </p>
      <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300">
        Try Again
      </button>
    </div>
  );
};

export default NoDataAvailable;

