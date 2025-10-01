import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CallToAction from '../components/sections/CallToAction';
import { Users, Briefcase, Clock, Search, FileCheck, Building } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const StaffingPage: React.FC = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sectorsRef, sectorsInView] = useInView({
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staffingServices = [
    {
      icon: <Search className="h-10 w-10 text-red-500" />,
      title: "Recrutement Temporaire",
      description: "Mise à disposition rapide de personnel qualifié pour répondre à vos besoins ponctuels ou saisonniers. Processus de sélection rigoureux pour garantir des profils adaptés."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-red-500" />,
      title: "Placement Permanent",
      description: "Identification et sélection des meilleurs talents pour des postes permanents au sein de votre entreprise. Accompagnement complet du processus de recrutement."
    },
    {
      icon: <Clock className="h-10 w-10 text-red-500" />,
      title: "Remplacement Urgent",
      description: "Solution immédiate pour remplacer un employé absent ou pallier un besoin soudain en personnel. Réactivité garantie pour minimiser l'impact sur votre activité."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-red-500" />,
      title: "Gestion Administrative",
      description: "Prise en charge complète des formalités administratives liées à l'emploi temporaire, vous permettant de vous concentrer sur votre cœur de métier."
    }
  ];

  const sectors = [
    {
      icon: <Building className="h-10 w-10 text-red-500" />,
      title: "BTP et Construction",
      skills: ["Maçons", "Électriciens", "Plombiers", "Chefs de chantier", "Manœuvres"]
    },
    {
      icon: <Building className="h-10 w-10 text-red-500" />,
      title: "Industrie et Logistique",
      skills: ["Opérateurs de production", "Caristes", "Préparateurs de commandes", "Techniciens de maintenance", "Magasiniers"]
    },
    {
      icon: <Building className="h-10 w-10 text-red-500" />,
      title: "Hôtellerie et Restauration",
      skills: ["Serveurs", "Cuisiniers", "Réceptionnistes", "Femmes de chambre", "Managers"]
    },
    {
      icon: <Building className="h-10 w-10 text-red-500" />,
      title: "Administratif et Tertiaire",
      skills: ["Assistants administratifs", "Comptables", "Secrétaires", "Agents d'accueil", "Téléopérateurs"]
    },
    {
      icon: <Building className="h-10 w-10 text-red-500" />,
      title: "Commerce et Distribution",
      skills: ["Vendeurs", "Caissiers", "Responsables de rayon", "Merchandisers", "Agents de sécurité"]
    },
    {
      icon: <Building className="h-10 w-10 text-red-500" />,
      title: "Secteur Agricole",
      skills: ["Ouvriers agricoles", "Conducteurs d'engins", "Techniciens", "Superviseurs", "Saisonniers"]
    }
  ];

  return (
    <>
      <Hero 
        title="Solutions de Travail Temporaire"
        subtitle="Flexibilité et expertise pour vos besoins en personnel"
        imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Votre Partenaire RH de Confiance</h2>
              <p className="text-gray-700 mb-4">
                OKSER Maroc vous propose des solutions flexibles et efficaces pour tous vos besoins en recrutement temporaire ou permanent. Notre expertise dans divers secteurs d'activité nous permet de vous fournir rapidement des candidats qualifiés et motivés.
              </p>
              <p className="text-gray-700 mb-4">
                Que vous ayez besoin de renforcer vos équipes pour faire face à un pic d'activité, remplacer un collaborateur absent, ou constituer une équipe pour un nouveau projet, nos conseillers en recrutement sont à votre écoute pour comprendre vos besoins spécifiques.
              </p>
              <p className="text-gray-700 mb-6">
                Nous prenons en charge l'intégralité du processus, de la recherche des profils à la gestion administrative, vous permettant ainsi de vous concentrer sur votre cœur de métier tout en bénéficiant d'une main-d'œuvre qualifiée et adaptée.
              </p>
              
              <div className="flex gap-4">
                <Link to="/contact">
                  <Button 
                    variant="secondary" 
                  className="!bg-transparent !text-black !border-2 !border-black-500 hover:!bg-red-500/20 hover:!text-black hover:!border-gray-400 hover:shadow-md focus:!ring-2 focus:!ring-red-500/50 focus:!border-red-500/80 rounded-md px-4 py-2 transition-all duration-200 shadow-sm"
                  >
                    Pour les entreprises
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                  className="!bg-transparent !text-black !border-2 !border-black-500 hover:!bg-red-500/20 hover:!text-black hover:!border-gray-400 hover:shadow-md focus:!ring-2 focus:!ring-red-500/50 focus:!border-red-500/80 rounded-md px-4 py-2 transition-all duration-200 shadow-sm"
                  >
                    Pour les candidats
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Recrutement professionnel" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - Responsive */}
<section className="py-12 sm:py-16 lg:py-20 bg-gray-50" ref={servicesRef}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Nos Services de Recrutement"
      subtitle="Des solutions adaptées à chaque besoin en ressources humaines"
      centered
    />
    
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12"
      initial="hidden"
      animate={servicesInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {staffingServices.map((service, index) => (
        <motion.div 
          key={index} 
          className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          variants={itemVariants}
        >
          <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Process Section - Responsive et Claire */}
<section className="py-12 sm:py-16 lg:py-20 bg-white" ref={processRef}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title="Notre Processus de Recrutement"
      subtitle="Une méthodologie éprouvée pour des résultats optimaux"
      centered
    />
    
    <motion.div 
      className="relative mt-8 sm:mt-12"
      initial="hidden"
      animate={processInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Desktop Timeline - Ligne verticale centrale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-200 via-gray-300 to-gray-400 hidden lg:block h-full top-0 z-0 rounded-full"></div>
      
      {/* Mobile Timeline - Ligne verticale à gauche */}
      <div className="absolute left-6 sm:left-8 top-0 w-1 bg-gradient-to-b from-red-200 via-gray-300 to-gray-400 lg:hidden h-full z-0 rounded-full"></div>
      
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {[
          {
            title: "Analyse des besoins",
            description: "Nous prenons le temps de comprendre précisément vos exigences, la culture de votre entreprise et les spécificités du poste à pourvoir."
          },
          {
            title: "Recherche et présélection",
            description: "Notre équipe identifie les candidats potentiels dans notre base de données ou via nos canaux de recrutement, puis effectue une première sélection."
          },
          {
            title: "Évaluation approfondie",
            description: "Les candidats présélectionnés passent des entretiens et éventuellement des tests pour valider leurs compétences et leur adéquation avec le poste."
          },
          {
            title: "Présentation des candidats",
            description: "Nous vous présentons uniquement les profils qui correspondent le mieux à vos attentes, avec un dossier détaillé pour chaque candidat."
          },
          {
            title: "Intégration et suivi",
            description: "Une fois votre choix effectué, nous facilitons l'intégration du candidat et assurons un suivi régulier pour garantir votre satisfaction."
          }
        ].map((step, index) => (
          <motion.div 
            key={index} 
            className="relative"
            variants={itemVariants}
          >
            {/* Layout Mobile et Tablet */}
            <div className="lg:hidden">
              <div className="flex items-start">
                {/* Numéro Mobile */}
                <div className="relative flex-shrink-0 z-10 mr-6 sm:mr-8">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm sm:text-base transition-transform duration-300 hover:scale-110">
                    {index + 1}
                  </div>
                </div>
                
                {/* Contenu Mobile */}
                <div className="flex-1 bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Layout Desktop */}
            <div className="hidden lg:flex items-center">
              {/* Contenu gauche pour les éléments impairs (1, 3, 5) */}
              <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'invisible'}`}>
                {index % 2 === 0 && (
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Numéro centré Desktop */}
              <div className="flex-shrink-0 z-10 relative">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-4 border-white shadow-xl flex items-center justify-center text-white font-bold transition-transform duration-300 hover:scale-125 cursor-pointer">
                  {index + 1}
                </div>
                {/* Pulse animation pour Desktop */}
                <div className="absolute inset-0 rounded-full bg-red-400 opacity-30 animate-ping"></div>
              </div>
              
              {/* Contenu droite pour les éléments pairs (2, 4) */}
              <div className={`w-1/2 px-8 ${index % 2 !== 0 ? 'text-left' : 'invisible'}`}>
                {index % 2 !== 0 && (
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
      
      {/* Sectors Section */}
      <section className="py-16 bg-gray-50" ref={sectorsRef}>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos Secteurs d'Intervention"
            subtitle="Une expertise dans de nombreux domaines d'activité"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={sectorsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {sectors.map((sector, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={itemVariants}
              >
                <div className="mb-4">{sector.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.title}</h3>
                <ul className="space-y-1">
                  {sector.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-red-500 mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Two CTAs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <Users className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pour les Entreprises</h3>
              <p className="text-gray-700 mb-6">
                Trouvez rapidement le personnel qualifié dont vous avez besoin pour développer votre activité. Nos solutions de recrutement sont flexibles et adaptées à vos contraintes.
              </p>
              <Link to="/contact">
                <Button 
                  variant="secondary" 
                  className="!bg-transparent !text-black !border-2 !border-black-500 hover:!bg-red-500/20 hover:!text-black hover:!border-gray-400 hover:shadow-md focus:!ring-2 focus:!ring-red-500/50 focus:!border-red-500/80 rounded-md px-4 py-2 transition-all duration-200 shadow-sm"
                >
                  Soumettre un besoin
                </Button>
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <Briefcase className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pour les Candidats</h3>
              <p className="text-gray-700 mb-6">
                Accédez à de nombreuses opportunités d'emploi dans divers secteurs d'activité. Bénéficiez de notre accompagnement pour trouver des missions correspondant à vos compétences.
              </p>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="!bg-transparent !text-black !border-2 !border-black-500 hover:!bg-red-500/20 hover:!text-black hover:!border-gray-400 hover:shadow-md focus:!ring-2 focus:!ring-red-500/50 focus:!border-red-500/80 rounded-md px-4 py-2 transition-all duration-200 shadow-sm"
                >
                  Déposer votre CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="À la recherche de talents ou d'opportunités?"
        subtitle="Contactez nos conseillers en recrutement dès maintenant pour discuter de vos besoins."
        buttonText="Nous contacter"
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

export default StaffingPage;