import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import CanvasLoader from './CanvasLoader'

const Computers = ({ isMobile }) => {
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      
      {/* 3D Floating Cubes representing tech stack */}
      <group>
        {/* React Cube */}
        <mesh position={[2, 0, 0]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#61DAFB" />
        </mesh>
        
        {/* Python Cube */}
        <mesh position={[-2, 1, 0]} rotation={[0.3, 0.8, 0.2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#3776AB" />
        </mesh>
        
        {/* Node.js Cube */}
        <mesh position={[0, -1, 2]} rotation={[0.7, 0.2, 0.5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#339933" />
        </mesh>
        
        {/* JavaScript Cube */}
        <mesh position={[-1, -2, -1]} rotation={[0.2, 0.9, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#F7DF1E" />
        </mesh>
        
        {/* Database Cube */}
        <mesh position={[3, -1, -2]} rotation={[0.8, 0.3, 0.6]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#4DB33D" />
        </mesh>
      </group>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto section-padding flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-accent to-transparent" />
        </div>

        <div>
          <h1 className="font-black theme-text lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="gradient-text">Muhammad Adnan</span>
          </h1>
          <p className="theme-text-secondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I build web apps, create smart bots, <br className="sm:block hidden" />
            and work with AI to solve real problems
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#projects"
                className="bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                View My Work
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="border border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-text-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full theme-text-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
