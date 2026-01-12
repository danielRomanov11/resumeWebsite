import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50 pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Profile Image Placeholder */}
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                        DR
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Hi, I'm <span className="text-gradient">Daniel Romanov</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-gray-600 mb-6">
                        Computer Science Student | Full-Stack Developer
                    </p>

                    <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
                        CS student at Florida State University with hands-on experience developing full-stack web applications.
                        Strong foundation in problem-solving, data structures, and API integration. AWS Certified Cloud Practitioner.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-12">
                        <a
                            href="https://github.com/danielRomanov11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                            <FaGithub size={28} />
                        </a>
                        <a
                            href="https://linkedin.com/in/daniel-romanov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a
                            href="mailto:danielromanovbusiness11@gmail.com"
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                            <FaEnvelope size={28} />
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <a href="#about" className="inline-block animate-bounce text-gray-400 hover:text-primary-600">
                        <FaArrowDown size={24} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
