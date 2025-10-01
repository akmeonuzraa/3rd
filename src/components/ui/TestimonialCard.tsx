import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: delay * 0.2,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500"
    >
      <Quote className="h-8 w-8 text-primary-300 mb-4" />
      <p className="italic text-gray-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 uppercase font-bold mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-600 text-sm">
            {position}
            {company && <span> - {company}</span>}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;