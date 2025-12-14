import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-20 pb-16
            bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-white text-5xl md:6xl font-bold mb-4'>
                        Hi, I'm <span className='text-purple'>Fatima Naz</span>
                    </h1>
                    <h2 className='text-white text-lg md:text-3xl font-semibold mb-6 typewriter' >
                        Fullstack Developer & Project Manager
                    </h2>
                    <p className='text-lg text-gray-300 mb-8'>
                        I create robust web applications and digital experiences using modern technologies. Passionate about clean code, user experience, and building scalable solutions.
                    </p>
                    <div className='flex space-x-4 mt-8'>
                        <a
                            href='#Projects'
                            className='px-6 py-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple/80 transition duration-300'
                        >
                            View My Work
                        </a>
                        <a
                            href='#Contact'
                            className='px-6 py-3 border border-purple text-purple font-semibold rounded-lg hover:bg-purple hover:text-white transition duration-300'
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className='md:w-1/2 flex justify-center'>
                    {/* Place your image or animation here */}
                    <div className='relative w-84 h-84 md:w-80 md:h-80'>
                        <div className='absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink animate-pluse-slow opasity-70 '>
                            <motion.img
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'easeInOut'
                                }}
                                className='relative rounded-full w-84 md:w-80 md:h-80 object-cover z-10 animate-float'
                                src={assets.profileImg} alt='Profile' />
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Hero
