'use client';

import Spline from '@splinetool/react-spline';
import Features from './Features';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-700 to-purple-600 text-white min-h-screen px-6 md:px-16 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            The Future of Health<br />on Your Wrist
          </h1>
          <p className="text-lg md:text-xl text-indigo-100">
            Discover our next-gen smartwatch with advanced tracking, retina display, and water resistance.
          </p>
          <button 
          onClick={() => alert('Soon Available!')}
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-100 transition duration-200">
            Buy Now
          </button>
        </div>

        {/* Right Side: Watch + Features */}
        <div className="w-full h-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-6">

          {/* Spline Watch */}
          
            <Spline scene="https://prod.spline.design/CGuzLWnF07F4aTEV/scene.splinecode" />
       

         
        </div>

      </div>
      <Features />
    </section>
  );
}
