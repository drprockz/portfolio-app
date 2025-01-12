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
          <div className='flex flex-row items-center justify-center animate-fadeInLeft' style={{ transitionDelay: '10s' }}>
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

      <section className="relative w-full min-h-screen overflow-hidden bg-[#080808]">
        {/* The gradient waves as the background */}
        <GradientBackground />

        {/* Content container on top of the waves */}
        <div className="relative z-10 flex flex-row items-start justify-center h-full px-8 py-12 pt-60 lg:px-16">
          <h1 className="w-[30%] leading-[70px] mb-4 font-medium text-white text-[64px] font-inter">
            Bring Ideas to Life Through Design
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-white lg:text-xl">
            I&apos;m a UI Designer with 8 years of experience creating engaging
            interfaces for web and mobile applications. I prioritize user
            experience and am committed to staying up-to-date with the latest
            trends and technologies. I work collaboratively with clients and
            team members to ensure that each project meets the unique needs and
            goals of the client. Let&apos;s create something great together!
          </p>

          {/* Example "Highlighted Skills" section */}
          {/* <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 text-white bg-gray-800 rounded">
              Wireframing
            </span>
            <span className="px-4 py-2 text-white bg-gray-800 rounded">
              High Fidelity Design
            </span>
            <span className="px-4 py-2 text-white bg-gray-800 rounded">
              Prototyping
            </span>
            <span className="px-4 py-2 text-white bg-gray-800 rounded">
              Atomic Design
            </span>
          </div> */}
        </div>
      </section>

      {/* <section className="flex flex-col justify-center items-center h-[100vh]">
        <div className='w-full'>
          <GradientBackground />
        </div>
      </section> */}
    </main>
  );
};

export default Home;
