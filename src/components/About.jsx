import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'>
            <div className='container mx-auto px-6'>
                {/* Heading */}
                <h2 className='text-3xl font-bold text-center mb-2'>
                    About <span className='text-purple'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-12'>
                    Certified Project Manager & Full-Stack Developer specializing in delivering effective, user-focused solutions.
                </p>
                {/* Image + My Journey */}
                <div className='flex flex-col md:flex-row items-center gap-12 '>
                    {/* Profile Image */}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover rounded-2xl'
                            src={assets.profileImg}
                            alt='Profile'
                        />
                    </div>
                    {/* Text / My Journey */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'>
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>
                                I started my career as an <span className='font-semibold'>IT Project Manager</span>, leading projects and coordinating teams to deliver successful outcomes. This experience gave me a strong foundation in translating business needs into actionable solutions and sparked my passion for building technology.</p>
                            <p className='text-gray-300 mb-12'>
                                Driven by this passion, I transitioned into a <span className='font-semibold'>Full-Stack Developer</span> role, designing and developing scalable web applications. I focus on solving complex business challenges through AI and automation, writing clean, maintainable code, and continuously learning and sharing knowledge to push the boundaries of digital innovation.
                            </p>
                            {/* cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                                {aboutInfo.map((data, index) => (
                                    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                                        <div className='text-purple text-4xl mb-4 '>
                                            <data.icon />
                                        </div>
                                        <h3 className='text-gray-400'>{data.title}</h3>
                                        <p>{data.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;

