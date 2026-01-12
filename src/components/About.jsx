const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                    About Me
                </h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            A Passionate Developer
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            I'm a junior studying Computer Science at Florida State University, expected to graduate in December 2026.
                            My journey in tech started when I built my first JavaScript drawing in middle school, and I've been hooked ever since.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            I'm particularly interested in full-stack web development, computer security, and how artificial intelligence can be applied to solve real-world problems.
                            I love solving common problems that many people face and turning ideas into reality through code.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            When I'm not coding, you can find me playing soccer, playing chess, or surfing. I'm always eager to learn and take on new challenges.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Facts</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium text-gray-900">Education:</span>
                                    <span className="text-gray-600 ml-2">B.A. Computer Science, Florida State University</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium text-gray-900">GPA:</span>
                                    <span className="text-gray-600 ml-2">3.72/4.0</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium text-gray-900">Expected Graduation:</span>
                                    <span className="text-gray-600 ml-2">December 2026</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium text-gray-900">Seeking:</span>
                                    <span className="text-gray-600 ml-2">Summer 2026 Software Engineering Internship</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <span className="font-medium text-gray-900">Interests:</span>
                                    <span className="text-gray-600 ml-2">Web Development, Cloud, Network Security</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
