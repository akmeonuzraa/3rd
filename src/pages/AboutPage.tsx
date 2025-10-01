import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CallToAction from '../components/sections/CallToAction';
import { Award, UserCheck, Globe, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [historyRef, historyInView] = useInView({
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

  const teamMembers = [
    {
      name: "Nadia Benfares",
      position: "Gérante Administrative",
      description: "Responsable de la gestion administrative et financière de l'entreprise.",
      image: "./src/assets/unknown.png"
    },
    {
      name: "Abdelkabir Amoura",
      position: "Directeur Général",
      description: "Plus de 20 ans d'expérience dans le secteur de la sécurité et des services.",
      image: "./src/assets/directeur.jpeg"
    },
    {
      name: "Aymane Amoura",
      position: "Responsable Sécurité",
      description: "Spécialiste en protocoles de sécurité et gestion d'équipes.",
      image: "./src/assets/unknown.png"
    },
    {
      name: "Fatima",
      position: "Responsable RH",
      description: "En charge du recrutement et de la gestion du personnel temporaire.",
      image: "./src/assets/unknown.png"
    }
  ];

  const milestones = [
    {
      year: "2014",
      title: "Fondation d'OKSER Maroc",
      description: "Début des activités avec une focus sur les services de sécurité pour les entreprises."
    },
    {
      year: "2016",
      title: "Expansion des services",
      description: "Introduction de l'externalisation des tâches et services (Nettoyage, Jardinage, ...)."
    },
    {
      year: "2016",
      title: "Lancement du pôle travail temporaire",
      description: "Diversification avec des solutions de recrutement et travail temporaire."
    },
  ];

  const missionItems = [
    {
      icon: <Award className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />,
      title: "Notre Mission",
      subtitle: "Excellence & Qualité",
      description: "Offrir des services professionnels de haute qualité dans la sécurité, le jardinage et le travail temporaire.",
      bgGradient: "from-blue-600 to-blue-700",
      hoverGradient: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      icon: <UserCheck className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />,
      title: "Notre Vision",
      subtitle: "Leadership & Innovation",
      description: "Devenir le partenaire de référence au Maroc pour des solutions intégrées, reconnu pour notre excellence.",
      bgGradient: "from-emerald-600 to-emerald-700",
      hoverGradient: "hover:from-emerald-700 hover:to-emerald-800"
    },
    {
      icon: <Globe className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />,
      title: "Nos Valeurs",
      subtitle: "Intégrité & Respect",
      description: "Intégrité, excellence, respect et professionnalisme guident toutes nos actions et interactions.",
      bgGradient: "from-purple-600 to-purple-700",
      hoverGradient: "hover:from-purple-700 hover:to-purple-800"
    },
    {
      icon: <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />,
      title: "Notre Engagement",
      subtitle: "Fiabilité & Durabilité",
      description: "Nous garantissons des services de qualité supérieure et contribuons au développement durable.",
      bgGradient: "from-red-600 to-red-700",
      hoverGradient: "hover:from-red-700 hover:to-red-800"
    }
  ];

  return (
    <>
      <Hero 
        title="À Propos d'OKSER Maroc"
        subtitle="Découvrez notre histoire, notre mission et l'équipe qui fait notre force"
        imageSrc="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <AboutSection />
      
      {/* Mission and Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100" ref={missionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre Mission et Vision"
            subtitle="Ce qui nous guide et nous inspire chaque jour"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 sm:mt-12"
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {missionItems.map((item, index) => (
              <motion.div
                key={index}
                className={`
                  relative overflow-hidden rounded-2xl p-6 sm:p-8 
                  bg-gradient-to-br ${item.bgGradient} 
                  ${item.hoverGradient}
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl
                  group cursor-pointer
                  min-h-[280px] sm:min-h-[320px]
                `}
                variants={itemVariants}
              >
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-white opacity-10 rounded-full transform translate-x-4 sm:translate-x-8 -translate-y-4 sm:-translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative mb-4 sm:mb-6 flex justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-4 group-hover:bg-white/30 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                <div className="relative z-10 text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-white/80 mb-3 sm:mb-4">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 group-hover:bg-white/50 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" ref={teamRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre Équipe Dirigeante"
            subtitle="Des professionnels expérimentés à votre service"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 sm:mt-12"
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wide">
                    {member.position}
                  </p>
                  {member.description && (
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {member.description}
                    </p>
                  )}
                </div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our History/Milestones Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50" ref={historyRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre Histoire"
            subtitle="Les étapes clés de notre développement"
            centered
          />
          
          <motion.div 
            className="relative mt-8 sm:mt-12 lg:mt-16"
            initial="hidden"
            animate={historyInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Desktop Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-gray-500 to-gray-900 rounded-full hidden lg:block"></div>
            
            {/* Mobile Timeline */}
            <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-red-500 via-gray-500 to-gray-900 rounded-full lg:hidden"></div>
            
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-start lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                  variants={itemVariants}
                >
                  {/* Mobile Layout */}
                  <div className="lg:hidden w-full pl-16 relative">
                    <div className="absolute -left-8 top-6 transform -translate-x-1/2 z-10">
                      <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-red-500 to-gray-500 border-4 border-white shadow-xl flex items-center justify-center">
                        <div className="h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-white"></div>
                      </div>
                    </div>
                    
                    <div className="inline-block py-2 px-3 sm:px-4 rounded-full bg-gradient-to-r from-red-500 to-gray-500 text-white font-bold text-xs sm:text-sm mb-4 shadow-lg">
                      {milestone.year}
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:block lg:w-1/2 mb-8 lg:mb-0 lg:px-12 text-center lg:text-left ${
                    index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                  }`}>
                    <div className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-red-500 to-gray-500 text-white font-bold text-sm mb-4 shadow-lg">
                      {milestone.year}
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex-shrink-0 z-10 hidden lg:flex">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-red-500 to-gray-500 border-4 border-white shadow-xl flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block lg:w-1/2 lg:px-12"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <CallToAction 
        title="Prêt à travailler avec nous?"
        subtitle="Contactez-nous dès aujourd'hui pour discuter de vos projets et besoins spécifiques."
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

export default AboutPage;