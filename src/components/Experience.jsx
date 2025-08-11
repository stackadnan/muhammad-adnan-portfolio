import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Softolift",
      icon: "🚀",
      iconBg: "#383E56",
      date: "January 2023 - Present",
      location: "Remote",
      points: [
        "Started with Selenium automation, creating sophisticated bots for Facebook, Instagram, Skyscanner, and LinkedIn",
        "Advanced to web scraping using Requests and BeautifulSoup for platforms like TicketMaster",
        "Developed Face Sketch Construction and Recognition system using FastAPI, Next.js, and MongoDB",
        "Implemented face recognition using pre-trained Python libraries and optimized performance with Pickle for encoding storage",
        "Created interactive canvas functionality using Fabric.js for the frontend interface",
        "Built various automation solutions including social media bots, lead generation tools, and trading bots"
      ],
      technologies: ["Python", "FastAPI", "Next.js", "MongoDB", "Selenium", "BeautifulSoup", "Fabric.js", "Face Recognition", "Pickle"]
    },
    {
      title: "Customer Service Representative",
      company_name: "Fourways Global",
      icon: "📞",
      iconBg: "#E6DEDD",
      date: "June 2021 - December 2022",
      location: "Remote",
      points: [
        "Worked as CSR on multiple campaigns including Medicare, Final Expense, Refinancing, and Reverse Mortgage",
        "Developed strong communication and problem-solving skills while handling diverse client needs",
        "Gained valuable experience in customer relationship management and service delivery",
        "Built expertise in understanding complex financial products and explaining them to customers"
      ],
      technologies: ["Customer Service", "Medicare", "Financial Products", "Communication", "Problem Solving"]
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
    <section id="experience" className="py-20 section-padding bg-secondary">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-text-secondary text-[14px] tracking-wider uppercase">What I have done so far</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="mt-20 flex flex-col">
          {experiences.map((experience, index) => (
            <motion.div
              key={`experience-${index}`}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="glass-morphism p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Company Icon and Basic Info */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl">
                      {experience.icon}
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                        <div className="flex items-center gap-2 text-accent text-[18px] font-semibold">
                          <Building2 size={18} />
                          {experience.company_name}
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                        <div className="flex items-center gap-2 text-text-secondary">
                          <Calendar size={16} />
                          {experience.date}
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary">
                          <MapPin size={16} />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Experience Points */}
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className="text-text-secondary text-[14px] pl-1 tracking-wider"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-6">
                      <h4 className="text-white text-[16px] font-semibold mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, index) => (
                          <span
                            key={`tech-${index}`}
                            className="bg-primary text-accent px-3 py-1 rounded-full text-[12px] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 glass-morphism p-8 rounded-2xl"
        >
          <h3 className="text-white text-[24px] font-bold mb-6 text-center">Professional Growth Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-accent text-[32px] font-bold mb-2">15+</div>
              <div className="text-text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-[32px] font-bold mb-2">3+</div>
              <div className="text-text-secondary">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-[32px] font-bold mb-2">10+</div>
              <div className="text-text-secondary">Technologies Mastered</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
