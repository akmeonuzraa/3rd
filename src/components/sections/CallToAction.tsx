import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  buttonHoverBgColor?: string;
  buttonHoverTextColor?: string;
  buttonBorderColor?: string;
}

const CallToAction: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgColor = 'bg-primary-600',
  titleColor = 'text-white',
  subtitleColor = 'text-white',
  buttonTextColor = 'text-white',
  buttonBgColor = 'bg-transparent',
  buttonHoverBgColor = 'hover:bg-white',
  buttonHoverTextColor = 'hover:text-primary-700',
  buttonBorderColor = 'border-white',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={`${bgColor} py-16`} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}>{title}</h2>
          <p className={`text-xl ${subtitleColor} opacity-90 mb-8`}>{subtitle}</p>
          <Link to={buttonLink}>
            <Button
              variant="outline"
              size="lg"
              className={`${buttonBgColor} ${buttonBorderColor} ${buttonTextColor} ${buttonHoverBgColor} ${buttonHoverTextColor}`}
            >
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;