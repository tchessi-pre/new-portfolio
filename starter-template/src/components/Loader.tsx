'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

const Loader: React.FC = () => {
	const t = useTranslations('loader');
	const { theme } = useTheme();

	return (
		<div className='fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-50'>
			<div className='relative flex items-center justify-center'>
				<div className='absolute w-16 h-16 rounded-full border-2 border-orange-500 dark:border-sky-500 animate-ripple'></div>
				<div className='absolute w-10 h-10 rounded-full border-2 border-orange-400 dark:border-sky-400 animate-ripple delay-150'></div>
				<div className='absolute w-6 h-6 rounded-full border-2 border-orange-300 dark:border-sky-300 animate-ripple delay-300'></div>
			</div>
			<h3 className='mt-12 text-md font-semibold'>{t('loading')}</h3>

			<div className='absolute bottom-4 max-w-lg mx-auto text-center'>
				<p className='font-serif text-sm md:text-md tracking-widest bg-gradient-to-r from-orange-500 to-orange-400 dark:from-sky-500 dark:to-sky-400 text-transparent bg-clip-text'>
					{t('introduction')}
				</p>
			</div>
		</div>
	);
};

export default Loader;
