import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Bot, Globe, Gamepad2, TrendingUp, ShoppingCart, Video, Shield, Mail, Phone } from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      name: "Face Sketch Construction & Recognition System",
      description: "Built an AI system that can recognize faces and let users draw sketches. Used FastAPI for the backend, Next.js for the frontend, and MongoDB to store everything.",
      tags: ["Python", "FastAPI", "Next.js", "MongoDB", "Face Recognition", "Fabric.js", "Pickle"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Eye,
      category: "ai"
    },
    {
      name: "Social Media Automation Suite",
      description: "Made a bunch of bots that can like posts, comment, and interact on Facebook, Instagram, and LinkedIn automatically.",
      tags: ["Python", "Selenium", "BeautifulSoup", "Automation", "Social Media"],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Bot,
      category: "automation"
    },
    {
      name: "Softolift Corporate Website",
      description: "Modern corporate website built with Next.js featuring responsive design and optimized performance for software house presentation.",
      tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Globe,
      category: "web"
    },
    {
      name: "Demontolivo Software House Website",
      description: "Professional website for software house showcasing services, portfolio, and team with modern design and smooth animations.",
      tags: ["React", "CSS3", "JavaScript", "Responsive"],
      image: "/api/placeholder/400/300",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Globe,
      category: "web"
    },
    {
      name: "Tetris Game - Qualtrics Integration",
      description: "Classic Tetris game embedded in Qualtrics surveys for enhanced user engagement and interactive data collection.",
      tags: ["JavaScript", "Game Development", "Qualtrics", "Canvas API"],
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Gamepad2,
      category: "game"
    },
    {
      name: "Binance to Bitget Trading Bot",
      description: "Built a trading bot that watches my Binance account and copies all trades to multiple Bitget accounts in real-time.",
      tags: ["Python", "Trading APIs", "Cryptocurrency", "Real-time", "Automation"],
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: TrendingUp,
      category: "trading"
    },
    {
      name: "E-commerce Price Comparison Bot",
      description: "Automated price monitoring system comparing products between King Jouet and Amazon platforms for price optimization.",
      tags: ["Python", "Web Scraping", "Price Monitoring", "BeautifulSoup"],
      image: "/api/placeholder/400/300",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: ShoppingCart,
      category: "automation"
    },
    {
      name: "Speech-Activated AI Assistant",
      description: "Raspberry Pi-based AI assistant with voice recognition and response capabilities for smart home automation.",
      tags: ["Python", "Raspberry Pi", "Speech Recognition", "AI", "IoT"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Bot,
      category: "ai"
    },
    {
      name: "YouTube Video Management Bot",
      description: "Automated system for downloading, processing, and uploading YouTube videos with metadata management.",
      tags: ["Python", "YouTube API", "Video Processing", "Automation"],
      image: "/api/placeholder/400/300",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Video,
      category: "automation"
    },
    {
      name: "Pokemon Card Monitoring System",
      description: "Real-time monitoring bot for Pokemon card availability and pricing on Bol.com with alert notifications.",
      tags: ["Python", "Web Scraping", "Real-time Monitoring", "Notifications"],
      image: "/api/placeholder/400/300",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: ShoppingCart,
      category: "automation"
    },
    {
      name: "Medical Database Verification Bot",
      description: "Doctolib bot for verifying registered and non-registered phone numbers in medical database systems.",
      tags: ["Python", "Database Verification", "Healthcare", "Automation"],
      image: "/api/placeholder/400/300",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Shield,
      category: "automation"
    },
    {
      name: "Telegram Casino Bot",
      description: "Telegram bot for TG.casino and Cosino platforms to check registered emails and account verification.",
      tags: ["Python", "Telegram Bot", "Account Verification", "API Integration"],
      image: "/api/placeholder/400/300",
      source_code_link: "https://github.com/stackadnan",
      live_demo_link: "#",
      icon: Bot,
      category: "automation"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'automation', name: 'Automation & Bots', count: projects.filter(p => p.category === 'automation').length },
    { id: 'ai', name: 'AI & Machine Learning', count: projects.filter(p => p.category === 'ai').length },
    { id: 'trading', name: 'Trading Bots', count: projects.filter(p => p.category === 'trading').length },
    { id: 'game', name: 'Game Development', count: projects.filter(p => p.category === 'game').length }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
    <section id="projects" className="py-20 section-padding">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="theme-text-secondary text-[14px] tracking-wider uppercase">My work</p>
          <h2 className="theme-text font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 theme-text-secondary text-[17px] max-w-3xl mx-auto">
            Here are some projects I've worked on. Each one taught me something new and helped me get better at coding. 
            You can check out the code and see how I built them.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-white'
                  : 'glass-morphism text-text-secondary hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-morphism rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-white" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black bg-opacity-80 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black bg-opacity-80 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="theme-text text-[18px] font-bold mb-2">{project.name}</h3>
                <p className="theme-text-secondary text-[14px] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={`${project.name}-tag-${tagIndex}`}
                      className="text-[12px] text-accent theme-bg-primary px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="theme-text text-[24px] font-bold mb-4">Interested in Working Together?</h3>
            <p className="theme-text-secondary mb-6">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:muhammadadnan0028@gmail.com"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <Mail size={18} />
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/stackadnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <Phone size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
