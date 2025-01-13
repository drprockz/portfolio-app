// Home.js
import React from 'react';
import './Home.css';
import GradientBackground from './GradientBackground';
import Card from './components/common/card';
import ProjectCard from './components/ProjectCard';
import p1 from './assets/images/projects/p1.svg';
import p2 from './assets/images/projects/p2.svg';

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
        <div className="relative z-10 flex flex-row h-full container mx-auto pt-60">
          <h1 className="w-[30%] leading-[70px] mb-4 font-medium text-white text-[64px] font-inter">
            Bring Ideas to Life Through Design
          </h1>
          <p className="max-w-lg mb-8 ml-80 leading-8 text-[1.25rem] text-[#CECECE] font-inter font-normal">
            I&apos;m a UI Designer with 8 years of experience creating engaging
            interfaces for web and mobile applications. I prioritize user
            experience and am committed to staying up-to-date with the latest
            trends and technologies. I work collaboratively with clients and
            team members to ensure that each project meets the unique needs and
            goals of the client. Let&apos;s create something great together!
          </p>


        </div>
        <div className="relative z-10 flex flex-col h-full container mx-auto pt-60">
          <p className='font-inter font-normal text-[40px] text-white -tracking-[5%]'>Highlighted Skills</p>
          <div className='flex flex-row gap-4 mt-4'>
            <Card text='Wireframing' />
            <Card text='High Fidelity Design' />
            <Card text='Prototyping' />
            <Card text='Atomic Design' />
          </div>
        </div>
      </section>

      <section className="flex flex-col h-auto pt-60">
        <div className='w-full h-[45vh] flex flex-col bg-bg-pattern bg-cover bg-no-repeat bg-center'>
          <div className='container mx-auto flex flex-col justify-end mb-20 h-full'>
            <p className='font-inter font-medium text-[64px] text-white'>My Projects</p>
            <p className='font-inter font-normal text-[40px] leading-[56px] text-[#A1A1A1]'>Where form meets function seamlessly</p>
            <p className='font-inter font-normal text-[40px] leading-[56px] text-[#A1A1A1]'>to create captivating digital experiences.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col h-auto pt-2">
        <div className='w-full container mx-auto' id='projects'>
          <div className='w-full flex flex-row justify-start gap-8'>
            <ProjectCard
              title='Fatch'
              image={p1} date='Jan - Mar 2023'
              description='Elevate smartwatch game with custom-designed smartwatch faces.'
              role='Frontend Developer'
            />

            <ProjectCard
              title='Fatch'
              image={p1} date='Jan - Mar 2023'
              description='Elevate smartwatch game with custom-designed smartwatch faces.'
              role='Frontend Developer'
            />

            <ProjectCard
              title='Fatch'
              image={p2} date='Jan - Mar 2023'
              description='Elevate smartwatch game with custom-designed smartwatch faces.'
              role='Frontend Developer'
            />

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
