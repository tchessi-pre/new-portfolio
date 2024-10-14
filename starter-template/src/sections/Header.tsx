'use client';

import { useState } from 'react';

export const Header = () => {
	const [language, setLanguage] = useState('FR');

	const toggleLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === 'FR' ? 'EN' : 'FR'));
	};

	return (
		<div className='flex justify-center items-center fixed top-3 w-full z-10'>
			<nav className='relative flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
				<a
					href='#'
					className='nav-item px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900'
				>
					Home
				</a>
				<a
					href='#'
					className='nav-item px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900'
				>
					Projects
				</a>
				<a
					href='#'
					className='nav-item px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900'
				>
					About
				</a>
				<a
					href='#'
					className='nav-item px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900'
				>
					Contact
				</a>
				<button
					onClick={toggleLanguage}
					aria-label='Changer la langue'
					className='
            nav-item
            px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900
            absolute right-0 -bottom-12 mr-4
            md:static md:ml-auto md:w-10 md:h-10 md:flex md:items-center md:justify-center
          '
				>
					{language}
				</button>
			</nav>
		</div>
	);
};
