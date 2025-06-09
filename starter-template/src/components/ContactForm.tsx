'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from 'next-intl';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const t = useTranslations('contactForm');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        toast.success(t('success'));
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.error(t('error'));
        console.error(error);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg z-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t('name')}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            {t('subject')}
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t('message')}
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-auto px-8 py-3 rounded-xl font-semibold transition-colors duration-300 ${isSubmitting
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
        >
          {isSubmitting ? t('sending') : t('send')}
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};
