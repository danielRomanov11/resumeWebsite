import { FaBriefcase, FaGraduationCap, FaTrophy } from 'react-icons/fa'

const Experience = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Information Technology Intern',
            organization: 'Miami RE Management Group',
            location: 'Miami, Florida',
            date: 'May 2025 - Aug 2025',
            description: [
                'Assisted in the design, implementation, and maintenance of cloud-based infrastructure to support internal business operations',
                'Provided technical support and troubleshooting for hardware, software, and network-related issues, improving system reliability and user efficiency',
                'Configured, deployed, and maintained software applications and system settings across company devices and platforms',
                'Collaborated with team members to identify technical issues, document solutions, and implement process improvements',
            ],
        },
        {
            type: 'work',
            title: 'Computer Science Intern',
            organization: 'Nazarov Enterprises Corp',
            location: 'Remote',
            date: 'Aug 2024 - Apr 2025',
            description: [
                'Developed internal automation tools to streamline business operations and improve overall efficiency by 10%',
                'Designed and implemented custom dashboards and client-facing portals to enhance user experience and data accessibility',
                'Conducted software testing, debugging, and issue reporting to maintain system reliability and performance',
                'Managed and optimized databases while providing systems administration and cross-platform IT support',
            ],
        },
    ]

    const education = [
        {
            degree: 'Bachelor of Arts in Computer Science',
            school: 'Florida State University',
            location: 'Tallahassee, Florida',
            date: 'Expected December 2026',
            highlights: [
                'Programming in C++ and Unix (COP3363)',
                'Data Structures I (COP3330) and II (COP4530)',
                'Advanced Programming with Java (COP3252)',
                'Full App Development in C# (COP4870)',
                'Computer Security Fundamentals (CIS4360)',
            ],
        },
    ]

    const achievements = [
        {
            title: 'AWS Certified Cloud Practitioner',
            description: 'Earned certification demonstrating foundational cloud knowledge and AWS services expertise',
        },
    ]

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                    Experience & Education
                </h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Experience */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <FaBriefcase className="text-primary-600 text-xl" />
                            <h3 className="text-2xl font-semibold text-gray-900">Work Experience</h3>
                        </div>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-600"
                                >
                                    <div className="flex flex-wrap justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                                        <span className="text-sm text-primary-600 font-medium">{exp.date}</span>
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        {exp.organization} • {exp.location}
                                    </p>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Education & Achievements */}
                    <div>
                        {/* Education */}
                        <div className="flex items-center gap-3 mb-6">
                            <FaGraduationCap className="text-primary-600 text-xl" />
                            <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-600 mb-8">
                            {education.map((edu, index) => (
                                <div key={index}>
                                    <div className="flex flex-wrap justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                                        <span className="text-sm text-primary-600 font-medium">{edu.date}</span>
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        {edu.school} • {edu.location}
                                    </p>
                                    <p className="text-gray-700 font-medium mb-2">Relevant Coursework:</p>
                                    <ul className="space-y-2">
                                        {edu.highlights.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Achievements */}
                        <div className="flex items-center gap-3 mb-6">
                            <FaTrophy className="text-primary-600 text-xl" />
                            <h3 className="text-2xl font-semibold text-gray-900">Certifications</h3>
                        </div>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
