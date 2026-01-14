import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission - replace with actual form handling
        // You can use services like Formspree, EmailJS, or your own backend
        await new Promise(resolve => setTimeout(resolve, 1000))

        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
    }

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'danielromanovbusiness11@gmail.com',
            href: 'mailto:danielromanovbusiness11@gmail.com',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/daniel-romanov-32bb05200',
            href: 'https://www.linkedin.com/in/daniel-romanov-32bb05200/',
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: 'github.com/danielRomanov11',
            href: 'https://github.com/danielRomanov11',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Tallahassee, Florida (Open to Relocation)',
            href: null,
        },
    ]

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                    Get In Touch
                </h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    I'm currently looking for internship opportunities for Summer 2026.
                    Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>

                        {submitted && (
                            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                                Thanks for your message! I'll get back to you soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 disabled:bg-primary-400 transition-colors duration-200"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                        <item.icon className="text-primary-600 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{item.label}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-900 hover:text-primary-600 transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-900">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Resume Download */}
                        <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 text-white">
                            <h4 className="text-lg font-semibold mb-2">Download My Resume</h4>
                            <p className="text-primary-100 mb-4">
                                Get a PDF copy of my complete resume with all my qualifications and experience.
                            </p>
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-block px-6 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
