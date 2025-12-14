import React from 'react'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
    return (
        <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
            <img src={image} alt={title} className='w-full h-60 object-fit-contain' />

            <div className='p-6 flex flex-col flex-1'>
                <h3 className='text-xl font-semibold mb-2'>
                    {title}
                </h3>
                <p className='text-gray-400 mb-4 flex-1'>
                    {description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4 '>
                    {tech.map((item, index) => (
                        <span key={index} className='bg-dark-400 rounded-full px-3 py-1 text-sm'>{item}</span>
                    ))}
                </div>
                <div className="flex gap-2 mt-auto">
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-purple text-white font-medium rounded-lg hover:bg-purple/80 transition duration-300"
                    >
                        View Demo
                    </a>
                    <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border border-purple text-purple font-medium rounded-lg hover:bg-purple hover:text-white transition duration-300"
                    >
                        Code
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard
