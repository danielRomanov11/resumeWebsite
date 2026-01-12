import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Daniel Romanov</h3>
                        <p className="text-gray-400">Full-Stack Developer</p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a
                            href="https://github.com/danielRomanov11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/daniel-romanov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="mailto:danielromanovbusiness11@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 flex items-center justify-center gap-1">
                        Built with <FaHeart className="text-red-500" /> using React & Tailwind CSS
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        © {currentYear} Daniel Romanov. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
