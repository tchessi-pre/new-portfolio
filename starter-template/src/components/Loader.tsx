'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const Loader: React.FC = () => {
	const t = useTranslations('loader');

	return (
		<div className='fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-90 text-white z-50'>
			<div className='size-[620px] hero-ring animate-ripple delay-50'></div>
			<div className='size-[820px] hero-ring animate-ripple delay-100'></div>
			<div className='size-[1020px] hero-ring animate-ripple delay-150'></div>
			<div className='size-[1220px] hero-ring animate-ripple delay-200'></div>
			<div className='relative flex items-center justify-center'>
				<div className='absolute w-16 h-16 rounded-full border-2 border-emerald-400 animate-ripple'></div>
				<div className='absolute w-10 h-10 rounded-full border-2 border-emerald-400 animate-ripple delay-150'></div>
				<div className='absolute w-6 h-6 rounded-full border-2 border-emerald-400 animate-ripple delay-300'></div>
			</div>
			<h3 className='mt-12 text-md font-semibold'>{t('loading')}</h3>

			<div className='absolute bottom-4 max-w-lg mx-auto text-center'>
				<p className='font-serif text-md md:text-md tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
					{t('introduction')}
				</p>
			</div>	
		</div>
	);
};

export default Loader;
