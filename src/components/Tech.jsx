import React from 'react'
import { SiTailwindcss } from "react-icons/si";
import viteLogo from '/vite.svg'
import reactLogo from '../assets/svg/react.svg'
import javascriptLogo from '../assets/svg/javascript.svg'
import framer from '../assets/svg/framer.svg'
import { motion } from "framer-motion"


const Tech = () => {
    return (
        <div className='border-b border-t border-neutral-100 bg-cyan-600 pb-24'>
            <h1 className='my-10 text-center text-4xl  text-neutral-100'> Technology Used </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    className="box"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={reactLogo} className='size-14 logo react animate-spin-slow' alt="React logo" />
                    </div>
                </motion.div>
                <motion.div
                    className="box"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 2,
                        ease: [0, 0.71, 0.2, 1.5],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={viteLogo} className='size-14' alt="Vite logo" />
                    </div>
                </motion.div>
                <motion.div
                    className="box"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 3,
                        ease: [0, 0.71, 0.2, 1.5],
                        scale: {
                            type: "spring",
                            damping: 7,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <SiTailwindcss className='text-6xl text-cyan-400 size-14' />
                    </div>
                </motion.div>
                <motion.div
                    className="box"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 5,
                        ease: [0, 0.71, 0.2, 1.5],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={javascriptLogo} className='size-14 logo' alt="Javascript logo" />
                    </div>
                </motion.div>
                <motion.div
                    className="box"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 5,
                        ease: [0, 0.71, 0.2, 1.5],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={framer} className='size-14 logo' alt="framer logo" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Tech