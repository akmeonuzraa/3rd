import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const valueItems = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary-500" />,
      title: "Fiabilité",
      description: "Nous tenons toujours nos promesses et respectons nos engagements envers nos clients."
    },
    {
      icon: <Award className="h-6 w-6 text-primary-500" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services et cherchons constamment à nous améliorer."
    },
    {
      icon: <Users className="h-6 w-6 text-primary-500" />,
      title: "Respect",
      description: "Nous valorisons chaque client et chaque membre de notre équipe avec dignité et respect."
    },
    {
      icon: <Target className="h-6 w-6 text-primary-500" />,
      title: "Engagement",
      description: "Nous sommes engagés à fournir des solutions qui répondent aux besoins spécifiques de nos clients."
    }
  ];

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionTitle
          title="À Propos d'OKSER Maroc"
          subtitle="Votre partenaire de confiance au Maroc depuis 2014"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
            <motion.p variants={itemVariants} className="text-gray-700 mb-6">
              OKSER Maroc est votre partenaire privilégié pour tous vos besoins en matière de gardiennage et surveillance, de nettoyage, de jardinage et de mise à disposition du personnel temporaire au Maroc. Fondée en 2014, notre entreprise s'est construite sur des valeurs fortes de professionnalisme, de fiabilité et d'engagement envers nos clients.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-700 mb-6">
              Notre mission est de vous offrir des solutions concrètes et adaptées à vos besoins spécifiques. Que vous soyez une entreprise, un particulier ou une collectivité, OKSER Maroc met à votre disposition son expertise et son savoir-faire pour garantir votre satisfaction.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-700 mb-8">
              Avec une équipe de professionnels qualifiés et expérimentés, nous nous engageons à vous fournir des services de haute qualité, respectant les normes les plus strictes dans nos diverses prestations de services.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {valueItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="OKSER Maroc équipe"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-9 -left-8 bg-primary-600 text-red-800 p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-2xl">20+</p>
                <p className="text-sm">Années d'expérience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;