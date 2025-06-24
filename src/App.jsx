import React, { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Menu, 
  X, 
  ArrowUp, 
  Mail, 
  Linkedin, 
  MessageCircle,
  Palette,
  Smartphone,
  Search,
  Zap,
  Award,
  ExternalLink,
  ChevronDown
} from 'lucide-react'
import heroPlaceholder from './assets/hero_placeholder.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'sobre', 'portfolio', 'servicos', 'certificados', 'contato']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'certificados', label: 'Certificados' },
    { id: 'contato', label: 'Contato' }
  ]

  const skills = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design UX/UI",
      description: "Criação de interfaces intuitivas e experiências memoráveis"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Design Responsivo",
      description: "Desenvolvimento para todos os dispositivos e telas"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Pesquisa de Usuário",
      description: "Análise e compreensão das necessidades do usuário"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Prototipagem",
      description: "Criação de protótipos interativos e funcionais"
    }
  ]

  const portfolioItems = [
    {
      title: "App de E-commerce",
      description: "Design completo de aplicativo mobile para vendas online",
      image: heroPlaceholder,
      tags: ["UX/UI", "Mobile", "E-commerce"]
    },
    {
      title: "Dashboard Analytics",
      description: "Interface para análise de dados e métricas empresariais",
      image: heroPlaceholder,
      tags: ["Dashboard", "Analytics", "Web"]
    },
    {
      title: "Site Corporativo",
      description: "Redesign completo de website institucional",
      image: heroPlaceholder,
      tags: ["Web Design", "Corporativo", "Responsivo"]
    }
  ]

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design UX/UI",
      description: "Criação de interfaces intuitivas e experiências de usuário excepcionais para web e mobile."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Design Responsivo",
      description: "Desenvolvimento de layouts que se adaptam perfeitamente a qualquer dispositivo ou tela."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Pesquisa de Usuário",
      description: "Análise profunda do comportamento e necessidades dos usuários para informar decisões de design."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Prototipagem",
      description: "Criação de protótipos interativos para validar ideias antes do desenvolvimento final."
    }
  ]

  const certificates = [
    {
      title: "UX Design Avançado",
      issuer: "Google UX Design Certificate",
      image: heroPlaceholder
    },
    {
      title: "UI Design Profissional",
      issuer: "Adobe Certified Expert",
      image: heroPlaceholder
    },
    {
      title: "Design Thinking",
      issuer: "IDEO Design Thinking",
      image: heroPlaceholder
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Motion.div 
              className="text-2xl font-bold text-primary cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
            >
              Diego Aquino
            </Motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <Motion.div 
            className="md:hidden bg-background border-t"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground hero-title">
                  Olá, eu sou{' '}
                  <span className="text-gradient">Diego Aquino</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground hero-subtitle">
                  Designer UX/UI apaixonado por criar experiências digitais incríveis e funcionais
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="btn-primary"
                  size="lg"
                >
                  Ver Portfólio
                </Button>
                <Button 
                  onClick={() => scrollToSection('contato')}
                  variant="outline"
                  className="btn-secondary"
                  size="lg"
                >
                  Entre em Contato
                </Button>
              </div>
            </Motion.div>
            
            <Motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  src={heroPlaceholder} 
                  alt="Diego Aquino" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
        
        <Motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </Motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quem Sou
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </Motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <Motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground">
                Sou um designer UX/UI com paixão por criar experiências digitais que fazem a diferença na vida das pessoas. Com anos de experiência no mercado, desenvolvo soluções criativas e funcionais que conectam marcas aos seus usuários.
              </p>
              <p className="text-lg text-muted-foreground">
                Minha abordagem combina pesquisa de usuário, design thinking e as mais recentes tendências em interface para entregar produtos digitais que não apenas impressionam visualmente, mas também resolvem problemas reais.
              </p>
            </Motion.div>

            <Motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <Motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-icon mx-auto">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Portfólio
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover portfolio-item relative overflow-hidden">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="portfolio-overlay">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-center mb-4">{item.description}</p>
                      <Button className="btn-primary">
                        Ver Projeto <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serviços
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificados" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certificados
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover">
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground mb-4">{cert.issuer}</p>
                    <Button variant="outline" className="w-full">
                      Validar Certificado <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </Motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">Vamos conversar sobre seu projeto?</h3>
                <p className="text-muted-foreground mb-6">
                  Estou sempre aberto a novos desafios e oportunidades. Entre em contato comigo através dos canais abaixo:
                </p>
              </div>

              <div className="space-y-4">
                <Motion.a 
                  href="mailto:diego@exemplo.com"
                  className="flex items-center space-x-4 p-4 bg-background rounded-lg hover:bg-accent/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-foreground">diego@exemplo.com</span>
                </Motion.a>

                <Motion.a 
                  href="https://linkedin.com/in/diegoaquino"
                  className="flex items-center space-x-4 p-4 bg-background rounded-lg hover:bg-accent/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                  <span className="text-foreground">LinkedIn</span>
                </Motion.a>

                <Motion.a 
                  href="https://wa.me/5511999999999"
                  className="flex items-center space-x-4 p-4 bg-background rounded-lg hover:bg-accent/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground">WhatsApp</span>
                </Motion.a>
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea id="message" placeholder="Conte-me sobre seu projeto..." rows={5} />
                    </div>
                    <Button className="w-full btn-primary" size="lg">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Diego Aquino</h3>
              <p className="text-primary-foreground/80">Designer UX/UI</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <a href="mailto:diego@exemplo.com" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  E-mail
                </a>
                <a href="https://linkedin.com/in/diegoaquino" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80">
              &copy; 2024 Diego Aquino. Todos os direitos reservados.
            </p>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="mt-4 md:mt-0 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

