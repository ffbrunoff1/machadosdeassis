import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Star, Quote, ArrowRight, Heart, Pen } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-literary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-accent-500/20"
          variants={floatingVariants}
          animate="animate"
        >
          <Quote className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-accent-400/20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Pen className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-20 text-accent-300/20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Heart className="w-14 h-14" />
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-accent-500/30 to-accent-700/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary-600/20 to-secondary-800/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
              variants={itemVariants}
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Star className="w-5 h-5 text-accent-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <span className="text-primary-300 font-medium">Escritor Renomado</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="block text-white mb-2">Machado</span>
              <span className="block bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 bg-clip-text text-transparent">
                de Assis
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Mergulhe no mundo romântico da literatura brasileira e descubra histórias que 
              <span className="text-accent-400 font-semibold"> capturam o coração</span> e 
              exploram a complexidade das relações humanas.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#services"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <BookOpen className="w-5 h-5" />
                <span>Explorar Livros</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#about"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>Conhecer o Autor</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-primary-300 text-sm">Obras Publicadas</div>
              </div>
              <div className="w-px h-12 bg-primary-400"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-primary-300 text-sm">Leitores</div>
              </div>
              <div className="w-px h-12 bg-primary-400"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">120+</div>
                <div className="text-primary-300 text-sm">Anos de Legado</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-500/50 to-accent-700/50 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1755268229647_3ocew616qjr_Machado_Assis.png"
                alt="Machado de Assis - Escritor Brasileiro"
                className="relative z-10 w-80 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center shadow-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <BookOpen className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-full flex items-center justify-center shadow-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Quote className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}