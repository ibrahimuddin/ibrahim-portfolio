import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='w-full py-2 flex items-center justify-between'>
                <div className='text-2xl font-bold hidden md:inline'>Ibrahim</div>
                <div className='space-x-6'>
                    <a href="#home" className='hover:text-gray-400'>Home</a>
                    <a href="#about" className='hover:text-gray-400'>About</a>
                    <a href="#projects" className='hover:text-gray-400'>Projects</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-700 text-white hidden md:inline
             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me</button>
            </div>

        </nav>

    )
}

export default Navbar