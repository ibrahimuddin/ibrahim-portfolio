import React from 'react'

const Home = () => {
    return (
        <div className='bg-black text-white text-center py-16' id='home'>
            <h1 className='text-4xl font-bold'>I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-5 00'>Ibrahim Uddin</span>
                , Final Year Undergraduate Computer Science Student
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                    I specialise in Software engineering and Data Analysis Projects!
            </p>
            <div className='mt-8 space-x-4'>
                <button className='bg-gradient-to-r from-green-400 to-blue-700 text-white hidden md:inline
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect With Me</button>
                <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>CV</button>
            </div>
        </div>
    )
}

export default Home 