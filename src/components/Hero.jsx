import React, { useEffect, useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import TypingEffect from '../tools/TypingEffect';
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion"

const Hero = () => {
    const words = ['Front-End Developer', 'Web Designer', 'React Developer'];
    return (
        <div className='pb-4  lg:mb-35 flex items-center justify-center'>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full">
                    <div className="flex flex-col items-center lg:items-center">
                        <motion.div 
                            whileInView={{ y: 0, opacity: 1 }}
                            initial={{ y: -100, opacity: 0 , duration: 2 }}
                        
                        >
                            <h1 className='pb-10 text-6xl text-neutral-800 font-medium tracking-tight lg:mt-16'>Imat Imansyah</h1>
                        </motion.div>
                        <span className='pb-10 bg-gradient-to-r from-cyan-300 to-blue-800 bg-clip-text text-4xl tracking-tight text-transparent'>
                        &lt;<TypingEffect words={words} />&gt;
                        </span>
                        <div className='pb-10 flex items-center justify-center gap-3 text-neutral-800 text-3xl'>
                                <a className='hover:text-blue-700 transition-colors' href="https://www.linkedin.com/in/imat-imansyah" target='_blank'><FaLinkedin /></a>
                                <a className='hover:text-neutral-600 hover:bg-white rounded-3xl transition-colors' href="https://github.com/AnnurImat91" target='_blank'><FaGithub /></a>
                                <a className='border-b rounded-lg hover:bg-gradient-to-tr from-orange-500 to-purple-800 transition-colors hover:text-white transition-colors' href="https://instagram.com/anndrctrnt" target='_blank'><FaInstagram /></a>
                            </div>
                            <div className=' border-neutral-900 flex items-center justify-center gap-3 text-neutral-800'>
                                <button className='flex gap-2 p-3 rounded-full border-solid border-2 border-neutral-950 hover:bg-black duration-150 hover:text-white animate-bounce '>Download CV <FiDownload /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )  
}

export default Hero