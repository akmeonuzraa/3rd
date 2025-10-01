import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CallToAction from '../components/sections/CallToAction';
import { Leaf, Scissors, FlowerIcon, Cloud, LayoutGrid, Sprout } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const GardeningPage: React.FC = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [galleryRef, galleryInView] = useInView({
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const gardeningServices = [
    {
      icon: <Scissors className="h-10 w-10 text-secondary-500" />,
      title: "Entretien Régulier",
      description: "Service complet d'entretien incluant tonte de pelouse, taille de haies et d'arbustes, désherbage et nettoyage des espaces verts."
    },
    {
      icon: <LayoutGrid className="h-10 w-10 text-secondary-500" />,
      title: "Conception Paysagère",
      description: "Création de jardins et espaces verts personnalisés selon vos goûts et adaptés à votre environnement. Plans détaillés et visualisation 3D."
    },
    {
      icon: <FlowerIcon className="h-10 w-10 text-secondary-500" />,
      title: "Plantation",
      description: "Sélection et plantation d'arbres, arbustes, fleurs et plantes adaptés au climat marocain et à vos préférences esthétiques."
    },
    {
      icon: <Cloud className="h-10 w-10 text-secondary-500" />,
      title: "Systèmes d'Irrigation",
      description: "Installation et maintenance de systèmes d'arrosage automatiques économes en eau, adaptés aux besoins spécifiques de votre jardin."
    },
    {
      icon: <Sprout className="h-10 w-10 text-secondary-500" />,
      title: "Traitement et Fertilisation",
      description: "Protection de vos plantes contre les maladies et les parasites. Fertilisation adaptée pour une croissance optimale et durable."
    },
    {
      icon: <Leaf className="h-10 w-10 text-secondary-500" />,
      title: "Aménagement Extérieur",
      description: "Création d'allées, terrasses, rocailles, points d'eau et autres éléments décoratifs pour sublimer votre espace extérieur."
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1131407/pexels-photo-1131407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/130763/pexels-photo-130763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6508948/pexels-photo-6508948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/589/garden-metal-green-photography.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  return (
    <>
      <Hero 
        title="Services de Jardinage et Aménagement Paysager"
        subtitle="Créez et entretenez des espaces verts magnifiques avec notre expertise"
        imageSrc="https://images.pexels.com/photos/589/garden-metal-green-photography.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jardinage professionnel" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformez Votre Espace Extérieur</h2>
              <p className="text-gray-700 mb-4">
                OKSERmaroc vous propose des services complets de jardinage et d'aménagement paysager pour créer et entretenir des espaces verts qui reflètent votre style et s'adaptent à votre environnement.
              </p>
              <p className="text-gray-700 mb-4">
                Notre équipe de jardiniers qualifiés et passionnés s'occupe de tout, de la conception à l'entretien régulier, en passant par la plantation et l'installation de systèmes d'irrigation économes en eau.
              </p>
              <p className="text-gray-700 mb-6">
                Que vous soyez un particulier souhaitant embellir votre jardin, une entreprise désireuse d'aménager ses espaces extérieurs, ou une collectivité ayant besoin d'un entretien régulier, nous vous offrons des solutions sur mesure qui respectent votre budget et l'environnement.
              </p>
              
              <Link to="/contact">
                <Button variant="secondary">Demander un devis</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos Services de Jardinage"
            subtitle="Des solutions complètes pour tous vos besoins en espaces verts"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {gardeningServices.map((service, index) => (
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
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Pourquoi Choisir Nos Services de Jardinage"
            subtitle="Une approche professionnelle pour des résultats exceptionnels"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Jardiniers qualifiés avec des années d'expérience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Connaissance approfondie des plantes et du climat marocain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Formation continue sur les dernières techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Approche créative et esthétique pour chaque projet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Solutions personnalisées selon vos besoins spécifiques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre Engagement</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Utilisation de produits respectueux de l'environnement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Gestion durable de l'eau et des ressources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Respect strict des délais et des budgets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Service client réactif et à l'écoute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  <span className="text-gray-700">Suivi régulier et ajustements selon vos retours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 bg-gray-50" ref={galleryRef}>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos Réalisations"
            subtitle="Quelques exemples de nos créations et entretiens d'espaces verts"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="group overflow-hidden rounded-lg shadow-md relative"
                variants={itemVariants}
              >
                <img 
                  src={image} 
                  alt={`Réalisation ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-bold text-lg">Projet {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <CallToAction 
        title="Prêt à transformer votre espace extérieur?"
        subtitle="Contactez-nous dès aujourd'hui pour discuter de votre projet de jardinage."
        buttonText="Demander un devis"
        buttonLink="/contact"
        bgColor="bg-secondary-600"
      />
    </>
  );
};

export default GardeningPage;