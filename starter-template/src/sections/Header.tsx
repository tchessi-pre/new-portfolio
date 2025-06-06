// Header.tsx
'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Header = () => {
	const t = useTranslations('header');

	return (
		<div className='flex justify-center items-center fixed top-3 w-full z-10'>
			<nav className='relative flex gap-1 p-0.5 border-2 border-orange-500 dark:border-sky-500 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur items-center'>
				<a
					href='#home'
					className='nav-item px-4 py-2 rounded-full text-gray-900 dark:text-white transition-colors duration-200 hover:bg-orange-500/10 dark:hover:bg-sky-500/10 hover:text-orange-500 dark:hover:text-sky-500'
				>
					{t('home')}
				</a>
				<a
					href='#projects'
					className='nav-item px-4 py-2 rounded-full text-gray-900 dark:text-white transition-colors duration-200 hover:bg-orange-500/10 dark:hover:bg-sky-500/10 hover:text-orange-500 dark:hover:text-sky-500'
				>
					{t('projects')}
				</a>
				<a
					href='#about'
					className='nav-item px-4 py-2 rounded-full text-gray-900 dark:text-white transition-colors duration-200 hover:bg-orange-500/10 dark:hover:bg-sky-500/10 hover:text-orange-500 dark:hover:text-sky-500'
				>
					{t('about')}
				</a>
				<a
					href='#contact'
					className='nav-item px-4 py-2 rounded-full text-gray-900 dark:text-white transition-colors duration-200 hover:bg-orange-500/10 dark:hover:bg-sky-500/10 hover:text-orange-500 dark:hover:text-sky-500'
				>
					{t('contact')}
				</a>
				<div className='hidden md:flex md:ml-auto'>
					<LanguageSwitcher />
				</div>
				<div className='hidden md:flex'>
					<ThemeSwitcher />
				</div>
			</nav>
			{/* Boutons de changement de langue et de thème pour les mobiles */}
			<div className='flex fixed top-16 w-full justify-between px-8 md:hidden'>
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</div>
	);
};
