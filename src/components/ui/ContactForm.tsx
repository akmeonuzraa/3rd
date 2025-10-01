import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    alert('Merci pour votre message. Nous vous contacterons bientôt!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Votre nom"
            {...register('name', { required: 'Le nom est requis' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Votre email"
            {...register('email', { 
              required: 'L\'email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Votre numéro de téléphone"
            {...register('phone', { required: 'Le téléphone est requis' })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Sujet
          </label>
          <select
            id="subject"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('subject', { required: 'Le sujet est requis' })}
          >
            <option value="">Sélectionner un sujet</option>
            <option value="service-securite">Services de Sécurité</option>
            <option value="service-jardinage">Services de Jardinage</option>
            <option value="travail-temporaire">Travail Temporaire</option>
            <option value="autre">Autre</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Votre message"
          {...register('message', { 
            required: 'Le message est requis',
            minLength: {
              value: 10,
              message: 'Le message doit contenir au moins 10 caractères'
            }
          })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;