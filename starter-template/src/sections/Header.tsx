'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

export const Header = () => {
	const t = useTranslations('header');

	return (
		<div className='flex justify-center items-center fixed top-3 w-full z-10'>
			<nav className='relative flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
				<a
					href='#'
					className='nav-item px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900'
				>
					{t('home')}
				</a>
				<a
					href='#'
					className='nav-item px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900'
				>
					{t('projects')}
				</a>
				<a
					href='#'
					className='nav-item px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900'
				>
					{t('about')}
				</a>
				<a
					href='#'
					className='nav-item px-4 py-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900'
				>
					{t('contact')}
				</a>
				<LanguageSwitcher />
			</nav>
		</div>
	);
};
