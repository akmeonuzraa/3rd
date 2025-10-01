import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import SectionTitle from '../ui/SectionTitle';
import { Leaf } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Services de Sécurité",
      description: "Protection professionnelle pour vos biens et votre personnel avec des solutions adaptées à vos besoins spécifiques.",
      icon: <ShieldCheck className="h-6 w-6" />,
      link: "/security",
      delay: 0,
    },
    {
      title: "Services de Jardinage",
      description: "Création et entretien d'espaces verts magnifiques pour valoriser votre propriété et créer un environnement agréable.",
      icon: <Leaf className="h-6 w-6" />,
      link: "/gardening",
      delay: 1,
    },
    {
      title: "Travail Temporaire",
      description: "Solutions flexibles de recrutement temporaire pour répondre à vos besoins en personnel qualifié rapidement.",
      icon: <Users className="h-6 w-6" />,
      link: "/staffing",
      delay: 2,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos Services"
          subtitle="Découvrez nos solutions professionnelles pour répondre à tous vos besoins"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;