import React from 'react'
import P1 from '../assets/projects/p1.jpeg'
import P2 from '../assets/projects/p2.jpeg'
import P3 from '../assets/projects/p3.jpeg'
import P4 from '../assets/projects/p4.jpeg'
import P5 from '../assets/projects/p5.jpeg'
import { MdOpenInNew } from "react-icons/md";
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <div className='pb-16 mt-52npm'>
        <h1 className='my-10 text-center text-4xl text-neutral-700'>Projects</h1>
        <div className='w-full px-4 flex flex-wrap justify-center'>
            <motion.div 
                className='mb-12 p-4 md:w-1/2'
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    x: {
                        damping: 1,
                        stiffness: 100
                    }
                }}
            >
                <div className='rounded-md shadow-md overflow-hidden'>
                    <img src={P1} className='w-full' alt="Project 1" />
                </div>
                <h3 className='font-semibold text-xl text-neutral-800 mt-5'> SpeedQB AIR-SHOP Catalogue</h3>
                <div className='flex flex-wrap'>
                    <a className='flex flex-wrap gap-2 bg-neutral-900 w-24 p-2 m-2 rounded-3xl hover:bg-neutral-700 duration-150' href="https://annurimat91.github.io/SpeedQB-AIRSHOP" target='_blank'> <p className='pl-2'>Open</p> <MdOpenInNew /> </a>
                    <a className='p-1 m-2 text-neutral-800 hover:text-cyan-700 hover:border-b border-cyan-700 hover:duration-150' href="https://github.com/AnnurImat91/SpeedQB-AIRSHOP" target='_blank'> Source Code </a>
                </div>
            </motion.div>
            <motion.div 
                className='mb-12 p-4 md:w-1/2'
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    x: {
                        damping: 1,
                        stiffness: 100
                    }
                }}
            >
                <div className='rounded-md shadow-md overflow-hidden'>
                    <img src={P2} className='w-full' alt="Project 1" />
                </div>
                <h3 className='font-semibold text-xl text-neutral-800 mt-5'> Software Solution Website Service </h3>
                <div className='flex flex-wrap'>
                    <a className='flex flex-wrap gap-2 bg-neutral-900 w-24 p-2 m-2 rounded-3xl hover:bg-neutral-700 duration-150' href="#"> <p className='pl-2'>Open</p> <MdOpenInNew /> </a>
                    <a className='p-1 m-2 text-neutral-800 hover:text-cyan-700 hover:border-b border-cyan-700 hover:duration-150' href=""> Source Code </a>
                </div>
            </motion.div>
            <motion.div 
                className='mb-12 p-4 md:w-1/2'
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    x: {
                        damping: 1,
                        stiffness: 100
                    }
                }}
            >
                <div className='rounded-md shadow-md overflow-hidden'>
                    <img src={P3} className='w-full' alt="Project 1" />
                </div>
                <h3 className='font-semibold text-xl text-neutral-800 mt-5'> BMI Calculator Design </h3>
                <div className='flex flex-wrap'>
                    <a className='flex flex-wrap gap-2 bg-neutral-900 w-24 p-2 m-2 rounded-3xl hover:bg-neutral-700 duration-150' href="#"> <p className='pl-2'>Open</p> <MdOpenInNew /> </a>
                    <a className='p-1 m-2 text-neutral-800 hover:text-cyan-700 hover:border-b border-cyan-700 hover:duration-150' href=""> Source Code </a>
                </div>
            </motion.div>
            <motion.div 
                className='mb-12 p-4 md:w-1/2'
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    x: {
                        damping: 1,
                        stiffness: 100
                    }
                }}
            >
                <div className='rounded-md shadow-md overflow-hidden'>
                    <img src={P4} className='w-full' alt="Project 1" />
                </div>
                <h3 className='font-semibold text-xl text-neutral-800 mt-5'> Kezii Estudioo Web Design </h3>
                <div className='flex flex-wrap'>
                    <a className='flex flex-wrap gap-2 bg-neutral-900 w-24 p-2 m-2 rounded-3xl hover:bg-neutral-700 duration-150' href="#"> <p className='pl-2'>Open</p> <MdOpenInNew /> </a>
                    <a className='p-1 m-2 text-neutral-800 hover:text-cyan-700 hover:border-b border-cyan-700 hover:duration-150' href=""> Source Code </a>
                </div>
            </motion.div>
            <motion.div 
                className='mb-12 p-4 md:w-1/2'
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    x: {
                        damping: 1,
                        stiffness: 100
                    }
                }}
            >
                <div className='rounded-md shadow-md overflow-hidden'>
                    <img src={P5} className='w-full' alt="Project 1" />
                </div>
                <h3 className='font-semibold text-xl text-neutral-800 mt-5'> Gallery Image Landing Page </h3>
                <div className='flex flex-wrap'>
                    <a className='flex flex-wrap gap-2 bg-neutral-900 w-24 p-2 m-2 rounded-3xl hover:bg-neutral-700 duration-150' href="#"> <p className='pl-2'>Open</p> <MdOpenInNew /> </a>
                    <a className='p-1 m-2 text-neutral-800 hover:text-cyan-700 hover:border-b border-cyan-700 hover:duration-150' href="https://github.com/AnnurImat91/CodeAlpha_ImageGallery_ImatImansyah" target='_blank'> Source Code </a>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Project