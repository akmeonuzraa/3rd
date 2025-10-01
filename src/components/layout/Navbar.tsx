import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('fr'); // 'fr' for French, 'ar' for Arabic
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'ar' : 'fr');
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-.9' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="./src/assets/no-bg.png" 
              alt="OKSER Maroc Logo" 
              className="h-20 w-auto object-contain"
            />
            <span className={`ml-2 text-l font-semibold tracking-tight ${isScrolled ? 'text-primary-800' : 'text-gray-300'}`}>
              Votre Confiance Est En Lieu Sûr!
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600`}>
              {language === 'fr' ? 'Accueil' : 'الرئيسية'}
            </Link>
            <Link to="/about" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600`}>
              {language === 'fr' ? 'À Propos' : 'من نحن'}
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                {language === 'fr' ? 'Services' : 'خدماتنا'}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link 
                    to="/security" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    {language === 'fr' ? 'Sécurité' : 'الأمن'}
                  </Link>
                  {/* <Link 
                    to="/gardening" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    {language === 'fr' ? 'Jardinage' : 'البستنة'}
                  </Link> */}
                  <Link 
                    to="/staffing" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    {language === 'fr' ? 'Travail Temporaire' : 'العمل المؤقت'}
                  </Link>
                </div>
              )}
            </div>

            {/* <Link to="/blog" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600`}>
              {language === 'fr' ? 'Blog' : 'المدونة'}
            </Link> */}
            <Link to="/contact" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600`}>
              {language === 'fr' ? 'Contact' : 'اتصل بنا'}
            </Link>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-600`}
            >
              <Globe className="h-5 w-5 mr-1" />
              <span>{language === 'fr' ? 'FR' : 'عربي'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              {language === 'fr' ? 'Accueil' : 'الرئيسية'}
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              {language === 'fr' ? 'À Propos' : 'من نحن'}
            </Link>
            
            {/* Mobile Services Submenu */}
            <div>
              <button 
                className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>{language === 'fr' ? 'Services' : 'خدماتنا'}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {servicesDropdownOpen && (
                <div className="pl-4">
                  <Link to="/security" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    {language === 'fr' ? 'Sécurité' : 'الأمن'}
                  </Link>
                  {/* <Link to="/gardening" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    {language === 'fr' ? 'Jardinage' : 'البستنة'}
                  </Link> */}
                  <Link to="/staffing" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    {language === 'fr' ? 'Travail Temporaire' : 'العمل المؤقت'}
                  </Link>
                </div>
              )}
            </div>
            
            {/* <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              {language === 'fr' ? 'Blog' : 'المدونة'}
            </Link> */}
            <Link to="/contact" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              {language === 'fr' ? 'Contact' : 'اتصل بنا'}
            </Link>
            
            {/* Mobile Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md w-full"
            >
              <Globe className="h-5 w-5 mr-2" />
              <span>{language === 'fr' ? 'Français' : 'العربية'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;