'use client';

import { useState, useEffect } from 'react';

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Montrer le bouton quand l'utilisateur a fait défiler 300 pixels vers le bas
	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Faire défiler la page vers le haut
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<button
			onClick={scrollToTop}
			className={`
        fixed
        bottom-5 right-5
        p-4
        rounded-full
        text-white
        transition-opacity duration-200
        hover:bg-white hover:text-gray-900
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        bg-gray-700
        border border-white/15
        md:w-10 md:h-10 md:flex md:items-center md:justify-center
      `}
			aria-label='Scroll to top'
		>
			↑
		</button>
	);
};
