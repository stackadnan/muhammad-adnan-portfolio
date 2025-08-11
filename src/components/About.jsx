import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Bot, Cpu } from 'lucide-react'

const About = () => {
  const services = [
    {
      title: "Full Stack Development",
      icon: Code,
      description: "Expert in React, Next.js, FastAPI, and MongoDB for complete web solutions."
    },
    {
      title: "Automation & Bots",
      icon: Bot,
      description: "Creating intelligent bots for social media, scraping, and business automation."
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      description: "Face recognition systems, AI assistants, and computer vision applications."
    },
    {
      title: "Database Solutions",
      icon: Database,
      description: "Designing efficient database architectures and data processing systems."
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
          <p className="text-text-secondary text-[14px] tracking-wider uppercase">Introduction</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
        >
          I'm a skilled Full Stack Developer with experience in Python, JavaScript, and modern frameworks 
          like React and Next.js. I specialize in creating intelligent automation solutions, web scraping 
          bots, and AI-powered applications. My expertise extends to face recognition systems, social media 
          automation, and scalable web applications. I'm passionate about solving complex problems through 
          innovative technology solutions.
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
                <div className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                  <service.icon className="w-16 h-16 text-accent mb-4" />
                  <h3 className="text-white text-[20px] font-bold text-center">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-[14px] text-center mt-2">
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
            <h3 className="text-white text-[30px] font-bold mb-6">Technical Expertise</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-accent text-[18px] font-semibold mb-2">Frontend Development</h4>
                <p className="text-text-secondary">React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, Fabric.js</p>
              </div>
              <div>
                <h4 className="text-accent text-[18px] font-semibold mb-2">Backend Development</h4>
                <p className="text-text-secondary">Python, FastAPI, Node.js, RESTful APIs, WebSockets</p>
              </div>
              <div>
                <h4 className="text-accent text-[18px] font-semibold mb-2">Database & Storage</h4>
                <p className="text-text-secondary">MongoDB, Pickle, Database Design, Data Processing</p>
              </div>
              <div>
                <h4 className="text-accent text-[18px] font-semibold mb-2">AI & Automation</h4>
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
            <h3 className="text-white text-[24px] font-bold mb-6">What I Bring to the Table</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>5+ years of experience in software development and automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>Proven track record in bot development and web scraping</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>Expertise in AI integration and computer vision applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>Strong problem-solving skills and attention to detail</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▶</span>
                <span>Ability to work with diverse technologies and adapt quickly</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
