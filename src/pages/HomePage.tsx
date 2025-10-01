import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import AboutSection from '../components/sections/AboutSection';
// import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import { Shield, Clock, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const stats = [
    {
      icon: <Shield className="h-10 w-10 text-primary-500" />,
      value: "100+",
      label: "Clients satisfaits"
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-500" />,
      value: "20+",
      label: "Années d'expérience"
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-primary-500" />,
      value: "24/7",
      label: "Support client"
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      value: "50+",
      label: "Professionnels qualifiés"
    },
  ];

  return (
    <>
      <Hero
        title="Votre Partenaire de Confiance au Maroc"
        subtitle="Services de sécurité, jardinage et travail temporaire pour particuliers et professionnels"
        imageSrc="./src/assets/logo.png"
        primaryButtonText="Nos Services"
        primaryButtonLink="/security"
        secondaryButtonText="Contactez-nous"
        secondaryButtonLink="/contact"
        // Overlay rouge pour l'arrière-plan
        overlayColor="bg-red-700"
        overlayOpacity="opacity-40"
        // Textes en blanc
        titleColor="text-white"
        subtitleColor="text-white"
        // Bouton primaire : même style que le secondaire (transparent avec bordure blanche)
        primaryButtonBgColor="bg-transparent"
        primaryButtonTextColor="text-white"
        primaryButtonBorderColor="border-white"
        primaryButtonHoverBgColor="hover:bg-white"
        primaryButtonHoverTextColor="hover:text-red-600"
        // Bouton secondaire : transparent avec bordure blanche, texte blanc
        secondaryButtonBgColor="bg-transparent"
        secondaryButtonTextColor="text-white"
        secondaryButtonBorderColor="border-white"
        secondaryButtonHoverBgColor="hover:bg-white"
        secondaryButtonHoverTextColor="hover:text-red-600"
      />
      
      {/* Stats Section */}
      <motion.section 
        className="py-12 bg-white"
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={statsVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={statItemVariants}
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <Services />
      
      <AboutSection />
      
      {/* <Testimonials /> */}
      
      <CallToAction
        title="Prêt à sécuriser votre propriété ou entreprise?"
        subtitle="Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et obtenir un devis personnalisé."
        buttonText="Obtenir un devis gratuit"
        buttonLink="/contact"
        bgColor="bg-gradient-to-r from-gray-800 to-red-700"
        titleColor="text-white"
        subtitleColor="text-red-100"
        buttonTextColor="text-gray-600"
        buttonBgColor="bg-white"
        buttonHoverBgColor="hover:bg-gray-100"
        buttonHoverTextColor="hover:text-red-700"
        buttonBorderColor="border-white"
      />
    </>
  );
};

export default HomePage;