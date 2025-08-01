import React from "react";

const About = () => {
    return (
        <div className="bg-black text-white py-20" id='about'>
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <p className="text-lg mb-8">I'm a Final Year Student studying Computer Science at King's College London coming off a full years worth of experience within Industry.
                        If you do want to have a chat, please do not hesitate to connect!
                        </p>


                        <div className="space-y-4">
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Linux and Terminal</label>
                                <div className="grow bh-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Python (with data science packages)</label>
                                <div className="grow bh-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>ReactJS + NodeJS</label>
                                <div className="grow bh-gray-800 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center gap-12 text-center">
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>1+</h3>
                                <p>Years Experience</p>
                            </div>

                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10+</h3>
                                <p>Projects completed</p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About