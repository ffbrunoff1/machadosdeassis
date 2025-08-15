import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Mail, Phone, Instagram, Feather, Quote, Pen, Star } from 'lucide-react'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Livros', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const contactInfo = [
    { icon: Phone, text: '+55 44 99104-0774', href: 'tel:+5544991040774' },
    { icon: Mail, text: 'ffbrunoff@yahoo.com.br', href: 'mailto:ffbrunoff@yahoo.com.br' }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/machadoassis',
      color: 'hover:text-pink-400'
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 text-accent-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Quote className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 text-accent-400/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Pen className="w-20 h-20" />
        </motion.div>

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-800/50 to-secondary-900/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="p-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Feather className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">Machado de Assis</h3>
                <p className="text-secondary-300">Escritor Brasileiro</p>
              </div>
            </div>
            
            <p className="text-secondary-200 text-lg leading-relaxed mb-8 max-w-md">
              Mergulhe no mundo romântico da literatura brasileira e descubra histórias 
              que capturam o coração e exploram a complexidade das relações humanas.
            </p>

            {/* Quote */}
            <motion.div
              className="bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-2xl p-6 backdrop-blur-sm border border-accent-500/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="w-8 h-8 text-accent-400 mb-3" />
              <p className="text-white font-medium italic">
                "Explore os clássicos da literatura brasileira e descubra histórias que capturam o coração."
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-accent-400" />
              Links Rápidos
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-300 hover:text-accent-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-accent-400" />
              Contato
            </h4>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-secondary-300 hover:text-accent-400 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 bg-secondary-800 rounded-lg flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Redes Sociais</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-secondary-800 rounded-xl flex items-center justify-center text-secondary-300 ${social.color} transition-all duration-300 hover:bg-secondary-700`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-secondary-700 my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center space-x-2 text-secondary-400">
            <Heart className="w-4 h-4 text-red-500" />
            <span>&copy; 2024 Machado de Assis. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center space-x-2 text-secondary-400">
            <span>Criado com</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
            <a 
              href="https://papum.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-400 hover:text-accent-300 transition-colors duration-300 font-medium"
            >
              Papum
            </a>
          </div>
        </motion.div>

        {/* Floating Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              <Star className="w-3 h-3 text-accent-400/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  )
}