import React from 'react'
import { SiTailwindcss } from "react-icons/si";
import { motion } from 'framer-motion';
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import viteLogo from '/vite.svg'
import reactLogo from '../assets/svg/react.svg'
import javascriptLogo from '../assets/svg/javascript.svg'
import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import php from '../assets/svg/php.svg'
import mysql from '../assets/svg/mysql.svg'
import node from '../assets/svg/node-js.svg'
import mongodb from '../assets/svg/mongodb.svg'
import figma from '../assets/svg/figma.svg'
import framer from '../assets/svg/framer.svg'
import express from '../assets/svg/express.svg'
import git from '../assets/svg/git.svg'

const Skill = () => {
    return (
        <div className='pb-24'>
            <h1 className='my-10 text-center text-4xl  text-neutral-900'> Skills </h1>
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
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={html} className='size-14 logo' alt="html logo" />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={css} className='size-14 logo react' alt="css logo" />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={javascriptLogo} className='size-14 logo' alt="Javascript logo" />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={reactLogo} className='size-14 logo react animate-spin-slow' alt="React logo" />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={viteLogo} className='size-14' alt="Vite logo" />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <FaBootstrap className='text-6xl text-purple-800 size-14' />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <SiTailwindcss className='text-6xl text-cyan-400 size-14' />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={framer} className='size-14' alt="framer logo" />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={figma} className='size-14' alt="figma logo" />
                    </div>
                </div>
            </motion.div>
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
                <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
                    <div className='p-2 hover:translate-y-3 duration-150'>
                        <img src={php} className='size-14 logo rounded-full' alt="php logo" />
                    </div>
                    <div className='p-2 hover:translate-y-3 duration-150'>
                        <img src={node} className='size-14 logo' alt="php logo" />
                    </div>
                    <div className='p-2 hover:translate-y-3 duration-150'>
                        <img src={express} className='size-14 logo' alt="php logo" />
                    </div>
                    <div className='p-2 hover:translate-y-3 duration-150'>
                        <img src={mysql} className='size-14 logo' alt="php logo" />
                    </div>
                    <div className='p-2 hover:translate-y-3 duration-150'>
                        <img src={mongodb} className='size-14 logo' alt="php logo" />
                    </div>
                </div>
            </motion.div>
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
                <div className="flex flex-wrap items-center justify-center gap-4 pt-10">
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <img src={git} className='size-14 logo rounded-full' alt="git logo" />
                    </div>
                    <div className='p-2 hover:-translate-y-3 duration-150'>
                        <FaGithub className='text-6xl text-neutral-900 size-14' />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Skill