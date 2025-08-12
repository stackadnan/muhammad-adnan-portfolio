import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import CanvasLoader from './CanvasLoader'

// Floating Tech Icon Component
const TechIcon = ({ position, icon, color, scale = 1, rotation = [0, 0, 0] }) => {
  const meshRef = React.useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group position={position}>
      {/* Glowing Ring Effect */}
      <mesh>
        <torusGeometry args={[0.8 * scale, 0.05 * scale, 8, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      
      {/* Main Icon Container */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.6 * scale, 0.6 * scale, 0.05 * scale, 32]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Icon Symbol */}
      <mesh position={[0, 0, 0.03 * scale]}>
        <boxGeometry args={[0.3 * scale, 0.3 * scale, 0.01 * scale]} />
        <meshBasicMaterial color="white" />
      </mesh>
      
      {/* Particle Effects */}
      {[...Array(8)].map((_, i) => (
        <mesh 
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 1.2 * scale,
            Math.sin((i / 8) * Math.PI * 2) * 0.2,
            Math.sin((i / 8) * Math.PI * 2) * 1.2 * scale
          ]}
        >
          <sphereGeometry args={[0.02 * scale]} />
          <meshBasicMaterial color={color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

// Professional Floating Network
const FloatingNetwork = ({ isMobile }) => {
  const groupRef = React.useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const scale = isMobile ? 0.6 : 1
  const spread = isMobile ? 1.5 : 2.5

  return (
    <group ref={groupRef} position={isMobile ? [1.5, 0, 0] : [3, 0, 0]}>
      {/* Connection Lines */}
      <lineSegments>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={20}
            array={new Float32Array([
              0, 0, 0, spread, 0, 0,
              0, 0, 0, -spread, 0, 0,
              0, 0, 0, 0, spread, 0,
              0, 0, 0, 0, -spread, 0,
              0, 0, 0, 0, 0, spread,
              0, 0, 0, 0, 0, -spread,
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4facfe" transparent opacity={0.3} />
      </lineSegments>
      
      {/* Tech Icons */}
      <TechIcon 
        position={[spread, 0, 0]} 
        icon="react" 
        color="#61DAFB" 
        scale={scale}
        rotation={[0.5, 0.3, 0]}
      />
      <TechIcon 
        position={[-spread, 0, 0]} 
        icon="python" 
        color="#3776AB" 
        scale={scale}
        rotation={[0.2, 0.8, 0.1]}
      />
      <TechIcon 
        position={[0, spread, 0]} 
        icon="nodejs" 
        color="#68A063" 
        scale={scale}
        rotation={[0.7, 0.1, 0.4]}
      />
      <TechIcon 
        position={[0, -spread, 0]} 
        icon="js" 
        color="#F0DB4F" 
        scale={scale}
        rotation={[0.1, 0.9, 0.2]}
      />
      <TechIcon 
        position={[0, 0, spread]} 
        icon="ai" 
        color="#FF6B35" 
        scale={scale}
        rotation={[0.4, 0.2, 0.8]}
      />
    </group>
  )
}

const Computers = ({ isMobile }) => {
const Computers = ({ isMobile }) => {
  return (
    <mesh>
      {/* Advanced Lighting Setup */}
      <hemisphereLight intensity={0.4} groundColor="#080820" skyColor="#87CEEB" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} color="#4facfe" intensity={0.8} />
      <pointLight position={[10, 0, -20]} color="#00f2fe" intensity={0.8} />
      <spotLight
        position={[0, 50, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ffffff"
      />
      
      {/* Professional Floating Network */}
      <FloatingNetwork isMobile={isMobile} />
      
      {/* Ambient Particles */}
      <group>
        {[...Array(isMobile ? 15 : 25)].map((_, i) => (
          <mesh 
            key={i}
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20
            ]}
          >
            <sphereGeometry args={[0.01]} />
            <meshBasicMaterial 
              color={Math.random() > 0.5 ? "#4facfe" : "#00f2fe"} 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        ))}
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
      camera={{ 
        position: isMobile ? [15, 3, 5] : [25, 3, 8], 
        fov: isMobile ? 35 : 25 
      }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
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
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto section-padding flex flex-row items-start gap-5 z-10">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-accent to-transparent" />
        </div>

        <div className="z-10 relative">{/* Ensure text is in front */}
          <h1 className="font-black theme-text lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[32px] lg:leading-[98px] leading-tight mt-2">
            Hi, I'm <span className="gradient-text">Muhammad Adnan</span>
          </h1>
          <p className="theme-text-secondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[14px] lg:leading-[40px] leading-relaxed mt-2 max-w-3xl">
            I build web apps, create smart bots, <br className="sm:block hidden" />
            and work with AI to solve real problems
          </p>
          
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="block w-full sm:inline-block text-center bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                View My Work
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="block w-full sm:inline-block text-center border border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
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
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-accent flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
