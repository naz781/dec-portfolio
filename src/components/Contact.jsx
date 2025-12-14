// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

// const Contact = () => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//             viewport={{ once: true }}
//             id='Contact'
//             className='py-20 bg-dark-200'
//         >
//             <div className='container mx-auto px-6'>
//                 <h2 className='text-3xl font-bold text-center mb-4'>
//                     Get In <span className='text-purple'>Touch</span>
//                 </h2>
//                 <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
//                     Have a project in mind or want to collaborate? Let's talk!
//                 </p>

//                 {/* Flex layout */}
//                 <div className='flex flex-col lg:flex-row lg:space-x-12 max-w-5xl mx-auto'>

//                     {/* Contact form */}
//                     <div className='flex-1'>
//                         <form className='space-y-4'>
//                             <div>
//                                 <label htmlFor='name' className='block text-gray-300 mb-2'>Name</label>
//                                 <input
//                                     id='name'
//                                     className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                                     type='text'
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor='email' className='block text-gray-300 mb-2'>Email</label>
//                                 <input
//                                     id='email'
//                                     className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                                     type='email'
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor='message' className='block text-gray-300 mb-2'>Message</label>
//                                 <textarea
//                                     id='message'
//                                     className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                                 />
//                             </div>
//                             <div>
//                                 <button
//                                     type='submit'
//                                     className='w-full px-6 py-3 border border-purple text-purple font-semibold rounded-lg hover:bg-purple hover:text-white transition duration-300'
//                                 >
//                                     Send
//                                 </button>
//                             </div>
//                         </form>
//                     </div>

//                     {/* Contact info */}
//                     <div className='flex-1 mt-12 lg:mt-0 flex flex-col justify-center space-y-8'>
//                         <div className='flex items-start'>
//                             <div className='text-purple text-2xl mr-4'>
//                                 <FaMapMarkerAlt />
//                             </div>
//                             <div>
//                                 <h3 className='text-lg font-semibold'>Location</h3>
//                                 <p className='text-gray-400'>New York, USA</p>
//                             </div>
//                         </div>
//                         <div className='flex items-start'>
//                             <div className='text-purple text-2xl mr-4'>
//                                 <FaEnvelope />
//                             </div>
//                             <div>
//                                 <h3 className='text-lg font-semibold'>Email Address</h3>
//                                 <p className='text-gray-400'>naz781@gmail.com</p>
//                             </div>
//                         </div>
//                         <div className='flex items-start'>
//                             <div className='text-purple text-2xl mr-4'>
//                                 <FaPhone />
//                             </div>
//                             <div>
//                                 <h3 className='text-lg font-semibold'>Cell</h3>
//                                 <p className='text-gray-400'>+1 732-474-3378</p>
//                             </div>
//                         </div>

//                         <div>
//                             <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
//                             <div className='flex space-x-4'>
//                                 <a href='https://github.com/naz781' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
//                                     <FaGithub />
//                                 </a>
//                                 <a href='https://www.linkedin.com/in/fatima-naz-7927a77a/' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
//                                     <FaLinkedin />
//                                 </a>
//                                 <a href='https://medium.com/@naz781' className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
//                                     <FaMedium />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default Contact;

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin,
    FaMedium
} from 'react-icons/fa';

const Contact = () => {
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current
            );

            setSuccess(true);
            formRef.current.reset();
        } catch (err) {
            console.error('EmailJS Error:', err);
            setError('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            id="Contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Get In <span className="text-purple">Touch</span>
                </h2>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Have a project in mind or want to collaborate? Let's talk!
                </p>

                <div className="flex flex-col lg:flex-row lg:space-x-12 max-w-5xl mx-auto">

                    {/* CONTACT FORM */}
                    <div className="flex-1">
                        {error && (
                            <p className="mb-4 text-red-400 text-center">
                                {error}
                            </p>
                        )}

                        {success && (
                            <p className="mb-4 text-green-400 text-center">
                                Message sent successfully!
                            </p>
                        )}

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-6 py-3 border border-purple text-purple font-semibold rounded-lg hover:bg-purple hover:text-white transition duration-300 disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="flex-1 mt-12 lg:mt-0 flex flex-col justify-center space-y-8">
                        <Info icon={<FaMapMarkerAlt />} title="Location" value="New York, USA" />
                        <Info icon={<FaEnvelope />} title="Email" value="naz781@gmail.com" />
                        <Info icon={<FaPhone />} title="Phone" value="+1 732-474-3378" />

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                <Social href="https://github.com/naz781"><FaGithub /></Social>
                                <Social href="https://www.linkedin.com/in/fatima-naz-7927a77a/"><FaLinkedin /></Social>
                                <Social href="https://medium.com/@naz781"><FaMedium /></Social>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

const Info = ({ icon, title, value }) => (
    <div className="flex items-start">
        <div className="text-purple text-2xl mr-4">{icon}</div>
        <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-400">{value}</p>
        </div>
    </div>
);

const Social = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
    >
        {children}
    </a>
);

export default Contact;
