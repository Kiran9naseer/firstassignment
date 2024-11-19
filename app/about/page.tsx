"use client"; 
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading'; // Import the Loading component

const AboutPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds delay for loading state

    return () => clearTimeout(timer)
  }, [])

  return (
    
    <div className=" min-h-screen flex items-center justify-center bg-gray-50">
       
      {loading ? (
        <div className="flex justify-center items-center space-x-2">
          <div className="w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          <span className="text-xl font-semibold text-gray-700">Loading...</span>
        </div>
      ) : (
        <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-700 text-lg">
            Welcome to our About page! Here, you'll learn all about our company,
            mission, and values. We strive to deliver the best products and services to our customers.
          </p>
          <p className="text-gray-700 mt-4">
            Our team is dedicated, passionate, and always looking for innovative solutions to make your experience
            better. We are constantly improving and evolving to meet your needs.
          </p>
        </div>
      )}
    </div>
  )
}

export default AboutPage
