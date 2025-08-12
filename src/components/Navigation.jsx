import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [toggle, setToggle] = useState(false)

  const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ]

  const socialLinks = [
    { 
      icon: Github, 
      url: 'https://github.com/stackadnan',
      label: 'GitHub'
    },
    { 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/stackadnan/',
      label: 'LinkedIn'
    },
    { 
      icon: Mail, 
      url: 'mailto:muhammadadnan0028@gmail.com',
      label: 'Email'
    },
  ]

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 glass-morphism">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto section-padding">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setToggle(false)
            window.scrollTo(0, 0)
          }}
        >
          <p className="theme-text text-[18px] font-bold cursor-pointer flex">
            Muhammad Adnan &nbsp;
            <span className="sm:block hidden gradient-text">| Full Stack Developer</span>
          </p>
        </Link>

        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Desktop Navigation */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="theme-text-secondary hover:theme-text text-[18px] font-medium cursor-pointer transition-colors duration-300"
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-text-secondary hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button
              onClick={() => setToggle(!toggle)}
              className="theme-text"
              aria-label="Toggle menu"
            >
              {toggle ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 glass-morphism absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="font-poppins font-medium cursor-pointer text-[16px] theme-text-secondary hover:theme-text transition-colors duration-300"
                    onClick={() => setToggle(!toggle)}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-text-secondary hover:text-accent transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
