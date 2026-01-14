import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
    const projects = [
        {
            title: 'Vestigia - Cultural Landmark Explorer',
            description: 'A full-stack web platform addressing the lack of culturally focused travel tools by integrating interactive maps, curated landmark data, and community features. Reduced user interaction steps by 30%.',
            image: '/public/vestigiaPreview.png',
            technologies: ['JavaScript', 'HTML/CSS', 'Leaflet.js', 'SQL', 'APIs'],
            github: null,
            live: 'https://vestigiaweb.netlify.app',
            featured: true,
        },
        {
            title: 'Musilize - Spotify Insights Dashboard',
            description: 'A responsive Spotify analytics dashboard enabling users to visualize listening habits and manage playlists. Implemented secure OAuth authentication using Netlify serverless functions and Supabase.',
            image: '/public/musilizePreview.png',
            technologies: ['TypeScript', 'React', 'Supabase', 'Spotify Web API'],
            github: 'https://github.com/danielRomanov11/musilize',
            live: null,
            featured: true,
        },
        {
            title: 'GitHub Projects Repository',
            description: 'A collection of projects spanning homework, assignments, and personal code including various languages and technologies. For most up-to-date information, please refer to my GitHub.',
            image: '💻',
            technologies: ['C/C++', 'C#', '.NET MAUI', 'Python', 'MIPS Assembly'],
            github: 'https://github.com/danielRomanov11/Projects',
            live: null,
            featured: false,
        },
        {
            title: 'Portfolio Website',
            description: 'This responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
            image: '💼',
            technologies: ['React', 'Tailwind CSS', 'Vite'],
            github: 'https://github.com/danielRomanov11/resumeWebsite',
            live: '#',
            featured: false,
        },
    ]

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                    Projects
                </h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on. Each project helped me grow as a developer and explore new technologies.
                </p>

                {/* Featured Projects */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {projects.filter(p => p.featured).map((project) => (
                        <div
                            key={project.title}
                            className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl overflow-hidden">
                                {project.image.startsWith('/') ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    project.image
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Projects */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Other Projects</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.filter(p => !p.featured).map((project) => (
                        <div
                            key={project.title}
                            className="group bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="text-4xl mb-4">{project.image}</div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-primary-600 transition-colors"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-primary-600 transition-colors"
                                    >
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
