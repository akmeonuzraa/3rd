import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const BlogPage: React.FC = () => {
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [articlesRef, articlesInView] = useInView({
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

  const featuredPosts = [
    {
      title: "5 conseils pour sécuriser efficacement votre entreprise",
      excerpt: "Découvrez les meilleures pratiques pour protéger vos locaux et votre personnel contre les risques...",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "15 mars 2024",
      author: "Hassan Benali",
      category: "Sécurité"
    },
    {
      title: "Aménagez votre jardin pour l'été: tendances et astuces",
      excerpt: "Préparez votre espace extérieur pour la saison estivale avec ces conseils d'experts en jardinage...",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "2 avril 2024",
      author: "Samira El Amrani",
      category: "Jardinage"
    },
    {
      title: "Les avantages du travail temporaire pour les entreprises",
      excerpt: "Comment le recours au personnel temporaire peut aider votre entreprise à gagner en flexibilité...",
      image: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "18 avril 2024",
      author: "Nadia Chraibi",
      category: "Recrutement"
    }
  ];

  const recentPosts = [
    {
      title: "Comment choisir le bon système d'alarme pour votre domicile",
      excerpt: "Guide complet pour sélectionner et installer un système d'alarme adapté à vos besoins...",
      image: "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "25 avril 2024",
      author: "Karim Tazi",
      category: "Sécurité"
    },
    {
      title: "Les plantes adaptées au climat marocain pour un jardin économe en eau",
      excerpt: "Sélection de plantes résistantes à la sécheresse et conseils d'entretien pour un jardin durable...",
      image: "https://images.pexels.com/photos/1261016/pexels-photo-1261016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "10 mai 2024",
      author: "Samira El Amrani",
      category: "Jardinage"
    },
    {
      title: "Préparation aux entretiens: conseils pour les candidats temporaires",
      excerpt: "Comment se démarquer lors d'un entretien pour un poste temporaire et maximiser vos chances...",
      image: "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "17 mai 2024",
      author: "Nadia Chraibi",
      category: "Recrutement"
    },
    {
      title: "Les erreurs à éviter dans l'aménagement de votre système de vidéosurveillance",
      excerpt: "Conseils d'experts pour une installation efficace et conforme à la réglementation...",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "22 mai 2024",
      author: "Hassan Benali",
      category: "Sécurité"
    },
    {
      title: "Entretien de jardin: calendrier des travaux essentiels pour chaque saison",
      excerpt: "Guide pratique pour maintenir votre espace vert en parfait état tout au long de l'année...",
      image: "https://images.pexels.com/photos/2132777/pexels-photo-2132777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "1 juin 2024",
      author: "Samira El Amrani",
      category: "Jardinage"
    },
    {
      title: "Les tendances du marché de l'emploi temporaire au Maroc en 2024",
      excerpt: "Analyse des secteurs en croissance et des compétences les plus recherchées...",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "8 juin 2024",
      author: "Nadia Chraibi",
      category: "Recrutement"
    }
  ];

  return (
    <>
      <Hero 
        title="Blog OKSERmaroc"
        subtitle="Conseils, actualités et informations sur la sécurité, le jardinage et le recrutement"
        imageSrc="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Featured Posts Section */}
      <section className="py-16 bg-white" ref={featuredRef}>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Articles à la Une"
            subtitle="Découvrez nos derniers articles sur des sujets qui vous intéressent"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {featuredPosts.map((post, index) => (
              <motion.article 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md"
                variants={itemVariants}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 uppercase font-bold mr-2">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    
                    <a href="#" className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                      Lire plus
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["Tous", "Sécurité", "Jardinage", "Recrutement", "Conseils", "Actualités"].map((category, index) => (
              <a 
                key={index} 
                href="#" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Articles Section */}
      <section className="py-16 bg-white" ref={articlesRef}>
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Articles Récents"
            subtitle="Restez informé avec nos dernières publications"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={articlesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {recentPosts.map((post, index) => (
              <motion.article 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-primary-600">
                      {post.category}
                    </span>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-700 text-sm mb-3">{post.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <User className="h-3 w-3 text-gray-500 mr-1" />
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    
                    <a href="#" className="text-sm text-primary-600 font-medium flex items-center hover:text-primary-700">
                      Lire plus
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Button variant="outline">
              Voir plus d'articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Abonnez-vous à notre newsletter</h2>
            <p className="text-gray-700 mb-6">
              Recevez nos derniers articles, conseils et actualités directement dans votre boîte mail.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <Button type="submit">
                S'abonner
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              En vous abonnant, vous acceptez notre politique de confidentialité. Vous pourrez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;