import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Heart, Pen, Quote, Star, Trophy } from 'lucide-react'

export default function About() {
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

  const achievements = [
    {
      icon: Award,
      title: "Mestre da Literatura",
      description: "Reconhecido como um dos maiores escritores da literatura brasileira",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: BookOpen,
      title: "Obras Imortais",
      description: "Criador de clássicos que atravessam gerações e continuam relevantes",
      color: "from-secondary-600 to-secondary-700"
    },
    {
      icon: Users,
      title: "Legado Duradouro",
      description: "Influenciou incontáveis escritores e continua inspirando novos autores",
      color: "from-accent-600 to-accent-700"
    },
    {
      icon: Heart,
      title: "Conexão Humana",
      description: "Especialista em retratar as complexidades do coração humano",
      color: "from-secondary-700 to-secondary-800"
    }
  ]

  const stats = [
    { number: "150+", label: "Obras Publicadas", icon: BookOpen },
    { number: "5", label: "Grandes Romances", icon: Star },
    { number: "120+", label: "Anos de Legado", icon: Trophy },
    { number: "∞", label: "Impacto Cultural", icon: Heart }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-accent-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Quote className="w-32 h-32" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 text-secondary-300/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Pen className="w-24 h-24" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <Award className="w-5 h-5" />
            <span className="font-semibold">Sobre o Autor</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
            variants={itemVariants}
          >
            O Mestre da
            <span className="block text-gradient mt-2">Literatura Brasileira</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Machado de Assis, renomado escritor brasileiro, é conhecido por sua habilidade única em criar 
            narrativas profundas e emocionantes que exploram o cotidiano e a complexidade das relações humanas.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-secondary-600/30 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1755268229647_3ocew616qjr_Machado_Assis.png"
                alt="Machado de Assis - Retrato do Escritor"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Quote Overlay */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Quote className="w-8 h-8 text-accent-500 mb-3" />
                <p className="text-secondary-800 font-medium italic">
                  "Explore os clássicos da literatura brasileira e descubra histórias que capturam o coração."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                Uma Trajetória Extraordinária
              </h3>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Nascido no Rio de Janeiro, Machado de Assis transformou-se no maior nome da literatura 
                brasileira através de uma obra que combina profundidade psicológica, ironia refinada e 
                uma compreensão única da natureza humana.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Suas narrativas românticas exploram as sutilezas dos relacionamentos, revelando as 
                contradições e complexidades que tornam cada história uma jornada emocionante de descoberta.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg card-hover"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-secondary-900 mb-2">{achievement.title}</h4>
                    <p className="text-sm text-secondary-600">{achievement.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Um Legado em Números
            </h3>
            <p className="text-xl text-secondary-200">
              Conheça o impacto duradouro de Machado de Assis na literatura mundial
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}