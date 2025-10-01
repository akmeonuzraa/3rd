import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-10 w-10 text-primary-500" />,
      title: "Téléphone",
      details: ["+212 662 086 277", "+212 665 271 595"],
      action: { text: "Appelez-nous", href: "tel:+212665271595" }
    },
    {
      icon: <Mail className="h-10 w-10 text-primary-500" />,
      title: "Email",
      details: ["contactokser@gmail.com"],
      action: { text: "Envoyez-nous un email", href: "mailto:contactokser@gmail.com" }
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary-500" />,
      title: "Adresse",
      details: ["05, Imm LAHRACH, Av. Mohamed VI", "Agadir, Ait Melloul"],
      action: { text: "Voir sur la carte", href: "#map" }
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-500" />,
      title: "Heures d'ouverture",
      details: ["Lun - Ven: 9h00 - 18h00", "Sam: 9h00 - 13h00"],
      action: { text: "Planifier une visite", href: "#" }
    }
  ];

  return (
    <>
      <Hero
        title="Contactez-nous"
        subtitle="Nous sommes à votre écoute pour répondre à toutes vos questions"
        imageSrc="https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Comment Nous Joindre"
            subtitle="Plusieurs options pour nous contacter"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700">{detail}</p>
                ))}
                <a
                  href={info.action.href}
                  className="inline-block mt-4 text-primary-600 font-medium hover:text-primary-700"
                >
                  {info.action.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Envoyez-nous un Message</h2>
              <p className="text-gray-700 mb-6">
                Que vous ayez une question, un besoin spécifique ou souhaitiez un devis, n'hésitez pas à nous contacter via ce formulaire. Notre équipe vous répondra dans les plus brefs délais.
              </p>

              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Emplacement</h2>
              <p className="text-gray-700 mb-6">
                Venez nous rencontrer dans nos bureaux situés en plein centre de Casablanca. Notre équipe sera ravie de vous accueillir et de discuter de vos besoins en personne.
              </p>

              <div id="map" className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-200">
                {/* Google Maps component using react-google-maps */}
                {/* <GoogleMap
                  defaultZoom={10}
                  defaultCenter={{ lat: 30.42, lng: -9.59 }} // Exemple : Agadir
                >
                  <Marker position={{ lat: 30.42, lng: -9.59 }} />
                </GoogleMap> */}
                {/* Google Maps iframe integration */}
<iframe
  src="https://maps.app.goo.gl/zbNeQX9iJMNR59tn8"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <p className="text-gray-600 font-medium">Carte de localisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Questions Fréquentes"
            subtitle="Trouvez rapidement des réponses aux questions les plus courantes"
            centered
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              // {
              //   question: "Dans quelles villes du Maroc intervenez-vous?",
              //   answer: "Nous intervenons dans toutes les grandes villes du Maroc, notamment Casablanca, Rabat, Marrakech, Tanger, Agadir, et Fès. Nous pouvons également étendre nos services à d'autres régions selon vos besoins."
              // },
              {
                question: "Comment obtenir un devis pour vos services?",
                answer: "Vous pouvez obtenir un devis en remplissant notre formulaire de contact, en nous appelant directement, ou en nous envoyant un email avec les détails de votre demande. Notre équipe vous répondra dans un délai de 24 à 48 heures ouvrables."
              },
              {
                question: "Vos agents de sécurité sont-ils formés et certifiés?",
                answer: "Oui, tous nos agents de sécurité sont rigoureusement sélectionnés, formés aux meilleures pratiques du secteur, et certifiés conformément aux réglementations marocaines en vigueur. Ils suivent également des formations continues pour maintenir leurs compétences à jour."
              },
              {
                question: "Proposez-vous des contrats d'entretien régulier pour les jardins?",
                answer: "Tout à fait, nous proposons des contrats d'entretien régulier adaptés à vos besoins, qu'il s'agisse d'interventions hebdomadaires, bimensuelles ou mensuelles. Chaque contrat est personnalisé selon les spécificités de votre espace vert."
              },
              {
                question: "Comment se déroule le processus de recrutement pour le travail temporaire?",
                answer: "Notre processus commence par l'analyse de vos besoins, suivie de la recherche et présélection des candidats dans notre base de données. Nous procédons ensuite à des entretiens approfondis avant de vous présenter les profils les plus adaptés. Après votre sélection, nous nous occupons de toutes les formalités administratives."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;