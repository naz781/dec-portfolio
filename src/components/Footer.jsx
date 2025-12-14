import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark-300 py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>
                    &copy; {new Date().getFullYear()} Created by <span className="text-purple font-semibold">Naz</span>. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
