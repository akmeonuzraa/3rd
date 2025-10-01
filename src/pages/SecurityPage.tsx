import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CallToAction from '../components/sections/CallToAction';
import { ShieldCheck, Camera, Bell, Lock, Eye, HeartPulse } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const SecurityPage: React.FC = () => {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
    const clientLogos = [
  './src/assets/1.png',
  './src//assets/2.png',
  '/src//assets/3.png',
  '/src//assets/4.png',
  '/src//assets/5.png',
  '/src//assets/6.png',
  '/src//assets/7.png',
  '/src//assets/8.png',
  '/src//assets/9.png',
  '/src//assets/10.png',
];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const securityServices = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary-500" />,
      title: "Gardiennage",
      description: "Agents de sécurité qualifiés pour la surveillance de vos locaux 24/7. Protection des biens et des personnes avec professionnalisme et discrétion."
    },
    {
      icon: <Camera className="h-10 w-10 text-primary-500" />,
      title: "Vidéosurveillance",
      description: "Systèmes de caméras haute résolution avec surveillance à distance pour une protection optimale. Alertes en temps réel et enregistrement des événements."
    },
    {
      icon: <Bell className="h-10 w-10 text-primary-500" />,
      title: "Alarmes et Détection",
      description: "Systèmes d'alarme intelligents avec détection d'intrusion, de mouvement, et d'incendie. Notification instantanée aux autorités compétentes."
    },
    {
      icon: <Lock className="h-10 w-10 text-primary-500" />,
      title: "Contrôle d'Accès",
      description: "Solutions de contrôle d'accès adaptées à vos besoins, de la carte magnétique à la reconnaissance biométrique. Gestion des droits d'accès personnalisée."
    },
    {
      icon: <Eye className="h-10 w-10 text-primary-500" />,
      title: "Sécurité Événementielle",
      description: "Protection lors d'événements spéciaux, conférences, ou rassemblements. Équipes expérimentées en gestion de foule et prévention des risques."
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-primary-500" />,
      title: "Formation et Conseil",
      description: "Audit de sécurité et formation de votre personnel aux procédures d'urgence et à la prévention des risques. Plans de sécurité sur mesure."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Évaluation",
      description: "Analyse complète de vos besoins et identification des risques potentiels."
    },
    {
      number: "02",
      title: "Proposition",
      description: "Élaboration d'une solution de sécurité personnalisée et d'un devis détaillé."
    },
    {
      number: "03",
      title: "Déploiement",
      description: "Installation des équipements et mise en place des agents de sécurité."
    },
    {
      number: "04",
      title: "Suivi",
      description: "Contrôle régulié et ajustement continu pour garantir une protection optimale."
    }
  ];

  return (
    <>
      <Hero 
        title="Services de Sécurité Professionnels"
        subtitle="Protection complète pour les entreprises et les particuliers"
        imageSrc="./src/assets/security.png"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Votre Sécurité, Notre Priorité</h2>
              <p className="text-gray-700 mb-4">
                Chez OKSER Maroc, nous comprenons que la sécurité est une préoccupation essentielle pour toute entreprise et tout foyer. Nos solutions de sécurité professionnelles sont conçues pour vous offrir une tranquillité d'esprit totale.
              </p>
              <p className="text-gray-700 mb-4">
                Que vous soyez une entreprise souhaitant protéger vos locaux et votre personnel, ou un particulier cherchant à sécuriser votre domicile, nos experts en sécurité élaboreront une solution adaptée à vos besoins spécifiques et à votre budget.
              </p>
              <p className="text-gray-700 mb-6">
                Avec des équipes formées aux dernières techniques de sécurité et utilisant des équipements de pointe, nous assurons une protection efficace contre les risques d'intrusion, de vol, et d'autres menaces potentielles.
              </p>
              
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  className="!bg-transparent !text-black !border-2 !border-black-500 hover:!bg-red-500/20 hover:!text-black hover:!border-gray-400 hover:shadow-md focus:!ring-2 focus:!ring-red-500/50 focus:!border-red-500/80 rounded-md px-4 py-2 transition-all duration-200 shadow-sm"
                >Demander un devis</Button>
              </Link>
            </div>
            
            <div>
              <img 
                src="./src/assets/securité.png" 
                alt="Sécurité professionnelle" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos Services de Sécurité"
            subtitle="Des solutions complètes pour répondre à tous vos besoins"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {securityServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={itemVariants}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-white" ref={processRef}>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Notre Processus"
            subtitle="Comment nous mettons en place votre solution de sécurité"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-primary-50 text-primary-800 text-5xl font-bold w-20 h-20 flex items-center justify-center rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                
                {/* Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary-200 -mr-4"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Ils Nous Font Confiance"
            subtitle="Des références solides dans divers secteurs d'activité"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
  <div key={index} className="flex justify-center">
    <div className="bg-white p-4 rounded-lg shadow-sm w-full h-20 flex items-center justify-center">
      <img
        src={logo}
        alt={`Logo Client ${index + 1}`}
        className="max-h-16 object-contain"
      />
    </div>
  </div>
))}

          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Besoin d'une solution de sécurité sur mesure?"
        subtitle="Nos experts sont prêts à évaluer vos besoins et à vous proposer une solution adaptée."
        buttonText="Contactez-nous"
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

export default SecurityPage;