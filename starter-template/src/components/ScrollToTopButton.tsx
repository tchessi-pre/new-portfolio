'use client';

import { ChevronsUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when user has scrolled down 300 pixels
	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Scroll page to top
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
        transition-all duration-300 ease-in-out
        bg-gradient-to-r from-orange-500 to-orange-600 dark:from-sky-500 dark:to-sky-700
        text-white
        shadow-lg
        backdrop-blur-md
        hover:scale-105 hover:shadow-xl
        hover:from-orange-400 hover:to-orange-600
        dark:hover:from-sky-400 dark:hover:to-sky-600
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        transform transition-opacity
      `}
			aria-label='Scroll to top'
		>
			<span className='text-2xl font-semibold'><ChevronsUp /></span>
		</button>
	);
};
