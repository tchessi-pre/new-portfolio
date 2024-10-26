'use client';


import { useState, useEffect } from 'react';

export const LanguageSwitcher = () => {
	const [language, setLanguage] = useState('en'); 

	useEffect(() => {

		const storedLanguage = localStorage.getItem('language');
		if (storedLanguage) {
			setLanguage(storedLanguage);
		}
	}, []);

	const toggleLanguage = () => {
		const newLanguage = language === 'fr' ? 'en' : 'fr';
		setLanguage(newLanguage);
		localStorage.setItem('language', newLanguage);
		window.location.reload();
	};

	return (
		<button
			onClick={toggleLanguage}
			className='
        nav-item
        p-3 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900
        absolute right-8
        md:static md:ml-auto md:w-10 md:h-10 md:flex md:items-center md:justify-center  border border-white/15
      '
		>
			{language === 'fr' ? 'FR' : 'EN'}
		</button>
	);
};
