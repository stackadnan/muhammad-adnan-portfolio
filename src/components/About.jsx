import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Bot, Cpu } from 'lucide-react'

const About = () => {
  const services = [
    {
      title: "Full Stack Development",
      icon: Code,
      description: "I build complete web apps with React, Next.js, FastAPI, and MongoDB."
    },
    {
      title: "Automation & Bots",
      icon: Bot,
      description: "Creating bots that handle social media, scraping, and repetitive business tasks."
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      description: "Working with face recognition, AI assistants, and computer vision projects."
    },
    {
      title: "Database Solutions",
      icon: Database,
      description: "Setting up databases and data processing systems that actually work."
    }
  ]

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

  return (
    <section id="about" className="py-20 section-padding">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="theme-text-secondary text-[14px] tracking-wider uppercase">Introduction</p>
          <h2 className="theme-text font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 theme-text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
        >
          I'm a developer who loves building things that work. Started with customer service, then discovered 
          coding and never looked back. I spend most of my time with Python and JavaScript, creating everything 
          from social media bots to face recognition systems. What gets me excited? Taking complex problems 
          and turning them into simple, working solutions. Whether it's scraping data, automating repetitive 
          tasks, or building full web applications - I enjoy the challenge of making technology do useful things.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="glass-morphism p-[1px] rounded-[20px]">
                <div className="theme-bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                  <service.icon className="w-16 h-16 text-accent mb-4" />
                  <h3 className="theme-text text-[20px] font-bold text-center">
                    {service.title}
                  </h3>
                  <p className="theme-text-secondary text-[14px] text-center mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-white text-[30px] font-bold mb-6">What I Actually Do</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-accent text-[18px] font-semibold mb-2">Frontend Stuff</h4>
                <p className="text-text-secondary">React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, Fabric.js</p>
              </div>
              <div>
                <h4 className="text-accent text-[18px] font-semibold mb-2">Backend & APIs</h4>
                <p className="text-text-secondary">Python, FastAPI, Node.js, RESTful APIs, WebSockets</p>
              </div>
              <div>
                <h4 className="text-accent text-[18px] font-semibold mb-2">Data & Storage</h4>
                <p className="text-text-secondary">MongoDB, Pickle, Database Design, Data Processing</p>
              </div>
              <div>
                <h4 className="text-accent text-[18px] font-semibold mb-2">Automation & AI</h4>
                <p className="text-text-secondary">Face Recognition, Computer Vision, Selenium, BeautifulSoup, Bot Development</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h3 className="text-white text-[24px] font-bold mb-6">Why Work With Me</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>I've been coding and building things for over 3 years now</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>Built tons of bots and scraping tools that actually work</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>Love working with AI and computer vision - it's genuinely interesting</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>I like solving problems and figuring out how things work</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>Quick to pick up new tech when I need to</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
