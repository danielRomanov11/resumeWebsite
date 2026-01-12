import {
    FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker, FaAws,
    FaHtml5, FaCss3Alt, FaLinux
} from 'react-icons/fa'
import {
    SiJavascript, SiTypescript, SiTailwindcss, SiSupabase,
    SiCplusplus, SiDotnet, SiNetlify, SiLeaflet
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'C/C++', icon: SiCplusplus, color: 'text-blue-700' },
                { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
                { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
                { name: 'Python', icon: FaPython, color: 'text-blue-500' },
                { name: 'Java', icon: FaJava, color: 'text-red-500' },
                { name: 'C#', icon: TbBrandCSharp, color: 'text-purple-600' },
            ]
        },
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: FaReact, color: 'text-cyan-500' },
                { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
                { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
                { name: 'Leaflet.js', icon: SiLeaflet, color: 'text-green-600' },
            ]
        },
        {
            title: 'Backend & Database',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
                { name: '.NET MAUI', icon: SiDotnet, color: 'text-purple-500' },
                { name: 'Supabase', icon: SiSupabase, color: 'text-green-500' },
            ]
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
                { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
                { name: 'Linux', icon: FaLinux, color: 'text-gray-700' },
                { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
                { name: 'Netlify', icon: SiNetlify, color: 'text-teal-500' },
            ]
        },
    ]

    const apis = [
        'OpenStreetMap',
        'OpenRouteService',
        'Aviasales Flight Search',
        'Graphhopper',
        'Spotify API',
    ]

    const coursework = [
        'Programming in C++ and Unix',
        'Data Structures I & II',
        'Advanced Programming with Java',
        'Full App Development in C#',
        'Computer Security Fundamentals',
    ]

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                    Skills & Technologies
                </h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="bg-white rounded-xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <skill.icon className={`text-xl ${skill.color}`} />
                                        <span className="text-gray-700 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* APIs */}
                <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">APIs & Integrations</h3>
                    <div className="flex flex-wrap gap-3">
                        {apis.map((api) => (
                            <span
                                key={api}
                                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                            >
                                {api}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Relevant Coursework */}
                <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Relevant Coursework</h3>
                    <div className="flex flex-wrap gap-3">
                        {coursework.map((course) => (
                            <span
                                key={course}
                                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium"
                            >
                                {course}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Certification */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white">
                    <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 inline-flex">
                        <FaAws className="text-2xl" />
                        <div>
                            <p className="font-medium">AWS Certified Cloud Practitioner</p>
                            <p className="text-sm text-primary-100">Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
