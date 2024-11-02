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
        bottom-6 right-6
        w-12 h-12
        flex items-center justify-center
        rounded-full
        text-white
        transition-all duration-300 ease-in-out
        bg-gradient-to-r from-emerald-500 to-emerald-700
        shadow-lg
        backdrop-blur-md
        hover:scale-105 hover:shadow-xl hover:from-emerald-400 hover:to-emerald-600
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        transform transition-opacity
      `}
			aria-label='Scroll to top'
		>
			<span className='text-2xl font-semibold'>↑</span>
		</button>
	);
};
