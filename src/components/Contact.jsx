import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle, AlertCircle, User, MessageSquare, MapPin, Clock, Instagram } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const recaptchaRef = useRef(null)

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recipientEmail: 'ffbrunoff@yahoo.com.br',
          recaptchaToken: token
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsLoading(false)
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 44 99104-0774",
      color: "from-green-500 to-emerald-600",
      action: "tel:+5544991040774"
    },
    {
      icon: Mail,
      title: "Email",
      content: "ffbrunoff@yahoo.com.br",
      color: "from-blue-500 to-indigo-600",
      action: "mailto:ffbrunoff@yahoo.com.br"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@machadoassis",
      color: "from-pink-500 to-purple-600",
      action: "https://www.instagram.com/machadoassis"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Brasil",
      color: "from-accent-500 to-accent-600"
    }
  ]

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/machadoassis",
      icon: Instagram,
      color: "hover:text-pink-500"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-accent-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Mail className="w-32 h-32" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 text-accent-400/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <MessageSquare className="w-24 h-24" />
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-accent-500/20 to-accent-700/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full mb-6"
            variants={itemVariants}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-semibold">Entre em Contato</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Vamos Conversar
            <span className="block text-gradient mt-2">Sobre Literatura</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-secondary-200 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Entre em contato para palestras, consultorias literárias, ou simplesmente para 
            compartilhar sua paixão pela literatura brasileira.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              <p className="text-lg text-secondary-200 mb-8">
                Estou sempre disponível para discutir literatura, projetos literários 
                e compartilhar experiências sobre o mundo da escrita.
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 card-hover"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        {info.action ? (
                          <a
                            href={info.action}
                            target={info.action.startsWith('http') ? '_blank' : '_self'}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-accent-400 hover:text-accent-300 transition-colors duration-300"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <span className="text-secondary-200">{info.content}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-white mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              className="bg-gradient-to-r from-accent-500/20 to-accent-600/20 rounded-2xl p-6 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-accent-400" />
                <h4 className="text-xl font-bold text-white">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-secondary-200">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                Envie uma Mensagem
              </h3>
              <p className="text-secondary-600">
                Preencha o formulário abaixo e entrarei em contato o mais breve possível.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-secondary-700 font-semibold mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors duration-300"
                  placeholder="Digite seu nome completo"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-secondary-700 font-semibold mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors duration-300"
                  placeholder="Digite seu email"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-secondary-700 font-semibold mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Digite sua mensagem..."
                />
              </motion.div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Erro ao enviar mensagem. Tente novamente.</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>

              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}