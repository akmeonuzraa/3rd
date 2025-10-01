import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Facebook, Linkedin, Clock, ArrowUp, Shield, Leaf, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-700 via-slate-500 to-red-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6">
              <div className="mr-3">
                <img 
                  src="./src/assets/no-bg.png" 
                  alt="OKSER Maroc Logo" 
                  className="h-36 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
              Votre partenaire de confiance pour la sécurité, l'aménagement extérieur et les solutions de personnel temporaire au Maroc.
            </p>
            
            {/* Service badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                <Shield className="h-4 w-4 mr-2 text-blue-400" />
                Surveillance et Gardiennage
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                <Leaf className="h-4 w-4 mr-2 text-gray-400" />
                Externalisation des tâches et services (Nettoyage, Jardinage...)
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                <Users className="h-4 w-4 mr-2 text-purple-400" />
                Personnel Permanent / Temporaire
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a 
                href="https://fr-fr.facebook.com/people/Okser-Sarl/pfbid02ASzgi4KY1Ra4iGMVXTCRq4ygPEDdBNTXmFEGg87dnzjpbkXmaWzw1APnMzYBCbxzl/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-blue-600 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook OKSER"
              >
                <Facebook className="h-5 w-5 group-hover:text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/okser-sarl-442a77116/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-blue-700 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn OKSER"
              >
                <Linkedin className="h-5 w-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 relative">
              Navigation
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-red-500 to-gray-800 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/about', label: 'À Propos' },
                { to: '/security', label: 'Sécurité' },
                // { to: '/gardening', label: 'Jardinage' },
                { to: '/staffing', label: 'Travail Temporaire' },
                // { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-gray-800 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-red-500 to-gray-800 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                'Gardiennage',
                'Vidéosurveillance',
                'Entretien Jardins',
                'Aménagement',
                'Recrutement',
                'Conseil RH'
              ].map((service) => (
                <li key={service} className="text-slate-300 hover:text-white transition-colors duration-300 cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-red-500 to-gray-800 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-gradient-to-r from-red-500 to-gray-800 rounded-lg p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  5, bd Mohammed VI, imm. Lahrach 86360 <br />Aït Melloul - Maroc
                </span>
              </li>
              <li className="flex items-center group">
                <div className="bg-gradient-to-r from-red-500 to-gray-800 rounded-lg p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <a 
                  href="tel:+212662086277" 
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  +212 662 086 277
                </a>
              </li>
              <li className="flex items-start group">
                <div className="bg-gradient-to-r from-red-500 to-gray-800 rounded-lg p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-4 w-4 mt-0.5" />
                </div>
                <div className="text-slate-300 group-hover:text-white transition-colors duration-300">
                  <p className="font-medium">Lun - Ven: 9h00 - 18h00</p>
                  <p>Sam: 9h00 - 13h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-center lg:text-left">
              <p className="mb-2">
                &copy; {new Date().getFullYear()} OKSER Maroc. Tous droits réservés.
              </p>
              <p className="text-sm">
                Fait au Maroc
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              {[
                { to: '/terms', label: 'Conditions' },
                { to: '/privacy', label: 'Confidentialité' },
                { to: '/cookies', label: 'Cookies' }
              ].map((link, index) => (
                <React.Fragment key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-gray-800 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  {index < 2 && <span className="text-slate-600">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
