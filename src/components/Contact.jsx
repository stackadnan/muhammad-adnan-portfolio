import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you! I will get back to you as soon as possible.')
      setLoading(false)
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 2000)
  }

  const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "muhammadadnan0028@gmail.com",
      link: "mailto:muhammadadnan0028@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "stackadnan",
      link: "https://github.com/stackadnan"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "stackadnan",
      link: "https://www.linkedin.com/in/stackadnan/"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote / Worldwide",
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 section-padding bg-secondary">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-text-secondary text-[14px] tracking-wider uppercase">Get in touch</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-3 text-text-secondary text-[17px] max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and explore how we can work together 
            to create something exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white text-[24px] font-bold mb-6">Let's Connect</h3>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with passionate individuals and teams. 
                Whether you need a full-stack web application, automation solutions, or AI-powered systems, 
                I'm here to help bring your vision to reality.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("left", "spring", index * 0.1, 0.75)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-[16px] font-semibold">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1"
                      >
                        {item.value}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <p className="text-text-secondary">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              variants={fadeIn("left", "tween", 0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-morphism p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="text-white text-[16px] font-semibold">Available for Projects</h4>
              </div>
              <p className="text-text-secondary text-[14px]">
                I'm currently available for new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h3 className="text-white text-[24px] font-bold mb-6">Send me a message</h3>
            
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="flex text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="w-full py-4 px-6 placeholder:text-text-secondary text-white rounded-lg outlined-none border-none font-medium bg-primary"
                  required
                />
              </div>
              
              <div>
                <label className="flex text-white font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="w-full py-4 px-6 placeholder:text-text-secondary text-white rounded-lg outlined-none border-none font-medium bg-primary"
                  required
                />
              </div>
              
              <div>
                <label className="flex text-white font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="w-full py-4 px-6 placeholder:text-text-secondary text-white rounded-lg outlined-none border-none font-medium bg-primary resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-blue-600 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-text-secondary text-[14px]">
            © 2025 Muhammad Adnan. All rights reserved. Built with React, Three.js, and passion for code.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/stackadnan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/stackadnan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:muhammadadnan0028@gmail.com"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
