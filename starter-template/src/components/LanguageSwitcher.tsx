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
				p-3 rounded-full text-gray-900 dark:text-white border-2 border-orange-500/20 dark:border-sky-500/20 transition-colors duration-200 hover:bg-orange-500/10 dark:hover:bg-sky-500/10 hover:text-orange-500 dark:hover:text-sky-500
				absolute right-8
				md:static md:ml-auto md:w-10 md:h-10 md:flex md:items-center md:justify-center
			'
		>
			{language === 'fr' ? 'FR' : 'EN'}
		</button>
	);
};
