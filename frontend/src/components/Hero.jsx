import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full' id='home'>
        <div className='relative top-24 xs:top-72'>
                <h4 className='uppercase medium-18 tracking-wider'>
                    Aquarium Products
                </h4>
                <h1 className='h1 capitalize max-w-[40rem]'>
                    Upgrade Your Aquarium <span className='text-secondary'>With Every Click</span> Shop Today! 
                </h1>
                <p className='my-5 max-w-[33rem]'>
                aquariums keep fish and other aquatic animals in large tanks. A large aquarium may have otters, 
                dolphins, sharks, penguins, seals, and whales. Many aquarium tanks also have plants. An aquarist 
                owns fish or maintains an aquarium, typically constructed of glass or high-strength acrylic.
                </p>
            
                <div className='flex items-center gap-x-4'>
                <Link to={""} className='inline-flex items-center justify-center gap-4 p-3 bg-white rounded-xl'>
                <div className='regular-14 leading-tight pl-4'>
                    <h5 className='uppercase font-bold'>New Arrivals</h5>
                    <p className='regular-14 mt-1'>10% off</p>
                </div>
                <div className='bg-primary h-10 w-10 rounded-full flexCenter'>
                    <FaArrowRight />
                </div>
                </Link>
                <Link to={""} className='inline-flex items-center justify-center gap-4 p-3 bg-tertiary text-white rounded-xl'>
                <div className='regular-14 leading-tight pl-4'>
                    <h5 className='uppercase font-bold'>Hot Deals</h5>
                    <p className='regular-14 mt-1'>50% off</p>
                </div>
                <div className='bg-primary h-10 w-10 rounded-full flexCenter text-tertiary'>
                    <FaArrowRight />
                </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
