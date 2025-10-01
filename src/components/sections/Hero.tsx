import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  // Nouvelles propriétés de couleur
  overlayColor?: string;
  overlayOpacity?: string;
  titleColor?: string;
  subtitleColor?: string;
  primaryButtonBgColor?: string;
  primaryButtonTextColor?: string;
  primaryButtonHoverBgColor?: string;
  primaryButtonHoverTextColor?: string;
  primaryButtonBorderColor?: string;
  secondaryButtonBgColor?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonBorderColor?: string;
  secondaryButtonHoverBgColor?: string;
  secondaryButtonHoverTextColor?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  overlayColor = 'bg-black',
  overlayOpacity = 'opacity-50',
  titleColor = 'text-white',
  subtitleColor = 'text-gray-200',
  primaryButtonBgColor = 'bg-transparent',
  primaryButtonTextColor = 'text-white',
  primaryButtonHoverBgColor = 'hover:bg-white',
  primaryButtonHoverTextColor = 'hover:text-red-600',
  primaryButtonBorderColor = 'border-white',
  secondaryButtonBgColor = 'bg-transparent',
  secondaryButtonTextColor = 'text-white',
  secondaryButtonBorderColor = 'border-white',
  secondaryButtonHoverBgColor = 'hover:bg-white',
  secondaryButtonHoverTextColor = 'hover:text-red-600',
}) => {
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

  // Construction des classes CSS pour le bouton primaire
  const primaryButtonClasses = [
    primaryButtonBgColor,
    primaryButtonTextColor,
    primaryButtonBorderColor,
    primaryButtonHoverBgColor,
    primaryButtonHoverTextColor,
  ].filter(Boolean).join(' ');

  // Construction des classes CSS pour le bouton secondaire
  const secondaryButtonClasses = [
    secondaryButtonBgColor,
    secondaryButtonTextColor,
    secondaryButtonBorderColor,
    secondaryButtonHoverBgColor,
    secondaryButtonHoverTextColor,
  ].filter(Boolean).join(' ');

  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity}`}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${titleColor}`}>
            {title}
          </motion.h1>
          <motion.p variants={itemVariants} className={`text-xl md:text-2xl mb-8 ${subtitleColor}`}>
            {subtitle}
          </motion.p>
         
          {(primaryButtonText || secondaryButtonText) && (
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {primaryButtonText && primaryButtonLink && (
                <Link to={primaryButtonLink}>
                  <Button 
                    variant="outline"
                    size="lg" 
                    className={primaryButtonClasses}
                  >
                    {primaryButtonText}
                  </Button>
                </Link>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Link to={secondaryButtonLink}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className={secondaryButtonClasses}
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;