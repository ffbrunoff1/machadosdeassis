import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Star, Heart, Clock, ArrowRight, Quote, ExternalLink, Eye, Calendar } from 'lucide-react'

export default function Services() {
  const [selectedBook, setSelectedBook] = useState(null)

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

  const books = [
    {
      id: 1,
      title: "A Hora do Rush",
      subtitle: "Romance Contemporâneo",
      description: "A Hora do Rush é um emocionante livro que mergulha o leitor em um mundo de ação e suspense durante o frenético horário de pico. A trama, marcada por reviravoltas intensas, gira em torno de personagens cativantes que navegam desafios e perigos em uma cidade onde o tempo é um recurso escasso. Com uma narrativa envolvente e ritmo acelerado, este livro é perfeito para quem busca uma leitura rápida e cheia de adrenalina. Descubra os segredos ocultos nas ruas movimentadas.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1755268260740_0.png",
      rating: 4.8,
      reviews: 342,
      pages: 280,
      year: 2024,
      category: "Romance",
      highlights: [
        "Narrativa envolvente e ritmo acelerado",
        "Personagens cativantes e complexos",
        "Reviravoltas intensas e surpreendentes",
        "Perfeito para leitura rápida"
      ],
      quote: "Uma obra que captura a essência do tempo moderno e os desafios urbanos com maestria literária."
    }
  ]

  const features = [
    {
      icon: Heart,
      title: "Histórias Românticas",
      description: "Narrativas que exploram o amor em suas múltiplas facetas",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Técnica Apurada",
      description: "Prosa refinada com profundidade psicológica única",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Star,
      title: "Qualidade Garantida",
      description: "Obras reconhecidas pela crítica e pelo público",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Clock,
      title: "Relevância Atemporal",
      description: "Temas universais que atravessam gerações",
      color: "from-green-500 to-emerald-600"
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 text-accent-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <BookOpen className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-secondary-300/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Quote className="w-32 h-32" />
        </motion.div>
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
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Biblioteca Literária</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
            variants={itemVariants}
          >
            Obras que
            <span className="block text-gradient mt-2">Capturam o Coração</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Mergulhe nas narrativas profundas de Machado de Assis e descubra histórias que exploram 
            a complexidade das relações humanas com maestria incomparável.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Books Section */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Livros em Destaque
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Explore as obras mais recentes e descubra por que Machado de Assis continua 
              sendo uma referência na literatura romântica brasileira.
            </p>
          </motion.div>

          {books.map((book, index) => (
            <motion.div
              key={book.id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Column */}
                <div className="relative h-96 lg:h-auto">
                  <motion.img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  <motion.div
                    className="absolute top-6 left-6 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {book.category}
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{book.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-5 h-5" />
                        <span>{book.reviews} avaliações</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-5 h-5" />
                        <span>{book.year}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Column */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <BookOpen className="w-5 h-5 text-accent-500" />
                      <span className="text-accent-600 font-semibold">{book.subtitle}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                      {book.title}
                    </h3>
                    
                    <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                      {book.description}
                    </p>

                    {/* Quote */}
                    <motion.div
                      className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl p-6 mb-8"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-8 h-8 text-accent-500 mb-3" />
                      <p className="text-secondary-800 font-medium italic">
                        {book.quote}
                      </p>
                    </motion.div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {book.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-accent-500 rounded-full" />
                          <span className="text-sm text-secondary-600">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        className="btn-primary flex items-center justify-center space-x-2 flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open('', '_blank')}
                      >
                        <BookOpen className="w-5 h-5" />
                        <span>Comprar Agora</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        className="btn-secondary flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedBook(selectedBook === book.id ? null : book.id)}
                      >
                        <Eye className="w-5 h-5" />
                        <span>Ver Detalhes</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {selectedBook === book.id && (
                  <motion.div
                    className="border-t border-secondary-200 bg-secondary-50 p-8"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent-600 mb-2">{book.pages}</div>
                        <div className="text-secondary-600">Páginas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent-600 mb-2">{book.rating}</div>
                        <div className="text-secondary-600">Avaliação Média</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent-600 mb-2">{book.year}</div>
                        <div className="text-secondary-600">Ano de Publicação</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Heart className="w-5 h-5" />
            <span>Entre em Contato</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}