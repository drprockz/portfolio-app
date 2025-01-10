// Home.js
import React from 'react';
import './Home.css';
import GradientBackground from './GradientBackground';

const Home = () => {
  return (
    <main>
      <section className="home-container flex flex-col justify-center items-center h-[100vh] relative">
        <div className="gradient"></div>
        <div className='absolute'>
          <h1 className='font-inter font-regular text-white text-[10rem] text-center animate-fadeInLeft'>Darshan Parmar</h1>
          <div className='flex flex-row justify-center items-center animate-fadeInLeft' style={{ transitionDelay: '10s' }}>
            <span className='font-inter font-light text-[#A1A1A1] text-[3rem] text-center'>Crafting pixel-perfect designs that </span>
            <span className='font-inter font-light text-transparent bg-clip-text bg-gradient-to-r from-[#ffc700] to-[#ff7a00] text-[3rem] text-center ml-4'> bring ideas to life</span>
          </div>
          <div className='flex flex-row justify-center items-center mt-6 animate-fadeInLeft delay-[2s]'>
            <button className="inline-flex items-center h-10 px-5 py-8 text-indigo-100 transition-colors duration-150 bg-gradient-to-b from-[#5200ff] to-[#3d00bd] hover:opacity-85 rounded-full">
              <span className='font-inter font-medium text-white text-[1.5rem] uppercase mr-4'>Contact Me</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.125 10H16.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <a className='font-inter font-medium text-white text-[1.5rem] ml-8 uppercase underline' href="#projects">See Projects</a>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center h-[100vh]">
        <div className='w-full'>
          <GradientBackground />
        </div>
      </section>
    </main>
  );
};

export default Home;
