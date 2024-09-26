import React from 'react'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className='pb-16 border-b border-t border-neutral-900 '>
            <motion.div 
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 , duration: 2 }} 
            >
                <h1 className='my-10 text-center text-4xl text-neutral-700'> About Me </h1>
            </motion.div>
            <motion.div 
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 , duration: 150 }} 
            >
                <div className="flex flex-wrap">
                    <div className="w-full text-center">
                        <p className='text-neutral-800'>I am an active undergraduate student of Informatics Engineering at Universitas Komputer Indonesia in Bandung, West Java. I have the ability to
                        create web applications and designs. The courses I have taken include Web Programming, Object-Oriented Programming, Database Analysis and Design, Data Management, Software Engineering, and creating software applications and designs.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}

export default About