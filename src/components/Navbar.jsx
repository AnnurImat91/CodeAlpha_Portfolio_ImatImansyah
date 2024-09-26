import React from 'react'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between '>
        <div className="flex flex-shrink-0 items-center text-black text-3xl">
            <a className='ml-10' href='#'>Portfolio</a>
        </div> 
        <div className='m-8 flex items-center justify-center gap-6 text-black text-xl'>
            <a className=' hover:text-cyan-500 transition-colors' href="#about">About</a>
            <a className=' hover:text-cyan-500 transition-colors' href="#project">Project</a>
            <a className=' hover:text-cyan-500 transition-colors' href="#skill">Skill</a>
        </div>
    </nav>
  )
}

export default Navbar