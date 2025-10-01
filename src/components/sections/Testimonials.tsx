import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import SectionTitle from '../ui/SectionTitle';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Les services de sécurité d'OKSERmaroc nous ont permis de nous sentir en sécurité dans notre résidence. Leur professionnalisme est exemplaire.",
      author: "Mohammed El Fassi",
      position: "Propriétaire",
      company: "Résidence Les Jardins",
      delay: 0,
    },
    {
      quote: "Notre jardin n'a jamais été aussi beau. L'équipe de jardinage d'OKSERmaroc est compétente et attentive à nos besoins spécifiques.",
      author: "Fatima Zahra",
      position: "Directrice",
      company: "Hôtel Royal Palm",
      delay: 1,
    },
    {
      quote: "Grâce à OKSERmaroc, nous avons pu trouver rapidement du personnel qualifié pour notre période de forte activité. Un service impeccable!",
      author: "Ahmed Benjelloun",
      position: "DRH",
      company: "MAMDA Assurances",
      delay: 2,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Témoignages Clients"
          subtitle="Découvrez ce que nos clients disent de nos services"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;